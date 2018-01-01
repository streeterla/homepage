<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">

			<?php while ( have_posts() ) : the_post(); ?>


                                  <div class="entry-content">
			<h2>Event starting from  </h2>	<?php echo  get_post_meta(get_the_ID(),'event_start_date',true ); ?>
                                  <?php echo get_post_meta(get_the_ID(),'event_from_time',true ); ?>
                                  <h2>    to  </h2>
				<?php echo get_post_meta(get_the_ID(),'event_end_date',true ); ?>
                                  <?php echo get_post_meta(get_the_ID(),'event_to_time',true ); ?>
                                      <p>
                                      				<?php echo get_post_meta(get_the_ID(),'event_address',true ); ?></p>
                    </div>
<div class="clear"></div>

				<?php get_template_part( 'content', get_post_format() ); ?>

				<nav class="nav-single">
					<h3 class="assistive-text"><?php _e( 'Post navigation', 'twentytwelve' ); ?></h3>
					<span class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentytwelve' ) . '</span> %title' ); ?></span>
					<span class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentytwelve' ) . '</span>' ); ?></span>
				</nav><!-- .nav-single -->

				<?php comments_template( '', true ); ?>

			<?php endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>