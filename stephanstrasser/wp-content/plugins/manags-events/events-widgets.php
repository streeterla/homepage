<?php

/**
 * Register our widget.
 * 'Example_Widget' is the widget class used below.
 *
 * @since 0.1
 */

add_action( 'widgets_init', 'events_calendar_load' );
class Events_CalendarWidget extends WP_Widget
{
    public $eventsData =array();
    function Events_CalendarWidget()
    {
        //Constructor
        $widget_ops = array('classname' => 'Events_Calendar', 'description' => __('Events Calendar'));
        $this->WP_Widget('widget_Events_Calendar', __('Events Calendar'), $widget_ops);
    }

    function get_dates($start, $end)
    {
        $startDay = strtotime($start);
        $endDay = strtotime($end);
        $days = ($endDay - $startDay) / (60 * 60 * 24) ;
        $this->eventsData[] = date("m/d/Y", $startDay);
        for ($i = 1; $i <= $days; $i++) {
            $this->eventsData[] = date("m/d/Y", $startDay + ($i * 86400));
       }
    }
    /*for php 5.3>*/
        function get_dates_5($start,$end){
        $begin = new DateTime( $start );
        $end = new DateTime( $end );
        $end->add(new DateInterval('P1D'));
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod($begin, $interval, $end,$realEnd);
        foreach ( $period as $dt ){
            $this->eventsData[]= $dt->format( "m/d/Y" );
        }
    }
    function widget($args, $instance)
    {

        extract($args, EXTR_SKIP);
        global   $wpdb;
        global $analytics;
               $QueryEvents = "SELECT GROUP_CONCAT(pm.`meta_value` SEPARATOR '--') AS `range` FROM ".$wpdb->prefix ."postmeta pm
               LEFT JOIN ".$wpdb->prefix ."posts p  ON (pm.`post_id` = p.`ID` AND (pm.`meta_key`  ='event_start_date' OR  pm.`meta_key`  ='event_end_date' ))
               WHERE p.`post_status`='publish' AND p.`post_type`='events'
               GROUP BY p.`ID`
               ";
               $ResultsEvents = $wpdb->get_results($QueryEvents);
               foreach ($ResultsEvents as $data) {
                   if (!empty($data->range)) {
                      $range= explode('--',$data->range);
                       if(phpversion() >5.3){
                           $this->get_dates_5($range[0],$range[1]);
                       }else{
                           $this->get_dates($range[0],$range[1]);
                       }
                   }
               }

?>
       <script type="text/javascript">
        var disabledDays = JSON.parse('<?php echo json_encode($this->eventsData)?>');
        </script>
        <aside class="widget widget_search masonry-brick" id="events-calendar" style="position: absolute; top: 131px; left: 265px;">


        <h3 class="widget-title">Events</h3>
        <div id="datepicker"></div></aside>
       <?php
        wp_enqueue_script('jquery-ui-datepicker');
        wp_enqueue_script('events-global',EVENTS_ASSETS_URL.'js/events.js', array(),EVENTS_VERSION);
        wp_enqueue_style('events-global',EVENTS_ASSETS_URL.'css/events-ui.css', array(),EVENTS_VERSION);
        echo $analytics;
    }

    function update($new_instance, $old_instance)
    {
        return $instance;
    }

    function form($instance)
    {

    }
}
function events_calendar_load(){
    register_widget('Events_CalendarWidget');
}

?>