/**
 * Short Pixel WordPress Plugin javascript
 */

jQuery(document).ready(function($){
    //are we on media list?
    if( jQuery('table.wp-list-table.media').length > 0) {
        //register a bulk action
        jQuery('select[name^="action"] option:last-child').before('<option value="short-pixel-bulk">Optimize with ShortPixel</option>');
    }    
    if( ShortPixel.MEDIA_ALERT == 'todo' && jQuery('div.media-frame.mode-grid').length > 0) {
        //the media table is not in the list mode, alert the user
        jQuery('div.media-frame.mode-grid').before('<div id="short-pixel-media-alert" class="notice notice-warning"><p>In order to access the ShortPixel Optimization actions and info, please change to <a href="/wp-admin/upload.php?mode=list" class="view-list"><span class="screen-reader-text">List View</span>List View</a><a class="alignright" href="javascript:ShortPixel.dismissMediaAlert();">Dismiss</a></p></div>');
    }
    //
    jQuery(window).unload(function(){
        if(ShortPixel.bulkProcessor == true) {        
            clearBulkProcessor();
        }
    });
    //check if  bulk processing
    checkQuotaExceededAlert();
    checkBulkProgress();
});


var ShortPixel = function() {

    function setOptions(options) {
        for(var opt in options) {
            ShortPixel[opt] = options[opt];
        }
    }
    
    function checkThumbsUpdTotal(el) {
        var total = jQuery("#" +(el.checked ? "total" : "main")+ "ToProcess").val();
        jQuery("div.bulk-play span.total").text(total);
        jQuery("#displayTotal").text(total);
    }
    
    function switchSettingsTab(target){
        var section = jQuery("section#" +target);
        if(section.length > 0){
            jQuery("section").removeClass("sel-tab");
            jQuery("section#" +target).addClass("sel-tab");        
        }
    }

    function dismissMediaAlert() {
        var data = { action  : 'shortpixel_dismiss_media_alert'};
        jQuery.get(ajaxurl, data, function(response) {
            data = JSON.parse(response);
            if(data["Status"] == 'success') {
                jQuery("#short-pixel-media-alert").hide();
                console.log("dismissed");
            }
        });
    }
    
    function onBulkThumbsCheck(check) {
        if(check.checked) {
            jQuery("#with-thumbs").css('display', 'inherit');
            jQuery("#without-thumbs").css('display', 'none');
        } else {
            jQuery("#without-thumbs").css('display', 'inherit');
            jQuery("#with-thumbs").css('display', 'none');
        }
    }
    
    return {
        setOptions          : setOptions,
        checkThumbsUpdTotal : checkThumbsUpdTotal,
        switchSettingsTab   : switchSettingsTab,
        onBulkThumbsCheck   : onBulkThumbsCheck,
        dismissMediaAlert   : dismissMediaAlert
    }
}();

function showToolBarAlert($status, $message) {
    var robo = jQuery("li.shortpixel-toolbar-processing");
    switch($status) {
        case ShortPixel.STATUS_QUOTA_EXCEEDED:
            if(  window.location.href.search("wp-short-pixel-bulk") > 0 
              && jQuery(".sp-quota-exceeded-alert").length == 0) { //if we're in bulk and the alert is not displayed reload to see all options
                location.reload();
                return;
            }
            robo.addClass("shortpixel-alert");
            robo.addClass("shortpixel-quota-exceeded");
            //jQuery("a", robo).attr("href", "http://shortpixel.com/login/" + ShortPixel.API_KEY);
            jQuery("a", robo).attr("href", "options-general.php?page=wp-shortpixel");
            //jQuery("a", robo).attr("target", "_blank");
            //jQuery("a div", robo).attr("title", "ShortPixel quota exceeded. Click to top-up");
            jQuery("a div", robo).attr("title", "ShortPixel quota exceeded. Click for details.");
            break;
        case ShortPixel.STATUS_SKIP:        
            robo.addClass("shortpixel-alert shortpixel-processing"); 
            jQuery("a div", robo).attr("title", $message);
            break;
        case ShortPixel.STATUS_FAIL:        
            robo.addClass("shortpixel-alert shortpixel-processing"); 
            jQuery("a div", robo).attr("title", $message);
            break;
        case ShortPixel.STATUS_NO_KEY:
            robo.addClass("shortpixel-alert");
            robo.addClass("shortpixel-quota-exceeded");
            jQuery("a", robo).attr("href", "options-general.php?page=wp-shortpixel");//"http://shortpixel.com/wp-apikey");
            //jQuery("a", robo).attr("target", "_blank");
            jQuery("a div", robo).attr("title", "Get API Key");
            break;
        case ShortPixel.STATUS_SUCCESS:
        case ShortPixel.STATUS_RETRY:
            robo.removeClass("shortpixel-alert");
            jQuery("a", robo).removeAttr("target");
            jQuery("a", robo).attr("href", jQuery("a img", robo).attr("success-url"));
    }
    jQuery("li.shortpixel-toolbar-processing").removeClass("shortpixel-hide");
}
function hideToolBarAlert () {
    jQuery("li.shortpixel-toolbar-processing.shortpixel-processing").addClass("shortpixel-hide");
}

