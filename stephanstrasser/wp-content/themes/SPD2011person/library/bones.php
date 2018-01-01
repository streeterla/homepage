<?php
/* Welcome to Bones :)
This is meant to be a very helpful development tool.
I hope it makes your life easier! 

Developed by: Eddie Machado
URL: http://themble.com/bones/
*/

// remove some WP defaults
function removeHeadLinks() {
	// remove simple discovery link
	remove_action('wp_head', 'rsd_link');
	// remove windows live writer link
	remove_action('wp_head', 'wlwmanifest_link');
	// remove the version number
	remove_action('wp_head', 'wp_generator');
	// remove header links
}
	add_action('init', 'removeHeadLinks');
	// Add RSS links to <head> section
	add_theme_support('automatic-feed-links');
	
// loading jquery reply elements on single pages automatically
function bones_queue_js(){
  if (!is_admin()){
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1))
      wp_enqueue_script( 'comment-reply' );
  }
}
add_action('wp_print_scripts', 'bones_queue_js');
	
// Adding WP 3.0 Functions
	// menus
	add_theme_support( 'menus' );
	// thumbnails
	add_theme_support('post-thumbnails'); 
	set_post_thumbnail_size(164, 92, true); /* more sizes are available using the functions.php file */
	// custom backgrounds
	// add_custom_background();
	
	// header image define
	$defaults = array(
		'default-image'          => get_stylesheet_directory_uri() . '/library/images/banner.jpg',
		'random-default'         => true,
		'width'                  => 920,
		'height'                 => 200,
		'flex-height'            => true,
		'default-text-color'     => '3c3c3c',
		'wp-head-callback'       => 'header_style',
		'header-text'            => true,
		'uploads'                => true,
	);
	add_theme_support( 'custom-header', $defaults);

	// gets included in the site header
	function header_style() { echo "<style type=\"text/css\"> .site-title,.site-description { "; if(get_header_textcolor()=='blank') { echo 'display: none;'; } else { echo "color:#"; echo header_textcolor(); echo ";";  }; echo "} </style> ";
	}

	// adding post format support
	add_theme_support( 'post-formats', 
		array( 
		'quote',
		)
	);	
	
	add_post_type_support( 'gallery', 
		array(
		'title',
		'editor',
		'author',
		'trackbacks',
		'custom-fields',
		'comments',
		'revisions',
		'page-attributes',
		'post-formats'
		)
	);
	
	

// Creating the Nav Menus
function bones_menus() { 
	if (function_exists( 'register_nav_menus' )) {	
		register_nav_menus(
			array( 
				'footer_links' => 'Footer Links',
				'sitemap' => 'Inhaltsverzeichnis'
			)
		);
	}		
}

add_action( 'init', 'bones_menus' );
 
function bones_footer_links() { 
	// display the wp3 menu if available
    wp_nav_menu(
    	array(
    		'menu' => 'footer_links', /* menu name */
    		'theme_location' => 'footer_links', /* where in the theme it's assigned */
    		'container_class' => 'footer-links', /* container class */
			'menu_class' => 'footer-links', 
    		'fallback_cb' => '', /* menu fallback */
    	)
	);
}

function bones_sitemap() { 
	// display the wp3 menu if available
    wp_nav_menu(
    	array(
    		'menu' => 'sitemap', /* menu name */
    		'theme_location' => 'sitemap', /* where in the theme it's assigned */
    		'container_class' => 'sitemap', /* container class */
			'menu_class' => 'sitemap', 
    		'fallback_cb' => '', /* menu fallback */
    	)
	);
}
 
function bones_main_nav_fallback() { wp_page_menu( 'show_home=Home&menu_class=menu' ); }
	
// Related Posts Function (call using bones_related_posts(); )
function bones_related_posts() {
	echo '<ul id="bones-related-posts">';
        global $post;
        $tags = wp_get_post_tags($post->ID);
        if($tags) {
        	foreach($tags as $tag) { $tag_arr .= $tag->slug . ','; }
            	$args = array(
            	'tag' => $tag_arr,
            	'numberposts' => 5,
            	'post__not_in' => array($post->ID)
           		);
           	$related_posts = get_posts($args);
           		if($related_posts) {
           			foreach ($related_posts as $post) : setup_postdata($post); ?>
           		<li class="related_post"><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></li>
         <?php endforeach; } else { ?>
                <li class="no_related_post">No Related Posts Yet!</li>
         <?php   }
	}
	wp_reset_query();
	echo '</ul>';
}

