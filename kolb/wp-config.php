<?php
define('DB_NAME', '<dbname>');
define('DB_USER', '<dbuser>');
define('DB_PASSWORD', '<dbpass>');
define('DB_HOST', '<dbhost>');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');
define('AUTH_KEY', 'SixhfZRgtIejfrETHz9fbx99strvYj9clFSmay5vnEdVXS9RXjhrgbb9MHMZeu8Rpj');
define('SECURE_AUTH_KEY', 'qg3OEBOIS0lAzUAA2yhiJY4k3Xe0ibzFOvB-y-tNDI9OiDyH7P-oXR9aKIej7tPn97');
define('LOGGED_IN_KEY', 'FSmay5vnEdVXS9RXjhrgbb9MHMZeu8Rpjqg3OEBOIS0lAzUAA2yhiJY4k3Xe0ibzFO');
define('NONCE_KEY', '1j5MUmCFnErzjj-kUch_k1m3d2jM5VUaUvB-y-tNDI9OiDyH7P-oXR9aKIej7tPn97');
define('AUTH_SALT',        ';*|WEq&,23-AL)[c^;edeG73Z*|LPYtMsG{`wEUFSVOb#Zcs~~I/5wxjUGg<B+ l');
define('SECURE_AUTH_SALT', '28@:Ye*^J}:uD*A<nV}Geu&&WO6aN&yVIS`@|,d$%r,=?kk4 ukw>>E8fzx;_]mB');
define('LOGGED_IN_SALT',   '?Q.g-[N.5Fl&ifY#>/{:$@U`z#mV7S`%C4Pc56(@TfBN(cMYJ8?)wg@]hkHdPs!R');
define('NONCE_SALT',       'X[mk2qk/>FG:+-oYA.$4Iz|TKRw c]QiOmh`*bsZ]lRXjZUJoy4uv96.@hM-!09l');
$table_prefix  = 'prfx_';
define ('WPLANG', 'de_DE');

if ( !defined('ABSPATH') ) {
  define('ABSPATH', dirname(__FILE__) . '/');
  }
  
  require_once(ABSPATH . 'wp-settings.php');
  
?>