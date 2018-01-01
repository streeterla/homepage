<?php
if ( !function_exists( 'download_url' ) ) {
    require_once( ABSPATH . 'wp-admin/includes/file.php' );
}

class ShortPixelAPI {
    
    const STATUS_SUCCESS = 1;
    const STATUS_UNCHANGED = 0;
    const STATUS_ERROR = -1;
    const STATUS_FAIL = -2;
    const STATUS_QUOTA_EXCEEDED = -3;
    const STATUS_SKIP = -4;
    const STATUS_NOT_FOUND = -5;
    const STATUS_NO_KEY = -6;
    const STATUS_RETRY = -7;

    private $_settings;
    private $_maxAttempts = 10;
    private $_apiEndPoint;


    public function __construct($settings) {
        $this->_settings = $settings;
        $this->_apiEndPoint = $this->_settings->httpProto . '://api.shortpixel.com/v2/reducer.php';
        add_action('processImageAction', array(&$this, 'processImageAction'), 10, 4);
    }

    public function processImageAction($url, $filePaths, $ID, $time) {
        $this->processImage($URLs, $PATHs, $ID, $time);
    }

    public function doRequests($URLs, $Blocking, $ID, $compressionType = false) {
        
        $requestParameters = array(
            'plugin_version' => PLUGIN_VERSION,
            'key' => $this->_settings->apiKey,
            'lossy' => $compressionType === false ? $this->_settings->compressionType : $compressionType,
            'cmyk2rgb' => $this->_settings->CMYKtoRGBconversion,
            'keep_exif' => ($this->_settings->keepExif ? "1" : "0"),
            'resize' => $this->_settings->resizeImages,
            'resize_width' => $this->_settings->resizeWidth,
            'resize_height' => $this->_settings->resizeHeight,
            'urllist' => $URLs
        );
        $arguments = array(
            'method' => 'POST',
            'timeout' => 15,
            'redirection' => 3,
            'sslverify' => false,
            'httpversion' => '1.0',
            'blocking' => $Blocking,
            'headers' => array(),
            'body' => json_encode($requestParameters),
            'cookies' => array()
        );
        //add this explicitely only for https, otherwise (for http) it slows the request
        if($this->_settings->httpProto !== 'https') {
            unset($arguments['sslverify']);
        }
        $response = wp_remote_post($this->_apiEndPoint, $arguments );
        
        //only if $Blocking is true analyze the response
        if ( $Blocking )
        {
            //die(var_dump(array('URL: ' => $this->_apiEndPoint, '<br><br>REQUEST:' => $arguments, '<br><br>RESPONSE: ' => $response )));
            //there was an error, save this error inside file's SP optimization field
            if ( is_object($response) && get_class($response) == 'WP_Error' ) 
            {
                $errorMessage = $response->errors['http_request_failed'][0];
                $errorCode = 503;
            }
            elseif ( isset($response['response']['code']) && $response['response']['code'] <> 200 )
            {
                $errorMessage = $response['response']['code'] . " - " . $response['response']['message'];
                $errorCode = $response['response']['code'];
            }
            
            if ( isset($errorMessage) )
            {//set details inside file so user can know what happened
                $meta = wp_get_attachment_metadata($ID);
                $meta['ShortPixelImprovement'] = 'Error: <i>' . $errorMessage . '</i>';
                unset($meta['ShortPixel']['WaitingProcessing']);
                wp_update_attachment_metadata($ID, $meta);
                return array("response" => array("code" => $errorCode, "message" => $errorMessage ));
            }

            return $response;//this can be an error or a good response
        }
        
        return $response;
    }

    public function parseResponse($response) {
        $data = $response['body'];
        $data = $this->parseJSON($data);
        return (array)$data;
    }

