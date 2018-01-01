<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<!--[if ie]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
		
		<title><?php bloginfo('name'); ?><?php wp_title('&nbsp;|&nbsp;',true,''); ?></title>
		<meta name="description" content="">
		<meta name="author" content="">

		<!-- default stylesheet -->
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/default.css">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/changes.css">
		
		<!-- Favicon -->
		<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		
		<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/libs/jquery-1.6.1.min.js"></script>

		
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/modernizr-2.0.min.js"></script>
		
		<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/library/js/jquery.socialshareprivacy.js"></script>
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		
		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
		
		<!-- stylesheet is called after wp_head so you can overwrite plugin styles if needed -->
		<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
		
  		<script type="text/javascript">
    		$(document).ready(function($){
      			if($('#socialshareprivacy').length > 0){
        			$('#socialshareprivacy').socialSharePrivacy({
                    		  services : {
									facebook : {
  									    'dummy_img': '<?php echo get_template_directory_uri(); ?>/library/images/socialshareprivacy/dummy_facebook.png'
									}, 
									twitter : {
  									    'dummy_img': '<?php echo get_template_directory_uri(); ?>/library/images/socialshareprivacy/dummy_twitter.png'
									},
									gplus : {
  									    'dummy_img': '<?php echo get_template_directory_uri(); ?>/library/images/socialshareprivacy/dummy_gplus.png'
									}
									},
  						'css_path' : '<?php echo get_template_directory_uri(); ?>/library/css/socialshareprivacy.css'}); 
      			}
    		});
  		</script>
	</head>

	<body <?php body_class(); ?>>
	
		<div id="container">
        
			
			
				<div class="header">
					<p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow"><img src="<?php bloginfo('stylesheet_directory'); ?>/library/images/logo.png" alt="Logo"></a></p>
					<p id="title" class="h1"><?php bloginfo('name'); ?></p>
					<p id="description" class="h1"><?php bloginfo('description'); ?></p>
					
					
				</div> <!-- end .header -->