function wpapi_pagination($pages = '', $range = 5)
{
 $showitems = ($range * 2);

 global $page;
 if(empty($page)) $page = 1;

 if($pages == '')
 {
 global $numpages;
 $pages = $numpages;
 if(!$pages)
 {
 $pages = 1;
 }
 }

 if(1 != $pages)
 {
	 $rangeup = $range;
	 $rangedown = $range;
	 if ($page <= $range) 
	 	$rangeup = $rangeup + ($range - $page) + 1;
		
	 if ($page >= $numpages - $range + 1) 
	 	$rangedown = $rangedown + $range - ( $numpages - $page)-1;
		
 echo "<div class=\"wpapi_pagination\">";
 if($page > 1 && $showitems < $pages) {
	 echo "<div class=\"nav-left\"><a href=\"".get_permalink()."\">&laquo;</a>";
	 echo "<a href='". get_permalink() . "/"; echo $page-1 . "'>&lsaquo;</a></div>";}
 echo "<div class=\"pages\">";
 if ($page > $range+1) echo "<a href='".get_permalink()."'>1</a><span>&#133;</span>";
 for ($i=1; $i <= $pages; $i++)
 {
 if (1 != $pages &&( !($i >= $page+$rangeup || $i <= $page-$rangedown-1) || $pages <= $showitems ))
 {
 echo ($page == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_permalink() . "/" . $i."' class=\"inactive\">".$i."</a>";
 }
 }
 if ($page <= $numpages-$range) {echo "<span>&#133;</span><a href='".get_permalink() . "/"; echo $numpages."'>$numpages</a>";}
echo "</div>";
 if ($page < $numpages && $showitems < $numpages) { 
 echo "<div class=\"nav-right\"><a href=\"".get_permalink() . "/"; echo $page + 1 ."\">&rsaquo;</a>";
 echo "<a href='".get_permalink() . "/"; echo $numpages."'>&raquo;</a></div>";}
 echo "</div>\n";
 }
}


/*
Plugin Name: Custom Write Panel
Plugin URI: http://wefunction.com/2008/10/tutorial-create-custom-write-panels-in-wordpress
Description: Allows custom fields to be added to the WordPress Post Page
Version: 1.0
Author: Spencer
Author URI: http://wefunction.com
/* ----------------------------------------------*/
 
$new_meta_boxes =
array(
"ttcloud" => array(
		"target" => "page",
		"title" => "Topthemen",
		"name" => "ttcloud",
		"input" => array(
				"ttcloud" => array(
						"name" => "ttcloud",
						"type" => "checkbox",
						"std" => "",
						"description" => "Zeigt \"Topthemen\" und \"Alle Themen\" an"))),
"topic" => array(
		"target" => "post",
		"title" => "Thema",
		"name" => "thema",
		"input" => array(
				"topic" => array(
						"type" => "text",
						"name" => "thema",
						"std" => "",
						"description" => "Info-Zeile &uuml;ber dem Titel"))),
"archiv" => array(
		"target" => "page",
		"title" => "Artikelliste",
		"name" => "archiv",
		"input" => array(
				"check_archiv" => array(
						"type" => "checkbox",
						"name" => "check_archiv",
						"std" => "",
						"description" => "Artikelliste aktivieren"),
				"article_num" => array(
						"type" => "text",
						"name" => "article_num",
						"std" => "",
						"description" => "Anzahl der Artikel in der Liste"),
				"category" => array(
						"type" => "text",
						"name" => "category",
						"std" => "",
						"description" => "Kategorie-Slug der zu listenden Artikel")))
);

function new_meta_boxes( $post, $meta_box ) {
global $post;
 
foreach($meta_box['args']['input'] as $meta_box_input) {
$meta_box_value = get_post_meta($post->ID, $meta_box_input['name'], true);
 
if($meta_box_value == "")
$meta_box_value = $meta_box_input['std'];
echo'<p><input type="hidden" name="'.$meta_box_input['name'].'_noncename" id="'.$meta_box_input['name'].'_noncename" value="'.wp_create_nonce( plugin_basename(__FILE__) ).'" />';
if ( $meta_box_input['type'] == 'text') 
echo'<input type="text" name="'.$meta_box_input['name'].'" value="'.$meta_box_value.'" size="45" /><br />';
elseif ( $meta_box_input['type'] == 'checkbox') {
	( $meta_box_value != "" ) ? $checked = 'checked' : $checked = ''; 
	echo'<input type="checkbox" name="'.$meta_box_input['name'].'" value="true" '.$checked.' />&nbsp;';}
echo'<label for="'.$meta_box_input['name'].'">'.$meta_box_input['description'].'</label></p>';
}
}

function create_meta_box() {
global $theme_name, $new_meta_boxes;
foreach($new_meta_boxes as $meta_box) {
if ( function_exists('add_meta_box') ) {
add_meta_box( $meta_box['name'], $meta_box['title'], 'new_meta_boxes', $meta_box['target'], 'side', 'core', $meta_box );
}
}
}

function save_postdata( $post_id ) {
global $post, $new_meta_boxes;
 
foreach($new_meta_boxes as $meta_box) {

if ( isset ($_POST['post_type']) && 'page' == $_POST['post_type'] ) {
if ( !current_user_can( 'edit_page', $post_id ))
return $post_id;
} else {
if ( !current_user_can( 'edit_post', $post_id ))
return $post_id;
}
 
foreach($meta_box['input'] as $meta_box_input) {
if (isset($_POST[$meta_box_input['name'].''])) { 
$data = $_POST[$meta_box_input['name'].''];
 
if(get_post_meta($post_id, $meta_box_input['name'].'') == "" && $data != '')
add_post_meta($post_id, $meta_box_input['name'].'', $data, true);
elseif($data != get_post_meta($post_id, $meta_box_input['name'].'', true))
update_post_meta($post_id, $meta_box_input['name'].'', $data);
elseif($data == "")
delete_post_meta($post_id, $meta_box_input['name'].'', get_post_meta($post_id, $meta_box_input['name'].'', true));
}
}
}
}

add_action('admin_menu', 'create_meta_box');
add_action('save_post', 'save_postdata');

//**************************
// Artikel-Footer-Funktionen
// List Share Links
//
// !!! Mail Funktion integrieren !!!
//**************************

function list_share_links() {
	$url = get_permalink();
	$title = strtr(get_the_title(), " ", "+");
	
	echo '<div><ul class="share-big"><!--<li id="mail"><a href="#">Leider steht diese Funktion noch nicht zur Verf&uuml;gung</a><p class="description">Sie k&ouml;nnen den Artikel per Email an Freunde und Bekannte weiterleiten.</p></li>--><li id="facebook"><a href="http://de.facebook.com/sharer.php?u='.$url.'&t=\''.$title.'\'" target="_blank">Artikel an Ihre Facebook-Kontakte empfehlen</a><p class="description">Wenn Sie ein Profil bei Facebook haben, k&ouml;nnen sie den Artikel auf Ihrem Facebook Profil posten.</p></li><li id="twitter"><a href="http://twitter.com/home?status='.$url.'" target="_blank">Artikel &uuml;ber Twitter empfehlen</a><p class="description">Wenn Sie ein Profil bei Twitter haben, k&ouml;nnen Sie den Artikel &uuml;ber Twitter weiterleiten.</p></li></ul>';	
	echo '<ul class="share-small"><li id="gbookmarks"><a href="http://www.google.com/bookmarks/mark?op=add&bkmk='.$url.'&title=\''.$title.'\'" target="_blank">Google</a></li><li id="studivz"><a href="http://www.studivz.net/Suggest/Selection/?u='.$url.'&desc=\''.$title.'\'" target="_blank">studiVZ</a></li><li id="meinvz"><a href="http://www.meinvz.net/Suggest/Selection/?u='.$url.'&desc=\''.$title.'\'" target="_blank">meinVZ</a></li><li id="misterwong"><a href="http://www.mister-wong.de/index.php?action=addurl&bm_url='.$url.'&bm_description=\''.$title.'\'" target="_blank">Mister Wong</a></li><li id="digg"><a href="http://digg.com/submit?phase=2&url='.$url.'&title=\''.$title.'\'" target="_blank">Digg</a></li><li id="myspace"><a href="http://de.myspace.com/index.cfm?fuseaction=postto&u='.$url.'&t=\''.$title.'\'" target="_blank">MySpace</a></li></ul></div>';
};

//**************************
// List RSS-Feeds
//**************************
function list_rss_feeds() {
	$posttags = get_the_tags();
	
	echo '<ul class="feedlist">';
	if ($posttags) {
		echo '<li><div><h2>Themen</h2>';
  		foreach($posttags as $tag) {
    	echo '<a href="' . get_bloginfo('url') . '/tag/' . $tag->slug . '/feed">' . $tag->name . '</a><br />'; 
  		}
		echo '</div></li>';
	}
	echo '<li><div><h2>Autoren</h2>';
    echo '<a href="' . get_bloginfo('url') . '/author/' . get_the_author_meta('user_nicename') . '/feed">' . get_the_author_meta('display_name') . '</a><br />'; 
	echo '</div></li><li><div><h2>Diskussion</h2>';
    echo '<a href="' . get_permalink() . '/feed">Der Diskussion folgen</a><br />'; 
	echo '</div></li></ul>';

};

//**************************
// Page-Header-Funktionen
// Topthemen und Alle Themen
//**************************
function topthemen_cloud() {
	echo '<div class="tab-wrapper"><ul class="tabs"><li><a href="#tab1">Topthemen</a></li><li><a href="#tab2">Alle Themen</a></li></ul>';
	echo '<div class="tab_container"><div id="tab1" class="tab_content">';
	echo spd_tag_cloud() . get_search_form();
	echo '</div><div id="tab2" class="tab_content">';
	echo all_tags();
	echo'</div></div></div>';
};

//**************************
// Der Loop, mit einem sticky Post
//**************************
function article_list( $article_num = "") { 
is_int($article_num) ? $article_num = "&showposts=$article_num" : $article_num = null; ?>
<?php echo '<div id="articles">'; // Container zur Platzierung des Load-More-Script, nicht loeschen !!! ?> 
<?php $cats = get_post_custom_values('category'); ?>
<?php $sticky = get_option( 'sticky_posts' ); ?>
<?php   $args=array(
    'category_name' => $cats[0],
    'post__in'=>get_option('sticky_posts'),
    'showposts' => 1,
	'ignore_sticky_posts' => 1,
    ); ?>
<?php $top_query = new WP_Query($args); ?>
<?php while($top_query->have_posts() AND get_query_var('paged') <= 1 ) : $top_query->the_post(); 
$post_id = get_the_ID();
$top_ID = get_the_ID();?>
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
						
						<header>
							<?php if ( get_post_meta($post_id, 'thema', true) ) : ?>
					        <div class="meta-topic <?php echo get_post_format( $post_id ) ?>"><?php echo get_post_meta($post_id, 'thema', true) ?></div>
							<?php endif; ?>
							<h1 class="sticky"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
							
						</header> <!-- end article header -->
					
						<section class="post_content clearfix">
                        	<?php if ( has_post_thumbnail()) : ?>
								<a class="max-thumbnail" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" ><?php the_post_thumbnail('max-thumb'); ?></a>
							<?php endif; ?>
							<p class="excerpt">
							<?php if (get_the_excerpt())
									echo get_the_excerpt().' <a class="read-more" href="'.get_permalink().'">weiterlesen&nbsp;...</a>';
                            	  else the_content('weiterlesen&nbsp;...'); ?>
						</p></section> <!-- end article section -->
						
						<footer>
							<?php if (get_the_author_meta('first_name') != '' and get_the_author_meta('last_name') != '')
							$author = "<a class='author' href='".get_author_posts_url(get_the_author_meta( 'ID' ))."'>".get_the_author_meta('first_name')." ".get_the_author_meta('last_name')."</a>&nbsp;&#8226;&nbsp;"; 
							else $author = ''; ?>
							<p class="tags hidden"><?php the_tags('<span class="tags-title">Tags:</span> ', ', ', ''); ?></p>
                            <span class="post-meta"><?php echo $author ?><?php the_time('d. F Y'); ?></span>
                            <?php if ( comments_open() ) : ?>
                            <span class="comment-count"><a class="comment-link" href="<?php comments_link(); ?>"></a> <?php comments_number('0','1','%'); ?></span><?php endif; ?>
                            
							
						</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
<?php endwhile; ?>



<?php query_posts('category_name='.$cats[0].$article_num.'&ignore_sticky_posts=1&paged='.get_query_var('paged')); ?>
<?php while(have_posts()) : the_post();
$post_id = get_the_ID();
$do_not_duplicate = $post_id; 
if ($post_id != $top_ID) :?>
 
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
						
						<header>
							<?php if ( get_post_meta($post_id, 'thema', true) ) : ?>
					        <div class="meta-topic <?php echo get_post_format( $post_id ) ?>"><?php echo get_post_meta($post_id, 'thema', true) ?></div>
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
							$author = "<a class='author' href='".get_author_posts_url(get_the_author_meta( 'ID' ))."'>".get_the_author_meta('first_name')." ".get_the_author_meta('last_name')."</a>&nbsp;&#8226;&nbsp;"; 
							else $author = ''; ?>
							<p class="tags hidden"><?php the_tags('<span class="tags-title">Tags:</span> ', ', ', ''); ?></p>
                            <span class="post-meta"><?php echo $author ?><?php the_time('d. F Y'); ?></span>
                            <?php if ( comments_open() ) : ?>
                            <span class="comment-count"><a class="comment-link" href="<?php comments_link(); ?>"></a> <?php comments_number('0','1','%'); ?></span><?php endif; ?>
                            
							
						</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
<?php endif; endwhile; 
echo '</div>';
}

//**************************
// alte Pagination, wurde durch Load-More-Script ersetzt
//**************************
function pagination() {
	echo '<div class="pagination">';
	if (function_exists('page_navi')) { // if expirimental feature is active ?>
						
						<?php page_navi(); // use the page navi function ?>

					<?php } else { // if it is disabled, display regular wp prev & next links ?>
						<nav class="wp-prev-next">
							<ul class="clearfix">
								<li class="prev-link"><?php next_posts_link(_e('&laquo; Older Entries', "bonestheme")) ?></li>
								<li class="next-link"><?php previous_posts_link(_e('Newer Entries &raquo;', "bonestheme")) ?></li>
							</ul>
						</nav>
					<?php }
	echo '</div>';
}

 /**
  * Load More Script Initialization. 
  */
 function pbd_alp_init() {
 	global $wp_query;
 
 	// Add code to index pages.
 	if( !is_singular() ) {	
 		// Queue JS and CSS
 		wp_enqueue_script(
 			'pbd-alp-load-posts',
 			get_template_directory_uri() . '/library/js/load_more.js',
 			array('jquery'),
 			'1.0',
 			true
 		);
 
// What page are we on? And what is the pages limit?
$max = $wp_query->max_num_pages;
$paged = ( get_query_var('paged') > 1 ) ? get_query_var('paged') : 1;
 
// Add some parameters for the JS.
wp_localize_script(
	'pbd-alp-load-posts',
	'pbd_alp',
	array(
		'startPage' => $paged,
		'maxPages' => $max,
		'nextLink' => next_posts($max, false)
	)
);
 	}
 }
add_action('template_redirect', 'pbd_alp_init');
 
//**************************
// Rollout-Box Shortcode
//**************************
function rollout_shortcode( $atts, $content = null ) {
	extract( shortcode_atts( array(
		'titel' => '&nbsp;',
	), $atts ) );
	$content = do_shortcode( $content );
   return '<div class="rollout_head"><p class="roll"><a href="#">' . esc_attr($titel) . '</a></p><div class="rollout_content">' . $content . '</div></div>';
}
add_shortcode( 'rollout', 'rollout_shortcode' );

// TinyMCE Button Rollout-Box
add_action('init', 'rollout_button');

function rollout_button() {

   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
     return;
   }

   if ( get_user_option('rich_editing') == 'true' ) {
     add_filter( 'mce_external_plugins', 'add_plugin' );
     add_filter( 'mce_buttons', 'register_button' );
   }

}

