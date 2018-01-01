<?php

class WPShortPixelSettings {
    private $_apiKey = '';
    private $_compressionType = 1;
    private $_keepExif = 0;
    private $_processThumbnails = 1;
    private $_CMYKtoRGBconversion = 1;
    private $_backupImages = 1;
    private $_verifiedKey = false;
    
    private $_resizeImages = false;
    private $_resizeWidth = 0;
    private $_resizeHeight = 0;
    
    private static $_optionsMap = array(
        'apiKey' => 'wp-short-pixel-apiKey',
        'verifiedKey' => 'wp-short-pixel-verifiedKey',
        'compressionType' => 'wp-short-pixel-compression',
        'processThumbnails' => 'wp-short-process_thumbnails',
        'keepExif' => 'wp-short-pixel-keep-exif',
        'CMYKtoRGBconversion' => 'wp-short-pixel_cmyk2rgb',
        'backupImages' => 'wp-short-backup_images',
        'fileCount' => 'wp-short-pixel-fileCount',
        'thumbsCount' => 'wp-short-pixel-thumbnail-count',
        'under5Percent' => 'wp-short-pixel-files-under-5-percent',
        'savedSpace' => 'wp-short-pixel-savedSpace',
        'averageCompression' => 'wp-short-pixel-averageCompression',
        'apiRetries' => 'wp-short-pixel-api-retries',
        'resizeImages' => 'wp-short-pixel-resize-images',
        'resizeWidth' => 'wp-short-pixel-resize-width',
        'resizeHeight' => 'wp-short-pixel-resize-height',
        'totalOptimized' => 'wp-short-pixel-total-optimized',
        'totalOriginal' => 'wp-short-pixel-total-original',
        'quotaExceeded' => 'wp-short-pixel-quota-exceeded',
        'httpProto' => 'wp-short-pixel-protocol',
        'downloadProto' => 'wp-short-pixel-download-protocol',
        'mediaAlert' => 'wp-short-pixel-media-alert',
        '' => '',
    );
    
    public function __construct() {
        $this->populateOptions();
    }    
    
    public function populateOptions() {

        $this->_apiKey = self::getOpt('wp-short-pixel-apiKey', '');
        $this->_verifiedKey = self::getOpt('wp-short-pixel-verifiedKey', $this->_verifiedKey);
        $this->_compressionType = self::getOpt('wp-short-pixel-compression', $this->_compressionType);
        $this->_processThumbnails = self::getOpt('wp-short-process_thumbnails', $this->_processThumbnails);
        $this->_CMYKtoRGBconversion = self::getOpt('wp-short-pixel_cmyk2rgb', $this->_CMYKtoRGBconversion);
        $this->_backupImages = self::getOpt('wp-short-backup_images', $this->_backupImages);
        // the following practically set defaults for options if they're not set
        self::getOpt( 'wp-short-pixel-fileCount', 0);
        self::getOpt( 'wp-short-pixel-thumbnail-count', 0);//amount of optimized thumbnails               
        self::getOpt( 'wp-short-pixel-files-under-5-percent', 0);//amount of optimized thumbnails                       
        self::getOpt( 'wp-short-pixel-savedSpace', 0);
        self::getOpt( 'wp-short-pixel-api-retries', 0);//sometimes we need to retry processing/downloading a file multiple times
        self::getOpt( 'wp-short-pixel-quota-exceeded', 0);
        self::getOpt( 'wp-short-pixel-total-original', 0);//amount of original data
        self::getOpt( 'wp-short-pixel-total-optimized', 0);//amount of optimized
        self::getOpt( 'wp-short-pixel-protocol', 'https');

        $this->_resizeImages =  self::getOpt( 'wp-short-pixel-resize-images', 0);        
        $this->_resizeWidth = self::getOpt( 'wp-short-pixel-resize-width', 0);        
        $this->_resizeHeight = self::getOpt( 'wp-short-pixel-resize-height', 0);                
    }
    
    public static function debugResetOptions() {
        delete_option('wp-short-pixel-apiKey');
        delete_option('wp-short-pixel-verifiedKey');
        delete_option('wp-short-pixel-compression');
        delete_option('wp-short-process_thumbnails');
        delete_option('wp-short-pixel_cmyk2rgb');
        delete_option('wp-short-pixel-keep-exif');
        delete_option('wp-short-backup_images');
        delete_option('wp-short-pixel-view-mode');
        update_option( 'wp-short-pixel-thumbnail-count', 0);
        update_option( 'wp-short-pixel-files-under-5-percent', 0);
        update_option( 'wp-short-pixel-savedSpace', 0);
        delete_option( 'wp-short-pixel-averageCompression');
        delete_option( 'wp-short-pixel-fileCount');
        delete_option( 'wp-short-pixel-total-original');
        delete_option( 'wp-short-pixel-total-optimized');
        update_option( 'wp-short-pixel-api-retries', 0);//sometimes we need to retry processing/downloading a file multiple times
        update_option( 'wp-short-pixel-quota-exceeded', 0);
        delete_option( 'wp-short-pixel-protocol');
        update_option( 'wp-short-pixel-bulk-ever-ran', 0);
        delete_option('wp-short-pixel-priorityQueue');
        delete_option( 'wp-short-pixel-resize-images');        
        delete_option( 'wp-short-pixel-resize-width');        
        delete_option( 'wp-short-pixel-resize-height');
        delete_option( 'wp-short-pixel-dismissed-notices');
        if(isset($_SESSION["wp-short-pixel-priorityQueue"])) {
            unset($_SESSION["wp-short-pixel-priorityQueue"]);
        }
        delete_option("wp-short-pixel-bulk-previous-percent");
    }
    
    public static function onActivate() {
        if(!self::getOpt('wp-short-pixel-verifiedKey', false)) {
            update_option('wp-short-pixel-activation-notice', true);
        }
        update_option( 'wp-short-pixel-activation-date', time());
        delete_option( 'wp-short-pixel-bulk-last-status');
    }
    
    public static function onDeactivate() {
        delete_option('wp-short-pixel-activation-notice');
    }

    
    
    
    
    
    
    public function __get($name)
    {
        if (array_key_exists($name, self::$_optionsMap)) {
            return $this->getOpt(self::$_optionsMap[$name]);
        }
        $trace = debug_backtrace();
        trigger_error(
            'Undefined property via __get(): ' . $name .
            ' in ' . $trace[0]['file'] .
            ' on line ' . $trace[0]['line'],
            E_USER_NOTICE);
        return null;
    }

    public function __set($name, $value) {
        if (array_key_exists($name, self::$_optionsMap)) {
            $this->setOpt(self::$_optionsMap[$name], $value);
        }        
    }

    public static function getOpt($key, $default = null) {
        if(get_option($key) === false) {
            add_option( $key, $default, '', 'yes' );
        }
        return get_option($key);
    }
    
    public function setOpt($key, $val) {
        update_option($key, $val);
    }
}