function hideQuotaExceededToolBarAlert () {
    jQuery("li.shortpixel-toolbar-processing.shortpixel-quota-exceeded").addClass("shortpixel-hide");
}

function checkQuotaExceededAlert() {
    if(typeof shortPixelQuotaExceeded != 'undefined') {
        if(shortPixelQuotaExceeded == 1) {
             showToolBarAlert(ShortPixel.STATUS_QUOTA_EXCEEDED);
        } else {
            hideQuotaExceededToolBarAlert();
        }
    }
}
/**
 * JavaScript image processing - this method gets executed on every footer load and afterwards 
 * calls itself until receives an Empty queue message
 */
function checkBulkProgress() {
    if(   window.location.href.search(ShortPixel.WP_ADMIN_URL + "upload.php") < 0
       && window.location.href.search(ShortPixel.WP_ADMIN_URL + "edit.php") < 0
       && window.location.href.search(ShortPixel.WP_ADMIN_URL + "edit-tags.php") < 0
       && window.location.href.search(ShortPixel.WP_ADMIN_URL + "post-new.php") < 0
       && window.location.href.search(ShortPixel.WP_ADMIN_URL + "post.php") < 0) {
        hideToolBarAlert();
        return;
    }
    
    //if i'm the bulk processor and i'm not the bulk page and a bulk page comes around, leave the bulk processor role
    if(ShortPixel.bulkProcessor == true && window.location.href.search("wp-short-pixel-bulk") < 0 
       && typeof localStorage.bulkPage !== 'undefined' && localStorage.bulkPage > 0) {
           ShortPixel.bulkProcessor = false;
    }
    
    //if i'm the bulk page, steal the bulk processor
    if( window.location.href.search("wp-short-pixel-bulk") >= 0 ) {
        ShortPixel.bulkProcessor = true;
        localStorage.bulkTime = Math.floor(Date.now() / 1000);
        localStorage.bulkPage = 1;
    }
    
    //if I'm not the bulk processor, check every 20 sec. if the bulk processor is running, otherwise take the role
    if(ShortPixel.bulkProcessor == true || typeof localStorage.bulkTime == 'undefined' || Math.floor(Date.now() / 1000) -  localStorage.bulkTime > 90) {
        ShortPixel.bulkProcessor = true;
        localStorage.bulkTime = Math.floor(Date.now() / 1000);
        console.log(localStorage.bulkTime);
        checkBulkProcessingCallApi();
    } else {
        console.log("not the bulk processor");
        setTimeout(checkBulkProgress, 5000);
    }
}