function register_button( $buttons ) {
 array_push( $buttons, "|", "rollout" );
 return $buttons;
}

function add_plugin( $plugin_array ) {
   $plugin_array['mylink'] = get_template_directory_uri() . '/library/js/buttons.js';
   return $plugin_array;
}

//**************************
// Widgets
//**************************
// Letzte Artikel einer Kategorie
//**************************
class Recent_Posts_Widget extends WP_Widget
{
  function Recent_Posts_Widget()
  {
    $widget_ops = array('classname' => 'Letzte Artikel (SPD)', 'description' => 'Zeigt die letzten vier Artikel der ausgew&auml;hlten Kategorie an.');
    $this->WP_Widget('Recent_Posts_Widget', 'Letzte Artikel (SPD)', $widget_ops);
  }
 
  function form($instance)
  {
    $instance = wp_parse_args((array) $instance, array( 'title' => '', 'category' => '' ));
    $title = $instance['title'];
    $category = $instance['category'];
	$cat_list = get_categories();
?>
  <p><label for="<?php echo $this->get_field_id('title'); ?>">Titel (default: Kategorie-Name): <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></label></p>
  <p><label for="<?php echo $this->get_field_id('category'); ?>">Kategorie (default: alle Kategorien): </label><select id="<?php echo $this->get_field_id('category'); ?>" name="<?php echo $this->get_field_name('category'); ?>">
<option value=""></option>
<?php foreach ($cat_list as $cat) { 
if ($cat->slug == $category) { $selected=' selected="selected "'; }; 
echo '<option value="'.$cat->slug.'" '.( $cat->slug == $category ? 'selected="selected"' : "").'>'.$cat->name.'</option>'; }?></select></p>
<?php
  }
 
