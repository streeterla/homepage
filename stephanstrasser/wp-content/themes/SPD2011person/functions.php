<?php
/*

Author: Eddie Machado
URL: htp://themble.com/bones/

This is the Bones Core file. It powers everything.
YOU DON'T WANT TO MESS W/ THIS FILE UNLESS YOU KNOW WHAT YOU'RE DOING.
At most, the only thing you should edit is adding or removing the
expirimental features.
*/
// Get Bones Core Up & Running!
include_once('library/bones.php');
include_once('library/update.php');
/*
Inside the bones.php file:

	1. removing some wp calls in the header
		a. rsd_link (simple discovery link)
		b. wlwmanifest_link (windows live writer link)
		c. wp_generator (version number)
	2. adding comment reply script via wp
	3. adding custom scripts file in the footer
	4. PNG fix for IE
	5. adding wp 3.0 functions
		a. menus
		b. thumbnails
		c. custom bg images
		d. custom header images
	6. relates posts scripts (optional)

To Use Expirimental Features keep the line below enabled

(DISABLE IF YOU DON'T WANT IT OR ENCOUNTER ANY ERRORS)

To disable, simply add two slashes before it (//). 
When disabled, it would look like this:

// include_once('library/plugins.php');

*/

// Expirimental Features
include_once('library/plugins.php');

// Adding Custom Post Type
// include_once('library/custom-post-type.php');

// Adding Translation
load_theme_textdomain( 'bonestheme', TEMPLATEPATH.'/languages' );
 
$locale = get_locale();
$locale_file = TEMPLATEPATH."/languages/$locale.php";
if ( is_readable($locale_file) )
    require_once($locale_file);

/* BONES FUNCTIONS (DO NOT EDIT) */

// Thumbnail sizes
add_image_size( 'max-thumb', 542, 305, true );
add_image_size( 'sidebar-thumb', 353, 199, true );
add_image_size( 'page-banner', 920, 216, true);

/* 
to add more sizes, simply copy a line from above 
and change the dimensions & name. As long as you
upload a "featured image" as large as the biggest
set width or height, all the other sizes will be
autocropped.

To call a different size, simply change the text
inside the thumbnail function.

For example, to call the 300 x 300 sized image, 
we would use the function:
<?php the_post_thumbnail( 'bones-thumb-300' ); ?>
for the 600 x 100 image:
<?php the_post_thumbnail( 'bones-thumb-600' ); ?>

You can change the names and dimensions to whatever
you like. Enjoy!
*/

// Sidebars & Widgetizes Areas
function bones_register_sidebars() {
    register_sidebar(array(
    	'id' => 'sidebar1',
    	'name' => 'Sidebar 1',
    	'description' => 'The first (primary) sidebar.',
    	'left_sidebar' => 'linke sidebar',
    	'before_widget' => '<div id="%1$s" class="widget %2$s">',
    	'after_widget' => '</div>',
    	'before_title' => '<h4 class="widgettitle">',
    	'after_title' => '</h4>',
    ));
    
    /* 
    to add more sidebars or widgetized areas, just copy
    and edit the above sidebar code. In order to call 
    your new sidebar just use the following code:
    
    Just change the name to whatever your new
    sidebar's id is.
    */
}

// adding sidebars to Wordpress
add_action( 'widgets_init', 'bones_register_sidebars' );
		
