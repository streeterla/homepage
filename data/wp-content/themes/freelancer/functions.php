<?php
/*

 It's not recommended to add functions to this file, as it will be lost if you ever update this child theme.
 Instead, consider adding your function into a plugin using Pluginception: https://wordpress.org/plugins/pluginception/
 
 */

add_action( 'admin_notices', 'freelancer_reset_customizer_settings' );
function freelancer_reset_customizer_settings() {
	global $pagenow;
	$generate_settings = get_option('generate_settings');
	
	if ( empty($generate_settings) )
		return;
		
	if ( is_admin() && $pagenow == "themes.php" && isset( $_GET['activated'] ) ) {
		?>
		<div class="updated settings-error notice is-dismissible">
			<p>
				<?php printf( __( '<strong>Almost done!</strong> Previous GeneratePress options detected in your database. Please <a href="%s">click here</a> to delete your current options for Freelancer to take full effect.','freelancer' ), admin_url('themes.php?page=generate-options#gen-delete') ); ?>
			</p>
		</div>
		<?php
	}
}

if ( !function_exists( 'freelancer_defaults' ) ) :
add_filter( 'generate_option_defaults','freelancer_defaults' );
function freelancer_defaults( $freelancer_defaults )
{
	$freelancer_defaults[ 'hide_title' ] = '';
	$freelancer_defaults[ 'hide_tagline' ] = '';
	$freelancer_defaults[ 'logo' ] = '';
	$freelancer_defaults[ 'container_width' ] = '1150';
	$freelancer_defaults[ 'header_layout_setting' ] = 'contained-header';
	$freelancer_defaults[ 'center_header' ] = 'true';
	$freelancer_defaults[ 'center_nav' ] = 'true';
	$freelancer_defaults[ 'nav_alignment_setting' ] = 'center';
	$freelancer_defaults[ 'header_alignment_setting' ] = 'center';
	$freelancer_defaults[ 'nav_layout_setting' ] = 'contained-nav';
	$freelancer_defaults[ 'nav_position_setting' ] = 'nav-below-header';
	$freelancer_defaults[ 'nav_search' ] = 'enable';
	$freelancer_defaults[ 'nav_dropdown_type' ] = 'hover';
	$freelancer_defaults[ 'content_layout_setting' ] = 'one-container';
	$freelancer_defaults[ 'layout_setting' ] = 'right-sidebar';
	$freelancer_defaults[ 'blog_layout_setting' ] = 'right-sidebar';
	$freelancer_defaults[ 'single_layout_setting' ] = 'right-sidebar';
	$freelancer_defaults[ 'post_content' ] = 'full';
	$freelancer_defaults[ 'footer_layout_setting' ] = 'contained-footer';
	$freelancer_defaults[ 'footer_widget_setting' ] = '3';
	$freelancer_defaults[ 'back_to_top' ] = '';
	$freelancer_defaults[ 'background_color' ] = '#3d3d3d';
	$freelancer_defaults[ 'text_color' ] = '#3a3a3a';
	$freelancer_defaults[ 'link_color' ] = '#847b46';
	$freelancer_defaults[ 'link_color_hover' ] = '#636363';
	$freelancer_defaults[ 'link_color_visited' ] = '';
	
	return $freelancer_defaults;
}
endif;

/**
 * Set default options
 */