  function update($new_instance, $old_instance)
  {
    $instance = $old_instance;
    $instance['title'] = $new_instance['title'];
    $instance['category'] = $new_instance['category'];
    return $instance;
  }
 
  function widget($args, $instance)
  {
    extract($args, EXTR_SKIP);
 
    echo $before_widget;
    $title = empty($instance['title']) ? empty($instance['category']) ? 'Letzte Artikel' : apply_filters('widget_title', $instance['category']) : apply_filters('widget_title', $instance['title']);
	$cats = $instance['category'];
 
    if (!empty($title))
      echo $before_title . $title . $after_title;;
 
    // Do Your Widgety Stuff Here...
echo '<ul class="recent_posts_widget">';
query_posts('category_name='.$cats.'&showposts=4'); ?>
<?php while(have_posts()) : the_post();
$post_id = get_the_ID();?>
					<li>
						
							<?php if ( get_post_meta($post_id, 'thema', true) ) : ?>
					        <div class="meta-topic <?php echo get_post_format( $post_id ) ?>"><?php echo get_post_meta($post_id, 'thema', true) ?></div>
							<?php endif; ?>
							<h2 class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
							<?php if (get_the_author_meta('first_name') != '' and get_the_author_meta('last_name') != '')
							$author = "<a class='author' href='".get_the_author_link()."'>".get_the_author_meta('first_name')." ".get_the_author_meta('last_name')."</a>&nbsp;&#8226;&nbsp;"; 
							else $author = ''; ?>
							<span class="post-meta"><?php echo $author ?><?php the_time('d. F Y'); ?></span>
					</li> <!-- end article -->
<?php endwhile;  echo '</ul>';
    echo $after_widget;
  }
}
add_action( 'widgets_init', create_function('', 'return register_widget("Recent_Posts_Widget");') );

