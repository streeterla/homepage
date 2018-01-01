<?php

class ShortPixelView {
    
    private $ctrl;
    
    public function __construct($controller) {
        $this->ctrl = $controller;
    }
    
        //handling older
    public function ShortPixelView($controller) {
        $this->__construct($controller);
    }

    public function displayQuotaExceededAlert($quotaData) 
    { ?>    
        <br/>
        <div class="wrap sp-quota-exceeded-alert">
            <h3>Quota Exceeded</h3>
            <p>The plugin has optimized <strong><?php echo(number_format($quotaData['APICallsMadeNumeric'] + $quotaData['APICallsMadeOneTimeNumeric']));?> images</strong> and stopped because it reached the available quota limit.
            <?php if($quotaData['totalProcessedFiles'] < $quotaData['totalFiles']) { ?>
                <strong><?php echo(number_format($quotaData['mainFiles'] - $quotaData['mainProcessedFiles']));?> images and 
                <?php echo(number_format(($quotaData['totalFiles'] - $quotaData['mainFiles']) - ($quotaData['totalProcessedFiles'] - $quotaData['mainProcessedFiles'])));?> thumbnails</strong> are not yet optimized by ShortPixel.
            <?php } ?></p>
            <div> <!-- style='float:right;margin-top:20px;'> -->
                <a class='button button-primary' href='https://shortpixel.com/login/<?php echo($this->ctrl->getApiKey());?>' target='_blank'>Upgrade</a>
                <input type='button' name='checkQuota' class='button' value='Confirm New Quota' onclick="javascript:window.location.reload();">
            </div>
            <!-- <p>It’s simple to upgrade, just <a href='https://shortpixel.com/login/<?php echo($this->ctrl->getApiKey());?>' target='_blank'>log into your account</a> and see the available options.
            You can immediately start processing 5,000 images/month for &#36;4,99, choose another plan that suits you or <a href='https://shortpixel.com/contact' target='_blank'>contact us</a> for larger compression needs.</p> -->
            <p>Get more image credits by referring ShortPixel to your friends! <a href="https://shortpixel.com/login/<?php echo($this->ctrl->getApiKey());?>/tell-a-friend" target="_blank">Check your account</a> for your unique referral link. For each user that joins, you will receive +100 additional image credits/month.</p>
            
        </div> <?php 
    }
    
    public static function displayApiKeyAlert() 
    { ?>
        <p>In order to start the optimization process, you need to validate your API Key in the <a href="options-general.php?page=wp-shortpixel">ShortPixel Settings</a> page in your WordPress Admin.</p>
        <p>If you don’t have an API Key, you can get one delivered to your inbox, for free.</p>
        <p>Please <a href="https://shortpixel.com/wp-apikey" target="_blank">sign up</a> to get your API key.</p>
    <?php
    }
    
    public static function displayActivationNotice($when = 'activate')  { ?>
        <div class='notice notice-warning' id='short-pixel-notice-<?php echo($when);?>'>
            <?php if($when != 'activate') { ?>
            <div style="float:right;"><a href="javascript:dismissShortPixelNotice('<?php echo($when);?>')" class="button" style="margin-top:10px;">Dismiss</a></div>
            <?php } ?>
            <h3>ShortPixel Optimization</h3> <?php
            switch($when) {
                case '2h' : 
                    echo "Action needed. Please <a href='https://shortpixel.com/wp-apikey' target='_blank'>get your API key</a> to activate your ShortPixel plugin.<BR><BR>";
                    break;
                case '3d':
                    echo "Your image gallery is not optimized. It takes 2 minutes to <a href='https://shortpixel.com/wp-apikey' target='_blank'>get your API key</a> and activate your ShortPixel plugin.<BR><BR>";
                    break;
                case 'activate':
                    self::displayApiKeyAlert();
                    break;
            }
            ?>
        </div>
    <?php
    }
    