if ( !function_exists( 'freelancer_get_color_defaults' ) ) :
add_filter( 'generate_color_option_defaults','freelancer_get_color_defaults' );
function freelancer_get_color_defaults( $freelancer_color_defaults )
{	
	$freelancer_color_defaults[ 'header_background_color' ] = '';
	$freelancer_color_defaults[ 'header_text_color' ] = '#3a3a3a';
	$freelancer_color_defaults[ 'header_link_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'header_link_hover_color' ] = '#efefef';
	$freelancer_color_defaults[ 'site_title_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'site_tagline_color' ] = '#cccccc';
	$freelancer_color_defaults[ 'navigation_background_color' ] = '#000000';
	$freelancer_color_defaults[ 'navigation_text_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'navigation_background_hover_color' ] = '#847f67';
	$freelancer_color_defaults[ 'navigation_text_hover_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'navigation_background_current_color' ] = '#847f67';
	$freelancer_color_defaults[ 'navigation_text_current_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'subnavigation_background_color' ] = '#847f67';
	$freelancer_color_defaults[ 'subnavigation_text_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'subnavigation_background_hover_color' ] = '#847f67';
	$freelancer_color_defaults[ 'subnavigation_text_hover_color' ] = '#212121';
	$freelancer_color_defaults[ 'subnavigation_background_current_color' ] = '#847f67';
	$freelancer_color_defaults[ 'subnavigation_text_current_color' ] = '#212121';
	$freelancer_color_defaults[ 'content_background_color' ] = '#FFFFFF';
	$freelancer_color_defaults[ 'content_text_color' ] = '#3a3a3a';
	$freelancer_color_defaults[ 'content_link_color' ] = '';
	$freelancer_color_defaults[ 'content_link_hover_color' ] = '';
	$freelancer_color_defaults[ 'content_title_color' ] = '';
	$freelancer_color_defaults[ 'blog_post_title_color' ] = '';
	$freelancer_color_defaults[ 'blog_post_title_hover_color' ] = '';
	$freelancer_color_defaults[ 'entry_meta_text_color' ] = '#888888';
	$freelancer_color_defaults[ 'entry_meta_link_color' ] = '#666666';
	$freelancer_color_defaults[ 'entry_meta_link_color_hover' ] = '#847f67';
	$freelancer_color_defaults[ 'h1_color' ] = '';
	$freelancer_color_defaults[ 'h2_color' ] = '';
	$freelancer_color_defaults[ 'h3_color' ] = '';
	$freelancer_color_defaults[ 'sidebar_widget_background_color' ] = '#FFFFFF';
	$freelancer_color_defaults[ 'sidebar_widget_text_color' ] = '#3a3a3a';
	$freelancer_color_defaults[ 'sidebar_widget_link_color' ] = '';
	$freelancer_color_defaults[ 'sidebar_widget_link_hover_color' ] = '';
	$freelancer_color_defaults[ 'sidebar_widget_title_color' ] = '#000000';
	$freelancer_color_defaults[ 'footer_widget_background_color' ] = '#222222';
	$freelancer_color_defaults[ 'footer_widget_text_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'footer_widget_link_color' ] = '#847f67';
	$freelancer_color_defaults[ 'footer_widget_link_hover_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'footer_widget_title_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'footer_background_color' ] = '#000000';
	$freelancer_color_defaults[ 'footer_text_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'footer_link_color' ] = '#847f67';
	$freelancer_color_defaults[ 'footer_link_hover_color' ] = '#ffffff';
	$freelancer_color_defaults[ 'form_background_color' ] = '#FAFAFA';
	$freelancer_color_defaults[ 'form_text_color' ] = '#666666';
	$freelancer_color_defaults[ 'form_background_color_focus' ] = '#FFFFFF';
	$freelancer_color_defaults[ 'form_text_color_focus' ] = '#666666';
	$freelancer_color_defaults[ 'form_border_color' ] = '#CCCCCC';
	$freelancer_color_defaults[ 'form_border_color_focus' ] = '#BFBFBF';
	$freelancer_color_defaults[ 'form_button_background_color' ] = '#666666';
	$freelancer_color_defaults[ 'form_button_background_color_hover' ] = '#847f67';
	$freelancer_color_defaults[ 'form_button_text_color' ] = '#FFFFFF';
	$freelancer_color_defaults[ 'form_button_text_color_hover' ] = '#FFFFFF';
	
	return $freelancer_color_defaults;
}
endif;

/**
 * Set default options
 */
if ( !function_exists('freelancer_get_default_fonts') ) :
add_filter( 'generate_font_option_defaults','freelancer_get_default_fonts' );
function freelancer_get_default_fonts( $freelancer_font_defaults )
{
	$freelancer_font_defaults[ 'font_body' ] = 'Open Sans';
	$freelancer_font_defaults[ 'font_body_category' ] = 'sans-serif';
	$freelancer_font_defaults[ 'font_body_variants' ] = '300,300italic,regular,italic,600,600italic,700,700italic,800,800italic';
	$freelancer_font_defaults[ 'body_font_weight' ] = '300';
	$freelancer_font_defaults[ 'body_font_transform' ] = 'none';
	$freelancer_font_defaults[ 'body_font_size' ] = '19';
	$freelancer_font_defaults[ 'font_site_title' ] = 'inherit';
	$freelancer_font_defaults[ 'site_title_font_weight' ] = '300';
	$freelancer_font_defaults[ 'site_title_font_transform' ] = 'none';
	$freelancer_font_defaults[ 'site_title_font_size' ] = '78';
	$freelancer_font_defaults[ 'mobile_site_title_font_size' ] = '30';
	$freelancer_font_defaults[ 'font_site_tagline' ] = 'inherit';
	$freelancer_font_defaults[ 'site_tagline_font_weight' ] = '300';
	$freelancer_font_defaults[ 'site_tagline_font_transform' ] = 'none';
	$freelancer_font_defaults[ 'site_tagline_font_size' ] = '20';
	$freelancer_font_defaults[ 'font_navigation' ] = 'inherit';
	$freelancer_font_defaults[ 'navigation_font_weight' ] = '300';
	$freelancer_font_defaults[ 'navigation_font_transform' ] = 'none';
	$freelancer_font_defaults[ 'navigation_font_size' ] = '17';
	$freelancer_font_defaults[ 'font_widget_title' ] = 'inherit';
	$freelancer_font_defaults[ 'widget_title_font_weight' ] = '300';
	$freelancer_font_defaults[ 'widget_title_font_transform' ] = 'none';
	$freelancer_font_defaults[ 'widget_title_font_size' ] = '23';
	$freelancer_font_defaults[ 'widget_content_font_size' ] = '19';
	$freelancer_font_defaults[ 'font_heading_1' ] = 'inherit';
	$freelancer_font_defaults[ 'heading_1_weight' ] = '300';
	$freelancer_font_defaults[ 'heading_1_transform' ] = 'none';
	$freelancer_font_defaults[ 'heading_1_font_size' ] = '40';
	$freelancer_font_defaults[ 'mobile_heading_1_font_size' ] = '30';
	$freelancer_font_defaults[ 'font_heading_2' ] = 'inherit';
	$freelancer_font_defaults[ 'heading_2_weight' ] = '300';
	$freelancer_font_defaults[ 'heading_2_transform' ] = 'none';
	$freelancer_font_defaults[ 'heading_2_font_size' ] = '30';
	$freelancer_font_defaults[ 'mobile_heading_2_font_size' ] = '25';
	$freelancer_font_defaults[ 'font_heading_3' ] = 'inherit';
	$freelancer_font_defaults[ 'heading_3_weight' ] = 'normal';
	$freelancer_font_defaults[ 'heading_3_transform' ] = 'none';
	$freelancer_font_defaults[ 'heading_3_font_size' ] = '20';
	$freelancer_font_defaults[ 'font_heading_4' ] = 'inherit';
	$freelancer_font_defaults[ 'heading_4_weight' ] = 'normal';
	$freelancer_font_defaults[ 'heading_4_transform' ] = 'none';
	$freelancer_font_defaults[ 'heading_4_font_size' ] = '15';
	$freelancer_font_defaults[ 'footer_font_size' ] = '17';
	
	return $freelancer_font_defaults;
}
endif;

/**
 * Set default options
 */
if ( !function_exists( 'freelancer_get_spacing_defaults' ) ) :
add_filter( 'generate_spacing_option_defaults','freelancer_get_spacing_defaults' );
function freelancer_get_spacing_defaults( $freelancer_spacing_defaults )
{
	$freelancer_spacing_defaults[ 'header_top' ] = '60';
	$freelancer_spacing_defaults[ 'header_right' ] = '40';
	$freelancer_spacing_defaults[ 'header_bottom' ] = '60';
	$freelancer_spacing_defaults[ 'header_left' ] = '40';
	$freelancer_spacing_defaults[ 'menu_item' ] = '20';
	$freelancer_spacing_defaults[ 'menu_item_height' ] = '70';
	$freelancer_spacing_defaults[ 'sub_menu_item_height' ] = '10';
	$freelancer_spacing_defaults[ 'content_top' ] = '50';
	$freelancer_spacing_defaults[ 'content_right' ] = '50';
	$freelancer_spacing_defaults[ 'content_bottom' ] = '50';
	$freelancer_spacing_defaults[ 'content_left' ] = '50';
	$freelancer_spacing_defaults[ 'separator' ] = '15';
	$freelancer_spacing_defaults[ 'left_sidebar_width' ] = '25';
	$freelancer_spacing_defaults[ 'right_sidebar_width' ] = '25';
	$freelancer_spacing_defaults[ 'widget_top' ] = '50';
	$freelancer_spacing_defaults[ 'widget_right' ] = '50';
	$freelancer_spacing_defaults[ 'widget_bottom' ] = '50';
	$freelancer_spacing_defaults[ 'widget_left' ] = '50';
	$freelancer_spacing_defaults[ 'footer_widget_container_top' ] = '50';
	$freelancer_spacing_defaults[ 'footer_widget_container_right' ] = '0';
	$freelancer_spacing_defaults[ 'footer_widget_container_bottom' ] = '50';
	$freelancer_spacing_defaults[ 'footer_widget_container_left' ] = '0';
	$freelancer_spacing_defaults[ 'footer_top' ] = '20';
	$freelancer_spacing_defaults[ 'footer_right' ] = '0';
	$freelancer_spacing_defaults[ 'footer_bottom' ] = '20';
	$freelancer_spacing_defaults[ 'footer_left' ] = '0';
	
	return $freelancer_spacing_defaults;
}
endif;