    //handles the processing of the image using the ShortPixel API
    public function processImage($URLs, $PATHs, $ID = null, $startTime = 0) 
    {    
        
        $meta = wp_get_attachment_metadata($ID);
        
        $PATHs = self::CheckAndFixImagePaths($PATHs);//check for images to make sure they exist on disk
        if ( $PATHs === false ) {
            $msg = 'The file(s) do not exist on disk.';
            $meta['ShortPixelImprovement'] = $msg;
            wp_update_attachment_metadata($ID, $meta);
            return array("Status" => self::STATUS_SKIP, "Message" => $msg);
        }
        
        //tries multiple times (till timeout almost reached) to fetch images.
        if($startTime == 0) { 
            $startTime = time(); 
        }        
        $apiRetries = get_option('wp-short-pixel-api-retries');
        
        if( time() - $startTime > MAX_EXECUTION_TIME) 
        {//keeps track of time
            if ( $apiRetries > MAX_API_RETRIES )//we tried to process this time too many times, giving up...
            {
                $meta['ShortPixelImprovement'] = 'Timed out while processing.';
                unset($meta['ShortPixel']['WaitingProcessing']);
                update_option('wp-short-pixel-api-retries', 0);//fai added to solve a bug?
                wp_update_attachment_metadata($ID, $meta);
                return array("Status" => self::STATUS_SKIP, "Message" => 'Image ID: ' . $ID .' Skip this image, try the next one.');                
            }
            else
            {//we'll try again next time user visits a page on admin panel
                $apiRetries++;
                update_option('wp-short-pixel-api-retries', $apiRetries);
                return array("Status" => self::STATUS_RETRY, "Message" => 'Timed out while processing. (pass '.$apiRetries.')');   
            }
        }
        
        $compressionType = isset($meta['ShortPixel']['type']) ? ($meta['ShortPixel']['type'] == 'lossy' ? 1 : 0) : $this->_settings->compressionType;
        $response = $this->doRequests($URLs, true, $ID, $compressionType);//send requests to API

        if($response['response']['code'] != 200)//response <> 200 -> there was an error apparently?
            return array("Status" => self::STATUS_FAIL, "Message" => "There was an error and your request was not processed.");
        
        $APIresponse = $this->parseResponse($response);//get the actual response from API, its an array

        if ( isset($APIresponse[0]) )//API returned image details
        {
            foreach ( $APIresponse as $imageObject )//this part makes sure that all the sizes were processed and ready to be downloaded
            {
                if     ( $imageObject->Status->Code == 0 || $imageObject->Status->Code == 1  )
                {
                    sleep(1);
                    return $this->processImage($URLs, $PATHs, $ID, $startTime);    
                }        
            }
            
            $firstImage = $APIresponse[0];//extract as object first image
            switch($firstImage->Status->Code) 
            {
            case 2:
                //handle image has been processed
                update_option( 'wp-short-pixel-quota-exceeded', 0);//reset the quota exceeded flag
                return $this->handleSuccess($APIresponse, $URLs, $PATHs, $ID, $compressionType);
                break;
            default:
                //handle error
                if ( !file_exists($PATHs[0]) )
                    return array("Status" => self::STATUS_NOT_FOUND, "Message" => "File not found on disk. Image ID: " .$ID);
                elseif ( isset($APIresponse[0]->Status->Message) ) {
                    //return array("Status" => self::STATUS_FAIL, "Message" => "There was an error and your request was not processed (" . $APIresponse[0]->Status->Message . "). REQ: " . json_encode($URLs));                
                    return array("Status" => self::STATUS_FAIL, "Message" => "There was an error and your request was not processed (" . $APIresponse[0]->Status->Message . ")");                
                }
                
                return array("Status" => self::STATUS_FAIL, "Message" => "There was an error and your request was not processed");
                break;
            }
        }
        
        switch($APIresponse['Status']->Code) 
        {   
            
            case -403:
                @delete_option('bulkProcessingStatus');
                update_option( 'wp-short-pixel-quota-exceeded', 1);
                return array("Status" => self::STATUS_QUOTA_EXCEEDED, "Message" => "Quota exceeded.");
                break;                
        }
        
        //sometimes the response array can be different
        if ( is_numeric($APIresponse['Status']->Code) )
            return array("Status" => self::STATUS_FAIL, "Message" => $APIresponse['Status']->Message);
        else
            return array("Status" => self::STATUS_FAIL, "Message" => $APIresponse[0]->Status->Message);
        
    }
    
    public function setPreferredProtocol($url, $reset = false) {
        //switch protocol based on the formerly detected working protocol
        if($this->_settings->downloadProto == '' || $reset) {
            //make a test to see if the http is working
            $testURL = 'http://api.shortpixel.com/img/connection-test-image.png';
            $result = download_url($testURL, 10);
            $this->_settings->downloadProto = is_wp_error( $result ) ? 'https' : 'http';
        }
        return $this->_settings->downloadProto == 'http' ? 
                str_replace('https://', 'http://', $url) :
                str_replace('http://', 'https://', $url);


    }
    