// Faehnchen
//**************************
class Flags_Widget extends WP_Widget
{
  function Flags_Widget()
  {
    $widget_ops = array('classname' => 'flags-widget', 'description' => 'Erzeugt drei F&auml;hnchen als Links rechts neben dem Inhalt.');
    $this->WP_Widget('Flags_Widget', 'F&auml;hnchen (SPD)', $widget_ops);
  }
 
  function form($instance)
  {
    $instance = wp_parse_args((array) $instance, array( 'url1' => '', 'image1' => '', 'url2' => '', 'image2' => '', 'url3' => '', 'image3' => ''));
    $image1 = $instance['image1'];
    $url1 = $instance['url1'];
    $image2 = $instance['image2'];
    $url2 = $instance['url2'];
    $image3 = $instance['image3'];
    $url3 = $instance['url3'];
?>
  <h3>Fahne Nr.1</h3>
  <p><label for="<?php echo $this->get_field_id('url1'); ?>">Link-URL: <input class="widefat" id="<?php echo $this->get_field_id('url1'); ?>" name="<?php echo $this->get_field_name('url1'); ?>" type="text" value="<?php echo esc_attr($url1); ?>" /></label></p>
  <p><label for="<?php echo $this->get_field_id('image1'); ?>">Grafik-URL: <input class="widefat" id="<?php echo $this->get_field_id('image1'); ?>" name="<?php echo $this->get_field_name('image1'); ?>" type="text" value="<?php echo esc_attr($image1); ?>" /></label>
  </p>
  <h3>Fahne Nr.2</h3>
  <p><label for="<?php echo $this->get_field_id('url2'); ?>">Link-URL: <input class="widefat" id="<?php echo $this->get_field_id('url2'); ?>" name="<?php echo $this->get_field_name('url2'); ?>" type="text" value="<?php echo esc_attr($url2); ?>" /></label></p>
  <p><label for="<?php echo $this->get_field_id('image2'); ?>">Grafik-URL: <input class="widefat" id="<?php echo $this->get_field_id('image2'); ?>" name="<?php echo $this->get_field_name('image2'); ?>" type="text" value="<?php echo esc_attr($image2); ?>" /></label>
  </p>
  <h3>Fahne Nr.3</h3>
  <p><label for="<?php echo $this->get_field_id('url3'); ?>">Link-URL: <input class="widefat" id="<?php echo $this->get_field_id('url3'); ?>" name="<?php echo $this->get_field_name('url3'); ?>" type="text" value="<?php echo esc_attr($url3); ?>" /></label></p>
  <p><label for="<?php echo $this->get_field_id('image3'); ?>">Grafik-URL: <input class="widefat" id="<?php echo $this->get_field_id('image3'); ?>" name="<?php echo $this->get_field_name('image3'); ?>" type="text" value="<?php echo esc_attr($image3); ?>" /></label>
  </p>
<?php  
  }
 
