<?php
/*
		Plugin Name: jQuery Mega Menu
		Plugin URI: http://www.designchemical.com/blog/index.php/wordpress-plugins/wordpress-plugin-jquery-mega-menu-widget/
		Tags: jquery, dropdown, menu, vertical accordion, animated, css, navigation
		Description: Creates a widget, which allows you to turn any Wordpress custom menu into a drop down mega menu. Includes sample skins.
		Author: Lee Chestnutt
		Version: 1.3.10
		Author URI: http://www.designchemical.com
*/

global $registered_skins;

class dc_jqmegamenu {

	function dc_jqmegamenu(){
	
		global $registered_skins;
	
		if(!is_admin()){
		
			// Scripts & styles
			add_action("wp_enqueue_scripts", array('dc_jqmegamenu', 'add_jqmegamenu_styles'));
			add_action("wp_enqueue_scripts", array('dc_jqmegamenu', 'add_jqmegamenu_scripts'));
		}
		
		$registered_skins = array();
	}

	function add_jqmegamenu_styles() {

		wp_enqueue_style( 'dcjq-mega-menu', dc_jqmegamenu::get_plugin_directory() . '/css/dcjq-mega-menu.css');

	}

	function add_jqmegamenu_scripts() {

		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'dcjqmegamenu', dc_jqmegamenu::get_plugin_directory() . '/js/jquery.dcmegamenu.1.3.4.min.js', array('jquery') );

	}
	
	function options(){}

	function get_plugin_directory(){
		return plugins_url() . '/jquery-mega-menu';	
	}

};

// Include the widget
include_once('dcwp_jquery_mega_menu_widget.php');

// Initialize the plugin.
$dcjqmegamenu = new dc_jqmegamenu();

// Register the widget
add_action('widgets_init', create_function('', 'return register_widget("dc_jqmegamenu_widget");'));

?>