    public function handleDownload($fileData,$counter, $compressionType){
        //var_dump($fileData);
        if($compressionType)
        {
            $fileType = "LossyURL";
            $fileSize = "LossySize";
        }    
        else
        {
            $fileType = "LosslessURL";
            $fileSize = "LoselessSize";
        }
        
        //if there is no improvement in size then we do not download this file
        if ( $fileData->OriginalSize == $fileData->$fileSize )
            return array("Status" => self::STATUS_UNCHANGED, "Message" => "File wasn't optimized so we do not download it.");
        
        $correctFileSize = $fileData->$fileSize;
        $fileURL = $this->setPreferredProtocol(urldecode($fileData->$fileType));
 
        $downloadTimeout = ini_get('max_execution_time') - 10;        
        $tempFiles[$counter] = download_url($fileURL, $downloadTimeout);
        //var_dump($tempFiles);
                
        if(is_wp_error( $tempFiles[$counter] )) 
        { //try to switch the default protocol
            $fileURL = $this->setPreferredProtocol(urldecode($fileData->$fileType), true); //force recheck of the protocol
            $tempFiles[$counter] = download_url($fileURL, $downloadTimeout);
        }    
        //on success we return this
        $returnMessage = array("Status" => self::STATUS_SUCCESS, "Message" => $tempFiles[$counter]);
        
        if ( is_wp_error( $tempFiles[$counter] ) ) {
            @unlink($tempFiles[$counter]);
            $returnMessage = array(
                "Status" => self::STATUS_ERROR, 
                "Message" => "Error downloading file ({$fileData->$fileType}) " . $tempFiles[$counter]->get_error_message());
        } 
        //check response so that download is OK
        elseif( filesize($tempFiles[$counter]) != $correctFileSize) {
            $size = filesize($tempFiles[$counter]);
            @unlink($tempFiles[$counter]);
            $returnMessage = array(
                "Status" => self::STATUS_ERROR, 
                "Message" => "Error downloading file - incorrect file size (downloaded: {$size}, correct: {$correctFileSize} )");
        }
        elseif (!file_exists($tempFiles[$counter])) {
            $returnMessage = array("Status" => self::STATUS_ERROR, "Message" => "Unable to locate downloaded file " . $tempFiles[$counter]);
        }
        return $returnMessage;        
    }

