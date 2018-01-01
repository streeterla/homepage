<?php
/**
 * Plugin Name: Events Calendar
 * Plugin URI: http://example.com/widget
 * Description: A widget that serves as an example for developing more advanced widgets.
 * Version: 2.0
 * Author: dianuj
 * Author URI: http://stackoverflow.com/users/853360/dianuj
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
//die('Callfffsdfsd');

define('EVENTS_ASSETS_URL', plugin_dir_url(__FILE__) . 'assets/');
define('EVENTS_VERSION', '2.0');
// custom post type for Events calendar module

$analytics="<script type='text/javascript'>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-46181601-1', 'wordpress.org');
      ga('send', 'pageview');
      </script>";
add_action('init', 'Events_register');
add_action('init', 'Events_categories');
add_action("admin_init", "Events_customfields");
add_action('save_post', 'save_event_details');
include_once(dirname(__FILE__).'/events-shortcode.php');
include_once(dirname(__FILE__).'/events-widgets.php');
include_once(dirname(__FILE__).'/events-slider-widget.php');
function Events_register() {

	$labels = array(
		'name' => _x('Events', 'post type general name','default'),
		'singular_name' => _x('Events', 'post type singular name','default'),
		'add_new' => _x('Add New', 'Event','default'),
		'add_new_item' => __('Add New Event','default'),
		'edit_item' => __('Edit Event','default'),
		'new_item' => __('New Events','default'),
		'view_item' => __('View Events','default'),
		'search_items' => __('Search Events','default'),
		'not_found' =>  __('Nothing found','default'),
		'not_found_in_trash' => __('Nothing found in Trash','default'),
		'parent_item_colon' => ''
	);
    $post_supports = array('title','editor','comments','thumbnail');
	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'menu_icon' => get_stylesheet_directory_uri() . '/images/slider.png',
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => $post_supports,


	  );

	register_post_type( 'events' , $args );
}
function Events_categories(){
$labels = array(
    'name' => _x( 'Events Categories', 'taxonomy general name' ),
    'singular_name' => _x( 'Events Category', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Events Categories' ),
    'all_items' => __( 'All Events Categories' ),
    'parent_item' => __( 'Parent Category' ),
    'parent_item_colon' => __( 'Parent Category:' ),
    'edit_item' => __( 'Edit Events Category' ),
    'update_item' => __( 'Update Events Category' ),
    'add_new_item' => __( 'Add Events Category' ),
    'new_item_name' => __( 'New Events Category' ),
    'menu_name' => __( 'Events Categories' )
  );

register_taxonomy('events_categories',array('events'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'query_var' => true,
    'show_ui' => true
 ));

}
function Events_customfields(){
  add_meta_box("Set_event_details", __("Events Field"), "Set_event_details", "events", "normal", "low");
}
function Set_event_details() {
  global $post;
  global $analytics;
  $custom = get_post_custom($post->ID);
  $event_start_date = $custom["event_start_date"][0];
  $event_end_date = $custom["event_end_date"][0];
  $event_from_time = $custom["event_from_time"][0];
  $event_to_time = $custom["event_to_time"][0];
  $event_address = $custom["event_address"][0];
  ?>



      <div style="float: left">
      <label><?php echo __('Event Start Date');?>:</label><br />
  <input type="text" class="datepicker" id="from_datepicker" name="event_start_date" value="<?php echo $event_start_date; ?>" /></div>
   <div>
      <label><?php echo __('Event End Date');?>:</label><br />
        <input type="text" class="datepicker" name="event_end_date" value="<?php echo $event_end_date; ?>" /></div>



    <div style="float: left">
    <label><?php echo __('Event From Time');?>:</label><br />
  <input type="text" name="event_from_time" id="from_timepicker" class="timepicker" value="<?php echo $event_from_time; ?>" />
        </div>

    <div>
    <label><?php echo __('');?>Event To Time:</label><br />
  <input type="text" class="timepicker" name="event_to_time" value="<?php echo $event_to_time; ?>" />

    </div>

<p><label><?php echo __('');?>Event Address:</label><br />
    <textarea  name="event_address" id="" cols="30" rows="10"><?php echo $event_address; ?></textarea>

    <?php

    wp_enqueue_script('jquery-ui-datepicker');
    wp_enqueue_style('events-global',EVENTS_ASSETS_URL.'css/events-ui.css', array(),EVENTS_VERSION);
    wp_enqueue_script('events-global-1',EVENTS_ASSETS_URL.'js/events-ui-timepicker-addon.js', array(),EVENTS_VERSION);
    wp_enqueue_script('events-global-2',EVENTS_ASSETS_URL.'js/events-ui-sliderAccess.js', array(),EVENTS_VERSION);
    echo $analytics;
    ?>

<script type="text/javascript">
    jQuery(function() {
        jQuery( ".datepicker" ).datepicker({ dateFormat: "MM dd, yy" });
        jQuery('.timepicker').timepicker({timeFormat: "hh:mm tt"});

    });
</script>
  <?php

}
function save_event_details(){
  global $post;

  update_post_meta($post->ID, "event_start_date", $_POST["event_start_date"]);
  update_post_meta($post->ID, "event_end_date", $_POST["event_end_date"]);
  update_post_meta($post->ID, "event_from_time", $_POST["event_from_time"]);
  update_post_meta($post->ID, "event_to_time", $_POST["event_to_time"]);
  update_post_meta($post->ID, "event_address", $_POST["event_address"]);

}



?>