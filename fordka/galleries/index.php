<?php

	/* 
	 * FILEBROWSER UTILITY
	 * (USE AT YOUR OWN RISK)
	 */
	
	//// FILEBROSWER IS ACTIVE? ///
	$filebrowser_active = false;
	
	/* 
	 * THUMBNAIL CREATION SCRIPT
	 * (USE AT YOUR OWN RISK)
	 */
	
	//// THUMBNAIL CREATION IS ACTIVE? ////
	/* set to 'true' to activate thumbnail creation
	 * and add '/galleries/?thumbnails' to the path
	 * to enter create thumbnails mode */
	$thumbnail_creation = true;
	
	
	
	
	#### DO NOT CHANGE BELOW HERE ###################################
	#### UNLESS YOU KNOW WHAT YOU'RE DOING, OF COURSE ###############
	
	
	//// CREATE THUMBNAILS ////
	if ($thumbnail_creation && isset($_GET['thumbnails'])) {
			
		## import init file
		require_once("../libraries/general.bootstrap.php");
		
		$s = $settings;
		
		if (!is_writable('../cache/')) {
			$writable = @chmod('../cache/', 0777);
			if (!$writable) die('<html><head><title>minishowcase | Private Directory</title><style>p{padding:10px;color:#fff;background:#f60;}a{padding:10px;color:#fc0;}a:hover{color:#fff;}</style></head><body><p><a href="javascript:history.go(-1);">&#171; back</a> minishowcase says: <b>/cache/ folder is not writable so thumbnails cannot be created until it is writable</b></p></body></html>');
	}
	
	//// END FILEBROSWER ////
?>