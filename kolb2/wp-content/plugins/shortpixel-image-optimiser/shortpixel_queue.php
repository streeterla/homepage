<?php

class ShortPixelQueue {
    
    private $ctrl;
    private $settings;
    private $startBulkId;
    private $stopBulkId;
    private $bulkCount;
    private $bulkPreviousPercent;
    private $bulkCurrentlyProcessed;
    private $bulkAlreadyDoneCount;
    private $lastBulkStartTime;
    private $lastBulkSuccessTime;
    private $bulkRunningTime;
    
    const BULK_NEVER = 0; //bulk never ran
    const BULK_RUNNING = 1; //bulk is running
    const BULK_PAUSED = 2; //bulk is paused
    const BULK_FINISHED = 3; //bulk finished
    
    public function __construct($controller, $settings) {
        $this->ctrl = $controller;
        $this->settings = $settings;
    //init the option if needed
        if(!isset($_SESSION["wp-short-pixel-priorityQueue"])) {
            //take the priority list from the options (we persist there the priority IDs from the previous session)
            $prioQueueOpt = $this->settings->getOpt( 'wp-short-pixel-priorityQueue', array());//here we save the IDs for the files that need to be processed after an image upload for example
            $_SESSION["wp-short-pixel-priorityQueue"] = array();
            foreach($prioQueueOpt as $ID) {
                $meta = wp_get_attachment_metadata($ID);
                WPShortPixel::log("INIT: Item $ID from options has metadata: " .json_encode($meta));
                if(!isset($meta['ShortPixelImprovement'])) {
                    $this->push($ID);
                }
            }
            $this->settings->setOpt('wp-short-pixel-priorityQueue', $_SESSION["wp-short-pixel-priorityQueue"]);
            WPShortPixel::log("INIT: Session queue not found, updated from Options with "
                             .json_encode($_SESSION["wp-short-pixel-priorityQueue"]));
        }
        
        $this->startBulkId = $this->settings->getOpt( 'wp-short-pixel-query-id-start', 0);//current query ID used for postmeta queries
        $this->stopBulkId = $this->settings->getOpt( 'wp-short-pixel-query-id-stop', 0);//min ID used for postmeta queries
        $this->bulkCount = $this->settings->getOpt( "wp-short-pixel-bulk-count", 0);
        $this->bulkPreviousPercent = $this->settings->getOpt( "wp-short-pixel-bulk-previous-percent", 0);
        $this->bulkCurrentlyProcessed = $this->settings->getOpt( "wp-short-pixel-bulk-processed-items", 0);
        $this->bulkAlreadyDoneCount = $this->settings->getOpt( "wp-short-pixel-bulk-done-count", 0);
        $this->lastBulkStartTime = $this->settings->getOpt( 'wp-short-pixel-last-bulk-start-time', 0);//time of the last start of the bulk. 
        $this->lastBulkSuccessTime = $this->settings->getOpt( 'wp-short-pixel-last-bulk-success-time', 0);//time of the last start of the bulk. 
        $this->bulkRunningTime = $this->settings->getOpt( 'wp-short-pixel-bulk-running-time', 0);//how long the bulk ran that far. 
    }
    
    //handling older
    public function ShortPixelQueue($controller) {
        $this->__construct($controller);
    }

    public function get() {
        return $_SESSION["wp-short-pixel-priorityQueue"];//get_option("wp-short-pixel-priorityQueue");
    }
    
    public function push($ID)//add an ID to priority queue
    {
        $priorityQueue = $_SESSION["wp-short-pixel-priorityQueue"]; //get_option("wp-short-pixel-priorityQueue");
        WPShortPixel::log("PUSH: Push ID $ID into queue ".json_encode($priorityQueue));
        array_push($priorityQueue, $ID);
        $prioQ = array_unique($priorityQueue);
        $_SESSION["wp-short-pixel-priorityQueue"] = $prioQ;
        //push also to the options queue, in case the session gets killed retrieve frm there
        $this->settings->setOpt('wp-short-pixel-priorityQueue', $prioQ);

        WPShortPixel::log("PUSH: Updated: ".json_encode($_SESSION["wp-short-pixel-priorityQueue"]));//get_option("wp-short-pixel-priorityQueue")));
    }

