<?php

/**
 * Register our widget.
 * 'Example_Widget' is the widget class used below.
 *
 * @since 0.1
 */

add_action( 'widgets_init', 'events_slider_load' );
class Events_SliderWidget extends WP_Widget
{
    public $eventsData =array();
    function Events_SliderWidget()
    {
        //Constructor
        $widget_ops = array('classname' => 'Events_Slider', 'description' => __('Events Slider'));
        $this->WP_Widget('widget_Events_Slider', __('Events Slider'), $widget_ops);
    }


    function widget($args, $instance)
    {
        extract($args, EXTR_SKIP);
        global $analytics;
        $params = array('post_type' => 'events', 'post_status' => 'publish');
        $slider_wrap = empty($instance['slider_wrap']) ? 'circular' : $instance['slider_wrap'];
        (empty($limitevents) ? $params['nopaging'] = true : $params['showposts'] = $limitevents);
        $events = get_posts($params);
        if(!empty($events)){
?>       <script type="text/javascript">
              var SliderWrap=  '<?php echo $slider_wrap;?>'
</script>
            <aside class="widget widget_search masonry-brick" id="events-slider">
                <div class="jcarousel-wrapper">
                    <div class="jcarousel">
                        <ul>
                            <?php
                            foreach($events as $event) :?>
                                <?php setup_postdata($event);?>
                                <li>
                                        <?php echo get_the_post_thumbnail( $event->ID, 'medium' ); ?>

                                    <div class="photo-credits"><?php echo $event->post_title;?><br/>
                                        <span>
                                        <?php echo  get_post_meta($event->ID,'event_start_date',true ); ?>&nbsp;
                                        <?php echo get_post_meta($event->ID,'event_from_time',true ); ?>&nbsp;
                                        -
                                        &nbsp;<?php echo get_post_meta($event->ID,'event_end_date',true ); ?>&nbsp;
                                        <?php echo get_post_meta($event->ID,'event_to_time',true ); ?>
                                        </span>
                                    </div>

                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
                    <a href="#" class="jcarousel-control-next">&rsaquo;</a>
                    <p class="jcarousel-pagination"></p>
                </div>
        </aside>
       <?php

        wp_enqueue_script('events-global-slider',EVENTS_ASSETS_URL.'js/jquery.jcarousel.min.js', array(),EVENTS_VERSION);
        wp_enqueue_script('events-global-slider-ini',EVENTS_ASSETS_URL.'js/jcarousel.responsive.js', array(),EVENTS_VERSION);
        wp_enqueue_style('events-global-slider',EVENTS_ASSETS_URL.'css/jcarousel.responsive.css', array(),EVENTS_VERSION);
        echo $analytics;
    }
    }

    function update($new_instance, $old_instance) {
    	//save the widget
    		$instance = $old_instance;
    		$instance['slider_wrap'] = $new_instance['slider_wrap'];
    		return $instance;
    	}
    	function form($instance) {
    		$slider_wrap = $instance['slider_wrap'];
    	?>
    		<p><label for="<?php echo $this->get_field_id('slider_wrap'); ?>"><?php _e('Slider Wrap');?>:
                  <select  id="<?php echo $this->get_field_id('slider_wrap'); ?>" name="<?php echo $this->get_field_name('slider_wrap'); ?>" type="text">
                        <option value="circular" <?php echo ( $slider_wrap == 'circular')? 'selected="selected"' :'' ; ?> >circular</option>
                        <option value="first" <?php echo ( $slider_wrap == 'first')? 'selected="selected"' :'' ; ?> >first</option>
                        <option value="last" <?php echo ( $slider_wrap == 'last')? 'selected="selected"' :'' ; ?> >last</option>
                        <option value="both" <?php echo ( $slider_wrap == 'both')? 'selected="selected"' :'' ; ?> >both</option>
                  </select></label>
                    </p>


    <?php
    	}
}
function events_slider_load(){
    register_widget('Events_SliderWidget');
}

?>