<?php

add_filter('allow_dev_auto_core_updates', '__return_false');
add_filter('allow_major_auto_core_updates', '__return_true');
add_filter('allow_minor_auto_core_updates', '__return_true');
add_filter('auto_update_plugin', '__return_true');
add_filter('auto_update_theme', '__return_true');
add_filter('auto_update_translation', '__return_true');
add_filter('auto_core_update_send_email', '__return_false');

?>