    public function getFirst($count = 1)//return the first values added to priority queue
    {
        $priorityQueue = $_SESSION["wp-short-pixel-priorityQueue"];//self::getOpt("wp-short-pixel-priorityQueue", array());
        $count = min(count($priorityQueue), $count);
        return(array_slice($priorityQueue, count($priorityQueue) - $count, $count));
    }

    public function remove($ID)//remove an ID from priority queue
    {
        $priorityQueue = $_SESSION["wp-short-pixel-priorityQueue"];//get_option("wp-short-pixel-priorityQueue");
        WPShortPixel::log("REM: Remove ID $ID from queue ".json_encode($priorityQueue));
        $newPriorityQueue = array();
        $found = false;
        foreach($priorityQueue as $item) {
            if($item != $ID) {
                $newPriorityQueue[] = $item;
            } else {
                $found = true;
            }
        }
        //$this->settings->setOpt("wp-short-pixel-priorityQueue", $newPriorityQueue);
        $_SESSION["wp-short-pixel-priorityQueue"] = $newPriorityQueue;
        WPShortPixel::log("REM: " . ($found ? "Updated: " : "Not found") . json_encode($_SESSION["wp-short-pixel-priorityQueue"]));//get_option("wp-short-pixel-priorityQueue")));
        return $found;
    }
    
    public function removeFromFailed($ID) {
        $failed = explode(",", $this->settings->getOpt('wp-short-pixel-failed-imgs',''));
        $key = array_search($ID, $failed);
        if($key !== false) {
            unset($failed[$key]);
            $failed = array_values($failed);
            $this->settings->setOpt('wp-short-pixel-failed-imgs',  implode(",", $failed) );
        }        
    }
    
    public function addToFailed($ID) {
        $failed = $this->settings->getOpt('wp-short-pixel-failed-imgs','');
        if(!in_array($ID, explode(",", $failed))) {
            $this->settings->setOpt('wp-short-pixel-failed-imgs', (strlen($failed) ? $failed . "," : "") . $ID );
        }                        
    }

    public function getFailed() {
        $failed = $this->settings->getOpt('wp-short-pixel-failed-imgs','');
        $failed = "83";
        if(!strlen($failed)) return array();
        $ret = explode(",", $failed);
        $fails = array();
        foreach($ret as $fail) { 
            $meta = wp_get_attachment_metadata($fail);
            if(!$meta || (isset($meta["ShortPixelImprovement"]) && is_numeric($meta["ShortPixelImprovement"]))){
                $this->removeFromFailed($fail);
            } else {
                $fails[] = $fail;
            }
        }
        return $fails;
    }

    public function bulkRunning() {
        //$bulkProcessingStatus = get_option('bulkProcessingStatus');
        return $this->startBulkId > $this->stopBulkId;
    }
    
    public function bulkPaused() {
        WPShortPixel::log("Bulk Paused: " . get_option( 'wp-short-pixel-cancel-pointer'));
        return $this->settings->getOpt( 'wp-short-pixel-cancel-pointer', 0);
    }
    
    public function bulkRan() {
        return $this->settings->getOpt("wp-short-pixel-bulk-ever-ran", 0) != 0;
    }
    
    public function  processing() {
        WPShortPixel::log("QUEUE: processing(): get:" . json_encode($this->get()));
        return $this->bulkRunning() || count($this->get());
    }
    
    public function getFlagBulkId() {
        return $this->settings->getOpt("wp-short-pixel-flag-id",0);
    }

    public function getStartBulkId() {
        return $this->startBulkId;
    }

    public function resetStartBulkId() {
        $this->setStartBulkId(WPShortPixel::getMaxMediaId());
    }
    
    public function setStartBulkId($start){
        $this->startBulkId = $start;
        $this->settings->setOpt("wp-short-pixel-query-id-start", $this->startBulkId);
    }

    public function getStopBulkId() {
        return $this->stopBulkId;
    }