function checkBulkProcessingCallApi(){
    var data = { 'action': 'shortpixel_image_processing' };
    // since WP 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
    jQuery.post(ajaxurl, data, function(response) 
    {
        if(response.length > 0) {
            var data = null;
            try {
                var data = JSON.parse(response);
            } catch (e) {
                ShortPixel.retries++;
                if(isNaN(ShortPixel.retries)) ShortPixel.retries = 1;
                if(ShortPixel.retries < 6) {
                    console.log("Invalid response from server. Retrying pass " + (ShortPixel.retries + 1) +  "...");
                    setTimeout(checkBulkProgress, 5000);
                } else {
                    console.log("Invalid response from server 6 times. Giving up.");                    
                }
                return;
            }
            var id = data["ImageID"];
            
            var isBulkPage = (jQuery("div.short-pixel-bulk-page").length > 0);

            switch (data["Status"]) {
                case ShortPixel.STATUS_NO_KEY:
                    setCellMessage(id, data["Message"] + " | <a href=\"https://shortpixel.com/wp-apikey\" target=\"_blank\">Get API Key</a>");
                    showToolBarAlert(ShortPixel.STATUS_NO_KEY);
                    break;
                case ShortPixel.STATUS_QUOTA_EXCEEDED:
                    setCellMessage(id, "<div class='sp-column-actions' style='width:110px;'><a class='button button-smaller button-primary' href=\"https://shortpixel.com/login/" 
                                   + ShortPixel.API_KEY + "\" target=\"_blank\">Extend Quota</a>"
                                   + "<a class='button button-smaller' href='admin.php?action=shortpixel_check_quota'>Check&nbsp;&nbsp;Quota</a></div>" 
                                   + "<div class='sp-column-info'>" + data["Message"] + "</div>" );
                    showToolBarAlert(ShortPixel.STATUS_QUOTA_EXCEEDED);
                    break;
                case ShortPixel.STATUS_FAIL:
                    setCellMessage(id, data["Message"]);
                    if(isBulkPage) {
                        showToolBarAlert(ShortPixel.STATUS_FAIL, data["Message"]);
                        progressUpdate(data["BulkPercent"], data["BulkMsg"]);
                    }
                    console.log(data["Message"]);
                    setTimeout(checkBulkProgress, 5000);
                    break;
                case ShortPixel.STATUS_EMPTY_QUEUE:
                    console.log(data["Message"]);
                    clearBulkProcessor(); //nothing to process, leave the role. Next page load will check again
                    hideToolBarAlert();
                    var progress = jQuery("#bulk-progress");
                    if(isBulkPage && progress.length && data["BulkStatus"] != '2') {
                        progressUpdate(100, "Bulk finished!");
                        jQuery("a.bulk-cancel").attr("disabled", "disabled");
                        hideSlider();
                        //showStats();
                        setTimeout(function(){
                            window.location.reload();
                        }, 3000);
                    }
                    break;
                case ShortPixel.STATUS_SUCCESS:
                    var percent = data["PercentImprovement"];
                    var otherType = data["Type"].length > 0 ? (data["Type"] == "lossy" ? "lossless" : "lossy") : null;
                    
                    var cellMsg = (percent > 0 ? "<div class='sp-column-info'>Reduced by <span class='percent'>" + percent + "%</span> " : "")
                          + (percent > 0 && percent < 5 ? "<br>" : '')
                          + (percent < 5 ? "Bonus processing" : '')
                          + (data["Type"].length > 0 ? " ("+data["Type"]+")" : "")
                          + (0 + data['ThumbsCount'] > 0 ? "<br>+" + data['ThumbsCount'] + " thumbnails optimized" :"")
                          + "</div>";
                    
                    if(data["BackupEnabled"] == 1) {
                        cellMsg = '<div class="sp-column-actions">' 
                          + (data["ThumbsTotal"] > data["ThumbsCount"] ? "<a class='button button-smaller button-primary' href=\"javascript:optimizeThumbs(" + id + ");\">Optimize " + (data["ThumbsTotal"] - data["ThumbsCount"]) + " thumbnails</a>" : "")
                          + (otherType.length ? "<a class='button button-smaller' href=\"javascript:reoptimize(" + id + ", '" + otherType + "');\">Re-optimize " + otherType + "</a>" : "")
                          + "<a class='button button-smaller' href=\"admin.php?action=shortpixel_restore_backup&attachment_ID=" + id + ")\">Restore backup</a>"
                          + "</div>" + cellMsg;
                    }                          
                    
                    showToolBarAlert(ShortPixel.STATUS_SUCCESS, "");
                    setCellMessage(id, cellMsg);
                    var animator = new PercentageAnimator("#sp-msg-" + id + " span.percent", percent);
                    animator.animate(percent);
                    if(isBulkPage && typeof data["Thumb"] !== 'undefined') { // && data["PercentImprovement"] > 0) {
                        progressUpdate(data["BulkPercent"], data["BulkMsg"]);
                        if(data["Thumb"].length > 0){
                            sliderUpdate(id, data["Thumb"], data["BkThumb"], data["PercentImprovement"]);
                        }
                    }                    
                    console.log('Server response: ' + response);
                    if(isBulkPage && typeof data["BulkPercent"] !== 'undefined') {
                        progressUpdate(data["BulkPercent"], data["BulkMsg"]);
                    }
                    setTimeout(checkBulkProgress, 5000);
                    break;
                    
                case ShortPixel.STATUS_ERROR: //for error and skip also we retry
                case ShortPixel.STATUS_SKIP:
                    if(typeof data["Message"] !== 'undefined') {
                        showToolBarAlert(ShortPixel.STATUS_SKIP, data["Message"] + ' Image ID: ' + id);
                        setCellMessage(id, data["Message"]);
                    }
                case ShortPixel.STATUS_RETRY:
                    console.log('Server response: ' + response);
                    showToolBarAlert(ShortPixel.STATUS_RETRY, "");
                    if(isBulkPage && typeof data["BulkPercent"] !== 'undefined') {
                        progressUpdate(data["BulkPercent"], data["BulkMsg"]);
                    }
                    setTimeout(checkBulkProgress, 5000);
                    break;
            }
        }
    });
}