  function update($new_instance, $old_instance)
  {
    $instance = $old_instance;
    $instance['url1'] = $new_instance['url1'];
    $instance['url2'] = $new_instance['url2'];
    $instance['url3'] = $new_instance['url3'];
    $instance['image1'] = $new_instance['image1'];
    $instance['image2'] = $new_instance['image2'];
    $instance['image3'] = $new_instance['image3'];
    return $instance;
  }
 
  function widget($args, $instance) {
    extract($args, EXTR_SKIP);
 

    $image1 = $instance['image1'];
    $url1 = $instance['url1'];
    $image2 = $instance['image2'];
    $url2 = $instance['url2'];
    $image3 = $instance['image3'];
    $url3 = $instance['url3'];
	$flags = '<div class="flags-widget">';
 			if (!empty($image1) && !empty($url1)) :
    	    	$flags .= '<p><a href="'. $url1 .'"><img src="'. $image1 .'" width="120" height="90" alt="" /></a></p>';
       		endif; 
 			if (!empty($image2) && !empty($url2)) :
    	    	$flags .= '<p><a href="'. $url2 .'"><img src="'. $image2 .'" width="120" height="90" alt="" /></a></p>';
       		endif; 
 			if (!empty($image3) && !empty($url3)) :
    	    	$flags .= '<p><a href="'. $url3 .'"><img src="'. $image3 .'" width="120" height="90" alt="" /></a></p>';
       		endif; 
	$flags .= '</div>';
	define ('FLAGS', $flags);

   function draw_flag() { 
   	echo FLAGS;};
	add_action('draw_flags', 'draw_flag' );
	}
}
add_action( 'widgets_init', create_function('', 'return register_widget("Flags_Widget");') );

function draw_flags() {
	do_action('draw_flags');
}


?>