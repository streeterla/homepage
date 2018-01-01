<?php get_header(); ?>
<div id="content" class="clearfix">
<?php if ( get_post_meta($post->ID, 'ttcloud', true) ) { topthemen_cloud(); 
} elseif ( has_post_thumbnail()) { ?>
<div class="page-banner">
		<?php the_post_thumbnail('page-banner'); ?>
</div>
<?php } else { ?>
<?php $header_image = get_header_image(); ?>
<div id="banner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><hgroup style="display: block; background:url(<?php if ( ! empty( $header_image ) ) : echo esc_url( $header_image ); endif; ?>) no-repeat; width:<?php echo get_custom_header()->width; ?>px; height:<?php echo get_custom_header()->height; ?>px; ">
			<h1 class="site-title"><?php bloginfo( 'name', 'display' ); ?></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</hgroup></a>
		</div>
<?php }; ?>
   <div id="main" class="col620 clearfix" role="main">
      <h1 class="archive_title h2">
         <?php the_title(); ?>
						</h1>

   <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<?php if (get_the_content() != "") : ?>
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
						
						<header>
							<?php if ( get_post_meta($post->ID, 'thema', true) ) : ?>
					        <div class="meta-topic <?php echo get_post_format( $post_id ) ?>"><?php echo get_post_meta($post->ID, 'thema', true) ?></div>
							<?php endif; ?>
							<?php if (get_the_author_meta('first_name') != '' and get_the_author_meta('last_name') != '')
							$author = "<a class='author' href='".get_the_author_meta('user_url')."'>".get_the_author_meta('first_name')." ".get_the_author_meta('last_name')."</a>&nbsp;&#8226;&nbsp;"; 
							else $author = ''; ?>
							<p class="tags hidden"><?php the_tags('<span class="tags-title">Tags:</span> ', ', ', ''); ?></p>
                            <span class="post-meta hidden"><?php echo $author ?><?php the_time('d. F Y'); ?></span>
                         </header>
					
						<section class="post_content clearfix">
                            <?php wp_link_pages(); ?>

							<?php the_content(); ?>
							
					
						</section> <!-- end article section -->
						
						<footer>
<?php if ( comments_open() ) : ?><div class="post-footer-tabs">
<ul class="tabs">
    <li><a href="#discuss" id="tab_discuss">Diskutieren</a></li>
</ul>

<div class="tab_container">
<?php if ( comments_open() ) : ?>
    <div id="discuss" class="tab_content">

<section id="respond">

	<?php if ( get_option('comment_registration') && !is_user_logged_in() ) : ?>
  	<div>
  		<p class="comments-logged-in-as">Sie m&uuml;ssen ein SPD.de Benutzerkonto haben, um eigene Kommentare zum Beitrag zu verfassen.</p><br />
        <p class="comments-logged-in-as"><a href="<?php echo wp_login_url( get_permalink() ); ?>">einloggen</a></p>
  	</div>
	<?php else : ?>

	<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

	<?php if ( is_user_logged_in() ) : ?>

	<p class="comments-logged-in-as"><?php echo get_avatar($user_ID, 70) ?> von <?php echo $user_identity; ?> | <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Log out of this account">Profil wechseln</a></p>

	<p id="cancel-comment-reply">
    	<p id="comment-form-elements"><?php comment_text_to_reply(); ?></p>
		<p class="small"><?php cancel_comment_reply_link(); ?></p><br />
	</p>

	<?php else : ?>
	
	<p id="cancel-comment-reply">
    	<p id="comment-form-elements"><?php comment_text_to_reply(); ?></p>
		<p class="small"><?php cancel_comment_reply_link(); ?></p>
	</p>

	<ul id="comment-form-elements" class="clearfix">
		
		<li>
		  <label for="author">Name <?php if ($req) echo "(required)"; ?></label>
		  <input type="text" name="author" id="author" value="<?php if (isset($comment_author)){echo esc_attr($comment_author);}; ?>" placeholder="Dein Name" tabindex="1" />
		</li>
		
		<li>
		  <label for="email">Mail <?php if ($req) echo "(required)"; ?></label>
		  <input type="email" name="email" id="email" value="<?php if (isset($comment_author_email)){echo esc_attr($comment_author_email);}; ?>" placeholder="Deine Email" tabindex="2" />
		  <small>(will not be published)</small>
		</li>
		
		<li>
		  <label for="url">Website</label>
		  <input type="url" name="url" id="url" value="<?php if (isset($comment_author_url)){echo esc_attr($comment_author_url);}; ?>" placeholder="Deine Website" tabindex="3" />
		</li>
		
	</ul>

	<?php endif; ?>
	
	<p><textarea name="comment" id="comment" placeholder="Dein Kommentar..." tabindex="4"></textarea></p>
	
	<p>
	  <input name="submit" type="submit" id="submit" class="submit fancy" tabindex="5" value="Kommentar abschicken" />
	  <?php comment_id_fields(); ?>
	</p>
		
	<?php do_action('comment_form', $post->ID); ?>
	
	</form>
	
	<?php endif; // If registration required and not logged in ?>
</section>

    </div>
<?php endif; // if you delete this the sky will fall on your head ?>
</div>
</div><?php endif; ?>
					</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
					
					<?php //comments_template(); ?>
					
					<?php endif; ?>
					<?php endwhile; ?>			
					
					<?php else : ?>
					
					<article id="post-not-found">
					    <header>
					    	<h1>Not Found</h1>
					    </header>
					    <section class="post_content">
					    	<p>Sorry, but the requested resource was not found on this site.</p>
					    </section>
					    <footer>
					    </footer>
					</article>
					
					<?php endif; ?>
<?php if ( get_post_meta($post->ID, 'check_archiv', true) ) :   ?>

<?php article_list( (int)get_post_meta($post->ID, 'article_num', true) ); ?>
					
										
				</div> <!-- end #main -->

          <?php   else : ?>
				</div> <!-- end #main -->

          <?php   endif;?>
				<?php get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->

<?php get_footer(); ?>