    public function resetStopBulkId() {
        $this->stopBulkId = $this->ctrl->getMinMediaId();
        $this->settings->setOpt("wp-short-pixel-query-id-stop", $this->stopBulkId);
    }
    
    public function setBulkPreviousPercent() {
        //processable and already processed
        $res = $this->ctrl->countAllProcessableFiles($this->getFlagBulkId(), $this->stopBulkId);
        $this->bulkCount = $res["mainFiles"];
        $this->settings->setOpt("wp-short-pixel-bulk-count", $this->bulkCount);
        
        //if compression type changed, add also the images with the other compression type
        $this->bulkAlreadyDoneCount =  $res["mainProcessedFiles"] - $res["mainProc".((0 + $this->ctrl->getCompressionType() == 1) ? "Lossless" : "Lossy")."Files"];
        // if the thumbnails are to be processed, add also the images that have thumbs not processed
        if($this->settings->processThumbnails) {
            $this->bulkAlreadyDoneCount -= $res["mainUnprocessedThumbs"];
        }
        
        //die(var_dump($res));
        
        $this->settings->setOpt("wp-short-pixel-bulk-done-count", $this->bulkAlreadyDoneCount);
        //percent already done
        $this->bulkPreviousPercent =  round($this->bulkAlreadyDoneCount / ($this->bulkCount ? $this->bulkCount : 1) * 100);
        $this->settings->setOpt("wp-short-pixel-bulk-previous-percent", $this->bulkPreviousPercent);
    }
    
    public function getBulkToProcess() {
        return $this->bulkCount - $this->bulkAlreadyDoneCount;
    }
    
    public function flagBulkStart() {
        $this->settings->setOpt("wp-short-pixel-flag-id", $this->startBulkId);
        delete_option('bulkProcessingStatus');        
        add_option('bulkProcessingStatus', 'running');//set bulk flag        
    }
    
    public function startBulk() {
        $this->resetStartBulkId(); //start downwards from the biggest item ID            
        $this->resetStopBulkId();
        $this->flagBulkStart(); //we use this to detect new added files while bulk is running            
        $this->setBulkPreviousPercent();
        $this->resetBulkCurrentlyProcessed();
        $this->settings->setOpt( 'wp-short-pixel-bulk-ever-ran', 1);
    }
    
    public function pauseBulk() {
        $cancelPointer = $this->startBulkId;
        $bulkStartId = $this->getFlagBulkId();
        $this->settings->setOpt( 'wp-short-pixel-cancel-pointer', $cancelPointer);//we save this so we can resume bulk processing
        WPShortPixel::log("PAUSE: Pointer = ".get_option( 'wp-short-pixel-cancel-pointer'));
        //remove the bulk items from prio queue
        foreach($this->get() as $qItem) {
            if($qItem < $bulkStartId) {
                $this->remove($qItem);
            }
        }
        $this->stopBulk();
    }
    
    public function stopBulk() {
        $this->startBulkId = WPShortPixel::getMaxMediaId();
        $this->stopBulkId = $this->startBulkId;
        $this->settings->setOpt("wp-short-pixel-query-id-start", $this->startBulkId);
        $this->settings->setOpt("wp-short-pixel-query-id-stop", $this->stopBulkId);
        delete_option('bulkProcessingStatus');
        return $this->settings->getOpt('wp-short-pixel-bulk-ever-ran', 0);
    }
    
    public function resumeBulk() {
        $this->startBulkId = get_option( 'wp-short-pixel-cancel-pointer');
        $this->settings->setOpt("wp-short-pixel-query-id-start", $this->startBulkId);//start downwards from the biggest item ID            
        $this->stopBulkId = $this->ctrl->getMinMediaId();
        $this->settings->setOpt("wp-short-pixel-query-id-stop", $this->stopBulkId);
        //$this->settings->setOpt("wp-short-pixel-flag-id", $this->startBulkId);//we use to detect new added files while bulk is running
        add_option('bulkProcessingStatus', 'running');//set bulk flag    
        delete_option( 'wp-short-pixel-cancel-pointer');
        WPShortPixel::log("Resumed: (pause says: " . $this->bulkPaused() . ") Start from: " . $this->startBulkId . " to " . $this->stopBulkId);
    }
    