// Comment Layout
function spd_comments($comment, $args, $depth) {
   $GLOBALS['comment'] = $comment; ?>
   <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
     <div id="comment-<?php comment_ID(); ?>">
         <p class="comment-avatar"><?php echo get_avatar( $comment->comment_author_email, $args['avatar_size'] ); ?></p>

         <p class="comment-meta"><?php printf(__('<cite class="fn">%s&nbsp;&#8226;</cite>'), get_comment_author_link()) ?>
      <?php if ($comment->comment_approved == '0') : ?>
         <em><?php _e('Your comment is awaiting moderation.') ?></em>
         <br />
      <?php endif; ?>

      <?php printf(__('%1$s&nbsp;&#8226;&nbsp;%2$s'), get_comment_date('d. F Y'),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','') ?></p>

      <div class="comment-content"><div class="comment-text"><?php comment_text() ?></div></div>

      <div class="reply">
         <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth'], 'add_below' => null))) ?>
      </div>
     </div>
    <!-- </li> is added by wordpress automatically -->
<?php
        }
		
// Returns the comment text to reply to
function comment_text_to_reply() {
	if (isset($_GET['replytocom'])) {
		echo "<p style='font-size: 11px; font-style: italic;'>Auf diesen Kommentar antworten</p><p class='comment-to-reply'>".get_comment_text($_GET['replytocom'])."</p>";
	}
};

// Add a default avatar to Settings > Discussion
if ( !function_exists('fb_addgravatar') ) {
	function fb_addgravatar( $avatar_defaults ) {
		$myavatar = get_bloginfo('template_directory') . '/library/images/avatar.gif';
		$avatar_defaults[$myavatar] = 'Der graue Typ vor der blassen Wand';

		return $avatar_defaults;
	}

	add_filter( 'avatar_defaults', 'fb_addgravatar' );
} 
?>
<?php
function spd_generate_tag_cloud( $tags, $args = '' ) {
	global $wp_rewrite;
	$defaults = array(
		'smallest' => 8, 'largest' => 22, 'unit' => 'pt', 'number' => 0,
		'format' => 'flat', 'separator' => "\n", 'orderby' => 'name', 'order' => 'ASC',
		'topic_count_text_callback' => 'default_topic_count_text',
		'topic_count_scale_callback' => 'default_topic_count_scale', 'filter' => 1,
	);

	if ( !isset( $args['topic_count_text_callback'] ) && isset( $args['single_text'] ) && isset( $args['multiple_text'] ) ) {
		$body = 'return sprintf (
			_n(' . var_export($args['single_text'], true) . ', ' . var_export($args['multiple_text'], true) . ', $count),
			number_format_i18n( $count ));';
		$args['topic_count_text_callback'] = create_function('$count', $body);
	}

	$args = wp_parse_args( $args, $defaults );
	extract( $args );

	if ( empty( $tags ) )
		return;

	$tags_sorted = apply_filters( 'tag_cloud_sort', $tags, $args );
	if ( $tags_sorted != $tags  ) { // the tags have been sorted by a plugin
		$tags = $tags_sorted;
		unset($tags_sorted);
	} else {
		if ( 'RAND' == $order ) {
			shuffle($tags);
		} else {
			// SQL cannot save you; this is a second (potentially different) sort on a subset of data.
			if ( 'name' == $orderby )
				uasort( $tags, create_function('$a, $b', 'return strnatcasecmp($a->name, $b->name);') );
			else
				uasort( $tags, create_function('$a, $b', 'return ($a->count > $b->count);') );

			if ( 'DESC' == $order )
				$tags = array_reverse( $tags, true );
		}
	}

	if ( $number > 0 )
		$tags = array_slice($tags, 0, $number);

	$counts = array();
	$real_counts = array(); // For the alt tag
	foreach ( (array) $tags as $key => $tag ) {
		$real_counts[ $key ] = $tag->count;
		$counts[ $key ] = $topic_count_scale_callback($tag->count);
	}

	$min_count = min( $counts );
	$max_count = max( $counts );
	$spread = max( $counts ) - $min_count;
	if ( $spread <= 0 )
		$spread = 1;
	$font_spread = $largest - $smallest;
	if ( $font_spread < 0 )
		$font_spread = 1;
	$font_step = $font_spread / $spread;
	$low_prio = ($spread / 3) + $min_count;
	$high_prio = $low_prio + $min_count;

	$a = array();

	foreach ( $tags as $key => $tag ) {
		$count = $counts[ $key ];
		$real_count = $real_counts[ $key ];
		$tag_link = '#' != $tag->link ? esc_url( $tag->link ) : '#';
		$tag_id = isset($tags[ $key ]->id) ? $tags[ $key ]->id : $key;
		$tag_name = $tags[ $key ]->name;
		if ( $count < $low_prio )
		$prio = 3;
		elseif ( $count > $high_prio )
		$prio = 1;
		else
		$prio = 2;
		$a[] = "<li class='cloud-item prio-".$prio." item-". ($key + 1) ."'><a href='$tag_link' title='" . esc_attr( call_user_func( $topic_count_text_callback, $real_count ) ) . "'>$tag_name</a></li>";
	}

	switch ( $format ) :
	case 'array' :
		$return =& $a;
		break;
	case 'list' :
		$return = "<ul id='topthemen-cloud'>\n\t";
		$return .= join( "\n\t", $a );
		$return .= "</ul>\n";
		break;
	default :
		$return = join( $separator, $a );
		break;
	endswitch;

	if ( $filter )
		return apply_filters( 'spd_generate_tag_cloud', $return, $tags, $args );
	else
		return $return;
}

