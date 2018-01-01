<?php get_header(); ?>
			
			<div id="content" class="clearfix">
<?php $header_image = get_header_image(); ?>
<div id="banner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><hgroup style="display: block; background:url(<?php if ( ! empty( $header_image ) ) : echo esc_url( $header_image ); endif; ?>) no-repeat; width:<?php echo get_custom_header()->width; ?>px; height:<?php echo get_custom_header()->height; ?>px; ">
			<h1 class="site-title"><?php bloginfo( 'name', 'display' ); ?></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</hgroup></a>
		</div>
			
				<div id="main" class="col620 clearfix" role="main">
      <h1 class="archive_title h2">
         Aktuelles
						</h1>

<?php article_list(); ?>
					
<?php pagination(); ?>			

            
				</div> <!-- end #main -->
    
				<?php get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->

<?php get_footer(); ?>