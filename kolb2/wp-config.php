<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db115217x2388965');

/** MySQL database username */
define('DB_USER', 's115217_2388965');

/** MySQL database password */
define('DB_PASSWORD', 'zTmrtxMGbUnHV4ps39eH');

/** MySQL hostname */
define('DB_HOST', 'mysql23.1blu.de');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'OFt0vGVbzzOSwtGA2kuRfTofVymBS6u6wRAoeyIIVG3mQVQV7O6AW9fRDnKswl59');
define('SECURE_AUTH_KEY',  'KeFK8wyVB0nV4rkTLq8hMDX4PbIqLSXQ7VX9fe9Yes9w0WbjVY4LcQw1YoBzuNXm');
define('LOGGED_IN_KEY',    '6MsjWpTquqL1vYvPMCMHCDd9mh8JyLyKjmBFqwmPePnUHYtaIsbOLlTwOBDJLcbP');
define('NONCE_KEY',        'goXp7Ux5Tj4QH08wuNzpkP1wsEYNRpWMoEzXv4sBubG267TCPBLSlbeT12PSfeuT');
define('AUTH_SALT',        'cViY6P9pE0sl75Ps5wbOI2QvKhWe2N3SFKinMeeZskeO8Lf1YcdPDKwQwTUbNIpM');
define('SECURE_AUTH_SALT', 'T95tLT7lmTgHrtvfKoKGqNbDb6UzTmW6hhCjwg7d4x1KPJsdBdIuMpUpu5G16sob');
define('LOGGED_IN_SALT',   'ddkFyHiPpnvOvqPkBrqsuNuQgHejOoGjmbqEJVJCxFYcOBkvYVNQI5yNnECMcL1q');
define('NONCE_SALT',       'AhPOs54tvmuXUuBhOtkO9n7wVMekmgi9zJ7c63wKmpEs99WDJI0vWgevNcTNdWd5');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);

/**
 * Multi-site
 *
 */
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
$base = '/kolb2/';
define('DOMAIN_CURRENT_SITE', 'www.streeter.at');
define('PATH_CURRENT_SITE', '/kolb2/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
define('WP_ALLOW_MULTISITE', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'b9hr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