    public function handleSuccess($APIresponse, $URLs, $PATHs, $ID, $compressionType) {
        $counter = $savedSpace =  $originalSpace =  $optimizedSpace =  $averageCompression = 0;
        $NoBackup = true;

        //download each file from array and process it
        foreach ( $APIresponse as $fileData )
        {
            if ( $fileData->Status->Code == 2 ) //file was processed OK
            {
                if ( $counter == 0 )//save percent improvement for main file
                    $percentImprovement = $fileData->PercentImprovement;
                else //count thumbnails only
                    update_option( 'wp-short-pixel-thumbnail-count', get_option('wp-short-pixel-thumbnail-count') + 1 );
                $downloadResult = $this->handleDownload($fileData,$counter,$compressionType);
                //when the status is STATUS_UNCHANGED we just skip the array line for that one
                if ( $downloadResult['Status'] == self::STATUS_SUCCESS ) {
                    $tempFiles[$counter] = $downloadResult['Message'];
                } 
                elseif ( $downloadResult['Status'] <> self::STATUS_UNCHANGED ) 
                    return array("Status" => $downloadResult['Status'], "Message" => $downloadResult['Message']);
            }    
            else //there was an error while trying to download a file
                $tempFiles[$counter] = "";
                
            $counter++;
        }

        //figure out in what SubDir files should land
        $SubDir = $this->returnSubDir(get_attached_file($ID));
        
        //if backup is enabled - we try to save the images
        if( $this->_settings->backupImages )
        {
            $uploadDir = wp_upload_dir();
            $source = $PATHs; //array with final paths for these files

            if( !file_exists(SP_BACKUP_FOLDER) && !@mkdir(SP_BACKUP_FOLDER, 0777, true) ) {//creates backup folder if it doesn't exist
                return array("Status" => self::STATUS_FAIL, "Message" => "Backup folder does not exist and it cannot be created");
            }
            //create subdir in backup folder if needed
            @mkdir( SP_BACKUP_FOLDER . DIRECTORY_SEPARATOR . $SubDir, 0777, true);
            
            foreach ( $source as $fileID => $filePATH )//create destination files array
            {
                $destination[$fileID] = SP_BACKUP_FOLDER . DIRECTORY_SEPARATOR . $SubDir . self::MB_basename($source[$fileID]);     
            }
            
            //now that we have original files and where we should back them up we attempt to do just that
            if(is_writable(SP_BACKUP_FOLDER)) 
            {
                foreach ( $destination as $fileID => $filePATH )
                {
                    if ( !file_exists($filePATH) )
                    {                        
                        if ( !@copy($source[$fileID], $destination[$fileID]) )
                        {//file couldn't be saved in backup folder
                            ShortPixelAPI::SaveMessageinMetadata($ID, 'Cannot save file <i>' . self::MB_basename($source[$fileID]) . '</i> in backup directory');
                            return array("Status" => self::STATUS_FAIL, "Message" => 'Cannot save file <i>' . self::MB_basename($source[$fileID]) . '</i> in backup directory');
                        }
                    }
                }
                $NoBackup = true;
            } else {//cannot write to the backup dir, return with an error
                ShortPixelAPI::SaveMessageinMetadata($ID, 'Cannot save file in backup directory');
                return array("Status" => self::STATUS_FAIL, "Message" => 'Cannot save file in backup directory');
            }

        }//end backup section

        $writeFailed = 0;
        
        if ( !empty($tempFiles) )
        {
            //overwrite the original files with the optimized ones
            foreach ( $tempFiles as $tempFileID => $tempFilePATH )
            { 
                if ( file_exists($tempFilePATH) && file_exists($PATHs[$tempFileID]) && is_writable($PATHs[$tempFileID]) ) {
                    copy($tempFilePATH, $PATHs[$tempFileID]);
                } else {
                    $writeFailed++;
                }
                @unlink($tempFilePATH);
            }        
            
            if ( $writeFailed > 0 )//there was an error
            {
                ShortPixelAPI::SaveMessageinMetadata($ID, 'Error: optimized version of ' . $writeFailed . ' file(s) couldn\'t be updated.');
                update_option('bulkProcessingStatus', "error");
                return array("Status" => self::STATUS_FAIL, "Code" =>"write-fail", "Message" => 'Error: optimized version of ' . $writeFailed . ' file(s) couldn\'t be updated.');
            }
            else
            {//all files were copied, optimization data regarding the savings locally in DB
                $fileType = ( $this->_settings->compressionType ) ? "LossySize" : "LoselessSize";
                $savedSpace += $APIresponse[$tempFileID]->OriginalSize - $APIresponse[$tempFileID]->$fileType;
                $originalSpace += $APIresponse[$tempFileID]->OriginalSize;
                $optimizedSpace += $APIresponse[$tempFileID]->$fileType;
                $averageCompression += $fileData->PercentImprovement;
                
                //add the number of files with < 5% optimization
                if ( ( ( 1 - $APIresponse[$tempFileID]->$fileType/$APIresponse[$tempFileID]->OriginalSize ) * 100 ) < 5 ) {
                    $this->_settings->under5Percent++; 
                }
            }
        } elseif( 0 + $fileData->PercentImprovement < 5) {
            $this->_settings->under5Percent++; 
        }
        //old average counting
        $this->_settings->savedSpace += $savedSpace;
        $averageCompression = $this->_settings->averageCompression * $this->_settings->fileCount;
        $averageCompression = $averageCompression /  ($this->_settings->fileCount + count($APIresponse));
        $this->_settings->averageCompression = $averageCompression;
        $this->_settings->fileCount += count($APIresponse);
        //new average counting
        $this->_settings->totalOriginal += $originalSpace;
        $this->_settings->totalOptimized += $optimizedSpace;
        
        //update metadata for this file
        $duplicates = self::getWPMLDuplicates($ID);
        foreach($duplicates as $_ID) {
            $meta = wp_get_attachment_metadata($_ID);
            $meta['ShortPixel']['type'] = self::getCompressionTypeName($compressionType);
            $meta['ShortPixel']['exifKept'] = $this->_settings->keepExif;
            $meta['ShortPixel']['date'] = date("Y-m-d");
            //thumbs were processed if settings or if they were explicitely requested
            $meta['ShortPixel']['thumbsOpt'] = (isset($meta['ShortPixel']['thumbsTodo']) || $this->_settings->processThumbnails) && isset($meta['sizes']) ? count($meta['sizes']) : 0;
            //if thumbsTodo - this means there was an explicit request to process thumbs for an image that was previously processed without
            // don't update the ShortPixelImprovement ratio as this is only calculated based on main image
            if(isset($meta['ShortPixel']['thumbsTodo'])) {
                unset($meta['ShortPixel']['thumbsTodo']);
                $percentImprovement = $meta['ShortPixelImprovement'];
            } else {
                $meta['ShortPixelImprovement'] = "".round($percentImprovement,2);
            }
            if($NoBackup) {
                $meta['ShortPixel']['NoBackup'] = true;
            }
            wp_update_attachment_metadata($_ID, $meta);
        }
        //we reset the retry counter in case of success
        update_option('wp-short-pixel-api-retries', 0);
        
        return array("Status" => self::STATUS_SUCCESS, "Message" => 'Success: No pixels remained unsqueezed :-)', "PercentImprovement" => $percentImprovement);
    }//end handleSuccess
    
