<?php
add_shortcode('list-events', 'Events_Shortcode' );

function Events_Shortcode($atts)
{
    extract(shortcode_atts(array("limitevents" => 0, "excludecat" => 0, "excludeevents" => 0), $atts));

    $catids = $atts['excludecat'];
    $limitevents = $atts['limitevents'];
    $excludeevents = $atts['excludeevents'];
    $post_type = 'events';

    if (empty($catids)) {
        $args = array('post_type' => $post_type, 'post_status' => 'publish');
        (empty($limitevents) ? $args['nopaging'] = true : $args['showposts'] = $limitevents);
        $query = get_posts($args);
    } elseif (!empty($catids)) {
        $args = array('post_type' => $post_type,'post_status' => 'publish');
        (!empty($catids) ? $args['tax_query'] =  array(    array(
                'taxonomy' => 'events_categories',
                'field' => 'id',
                'terms' => explode(",", $catids),
                'operator' => 'NOT IN'
              )): '');
        (empty($limitevents) ? $args['nopaging'] = true : $args['showposts'] = $limitevents);
        (!empty($excludeevents) ? $args['post__not_in'] = explode(",", $excludeevents) : '');

        $query = get_posts($args);

    }

    echo  getEvents($query, 0, count($query));
}

function getEvents($query, $start, $end)
{
    global $analytics;
    $html = "";
    $html .= "<ol class='thmbList'>";
    for ($i = $start; $i < $end; $i++) {
        if (!empty($query[$i]->ID)) {
            $diff = ago(strtotime($query[$i]->post_date));

            $src = get_the_post_thumbnail($query[$i]->ID);
            $html .= "<li><div class='thmb'><a id='".$query[$i]->ID."' href='" . get_permalink($query[$i]->ID) . "'>";
            if (!empty($src)) {
                            $html .=$src;
                        }
            $html .= "</a></div>
            <h3 class='name'><a href='" . get_permalink($query[$i]->ID) . "'>" . $query[$i]->post_title . "</a></h3>
            <div class='date_area'><b>". get_post_meta($query[$i]->ID, 'event_start_date', true)."</b> ";
            $html .= "- <b>". get_post_meta($query[$i]->ID, 'event_end_date', true)."</b> ";
            $html.="<span>". get_post_meta($query[$i]->ID, 'event_from_time', true)." - ". get_post_meta($query[$i]->ID, 'event_to_time', true)."</span>";
            $html .= "<strong>".get_post_meta($query[$i]->ID, 'event_address', true)."</strong></div><div class='entry entry1'>";

            $html .= "<div class='txt'><p>" .substr(strip_tags($query[$i]->post_content),0,350) . "</p> </div><div class='alt'><div class='date'>" . $diff . "</div>";

            $html .= "</div></div></div><div class='clear'></div></li>";
        }
    }
    $html .= "</ol><div class='clear'></div>".$analytics;
    return $html;
}
function ago($time)
{
    $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
    $lengths = array("60", "60", "24", "7", "4.35", "12", "10");

    $now = time();

    $difference = $now - $time;
    $tense = __('ago');

    for ($j = 0; $difference >= $lengths[$j] && $j < count($lengths) - 1; $j++) {
        $difference /= $lengths[$j];
    }

    $difference = round($difference);

    if ($difference != 1) {
        $periods[$j] .= "s";
    }

    return "$difference ".__($periods[$j])." ".  __('ago') ;
}
?>