    public function displayBulkProcessingForm($quotaData,  $thumbsProcessedCount, $under5PercentCount, $bulkRan, $averageCompression, $filesOptimized, $savedSpace, $percent) {
        ?>
        <div class="wrap short-pixel-bulk-page">
            <h1>Bulk Image Optimization by ShortPixel</h1>
        <?php
        if ( !$bulkRan ) { 
            ?>
            <form class='start' action='' method='POST' id='startBulk'>
                <input type='hidden' id='mainToProcess' value='<?php echo($quotaData['mainFiles'] - $quotaData['mainProcessedFiles']);?>'/>
                <input type='hidden' id='totalToProcess' value='<?php echo($quotaData['totalFiles'] - $quotaData['totalProcessedFiles']);?>'/>
                <div class="bulk-stats-container">
                    <h3 style='margin-top:0;'>Your image library</h3>
                    <div class="bulk-label">Original images</div>
                    <div class="bulk-val"><?php echo(number_format($quotaData['mainFiles']));?></div><br>
                    <div class="bulk-label">Smaller thumbnails</div>
                    <div class="bulk-val"><?php echo(number_format($quotaData['totalFiles'] - $quotaData['mainFiles']));?></div>
                    <div style='width:165px; display:inline-block; padding-left: 5px'>
                        <input type='checkbox' id='thumbnails' name='thumbnails' onclick='ShortPixel.checkThumbsUpdTotal(this)' <?php echo($this->ctrl->processThumbnails() ? "checked":"");?>> Include thumbnails
                    </div><br>
                    <?php if($quotaData["totalProcessedFiles"] > 0) { ?>
                    <div class="bulk-label bulk-total">Total images</div>
                    <div class="bulk-val bulk-total"><?php echo(number_format($quotaData['totalFiles']));?></div>
                    <br><div class="bulk-label">Already optimized originals</div>
                    <div class="bulk-val"><?php echo(number_format($quotaData['mainProcessedFiles']));?></div><br>
                    <div class="bulk-label">Already optimized thumbnails</div>
                    <div class="bulk-val"><?php echo(number_format($quotaData['totalProcessedFiles'] - $quotaData['mainProcessedFiles']));?></div><br>
                    <?php } ?>
                    <div class="bulk-label bulk-total">Total to be optimized</div>
                    <div class="bulk-val bulk-total" id='displayTotal'><?php echo(number_format($quotaData['totalFiles'] - $quotaData['totalProcessedFiles']));?></div>
                </div>
                <?php if($quotaData['totalFiles'] - $quotaData['totalProcessedFiles'] > 0) { ?>
                <div class="bulk-play">
                    <input type='hidden' name='bulkProcess' id='bulkProcess' value='Start Optimizing'/>
                    <a href='javascript:void();' onclick="document.getElementById('startBulk').submit();" class='button'>
                        <div style="width: 320px">
                            <div class="bulk-btn-img" class="bulk-btn-img">
                                <img src='https://shortpixel.com/img/robo-slider.png'/>
                            </div>
                            <div  class="bulk-btn-txt">
                                <span class="label">Start Optimizing</span><br>
                                <span class='total'><?php echo(number_format($quotaData['totalFiles'] - $quotaData['totalProcessedFiles']));?></span> images
                            </div>
                            <div class="bulk-btn-img" class="bulk-btn-img">
                                <img src='<?php echo(plugins_url( 'img/arrow.png', __FILE__ ));?>'/>
                            </div>
                        </div>
                    </a>
                </div>
                <?php }  else {?>
                <div class="bulk-play">
                    Nothing to optimize! The images that you add to Media Gallery will be automatically optimized after upload.
                </div>
                <?php } ?>
            </form>
            <div class='shortpixel-clearfix'></div>
            <div class="bulk-wide">
                <h3 style='font-size: 1.1em; font-weight: bold;'>In order for the optimization to run, you must keep this page open and your computer running. If you close the page for whatever reason, just turn back to it and the bulk process will resume.</h3>
            </div>
            <div class='shortpixel-clearfix'></div>
            <div class="bulk-text-container">
                <h3>What are Thumbnails?</h3>
                <p>Thumbnails are smaller images generated by your WP theme. Most themes generate between 3 and 6 thumbnails for each Media Library image.</p>
                <p>The thumbnails also generate trafic on your website pages and they influence your website's speed.</p>
                <p>It's highly recommended that you include thumbnails in the optimization as well.</p>
            </div>
            <div class="bulk-text-container" style="padding-right:0">
                <h3>How does it work?</h3>
                <p>The plugin processes images starting with the newest ones you uploaded in your Media Library.</p>
                <p>You will be able to pause the process anytime.</p>
                <p><?php echo($this->ctrl->backupImages() ? "<p>Your original images will be stored in a separate back-up folder.</p>" : "");?></p>
                <p>You can watch the images being processed live, right here, after you start optimizing.</p>
            </div>
            <?php
        } elseif($percent) // bulk is paused
        { ?>
            <p>Bulk processing is paused until you resume the optimization process.</p>
            <?php echo($this->displayBulkProgressBar(false, $percent, ""));?>
            <p>Please see below the optimization status so far:</p>
            <?php $this->displayBulkStats($quotaData['totalProcessedFiles'], $quotaData['mainProcessedFiles'], $under5PercentCount, $averageCompression, $savedSpace);?>
            <?php if($quotaData['totalProcessedFiles'] < $quotaData['totalFiles']) { ?>
                <p><?php echo(number_format($quotaData['mainFiles'] - $quotaData['mainProcessedFiles']));?> images and 
                <?php echo(number_format(($quotaData['totalFiles'] - $quotaData['mainFiles']) - ($quotaData['totalProcessedFiles'] - $quotaData['mainProcessedFiles'])));
                ?> thumbnails are not yet optimized by ShortPixel.</p>
            <?php } ?>
            <p>You can continue optimizing your Media Gallery from where you left, by clicking the Resume processing button. Already optimized images will not be reprocessed.</p>
        <?php
        } else { ?>
            <div class='notice notice-success'>
                <p style='display:inline-block;'>Congratulations, your media library has been successfully optimized!<br>Share your optimization results on Twitter:
                </p>
                <div style='display:inline-block;margin-left: 20px;'>
                    <a href="https://twitter.com/share" class="twitter-share-button" data-url="https://shortpixel.com" 
                       data-text="I just optimized my images<?php echo(0+$averageCompression>20 ? " by ".round($averageCompression) ."%" : "");?><?php echo(false && (0+$savedSpace>0) ? " saving $savedSpace" : "");?> with @ShortPixel, a great plugin for increasing #WordPress page speed:" data-size='large'>Tweet</a>
                    <script>
                        !function(d,s,id){//Just optimized my site with ShortPixel image optimization plugin
                            var js,
                                fjs=d.getElementsByTagName(s)[0],
                                p=/^http:/.test(d.location)?'http':'https';
                            if(!d.getElementById(id)){js=d.createElement(s);
                            js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
                            fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
                    </script>
                </div>
                <?php if(0+$averageCompression>30) {?> 
                <div class='shortpixel-rate-us'>
                    <a href="https://wordpress.org/support/view/plugin-reviews/shortpixel-image-optimiser?rate=5#postform" target="_blank">
                        <div>
                            Please rate us!&nbsp;
                        </div><img src="<?php echo(plugins_url( 'img/stars.png', __FILE__ ));?>">
                    </a>
                </div>
                <?php } ?>
            </div>
            <?php $this->displayBulkStats($quotaData['totalProcessedFiles'], $quotaData['mainProcessedFiles'], $under5PercentCount, $averageCompression, $savedSpace);?>
            <p>Go to the ShortPixel <a href='<?php echo(get_admin_url());?>options-general.php?page=wp-shortpixel#stats'>Stats</a> and see all your websites' optimized stats. Download your detailed <a href="https://api.shortpixel.com/v2/report.php?key=<?php echo($this->ctrl->getApiKey());?>">Optimization Report</a> to check your image optimization statistics for the last 40 days.</p>
            <?php 
            $failed = $this->ctrl->getPrioQ()->getFailed();
            if(count($failed)) { ?>
                <div class="bulk-progress" style="margin-bottom: 15px">
                    <p>
                        The following images could not be processed because of their limited write rights. This usually happens if you have changed your hosting provider. Please restart the optimization process after you granted write rights to all the files below.
                    </p>
                    <?php $this->displayFailed($failed); ?>
                </div>
            <?php } ?>
            <div class="bulk-progress">
                <?php 
                $todo = false;
                if($quotaData['totalProcessedFiles'] < $quotaData['totalFiles']) { 
                    $todo = true;
                    $mainNotProcessed = $quotaData['mainFiles'] - $quotaData['mainProcessedFiles'];
                    $thumbsNotProcessed = ($quotaData['totalFiles'] - $quotaData['mainFiles']) - ($quotaData['totalProcessedFiles'] - $quotaData['mainProcessedFiles']);
                    ?>
                    <p>
                        <?php echo($mainNotProcessed ? number_format($mainNotProcessed) . " images" : "");?> 
                        <?php echo($mainNotProcessed && $thumbsNotProcessed ? " and" : "");?> 
                        <?php echo($thumbsNotProcessed ? number_format($thumbsNotProcessed) . " thumbnails" : "");?> are not yet optimized by ShortPixel.
                        <?php if (count($quotaData['filesWithErrors'])) { ?>
                            Some have errors: 
                            <?php foreach($quotaData['filesWithErrors'] as $id => $data) {
                                echo('<a href="post.php?post='.$id.'&action=edit" title="'.$data['Message'].'">'.$data['Name'].'</a>,&nbsp;');
                            } ?>
                        <?php } ?>
                    </p>
                <?php }
                $settings = $this->ctrl->getSettings();
                $optType = $settings->compressionType == '1' ? 'lossy' : 'lossless';
                $otherType = $settings->compressionType == '1' ? 'lossless' : 'lossy';
                if(   !$this->ctrl->backupFolderIsEmpty()
                   && (   ($quotaData['totalProcLossyFiles'] > 0 && $settings->compressionType == 0)
                       || ($quotaData['totalProcLosslessFiles'] > 0 && $settings->compressionType == 1)))
                {     
                    $todo = true;
                    $statType = $settings->compressionType == '1' ? 'Lossless' : 'Lossy';
                    $thumbsCount = $quotaData['totalProc'.$statType.'Files'] - $quotaData['mainProc'.$statType.'Files'];
                    ?>
                    <p id="with-thumbs" <?php echo(!$settings->processThumbnails ? 'style="display:none;"' : "");?>>
                        <?php echo(number_format($quotaData['mainProc'.$statType.'Files']));?> images and 
                        <?php echo(number_format($quotaData['totalProc'.$statType.'Files'] - $quotaData['mainProc'.$statType.'Files']));?> thumbnails were optimized 
                        <strong>
                            <?php echo($otherType);?>
                        </strong>. You can re-optimize 
                        <strong>
                            <?php echo($optType);?>
                        </strong> the ones that have backup.
                    </p>
                    <p id="without-thumbs" <?php echo($settings->processThumbnails ? 'style="display:none;"' : "");?>>
                        <?php echo(number_format($quotaData['mainProc'.$statType.'Files']));?> images are optimized
                        <strong>
                            <?php echo($otherType);?>
                        </strong>. You can re-optimize 
                        <strong>
                            <?php echo($optType);?>
                        </strong> the ones that have backup.
                        <?php echo($thumbsCount ? number_format($thumbsCount) . ' thumbnails will be restored to originals.' : '');?>
                    </p>
                    <?php
                } ?>
                <p>Restart the optimization process for <?php echo($todo ? 'these images' : 'new images added to your library');?> by clicking the button below. 
                    Already <strong><?php echo($todo ? ($optType) : '');?></strong> optimized images will not be reprocessed.
                    <br>Please note that reoptimizing images as <strong>lossy/lossless</strong> may use additional credits. <a href="http://blog.shortpixel.com/the-all-new-re-optimization-functions-in-shortpixel/" target="_blank">More info</a>
                </p>
                <form action='' method='POST' >
                    <input type='checkbox' id='bulk-thumbnails' name='thumbnails' <?php echo($this->ctrl->processThumbnails() ? "checked":"");?> onchange="ShortPixel.onBulkThumbsCheck(this)"> Include thumbnails<br><br>
                    <input type='submit' name='bulkProcess' id='bulkProcess' class='button button-primary' value='Restart Optimizing'>
                </form>
            </div>
        <?php } ?>
        </div>
        <?php
    }

    public function displayBulkProcessingRunning($percent, $message) {
        ?>
        <div class="wrap short-pixel-bulk-page">
            <h1>Bulk Image Optimization by ShortPixel</h1>
            <p>Bulk optimization has started.<br>
                This process will take some time, depending on the number of images in your library. In the meantime, you can continue using 
                the admin as usual, <a href='<?php echo(get_admin_url());?>' target='_blank'>in a different browser window or tab</a>.<br>
               However, <strong>if you close this window, the bulk processing will pause</strong> until you open the media gallery or the ShortPixel bulk page again. </p>
            <?php $this->displayBulkProgressBar(true, $percent, $message);?>
            <div class="bulk-progress bulk-slider-container">
                <div style="margin-bottom: 10px;"><span class="short-pixel-block-title">Just optimized:</span></div>
                <div class="bulk-slider">
                    <div class="bulk-slide" id="empty-slide">
                        <div class="img-original">
                            <div><img class="bulk-img-orig" src=""></div>
                          <div>Original image</div>
                        </div>
                        <div class="img-optimized">
                            <div><img class="bulk-img-opt" src=""></div>
                          <div>Optimized image</div>
                        </div>
                        <div class="img-info">
                            <div style="font-size: 14px; line-height: 10px; margin-bottom:16px;">Optimized by:</div>
                            <span class="bulk-opt-percent"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
    
    public function displayBulkProgressBar($running, $percent, $message) {
        $percentBefore = $percentAfter = '';
        if($percent > 24) {
            $percentBefore = $percent . "%";
        } else {
            $percentAfter = $percent . "%";
        }
        ?>
            <div class="bulk-progress">
                <div id="bulk-progress" class="progress" >
                    <div class="progress-img" style="left: <?php echo($percent);?>%;">
                        <img src="<?php echo(plugins_url( 'img/slider.png', __FILE__ ));?>">
                        <span><?php echo($percentAfter);?></span>
                    </div>
                    <div class="progress-left" style="width: <?php echo($percent);?>%"><?php echo($percentBefore);?></div>
                </div>
                <div class="bulk-estimate">
                    &nbsp;<?php echo($message);?>
                </div>
            <form action='' method='POST' style="display:inline;">
                <input type="submit" class="button button-primary bulk-cancel"  onclick="clearBulkProcessor();"
                       name="<?php echo($running ? "bulkProcessPause" : "bulkProcessResume");?>" value="<?php echo($running ? "Pause" : "Resume Processing");?>"/>
            </form>
            </div>
        <?php
    }
    
    public function displayBulkStats($totalOptimized, $mainOptimized, $under5PercentCount, $averageCompression, $savedSpace) {?>
            <div class="bulk-progress bulk-stats">
                <div class="label">Processed Images and PDFs:</div><div class="stat-value"><?php echo(number_format($mainOptimized));?></div><br>
                <div class="label">Processed Thumbnails:</div><div class="stat-value"><?php echo(number_format($totalOptimized - $mainOptimized));?></div><br>
                <div class="label totals">Total files processed:</div><div class="stat-value"><?php echo(number_format($totalOptimized));?></div><br>
                <div class="label totals">Minus files with <5% optimization (free):</div><div class="stat-value"><?php echo(number_format($under5PercentCount));?></div><br><br>
                <div class="label totals">Used quota:</div><div class="stat-value"><?php echo(number_format($totalOptimized - $under5PercentCount));?></div><br>
                <br>
                <div class="label">Average optimization:</div><div class="stat-value"><?php echo($averageCompression);?>%</div><br>
                <div class="label">Saved space:</div><div class="stat-value"><?php echo($savedSpace);?></div>
            </div>
        <?php
    }
     
    public function displayFailed($failed) {
        ?>
            <div class="bulk-progress bulk-stats">
                <?php foreach($failed as $fail) { 
                $meta = wp_get_attachment_metadata($fail);
                ?> <div class="label"><a href="/wp-admin/post.php?post=<?php echo($fail);?>&action=edit"><?php echo(substr($meta["file"], 0, 80));?> - ID: <?php echo($fail);?></a></div><br/>
                <?php }?>
            </div>
        <?php
    }

    function displaySettings($showApiKey, $quotaData, $notice, $resources = null, $averageCompression = null, $savedSpace = null, $savedBandwidth = null, 
                         $remainingImages = null, $totalCallsMade = null, $fileCount = null, $backupFolderSize = null) { 
        //wp_enqueue_script('jquery.idTabs.js', plugins_url('/js/jquery.idTabs.js',__FILE__) );
        ?>        
        <h1>ShortPixel Plugin Settings</h1>
        <p style="font-size:18px">
            <a href="https://shortpixel.com/<?php echo($this->ctrl->getVerifiedKey() ? "login/".$this->ctrl->getApiKey() : "pricing");?>" target="_blank" style="font-size:18px">
                Upgrade now
            </a> |
            <a href="https://shortpixel.com/contact/<?php echo($this->ctrl->getEncryptedData());?>" target="_blank" style="font-size:18px">Support </a>
        </p>
        <?php if($notice !== null) { ?>
        <br/>
        <div style="background-color: #fff; border-left: 4px solid <?php echo($notice['status'] == 'error' ? '#ff0000' : ($notice['status'] == 'warn' ? '#FFC800' : '#7ad03a'));?>; box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1); padding: 1px 12px;;width: 95%">
                  <p><?php echo($notice['msg']);?></p>
        </div>
        <?php } ?>

        <article class="tabs">
            <section class='sel-tab' id="tab-settings">
		        <h2><a class='tab-link' href='javascript:void(0);' data-id="tab-settings">Settings</a></h2>
                <?php $this->displaySettingsForm($showApiKey, $quotaData);?>
            </section> <?php
            if($averageCompression !== null) {?>
            <section id="tab-stats">
                <h2><a class='tab-link' href='javascript:void(0);' data-id="tab-stats">Statistics</a></h2>
                <?php
                    $this->displaySettingsStats($quotaData, $averageCompression, $savedSpace, $savedBandwidth, 
                                                $remainingImages, $totalCallsMade, $fileCount, $backupFolderSize);?>
            </section> 
            <?php }
            if($resources !== null) {?>
            <section id="tab-resources">
		        <h2><a class='tab-link' href='javascript:void(0);' data-id="tab-resources">WP Resources</a></h2>
                <?php echo((isset($resources['body']) ? $resources['body'] : "Please reload"));?>
            </section>
            <?php } ?>
        </article>
        <script>
            jQuery(document).ready(function () {
                if(window.location.hash) {
                    var target = 'tab-' + window.location.hash.substring(window.location.hash.indexOf("#")+1)
                    ShortPixel.switchSettingsTab(target);
                }
                jQuery("article.tabs a.tab-link").click(function(){ShortPixel.switchSettingsTab(jQuery(this).data("id"))});
            });
        </script>
        <?php
    }    
    
    public function displaySettingsForm($showApiKey, $quotaData) {
        $settings = $this->ctrl->getSettings();
        $checked = ($this->ctrl->processThumbnails() ? 'checked' : '');
        $checkedBackupImages = ($this->ctrl->backupImages() ? 'checked' : '');
        $cmyk2rgb = ($this->ctrl->getCMYKtoRGBconversion() ? 'checked' : '');
        $removeExif = ($settings->keepExif ? '' : 'checked');
        $resize = ($this->ctrl->getResizeImages() ? 'checked' : '');
        $resizeDisabled = ($this->ctrl->getResizeImages() ? '' : 'disabled');        
        $minSizes = $this->ctrl->getMaxIntermediateImageSize();
        $thumbnailsToProcess = isset($quotaData['totalFiles']) ? ($quotaData['totalFiles'] - $quotaData['mainFiles']) - ($quotaData['totalProcessedFiles'] - $quotaData['mainProcessedFiles']) : 0;
        ?>
        <?php if($this->ctrl->getVerifiedKey()) { ?>
            <p>New images uploaded to the Media Library will be optimized automatically.<br/>If you have existing images you would like to optimize, you can use the <a href="<?php echo(get_admin_url());?>upload.php?page=wp-short-pixel-bulk">Bulk Optimization Tool</a>.</p>
        <?php } else { 
            if($showApiKey) {?>
            <h3>Step 1:</h3>
            <p style='font-size: 14px'>If you don't have an API Key, <a href="https://shortpixel.com/wp-apikey<?php echo( $this->ctrl->getAffiliateSufix() );?>" target="_blank">sign up here.</a> It's free and it only takes one minute, we promise!</p>
            <h3>Step 2:</h3>
            <p style='font-size: 14px'>Please enter here the API Key you received by email and press Validate.</p>
            <?php } 
        }?>
        <form name='wp_shortpixel_options' action='options-general.php?page=wp-shortpixel&noheader=true'  method='post' id='wp_shortpixel_options'>
            <table class="form-table">
                <tbody>
                    <tr>
                        <th scope="row"><label for="key">API Key:</label></th>
                        <td>
                            <?php 
                            $canValidate = false;
                            if($showApiKey) {
                                $canValidate = true;?>
                            <input name="key" type="text" id="key" value="<?php echo( $this->ctrl->getApiKey() );?>" class="regular-text">
                            <?php } elseif(defined("SHORTPIXEL_API_KEY")) { 
                                $canValidate = true;?>
                            <input name="key" type="text" id="key" disabled="true" placeholder="Multisite API Key" class="regular-text">
                            <?php }?>
                            <input type="hidden" name="validate" id="valid" value=""/>
                            <button type="button" id="validate" class="button button-primary" title="Validate the provided API key"
                                    onclick="validateKey()" <?php echo $canValidate ? "" : "disabled"?>>Validate</button>
                        </td>
                    </tr>
        <?php if (!$this->ctrl->getVerifiedKey()) { //if invalid key we display the link to the API Key ?>
                </tbody>
            </table>
        </form>
        <?php } else { //if valid key we display the rest of the options ?>
                    <tr>
                        <th scope="row">
                            <label for="compressionType">Compression type:</label>
                        </th>
                        <td>
                            <input type="radio" name="compressionType" value="1" <?php echo( $this->ctrl->getCompressionType() == 1 ? "checked" : "" );?>>Lossy (recommended)</br>
                            <p class="settings-info"> <b>Lossy compression: </b>lossy has a better compression rate than lossless compression.</br>While the resulting image
                                is not 100% identical with the original, in the vast majority of cases the difference is not noticeable. You can 
                                <a href="https://shortpixel.com/online-image-compression" target="_blank">freely test your images</a> for lossy optimization.</p></br>
                            <input type="radio" name="compressionType" value="0" <?php echo( $this->ctrl->getCompressionType() != 1 ? "checked" : "" );?>>Lossless
                            <p class="settings-info"><b>Lossless compression: </b> the shrunk image will be identical with the original and smaller in size.</br>In some rare cases you will need to use 
                            this type of compression. Some technical drawings or images from vector graphics are possible situations.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="form-table">
                <tbody>
                    <tr>
                        <th scope="row"><label for="thumbnails">Also include thumbnails:</label></th>
                        <td><input name="thumbnails" type="checkbox" id="thumbnails" <?php echo( $checked );?>> Apply compression also to 
                                <strong>image thumbnails.</strong> (<?php echo($thumbnailsToProcess ? number_format($thumbnailsToProcess) : "");?> thumbnails to optimize)
                            <p class="settings-info">It is highly recommended that you optimize the thumbnails as they are usually the images most viewed by end users and can generate most traffic.<br>Please note that thumbnails count up to your total quota.</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="backupImages">Image backup</label></th>
                        <td>
                            <input name="backupImages" type="checkbox" id="backupImages" <?php echo( $checkedBackupImages );?>> Save and keep a backup of your original images in a separate folder.
                            <p class="settings-info">Usually recommended for safety.</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="cmyk2rgb">CMYK to RGB conversion</label></th>
                        <td>
                            <input name="cmyk2rgb" type="checkbox" id="cmyk2rgb" <?php echo( $cmyk2rgb );?>>Adjust your images for computer and mobile screen display.
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="removeExif">Remove EXIF</label></th>
                        <td>
                            <input name="removeExif" type="checkbox" id="removeExif" <?php echo( $removeExif );?>>Remove the EXIF tag of the image (recommended).
                            <p class="settings-info"> EXIF is a set of various pieces of information that are automatically embedded into the image upon creation. This can include GPS position, camera manufacturer, date and time, etc.  
                                Unless you really need that data to be kept we recommend you removing it as it can lead to <a href="http://blog.shortpixel.com/how-much-smaller-can-be-images-without-exif-icc" target="_blank">better compression rates</a>.</p></br>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="resize">Resize large images</label></th>
                        <td>
                            <input name="resize" type="checkbox" id="resize" <?php echo( $resize );?>> to maximum
                            <input type="text" name="width" id="width" style="width:70px" value="<?php echo( max($this->ctrl->getResizeWidth(), min(1024, $minSizes['width'])) );?>" <?php echo( $resizeDisabled );?>/> pixels wide &times; 
                            <input type="text" name="height" id="height" style="width:70px" value="<?php echo( max($this->ctrl->getResizeHeight(), min(1024, $minSizes['height'])) );?>" <?php echo( $resizeDisabled );?>/> pixels high (original aspect ratio is preserved)
                            <p class="settings-info"> Recommended for large photos, like the ones taken with your phone. Saved space can go up to 80% or more after resizing.<br/>
                                The new resolution should not be less than your largest thumbnail size, which is <?php echo($minSizes['width']);?> &times; <?php echo($minSizes['height']);?> pixels.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="submit">
                <input type="submit" name="save" id="save" class="button button-primary" title="Save Changes" value="Save Changes"> &nbsp;
                <input type="submit" name="save" id="bulk" class="button button-primary" title="Save and go to the Bulk Processing page" value="Save and Go to Bulk Process"> &nbsp;
            </p>
        </form>
        <script>
            var rad = document.wp_shortpixel_options.compressionType;
            var prev = null;
            var minWidth  = Math.min(1024, <?php echo($minSizes['width']);?>),
                minHeight = Math.min(1024, <?php echo($minSizes['height']);?>);
            for(var i = 0; i < rad.length; i++) {
                rad[i].onclick = function() {

                    if(this !== prev) {
                        prev = this;
                    }
                    alert('This type of optimization will apply to new uploaded images.\nImages that were already processed will not be re-optimized unless you restart the bulk process.');
                };
            }
            function enableResize(elm) {
                if(jQuery(elm).is(':checked')) {
                    jQuery("#width,#height").removeAttr("disabled");
                } else {
                    jQuery("#width,#height").attr("disabled", "disabled");
                }
            }
            enableResize("#resize");
            jQuery("#resize").change(function(){ enableResize(this) });
            jQuery("#width").blur(function(){
                jQuery(this).val(Math.max(minWidth, parseInt(jQuery(this).val())));
            });
            jQuery("#height").blur(function(){
                jQuery(this).val(Math.max(minHeight, parseInt(jQuery(this).val())));
            });
        </script>
        <?php } ?>
        <script>
            function validateKey(){
                jQuery('#valid').val('validate');
                jQuery('#wp_shortpixel_options').submit();
            }
            jQuery("#key").keypress(function(e) {
                if(e.which == 13) {
                    jQuery('#valid').val('validate');
                }
            });
        </script>
        <?php
    }
    
    function displaySettingsStats($quotaData, $averageCompression, $savedSpace, $savedBandwidth, 
                         $remainingImages, $totalCallsMade, $fileCount, $backupFolderSize) { ?>
        <a id="facts"></a>
        <h3>Your ShortPixel Stats</h3>
        <table class="form-table">
            <tbody>
                <tr>
                    <th scope="row"><label for="averagCompression">Average compression of your files:</label></th>
                    <td><?php echo($averageCompression);?>%</td>
                </tr>
                <tr>
                    <th scope="row"><label for="savedSpace">Saved disk space by ShortPixel</label></th>
                    <td><?php echo($savedSpace);?></td>
                </tr>
                <tr>
                    <th scope="row"><label for="savedBandwidth">Bandwith* saved with ShortPixel:</label></th>
                    <td><?php echo($savedBandwidth);?></td>
                </tr>
            </tbody>
        </table>

        <p style="padding-top: 0px; color: #818181;" >* Saved bandwidth is calculated at 10,000 impressions/image</p>

        <h3>Your ShortPixel Plan</h3>
        <table class="form-table">
            <tbody>
                <tr>
                    <th scope="row" bgcolor="#ffffff"><label for="apiQuota">Your ShortPixel plan</label></th>
                    <td bgcolor="#ffffff">
                        <?php echo($quotaData['APICallsQuota']);?>/month, renews in <?php echo(floor(30 + (strtotime($quotaData['APILastRenewalDate']) - time()) / 86400));?> days, on <?php echo(date('M d, Y', strtotime($quotaData['APILastRenewalDate']. ' + 30 days')));?> ( <a href="https://shortpixel.com/login/<?php echo($this->ctrl->getApiKey());?>" target="_blank">Need More? See the options available</a> )<br/>
                        <a href="https://shortpixel.com/login/<?php echo($this->ctrl->getApiKey());?>/tell-a-friend" target="_blank">Join our friend referral system</a> to win more credits. For each user that joins, you receive +100 images credits/month.
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="usedQUota">One time credits:</label></th>
                    <td><?php echo(  number_format($quotaData['APICallsQuotaOneTimeNumeric']));?></td>
                </tr>
                <tr>
                    <th scope="row"><label for="usedQUota">Number of images processed this month:</label></th>
                    <td><?php echo($totalCallsMade);?> (<a href="https://api.shortpixel.com/v2/report.php?key=<?php echo($this->ctrl->getApiKey());?>" target="_blank">see report</a>)</td>
                </tr>
                <tr>
                    <th scope="row"><label for="remainingImages">Remaining** images in your plan:  </label></th>
                    <td><?php echo($remainingImages);?> images</td>
                </tr>
            </tbody>
        </table>

        <p style="padding-top: 0px; color: #818181;" >** Increase your image quota by <a href="https://shortpixel.com/login/<?php echo($this->ctrl->getApiKey());?>" target="_blank">upgrading your ShortPixel plan.</a></p>

        <table class="form-table">
            <tbody>
                <tr>
                    <th scope="row"><label for="totalFiles">Total number of processed files:</label></th>
                    <td><?php echo($fileCount);?></td>
                </tr>
                <?php if($this->ctrl->backupImages()) { ?>
                <tr>
                    <th scope="row"><label for="sizeBackup">Original images are stored in a backup folder. Your backup folder size is now:</label></th>
                    <td>
                        <form action="" method="POST">
                            <?php echo($backupFolderSize);?>
                            <input type="submit"  style="margin-left: 15px; vertical-align: middle;" class="button button-secondary" name="emptyBackup" value="Empty backups"/>
                        </form>
                    </td>
                </tr>
                <?php } ?>
            </tbody>
        </table> 
        <div style="display:none">

        </div>    
        <?php        
    }

    public function renderCustomColumn($id, $data){ ?> 
        <div id='sp-msg-<?php echo($id);?>'>
            <?php switch($data['status']) {
                case 'n/a': ?> 
                    Optimization N/A <?php
                    break;
                case 'notFound': ?> 
                    Image does not exist. <?php
                    break;
                case 'invalidKey': ?>
                    Invalid API Key. <a href="options-general.php?page=wp-shortpixel">Check your Settings</a> <?php
                    break;
                case 'quotaExceeded': 
                    echo($this->getQuotaExceededHTML(isset($data['message']) ? $data['message'] : ''));
                    break;
                case 'optimizeNow': 
                    echo($data['message']) ?>  <a class='button button-smaller button-primary' href="javascript:manualOptimization(<?php echo($id)?>)">Optimize now</a> <?php
                    if(isset($data['thumbsTotal']) && $data['thumbsTotal'] > 0) {
                        echo("<br>+" . $data['thumbsTotal'] . " thumbnails");
                    }
                    break;
                case 'retry': ?> 
                    <?php echo($data['message'])?>  <a class='button button-smaller button-primary' href="javascript:manualOptimization(<?php echo($id)?>)">Retry</a> <?php
                    break;
                case 'pdfOptimized': 
                case 'imgOptimized': ?>
                    <?php if($data['showActions']) { ?>
                    <div class='sp-column-actions'>
                        <?php if(!$data['thumbsOpt'] && $data['thumbsTotal']) { ?>
                        <a class='button button-smaller button-primary' href="javascript:optimizeThumbs(<?php echo($id)?>);">
                            Optimize <?php echo($data['thumbsTotal']);?> thumbnails
                        </a>
                        <?php }
                        if($data['backup']) {
                            if($data['type']) { 
                                $type = $data['type'] == 'lossy' ? 'lossless' : 'lossy'; ?>
                                <a class='button button-smaller' href="javascript:reoptimize(<?php echo($id)?>, '<?php echo($type)?>');" title="Using the backed-up image">
                                    Re-optimize <?php echo($type)?>
                                </a><?php
                            } ?>
                            <a class='button button-smaller' href="admin.php?action=shortpixel_restore_backup&attachment_ID=<?php echo($id)?>">
                                Restore backup
                            </a>
                        <?php } ?>
                    </div> 
                    <?php } ?> 
                    <div class='sp-column-info'>
                        <?php echo(($data['percent'] ? 'Reduced by ' . $data['percent'] . '% ' : '')
                                  .($data['bonus'] && $data['percent'] ? '<br>' : '') 
                                  .($data['bonus'] ? 'Bonus processing' : '') 
                                  .($data['type'] ? ' ('.$data['type'].')':'') . '<br>');?>
                        <?php echo($data['thumbsOpt'] 
                        ? "+" . $data['thumbsOpt'] . ($data['thumbsTotal'] > $data['thumbsOpt'] ? " of ".$data['thumbsTotal'] : '') . " thumbnails optimized" : '');?>
                    </div> <?php
                    break;
                }
                //die(var_dump($data));
                ?>
        </div>
        <?php 
    }
    
    public function getQuotaExceededHTML($message = '') {
        return "<div class='sp-column-actions' style='width:110px;'> 
        <a class='button button-smaller button-primary' href='https://shortpixel.com/login/". $this->ctrl->getApiKey() . "' target='_blank'>Extend Quota</a>
        <a class='button button-smaller' href='admin.php?action=shortpixel_check_quota'>Check&nbsp;&nbsp;Quota</a></div>
        <div class='sp-column-info'>" . $message . " Quota Exceeded.</div>";
    }
}
