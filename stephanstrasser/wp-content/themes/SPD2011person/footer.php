			<footer role="contentinfo">
			
				<div id="inner-footer" class="clearfix">
					<?php $sitemap = has_nav_menu('sitemap');
					if (has_nav_menu('sitemap')) 
                    		echo "<div class='sitemap-title'><a href='".get_bloginfo('url')."'>Inhaltsverzeichnis</a></div>"; ?>
						<?php bones_footer_links(); // Adjust using Menus in Wordpress Admin ?>
						<?php bones_sitemap(); // Adjust using Menus in Wordpress Admin ?>
			
					<!-- <p class="attribution">&copy; <?php bloginfo('name'); ?> <?php _e("is powered by", "bonestheme"); ?> <a href="http://wordpress.org/" title="WordPress">WordPress</a> <span class="amp">&</span> <a rel="nofollow" href="http://www.themble.com/bones" title="Bones" class="footer_bones_link">Bones</a>.</p> -->
				
				</div> <!-- end #inner-footer -->
				
			</footer> <!-- end footer -->
		<?php draw_flags(); ?>

		</div> <!-- end #container -->

		<!-- custom scripts -->
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/scripts.js"></script>
		
		<!--[if (lt IE 9) & (!IEMobile)]>
			<script src="<?php echo get_template_directory_uri(); ?>/library/js/libs/ie/DOMAssistantCompressed-2.8.js"></script>
			<script src="<?php echo get_template_directory_uri(); ?>/library/js/libs/ie/selectivizr-1.0.1.js"></script>
			<script src="<?php echo get_template_directory_uri(); ?>/library/js/libs/respond.min.js"></script>
		<![endif]-->		
		
		<!--[if lt IE 7 ]>
    		<script src="<?php echo get_template_directory_uri(); ?>/library/js/libs/ie/dd_belatedpng.js"></script>
    		<script>DD_belatedPNG.fix("img, .png_bg");</script>
  		<![endif]-->
		
		<?php wp_footer(); // js scripts are inserted using this function ?>
<!-- Insert Analytics -->
		
		<!-- End Analytics -->

	</body>

</html>