    static public function getWPMLDuplicates( $id ) {
        global $wpdb;
        
        $parentId = get_post_meta ($id, '_icl_lang_duplicate_of', true );
        if($parentId) $id = $parentId;

        $duplicates = $wpdb->get_col( $wpdb->prepare( "
            SELECT pm.post_id FROM {$wpdb->postmeta} pm
            WHERE pm.meta_value = %s AND pm.meta_key = '_icl_lang_duplicate_of' 
        ", $id ) );
            
        if(!in_array($id, $duplicates)) $duplicates[] = $id;

        return $duplicates;
    }

    
    static public function returnSubDir($file)//return subdir for that particular attached file
    {
        $Atoms = explode("/", $file);
        $Counter = count($Atoms);
        $SubDir = $Atoms[$Counter-3] . DIRECTORY_SEPARATOR . $Atoms[$Counter-2] . DIRECTORY_SEPARATOR;

        return $SubDir;
    }
    
    //a basename alternative that deals OK with multibyte charsets (e.g. Arabic)
    static public function MB_basename($Path){
        $Separator = " qq ";
        $Path = preg_replace("/[^ ]/u", $Separator."\$0".$Separator, $Path);
        $Base = basename($Path);
        $Base = str_replace($Separator, "", $Base);
        return $Base;  
    }
    
    //sometimes, the paths to the files as defined in metadata are wrong, we try to automatically correct them
    static public function CheckAndFixImagePaths($PATHs){
        
        $ErrorCount = 0;
        $uploadDir = wp_upload_dir();
        $Tmp = explode("/", $uploadDir['basedir']);
        $TmpCount = count($Tmp);
        $StichString = $Tmp[$TmpCount-2] . "/" . $Tmp[$TmpCount-1];
        //files exist on disk?
        foreach ( $PATHs as $Id => $File )
        {
            //we try again with a different path
            if ( !file_exists($File) ){
                //$NewFile = $uploadDir['basedir'] . "/" . substr($File,strpos($File, $StichString));//+strlen($StichString));
                $NewFile = $uploadDir['basedir'] . substr($File,strpos($File, $StichString)+strlen($StichString));
                if ( file_exists($NewFile) )
                    $PATHs[$Id] = $NewFile;
                else
                    $ErrorCount++;
            }
        }
        
        if ( $ErrorCount > 0 )
            return false;
        else
            return $PATHs;
        
    }

    static public function getCompressionTypeName($compressionType) {
        return $compressionType == 1 ? 'lossy' : 'lossless';
    }
    
    static private function SaveMessageinMetadata($ID, $Message)
    {
        $meta = wp_get_attachment_metadata($ID);
        $meta['ShortPixelImprovement'] = $Message;
        unset($meta['ShortPixel']['WaitingProcessing']);
        wp_update_attachment_metadata($ID, $meta);
    }

    public function parseJSON($data) {
        if ( function_exists('json_decode') ) {
            $data = json_decode( $data );
        } else {
            require_once( 'JSON/JSON.php' );
            $json = new Services_JSON( );
            $data = $json->decode( $data );
        }
        return $data;
    }
}