function clearBulkProcessor(){
    ShortPixel.bulkProcessor = false; //nothing to process, leave the role. Next page load will check again
    localStorage.bulkTime = 0;
    if(window.location.href.search("wp-short-pixel-bulk") >= 0) {
        localStorage.bulkPage = 0;
    }
}

function setCellMessage(id, message){
    var msg = jQuery("#sp-msg-" + id);
    if(typeof msg !== "undefined") {
        msg.html(message);
    }    
}

function manualOptimization(id) {
    setCellMessage(id, "<img src='" + ShortPixel.WP_PLUGIN_URL + "/img/loading.gif' class='sp-loading-small'>Image waiting to be processed");
    jQuery("li.shortpixel-toolbar-processing").removeClass("shortpixel-hide");
    jQuery("li.shortpixel-toolbar-processing").addClass("shortpixel-processing");
    var data = { action  : 'shortpixel_manual_optimization',
                 image_id: id};
    jQuery.get(ajaxurl, data, function(response) {
        data = JSON.parse(response);
        if(data["Status"] == ShortPixel.STATUS_SUCCESS) {
            setTimeout(checkBulkProgress, 2000);
        } else {
            setCellMessage(id, typeof data["Message"] !== "undefined" ? data["Message"] : "This content is not processable.");
        }
        //aici e aici
    });
}

function reoptimize(id, type) {
    setCellMessage(id, "<img src='" + ShortPixel.WP_PLUGIN_URL + "/img/loading.gif' class='sp-loading-small'>Image waiting to be reprocessed");
    jQuery("li.shortpixel-toolbar-processing").removeClass("shortpixel-hide");
    jQuery("li.shortpixel-toolbar-processing").addClass("shortpixel-processing");
    var data = { action  : 'shortpixel_redo',
                 attachment_ID: id,
                 type: type};
    jQuery.get(ajaxurl, data, function(response) {
        data = JSON.parse(response);
        if(data["Status"] == ShortPixel.STATUS_SUCCESS) {
            setTimeout(checkBulkProgress, 2000);
        } else {
            $msg = typeof data["Message"] !== "undefined" ? data["Message"] : "This content is not processable.";
            setCellMessage(id, $msg);
            showToolBarAlert(ShortPixel.STATUS_FAIL, $msg);
        }
    });
}