    public function resetBulkCurrentlyProcessed() {
        $this->bulkCurrentlyProcessed = 0;
        $this->settings->setOpt( "wp-short-pixel-bulk-processed-items", $this->bulkCurrentlyProcessed);
    }
    
    public function incrementBulkCurrentlyProcessed() {
        $this->bulkCurrentlyProcessed++;
        $this->settings->setOpt( "wp-short-pixel-bulk-processed-items", $this->bulkCurrentlyProcessed);
    }
    
    public function markBulkComplete() {
        delete_option('bulkProcessingStatus');
        delete_option( 'wp-short-pixel-cancel-pointer');
    }
    
    public static function resetBulk() {
        delete_option('bulkProcessingStatus');        
        delete_option( 'wp-short-pixel-cancel-pointer');
        delete_option( "wp-short-pixel-flag-id");
        $startBulkId = $stopBulkId = WPShortPixel::getMaxMediaId();
        update_option( 'wp-short-pixel-query-id-stop', $startBulkId );
        update_option( 'wp-short-pixel-query-id-start', $startBulkId );                    
        delete_option( "wp-short-pixel-bulk-previous-percent");
        delete_option( "wp-short-pixel-bulk-processed-items");
        delete_option('wp-short-pixel-bulk-running-time');
        delete_option('wp-short-pixel-last-bulk-start-time');
        delete_option('wp-short-pixel-last-bulk-success-time');
        delete_option( "wp-short-pixel-bulk-processed-items");
        delete_option( "wp-short-pixel-bulk-count");
        delete_option( "wp-short-pixel-bulk-done-count");
    }
    
    public static function resetPrio() {
        delete_option( "wp-short-pixel-priorityQueue");
        if(isset($_SESSION["wp-short-pixel-priorityQueue"])){
            unset($_SESSION["wp-short-pixel-priorityQueue"]);   
        }
    }    
    
    public function logBulkProgress() {
        $t = time();
        $this->incrementBulkCurrentlyProcessed();
        if($t - $this->lastBulkSuccessTime > 120) { //if break longer than two minutes we mark a pause in the bulk
            $this->bulkRunningTime += ($this->lastBulkSuccessTime - $this->lastBulkStartTime);
            $this->settings->setOpt('wp-short-pixel-bulk-running-time', $this->bulkRunningTime);
            $this->lastBulkStartTime = $this->lastBulkSuccessTime = $t;
            $this->settings->setOpt('wp-short-pixel-last-bulk-start-time', $t);
            $this->settings->setOpt('wp-short-pixel-last-bulk-success-time', $t);
        } else {
            $this->lastBulkSuccessTime = $t;
            $this->settings->setOpt('wp-short-pixel-last-bulk-success-time', $t);
        }
    }
    
    public function getBulkPercent() {
        WPShortPixel::log("QUEUE - BulkPrevPercent: " . $this->bulkPreviousPercent . " BulkCurrentlyProcessing: "
                . $this->bulkCurrentlyProcessed . " out of " . $this->getBulkToProcess());
        
        if($this->getBulkToProcess() <= 0) return ($this->processing () ? 99: 100);
        // return maximum 99%
        $percent = $this->bulkPreviousPercent + round($this->bulkCurrentlyProcessed / $this->getBulkToProcess()
                                              * (100 - $this->bulkPreviousPercent));

        WPShortPixel::log("QUEUE - Calculated Percent: " . $percent);
        
        return min(99, $percent);
    }

    public function getDeltaBulkPercent() {
        return $this->getBulkPercent() - $this->bulkPreviousPercent;
    }
    
    public function getTimeRemaining (){
        $p = $this->getBulkPercent();
        $pAlready = $this->bulkCount == 0 ? 0 : round($this->bulkAlreadyDoneCount / $this->bulkCount * 100);
//        die("" . ($this->lastBulkSuccessTime - $this->lastBulkStartTime));
        if(($p - $pAlready) == 0) return 0;
        return round(((100 - $p) / ($p - $pAlready)) * ($this->bulkRunningTime + $this->lastBulkSuccessTime - $this->lastBulkStartTime)/60);
    }
}