function spd_tag_cloud( $args = '' ) {
	$defaults = array(
		'smallest' => 8, 'largest' => 8, 'unit' => 'pt', 'number' => 6,
		'format' => 'list', 'separator' => "\n", 'orderby' => 'count', 'order' => 'DESC',
		'exclude' => '', 'include' => '', 'link' => 'view', 'taxonomy' => 'post_tag', 'echo' => true
	);
	$args = wp_parse_args( $args, $defaults );

	$tags = get_terms( $args['taxonomy'], array_merge( $args, array( 'orderby' => 'count', 'order' => 'DESC' ) ) ); // Always query top tags

	if ( empty( $tags ) || is_wp_error( $tags ) )
		return;

	foreach ( $tags as $key => $tag ) {
		if ( 'edit' == $args['link'] )
			$link = get_edit_tag_link( $tag->term_id, $tag->taxonomy );
		else
			$link = get_term_link( intval($tag->term_id), $tag->taxonomy );
		if ( is_wp_error( $link ) )
			return false;

		$tags[ $key ]->link = $link;
		$tags[ $key ]->id = $tag->term_id;
	}

	$return = spd_generate_tag_cloud( $tags, $args ); // Here's where those top tags get sorted according to $args

	$return = apply_filters( 'spd_tag_cloud', $return, $args );

	if ( 'array' == $args['format'] || empty($args['echo']) )
		return $return;

	echo $return;
}
//add_filter('wp_tag_cloud', 'spd_tag_cloud');
?>
<?php
function my_search_form( $form ) {
	if (get_search_query() == '')
		$searchterm = "Thema suchen";
	else
		$searchterm = get_search_query();

    $form = '<div id="search"><form role="search" method="get" id="searchform" action="' . home_url( '/' ) . '" >
    <input type="text" value="' . $searchterm . '" name="s" id="searchterm" />
    <input type="submit" id="searchsubmit" value="'. esc_attr__('Search') .'" />
    </form></div>';

    return $form;
}

add_filter( 'get_search_form', 'my_search_form' );
?>
<?php
function all_tags() {
	$i=1;
	$tags = wp_tag_cloud( 'smallest=8&largest=8&format=array&number=15' );
	if (!empty($tags)) :
	$html = '<ul class="all-topics"><li class="col-'.ceil($i/3).'"><ul>';
	foreach ($tags as $tag){
		if ($i==4||$i==7||$i==10||$i==13)
			{$html.='</ul></li><li class="col-'.ceil($i/3).'"><ul><li>'.$tag.'</li>';}
		else
			{$html.='<li>'.$tag.'</li>';}
		$i++;}
	echo $html.'</ul></li></ul>';
	endif;	
}
// show post thumbnails in feeds
function diw_post_thumbnail_feeds($content) {
	global $post;
	if(has_post_thumbnail($post->ID)) {
		$content = '<div>' . get_the_post_thumbnail($post->ID) . '</div>' . $content;
	}
	return $content;
}
add_filter('the_excerpt_rss', 'diw_post_thumbnail_feeds');
add_filter('the_content_feed', 'diw_post_thumbnail_feeds');
?>