function optimizeThumbs(id) {
    setCellMessage(id, "<img src='" + ShortPixel.WP_PLUGIN_URL + "/img/loading.gif' class='sp-loading-small'>Image waiting to optimize thumbnails");
    jQuery("li.shortpixel-toolbar-processing").removeClass("shortpixel-hide");
    jQuery("li.shortpixel-toolbar-processing").addClass("shortpixel-processing");
    var data = { action  : 'shortpixel_optimize_thumbs',
                 attachment_ID: id};
    jQuery.get(ajaxurl, data, function(response) {
        data = JSON.parse(response);
        if(data["Status"] == ShortPixel.STATUS_SUCCESS) {
            setTimeout(checkBulkProgress, 2000);
        } else {
            setCellMessage(id, typeof data["Message"] !== "undefined" ? data["Message"] : "This content is not processable.");
        }
    });
}

function dismissShortPixelNotice(id) {
    jQuery("#short-pixel-notice-" + id).hide();
    var data = { action  : 'shortpixel_dismiss_notice',
                 notice_id: id};
    jQuery.get(ajaxurl, data, function(response) {
        data = JSON.parse(response);
        if(data["Status"] == ShortPixel.STATUS_SUCCESS) {
            console.log("dismissed");
        }
    });
}

function PercentageAnimator(outputSelector, targetPercentage) {
    this.animationSpeed = 10;
    this.increment = 2;
    this.curPercentage = 0;
    this.targetPercentage = targetPercentage;
    this.outputSelector = outputSelector;
    
    this.animate = function(percentage) {
        this.targetPercentage = percentage;
        setTimeout(PercentageTimer.bind(null, this), this.animationSpeed);
    }
}

function PercentageTimer(animator) {
    if (animator.curPercentage - animator.targetPercentage < -animator.increment) {
        animator.curPercentage += animator.increment;    
    } else if (animator.curPercentage - animator.targetPercentage > animator.increment) {
        animator.curPercentage -= animator.increment;    
    } else {
        animator.curPercentage = animator.targetPercentage;
    }

    jQuery(animator.outputSelector).text(animator.curPercentage + "%");

    if (animator.curPercentage != animator.targetPercentage) {
        setTimeout(PercentageTimer.bind(null,animator), animator.animationSpeed)    
    }
}

function progressUpdate(percent, message) {
    var progress = jQuery("#bulk-progress");
    if(progress.length) {
        jQuery(".progress-left", progress).css("width", percent + "%");
        jQuery(".progress-img", progress).css("left", percent + "%");
        if(percent > 24) {
            jQuery(".progress-img span", progress).html("");
            jQuery(".progress-left", progress).html(percent + "%");
        } else {
            jQuery(".progress-img span", progress).html(percent + "%");
            jQuery(".progress-left", progress).html("");        
        }
        jQuery(".bulk-estimate").html(message);
    }
}

function sliderUpdate(id, thumb, bkThumb, percent){
    var oldSlide = jQuery(".bulk-slider div.bulk-slide:first-child");
    var newSlide = oldSlide.clone();
    newSlide.attr("id", "slide-" + id);
    if(oldSlide.attr("id") != "empty-slide") {
        newSlide.hide();
    }
    oldSlide.css("z-index", 1000);
    jQuery(".bulk-img-opt", newSlide).attr("src", thumb);
    if(bkThumb.length > 0) {
        jQuery(".img-original", newSlide).css("display", "inline-block");
        jQuery(".bulk-img-orig", newSlide).attr("src", bkThumb);
    } else {
        jQuery(".img-original", newSlide).css("display", "none");
    }
    jQuery(".bulk-opt-percent", newSlide).text(percent + "%");
    
    jQuery(".bulk-slider").append(newSlide);
    if(oldSlide.attr("id") == "empty-slide") {
        oldSlide.remove();
        jQuery(".bulk-slider-container").css("display", "block");
    } else {
        oldSlide.animate({ left: oldSlide.width() }, 'slow', 'swing', function(){
            oldSlide.remove();
            newSlide.fadeIn("slow");
        });
    }
}

function hideSlider() {
    jQuery(".bulk-slider-container").css("display", "none");
}

function showStats() {
    var statsDiv = jQuery(".bulk-stats");
    if(statsDiv.length > 0) {
        
    }
}

