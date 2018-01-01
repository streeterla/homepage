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
				
					<?php if (is_category()) { ?>
						<h1 class="archive_title h2">
							<?php single_cat_title(); ?>
						</h1>
					<?php } elseif (is_tag()) { ?> 
						<h1 class="archive_title h2">
							<span><?php _e("Thema:", "bonestheme"); ?></span> <?php single_tag_title(); ?>
						</h1>
					<?php } elseif (is_author()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Beitr&auml;ge von ", "bonestheme"); ?></span> <?php get_the_author_meta('display_name'); ?>
						</h1>
					<?php } elseif (is_day()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Daily Archives:", "bonestheme"); ?></span> <?php the_time('l, F j, Y'); ?>
						</h1>
					<?php } elseif (is_month()) { ?>
					    <h1 class="archive_title h2">
					    	<span><?php _e("Monthly Archives:", "bonestheme"); ?>:</span> <?php the_time('F Y'); ?>
					    </h1>
					<?php } elseif (is_year()) { ?>
					    <h1 class="archive_title h2">
					    	<span><?php _e("Yearly Archives:", "bonestheme"); ?>:</span> <?php the_time('Y'); ?>
					    </h1>
					<?php } ?>

					<div id="articles">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
						
						<header>
							<?php if ( get_post_meta($post->ID, 'thema', true) ) : ?>
					        <div class="meta-topic <?php echo get_post_format( $post_id ) ?>"><?php echo get_post_meta($post->ID, 'thema', true) ?></div>
							<?php endif; ?>
							<h1 class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
							
						</header> <!-- end article header -->
					
						<section class="post_content clearfix">
                        	<?php if ( has_post_thumbnail()) : ?>
   <a class="post-thumbnail" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
   <?php the_post_thumbnail(); ?>
   </a>
 <?php endif; ?>
							<p class="excerpt">
							<?php if (get_the_excerpt())
									echo get_the_excerpt().' <a class="read-more" href="'.get_permalink().'">weiterlesen&nbsp;...</a>';
                            	  else the_content('weiterlesen&nbsp;...'); ?>
						</p></section> <!-- end article section -->
						
						<footer>
							<?php if (get_the_author_meta('first_name') != '' and get_the_author_meta('last_name') != '')
							$author = "<a class='author' href='".get_the_author_link()."'>".get_the_author_meta('first_name')." ".get_the_author_meta('last_name')."</a>&nbsp;&#8226;&nbsp;"; 
							else $author = ''; ?>
							<p class="tags hidden"><?php the_tags('<span class="tags-title">Tags:</span> ', ', ', ''); ?></p>
                            <span class="post-meta"><?php echo $author ?><?php the_time('d. F Y'); ?></span>
                            <?php if ( comments_open() ) : ?>
                            <span class="comment-count"><a class="comment-link" href="<?php comments_link(); ?>"></a> <?php comments_number('0','1','%'); ?></span><?php endif; ?>
                            
							
						</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
					
					<?php endwhile; ?>	
					
					<?php pagination(); ?>								
					
					<?php else : ?>
					
					<article id="post-not-found">
					    <header>
					    	<h1><?php _e("No Posts Yet", "bonestheme"); ?></h1>
					    </header>
					    <section class="post_content">
					    	<p><?php _e("Sorry, What you were looking for is not here.", "bonestheme"); ?></p>
					    </section>
					    <footer>
					    </footer>
					</article>
					
					<?php endif; ?>
					</div>
				</div> <!-- end #main -->
    
				<?php get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->

<?php get_footer(); ?>