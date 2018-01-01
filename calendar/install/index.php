<?php
/* $Id: index.php,v 1.109.2.13 2008/09/28 00:47:57 cknudsen Exp $
 *
 * Page Description:
 *  Main page for install/config of db settings.
 *  This page is used to create/update includes/settings.php.
 *
 * Input Parameters:
 *  OPTIONAL tzoffset   If after logging in, adding tzoffset to
 *  the URL ( http://yourserver/install/index.php?tzoffset=2 )
 *  will adjust all existing events in the database +2 hours.
 *  OPTIONAL cutoffdate (YYYYMMDD)  When adjusting the tzoffset
 *  the URL ( http://yourserver/install/index.php?tzoffset=2&cutoffdate=20070110 )
 *  will adjust all events <= 20070110 in the database +2 hours.
 *  This is very handy if your server changes timezones after installation.
 *
 * NEW RELEASE UPDATE PROCEDURES:
 *   - Update WEBCAL_PROGRAM_VERSION default value in default_config.php
 *     This should be of the format "v1.0.0"
 *   - Make sure the last entry in all the upgrade-*.sql files reference
 *     this same version.  For example, for "v1.0.0", there should be a
 *     comment of the format:    /*upgrade_v1.0.0 */
       /* ( Don't remove this line as it leads to nested C-Style comments )
 *     If there are NO db changes, then you should just modify the
 *     the last comment to be the new version number.  If there are
 *     db changes, you should create a new entry in the *.sql files
 *     that detail the SQL to upgrade.
 *   - Update the $PROGRAM_VERSION and $PROGRAM_DATE variables defined
 *     in includes/config.php.  The $PROGRAM_VERSION needs to be the
 *     same value (e.g. "v1.0.0") that was defined above.
 *   - Update the version/date in ChangeLog and NEWS files.
 *   - Update UPGRADING.html documentation.
 *
 * ABOUT VERSION NUMBERS:
 *   From now on, we should only be using "vN.N.N" format for versions.
 *   (No more "v.1.12+CVS", for example.)  This may be confusing for CVS
 *   users since they may download a CVS snapshot that says its "1.1.4",
 *   but it's really not quite the official "1.1.4" since we will using
 *   1.1.4 in CVS until the official 1.1.4 release is made.
 *
 *   You can mark the version with "+CVS" or something similar in NEWS
 *   and/or ChangeLog since these are not used in the code.
 *
 * Security:
 * The first time this page is accessed, there are no security
 * precautions. The user is prompted to generate a config password.
 * From then on, users must know this password to make any changes
 * to the settings in settings.php./
 *
 * TODO:
 * Change all references from postgresql to pgsql
 */
$show_all_errors = false;

define ( '__WC_BASEDIR', '..' );

include_once '../includes/translate.php';
include_once '../includes/dbi4php.php';
include_once '../includes/config.php';
include_once '../includes/formvars.php';
include_once 'default_config.php';
include_once 'install_functions.php';
include_once 'sql/upgrade_matrix.php';
$file = '../includes/settings.php';
$fileDir = '../includes';


//change this path if needed
$firebird_path = 'c&#58;/program files/firebird/firebird_1_5/examples/employee.fdb';

clearstatcache ();

// We may need time to run extensive database loads
if  ( ! get_php_setting ( 'safe_mode' ) )
  set_time_limit ( 240 );

// If we're using SQLLite, it seems that magic_quotes_sybase must be on
//ini_set('magic_quotes_sybase', 'On');

// Check for proper auth settings
if ( ! empty (  $_SERVER['PHP_AUTH_USER'] ) )
  $PHP_AUTH_USER= $_SERVER['PHP_AUTH_USER'];

//We'll always use browser defined languages
reset_language ( 'none' );

//Some common translations used in the install script
// translate ( 'WebCalendar Installation Wizard' ) translate ( 'Step' )
$wizardStr = translate ( 'WebCalendar Installation Wizard Step XXX' );
$passwordStr = translate ( 'Password' );
$singleUserStr = translate ( 'Single-User' );
$loginStr = translate ( 'Login' );
$failureStr = '<b>' . translate ( 'Failure Reason' ) . ': </b>';
$manualStr = translate ( 'You must manually create database' );
$cachedirStr = translate ( 'Database Cache Directory' );
$logoutStr = translate ( 'Logout' );
$testSettingsStr = translate ( 'Test Settings' );
$createNewStr = translate ( 'Create New' );
$datebaseNameStr = translate ( 'Database Name' );
$backStr = translate ( 'Back' );
$nextStr = translate ( 'Next' );
$tzSuccessStr = translate ( 'Timezone Conversion Successful' );
// translate ( 'Error Unable to write to file' )
$errorFileWriteStr = translate ( 'Error Unable to write to file XXX.', true );

$failure = $failureStr . '<blockquote>';
$selected = ' selected="selected" ';
$checked = ' checked="checked" ';

// First pass at settings.php.
// We need to read it first in order to get the md5 password.
$magic = @get_magic_quotes_runtime ();
@set_magic_quotes_runtime (0);
$fd = @fopen ( $file, 'rb', true );
$settings = array ();
$password = '';
$forcePassword = false;
if ( ! empty ( $fd ) ) {
  while ( ! feof ( $fd ) ) {
    $buffer = fgets ( $fd, 4096 );
    $buffer = trim ( $buffer, "\r\n " );
    if ( preg_match ( "/^(\S+):\s*(.*)/", $buffer,  $matches ) ) {
      if ( $matches[1] == 'install_password' ) {
        $password = $matches[2];
        $settings['install_password'] = $password;
      }
    }
  }
  fclose ( $fd );
  // File exists, but no password. Force them to create a password.
  if ( empty ( $password ) ) {
    $forcePassword = true;
  }
}
@set_magic_quotes_runtime ($magic);

session_start ();
$doLogin = false;

// Set default Application Name
if ( ! isset ( $_SESSION['application_name'] ) ) {
  $_SESSION['application_name'] = 'WebCalendar';
}

// Set Server URL
if ( ! isset ( $_SESSION['server_url'] ) ) {
    if ( ! empty ( $_SERVER['HTTP_HOST'] ) && ! empty ( $_SERVER['REQUEST_URI'] ) ) {
      $ptr = strpos ( $_SERVER['REQUEST_URI'], '/install', 2 );
      if ( $ptr > 0 ) {
        $uri = substr ( $_SERVER['REQUEST_URI'], 0, $ptr + 1 );
        $SERVER_URL = "http://" . $_SERVER['HTTP_HOST'];
        if ( ! empty ( $_SERVER['SERVER_PORT'] ) && $_SERVER['SERVER_PORT'] != 80 )
          $SERVER_URL .= ': ' . $_SERVER['SERVER_PORT'];
        $SERVER_URL .= $uri;
        $_SESSION['server_url'] = $SERVER_URL;
      }
    }
}

// Handle "Logout" button
if ( 'logout' == getGetValue ( 'action' ) ) {
  session_destroy ();
  Header ( 'Location: index.php' );
  exit;
}

// If password already exists, check for valid session.
if ( @file_exists ( $file ) && ! empty ( $password ) &&
  ( empty ( $_SESSION['validuser'] ) ||
  $_SESSION['validuser'] != $password ) ) {
  // Make user login
  $doLogin = true;
}

$pwd = getPostValue ( 'password3' );
if ( @file_exists ( $file ) && ! empty ( $pwd ) ) {
  if ( md5 ($pwd) == $password ) {
    $_SESSION['validuser'] = $password;
?>
      <html><head><title>Password Accepted</title>
      <meta http-equiv="refresh" content="0; index.php" />
      </head>
      <body onLoad="alert('<?php etranslate ( 'Successful Login', true ) ?>');">
<?php //print_r ( $_SERVER );
if ( empty ( $_SESSION['step'] ) || $_SESSION['step'] < 2 ) {?>
<table border="1" width="90%" align="center">
<tr><th class="pageheader"  colspan="2"><?php echo str_replace ( 'XXX',
  translate ( '1' ), $wizardStr ) ?></th></tr>
<tr><td colspan="2" width="50%">
<?php etranslate ( 'This installation wizard will guide you...' ) ?>:<br />
<ul>
<li><a href="../docs/WebCalendar-SysAdmin.html" target="_docs">System Administrator's Guide</a></li>
<li><a href="../docs/WebCalendar-SysAdmin.html#faq" target="_docs">FAQ</a></li>
<li><a href="../docs/WebCalendar-SysAdmin.html#trouble" target="_docs">Troubleshooting</a></li>
<li><a href="../docs/WebCalendar-SysAdmin.html#help" target="_docs">Getting Help</a></li>
<li><a href="../UPGRADING.html" target="_docs">Upgrading Guide</a></li>
<li><a href="http://www.k5n.us/dokuwiki/doku.php" target="_docs">User Supported Wiki</a></li>
</ul>
</td></tr>
<tr><th class="header"  colspan="2"><?php etranslate ( 'PHP Version Check' ) ?></th></tr>
<tr><td>
<?php etranslate ( 'Check to see if PHP 4.1.0 or greater is installed' ) ?>.
</td>
  <?php
    $class = ( version_compare ( phpversion (), '4.1.0', '>=' ) ? '' : 'not' )
      . 'recommended';
    echo '<td class="' . $class . '"><img src="' . ( $class == 'recommended'
      ? 'recommended.gif' : 'not_recommended.jpg' ) . '" alt="" />&nbsp;'
      . translate ( 'PHP version' ) . ' ' . phpversion ();
   ?>
</td></tr>
<tr><th class="header" colspan="2">
 <?php etranslate ( 'PHP Settings' );
 if ( ! empty ( $_SESSION['validuser'] ) ) { ?>
  &nbsp;<input name="action" type="button" value="<?php etranslate ( 'Detailed PHP Info' ) ?>" onClick="testPHPInfo()" />
<?php } ?>
</th></tr>
<?php foreach ( $php_settings as $setting ) { ?>
  <tr><td class="prompt"><?php echo $setting[0];?></td>
  <?php
    $ini_get_result = get_php_setting ( $setting[1], $setting[3] );
    $class = ( $ini_get_result == $setting[2] ) ?
      'recommended' : 'notrecommended';
    echo "<td class=\"$class\">";
    if ($class == 'recommended') {
      echo '<img src="recommended.gif" alt=""/>&nbsp;';
    } else {
      echo '<img src="not_recommended.jpg" alt=""/>&nbsp;';
    }
    echo $ini_get_result;
   ?>
   </td></tr>
<?php }
 foreach ( $php_constants as $constant ) { ?>
  <tr><td class="prompt"><?php echo $constant[0];?></td>
  <?php
    $class = (  $constant[1] ) == $constant[2]  ?
      'recommended' : 'notrecommended';
    echo "<td class=\"$class\">";
    if ($class == 'recommended') {
      echo '<img src="recommended.gif" alt=""/>&nbsp;ON';
    } else {
      echo '<img src="not_recommended.jpg" alt=""/>&nbsp;OFF';
    }
   ?>
   </td></tr>
<?php }

 foreach ( $php_modules as $module ) { ?>
  <tr><td class="prompt"><?php echo $module[0];?></td>
  <?php
    $class = ( get_php_modules ( $module[1] ) == $module[2] ) ?
      'recommended' : 'notrecommended';
    echo "<td class=\"$class\">";
    if ($class == 'recommended') {
     echo '<img src="recommended.gif" alt=""/>&nbsp;';
    } else {
 echo '<img src="not_recommended.jpg" alt=""/>&nbsp;';
    }
    echo get_php_modules ( $module[1] );
   ?>
   </td></tr>
<?php } ?>

 <tr><th class="header" colspan="2"><?php etranslate ( 'Session Check' ) ?></th></tr>
 <tr><td>
  <?php echo translate ( 'To test the proper operation of sessions, reload this page' ) .
  '<br />' .
  translate ( 'You should see the session counter increment each time' ) ?>.</td>
<?php
    $class = ( $_SESSION['check'] > 0 ) ?
      'recommended' : 'notrecommended';
    echo "<td class=\"$class\">";
    if ($_SESSION['check'] > 0) {
     echo '<img src="recommended.gif" alt=""/>&nbsp;';
    } else {
      echo '<img src="not_recommended.jpg" alt=""/>&nbsp;';
    }
     echo translate ( 'SESSION COUNTER' ) . ': ' . $_SESSION['check'];
?>
 </td></tr>
<?php //if the settings file doesn't exist or we can't write to it, echo an error header..
if ( ! $exists || ! $canWrite ) { ?>
 <tr><th class="redheader" colspan="2"><?php echo translate ( 'Settings.php Status' ) .
   ': ' . translate ( 'Error' ) ?></th></tr>
<?php //..otherwise, edit a regular header
} else { ?>
 <tr><th class="header" colspan="2">Settings.php Status</th></tr>

<?php }
 //if the settings file exists, but we can't write to it..
 if ( $exists && ! $canWrite ) { ?>
  <tr><td>
   <img src="not_recommended.jpg" alt=""/>&nbsp;<?php
     etranslate ( 'The file permissions of settings.php are set...' ) ?>:</td><td>
   <blockquote><b>
    <?php echo realpath ( $file ); ?>
   </b></blockquote>
  </td></tr>
<?php //or, if the settings file doesn't exist & we can't write to the includes directory..
 } else if ( ! $exists && ! $canWrite ) { ?>
  <tr><td colspan="2">
   <img src="not_recommended.jpg" alt=""/>&nbsp;<?php
     etranslate ( 'The file permissions of the includes directory are set...' ) ?>:
   <blockquote><b>
    <?php echo realpath ( $fileDir ); ?>
   </b></blockquote>
  </td></tr>
<?php //if settings.php DOES exist & we CAN write to it..
 } else { ?>
  <tr><td>
   <?php etranslate ( 'Your settings.php file appears to be valid' )
     ?>.</td><td class="recommended">
   <img src="recommended.gif" alt=""/>&nbsp;OK
  </td></tr>

<?php if ( empty ( $_SESSION['validuser'] ) ) { ?>
 <tr><th colspan="2" class="header"><?php
   etranslate ( 'Configuration Wizard Password' ) ?></th></tr>
 <tr><td colspan="2" align="center" style="border:none">
 <?php if ( $doLogin ) { ?>
  <form action="index.php" method="post" name="dblogin">
   <table>
    <tr><th>
     <?php echo $passwordStr ?>:</th><td>
     <input name="password3" type="password" />
     <input type="submit" value="<?php echo $loginStr ?>" />
    </td></tr>
   </table>
  </form>
 <?php } else if ( $forcePassword ) { ?>
  <form action="index.php" method="post" name="dbpassword">
   <table border="0">
    <tr><th colspan="2" class="header">
     <?php etranslate ( 'Create Settings File Password' ) ?>
    </th></tr>
    <tr><th>
     <?php echo $passwordStr ?>:</th><td>
     <input name="password1" type="password" />
    </td></tr>
    <tr><th>
     <?php etranslate ( 'Password (again)' ) ?>:</th><td>
     <input name="password2" type="password" />
    </td></tr>
    <tr><td colspan="2" align="center">
     <input type="submit" value="<?php etranslate ( 'Set Password' ) ?>" />
    </td></tr>
   </table>
  </form>
 <?php }
  }
} ?>
</td></tr></table>
<?php if ( ! empty ( $_SESSION['validuser'] ) ) { ?>
<table border="0" width="90%" align="center">
 <tr><td align="center">
  <form action="index.php?action=switch&amp;page=2" method="post">
   <input type="submit" value="<?php echo $nextStr ?> ->" />
  </form>
 </td></tr>
</table>
<?php }

//BEGIN STEP 2
} else if ( $_SESSION['step'] == 2 ) { ?>

<table border="1" width="90%" align="center">
 <tr><th class="pageheader" colspan="2">
  <?php echo str_replace ( 'XXX', translate ( '2' ), $wizardStr ) ?>
 </th></tr>
 <tr><td colspan="2" width="50%">
  <?php echo translate ( 'db setup directions...' )?>.
 </td></tr>
 <tr><th colspan="2" class="header">
  <?php etranslate ( 'Database Status' ) ?>
 </th></tr>
 <tr><td>
  <ul>
  <!-- <li><?php etranslate ( 'Supported databases for your PHP installation' ) ?>:
 -->
</li>

<?php if ( ! empty ( $_SESSION['db_success'] ) && $_SESSION['db_success']  ) { ?>
  <li class="recommended"><img src="recommended.gif" alt=""/>&nbsp;<?php
   etranslate ( 'Your current database settings are able to access the database' ) ?>.</li>
  <?php if ( ! empty ( $response_msg )  && empty ( $response_msg2 ) ) { ?>
  <li class="recommended"><img src="recommended.gif" alt=""/>&nbsp;<?php
    echo $response_msg; ?></li>
   <?php } elseif ( empty ( $response_msg2 )&& empty ( $_SESSION['db_success'] ) ) {?>
  <li class="notrecommended"><img src="not_recommended.jpg" alt=""/>&nbsp;<b><?php
    etranslate ( 'Please Test Settings' ) ?></b></li>
  <?php }
 } else { ?>
  <li class="notrecommended"><img src="not_recommended.jpg" alt=""/>&nbsp;<?php etranslate ( 'Your current database settings are not able...' ) ?>.</li>
  <?php if ( ! empty ( $response_msg ) ) { ?>
  <li class="notrecommended"><img src="not_recommended.jpg" alt=""/>&nbsp;<?php echo $response_msg; ?></li>
   <?php }
 }
 if ( ! empty ( $response_msg2 ) ) { ?>
  <li class="notrecommended"><img src="not_recommended.jpg" alt=""/>&nbsp;<b><?php
  echo $response_msg2; ?></b></li>
<?php }  ?>
</ul>
</td></tr>
<tr><th class="header" colspan="2">
 <?php etranslate ( 'Database Settings' ) ?>
</th></tr>
<tr><td>
 <form action="index.php" method="post" name="dbform" onSubmit="return chkPassword()">
 <table align="right" width="100%" border="0">
  <tr><td rowspan="7" width="20%">&nbsp;
   </td><td class="prompt" width="25%" valign="bottom">
   <label for="db_type"><?php etranslate ( 'Database Type' ) ?>:</label></td><td valign="bottom">
   <select name="form_db_type" id="db_type" onChange="db_type_handler();">
<?php
  $supported = array ();
  if ( function_exists ( 'db2_pconnect' ) )
    $supported['ibm_db2'] = 'IBM DB2 Universal Database';
  if ( function_exists ( 'ibase_connect' ) )
    $supported['ibase'] = 'Interbase';
  if ( function_exists ( 'mssql_connect' ) )
    $supported['mssql'] = 'MS SQL Server';
  if ( function_exists ( 'mysql_connect' ) )
    $supported['mysql'] = 'MySQL';
  if ( function_exists ( 'mysqli_connect' ) )
    $supported['mysqli'] = 'MySQL (Improved)';
  if ( function_exists ( 'OCIPLogon' ) )
    $supported['oracle'] = 'Oracle (OCI)';
  if ( function_exists ( 'odbc_pconnect' ) )
    $supported['odbc'] = 'ODBC';
  if ( function_exists ( 'pg_pconnect' ) )
    $supported['postgresql'] = 'PostgreSQL';
  if ( function_exists ( 'sqlite_open' ) )
    $supported['sqlite'] = 'SQLite';

  asort ( $supported );
  foreach ( $supported as $key => $value ) {
    echo '
     <option value="' . $key . '" '
     . ( $settings['db_type'] == $key ? $selected : '' )
     . '>' . $value . '</option>';
  }
  $supported = array ();

?>
   </select>
  </td></tr>
  <tr><td class="prompt">
   <label for="server"><?php etranslate ( 'Server' ) ?>:</label></td><td colspan="2">
   <input name="form_db_host" id="server" size="20" value="<?php echo $settings['db_host'];?>" />
  </td></tr>
  <tr><td class="prompt">
   <label for="login"><?php echo $loginStr ?>:</label></td><td colspan="2">
   <input name="form_db_login" id="login" size="20" value="<?php echo $settings['db_login'];?>" />
  </td></tr>
  <tr><td class="prompt">
   <label for="pass"><?php echo $passwordStr ?>:</label></td><td colspan="2">
   <input name="form_db_password" id="pass"  size="20" value="<?php echo $settings['db_password'];?>" />
  </td></tr>
  <tr><td class="prompt" id="db_name">
   <label for="database"><?php echo $datebaseNameStr ?>:</label></td><td colspan="2">
   <input name="form_db_database" id="database" size="20" value="<?php echo $settings['db_database'];?>" />
  </td></tr>

<?php
  // This a workaround for postgresql. The db_type should be 'pgsql' but 'postgresql' is used
 // in a lot of places...so this is easier for now :(
  $real_db_type = ( $settings['db_type'] == 'postgresql' ? 'pgsql' : $settings['db_type'] );
  if ( substr ( php_sapi_name (), 0, 3) <> 'cgi' &&
        ini_get( $real_db_type . '.allow_persistent' ) ){ ?>
  <tr><td class="prompt">
   <label for="conn_pers"><?php etranslate ( 'Connection Persistence' ) ?>:</label></td><td colspan="2">
   <label><input name="form_db_persistent" value="true" type="radio"<?php
    echo ( $settings['db_persistent'] == 'true' ) ? $checked : ''; ?> /><?php etranslate ( 'Enabled' ) ?></label>
  &nbsp;&nbsp;&nbsp;&nbsp;
   <label><input name="form_db_persistent" value="false" type="radio"<?php
    echo ( $settings['db_persistent'] != 'true' )? $checked : ''; ?> /><?php etranslate ( 'Disabled' ) ?></label>
<?php } else { // Need to set a default value ?>
   <input name="form_db_persistent" value="false" type="hidden" />
<?php } ?>
  </td></tr>
  <?php if ( function_exists ( 'file_get_contents' ) ) { ?>
  <tr><td class="prompt"><?php echo $cachedirStr ?>:</td>
   <td><?php if ( empty ( $settings['db_cachedir'] ) ) $settings['db_cachedir'] = '';  ?>
   <input type="text" size="70" name="form_db_cachedir" id="form_db_cachedir" value="<?php
     echo $settings['db_cachedir']; ?>"/></td></tr>
<?php } //end test for file_get_contents
   if ( ! empty ( $_SESSION['validuser'] ) ) { ?>
 <tr><td align="center" colspan="3">
  <?php
    $class = ( empty ( $_SESSION['db_success'] ) ? 'not' : '' ) . 'recommended';
    echo "<input name=\"action\" type=\"submit\" value=\"" .
      $testSettingsStr . "\" class=\"$class\" />\n";

   if ( ! empty ( $_SESSION['db_noexist'] ) &&  empty ( $_SESSION['db_success'] ) ){
       echo "<input name=\"action2\" type=\"submit\" value=\"" .
       $createNewStr. "\" class=\"recommended\" />\n";
   }
  ?>
</td></tr>
</table>
</form>
</td></tr></table>

<?php } ?>

<table border="0" width="90%" align="center">
<tr><td align="right" width="40%">
  <form action="index.php?action=switch&amp;page=1" method="post">
    <input type="submit" value="<- <?php echo $backStr ?>" />
  </form>
</td><td align="center" width="20%">
  <form action="index.php?action=switch&amp;page=3" method="post">
    <input type="submit" value="<?php echo $nextStr ?> ->" <?php echo ( empty ($_SESSION['db_success'] ) ? 'disabled' : '' ); ?> />
  </form>
</td><td align="left" width="40%">
  <form action="" method="post">
 <input type="button" value="<?php echo $logoutStr ?>" <?php echo ( empty ($_SESSION['validuser'] ) ? 'disabled' : '' ); ?>
  onclick="document.location.href='index.php?action=logout'" />
  </form>
</td></tr>
</table>

<?php } else if ( $_SESSION['step'] == 3 ) {
  //print_r ( $_SESSION);
  $_SESSION['db_updated'] = false;
  if ( $_SESSION['old_program_version'] == $PROGRAM_VERSION  &&
   empty ( $_SESSION['blank_database'] ) ){
   $response_msg = translate ( 'All your database tables appear to be up to date. You may proceed to the') . ' ' .
       translate ( 'next page and complete your WebCalendar setup' ) .'.';
  $_SESSION['db_updated'] = true;
  } else if ( $_SESSION['old_program_version'] == 'new_install' ) {
   $response_msg = translate ( 'This appears to be a new installation. If this is not correct, please') . ' ' .
      translate ( 'go back to the previous page and correct your settings' ) . '.';
  } else if ( ! empty ( $_SESSION['blank_database'] ) ){
   $response_msg =translate ( 'The database requires some data input' ) . '. ' .
      translate ( 'Click Update Database to complete the upgrade' ) . '.';
  } else {
     $response_msg = translate ( 'This appears to be an upgrade from version' )  .
     '&nbsp;' .  $_SESSION['old_program_version'] . '&nbsp;' .
     translate ( 'to' ) . ' ' . $PROGRAM_VERSION. '.';
  }
?>
<table border="1" width="90%" align="center">
<tr><th class="pageheader" colspan="2"><?php echo str_replace ( 'XXX',
  translate ( '3' ), $wizardStr )?></th></tr>
<tr><td colspan="2" width="50%">
<?php echo translate ( 'In this section we will perform the required database changes to bring your database up to the required level' ) . ' ' .
  translate ( 'If you are using a fully supported database, this step will be performed automatically for you' ) . ' ' .
  translate ( 'If not, the required SQL can be displayed and you should be able' ) . ' ' .
  translate ( 'to cut &amp; paste it into your database server query window' ) ?>.
</td></tr>
<tr><th colspan="2" class="header"><?php etranslate ( 'Database Status' ) ?></th></tr>
<tr><td>
<?php echo $response_msg; ?>
</td></tr>
<?php if ( ! empty ( $_SESSION['db_updated'] ) ){ ?>
<tr><th colspan="2" class="header"><?php etranslate ( 'No database actions are required' ) ?></th></tr>
<?php } else { ?>
<tr><th colspan="2" class="redheader"><?php etranslate ( 'The following database actions are required' ) ?></th></tr>
 <?php if ( $settings['db_type']  == 'odbc' &&  empty ( $_SESSION['db_updated'] ) ) {
 if ( empty ( $_SESSION['odbc_db'] ) ) $_SESSION['odbc_db'] = 'mysql'; ?>
<tr><td id="odbc_db" align="center" nowrap>
<form action="index.php?action=set_odbc_db" method="post" name="set_odbc_db">
<b><?php etranslate ( 'ODBC Underlying Database' ) ?>:</b> <select name="odbc_db" onChange="document.set_odbc_db.submit();">
  <option value="mysql"
   <?php echo $_SESSION['odbc_db'] == 'mysql'? $selected : '' ; ?> >MySQL</option>
  <option value="mssql"
   <?php echo $_SESSION['odbc_db'] == 'mssql'? $selected : '' ; ?> >MS SQL</option>
  <option value="oracle"
   <?php echo $_SESSION['odbc_db'] == 'oracle'? $selected : '' ; ?> >Oracle</option>
  <option value="postgresql"
  <?php echo $_SESSION['odbc_db'] == 'postgresql'? $selected : '' ; ?> >PostgreSQL</option>
  <option value="ibase"
  <?php echo $_SESSION['odbc_db'] == 'ibase'? $selected :''  ; ?> >Interbase</option>
</select>
</form>
</td></tr>
  <?php } ?>
<tr>
  <td class="recommended" align="center">
 <?php if ( ! empty ( $settings['db_type'] ) && empty ( $_SESSION['blank_database'] ) &&
   ( $settings['db_type'] == 'ibase' || $settings['db_type'] == 'oracle' ) ) {
  etranslate ( 'Automatic installation not supported' ) ?>.
 <?php } else {
  etranslate ( 'This may take several minutes to complete' ) ?>.
  <?php if ( $_SESSION['old_program_version'] == 'new_install' &&
   empty ( $_SESSION['blank_database'] ) ){ ?>
   <form action="index.php?action=install" method="post">
      <input type="submit" value="<?php etranslate ( 'Install Database' ) ?>" />
    </form>
  <?php } else {//We're doing an upgrade ?>
  <form action="index.php?action=install" method="post">
    <input type="hidden" name="install_file" value="<?php echo $_SESSION['install_file']; ?>" />
      <input type="submit" value="<?php etranslate ( 'Update Database' ) ?>" />
    </form>
  <?php }
 } ?>
 </td></tr>
  <?php if ( ! empty ( $settings['db_type'] ) && $settings['db_type'] != 'sqlite' &&
   empty ( $_SESSION['blank_database'] ) ) { ?>
 <tr><td align="center">
   <form action="index.php?action=install" method="post" name="display">
    <input type="hidden" name="install_file" value="<?php echo $_SESSION['install_file']; ?>" />
   <input type="hidden" name="display_sql" value="1" />
      <input type="submit" value="<?php etranslate ( 'Display Required SQL' ) ?>" /><br />
 <?php if ( ! empty ( $str_parsed_sql ) ) { ?>
    <textarea name="displayed_sql" cols="100" rows="12" ><?php echo $str_parsed_sql; ?></textarea>
    <br />
    <p class="recommended"><?php
  etranslate ( 'Return to previous page after processing SQL.' ) ?></p>
 <?php } ?>
  </form>
  </td></tr>
 <?php }
} ?>
</table>
<table border="0" width="90%" align="center">
<tr><td align="right" width="40%">
  <form action="index.php?action=switch&amp;page=2" method="post">
    <input type="submit" value="<- <?php echo $backStr ?>" />
  </form>
</td><td align="center" width="20%">
  <form action="index.php?action=switch&amp;page=4" method="post">
    <input type="submit" value="<?php echo $nextStr ?> ->" <?php echo ( empty ($_SESSION['db_updated'] ) ? 'disabled' : '' ); ?> />
  </form>
</td><td align="left" width="40%">
  <form action="" method="post">
  <input type="button" value="<?php echo $logoutStr ?>" <?php echo ( empty ($_SESSION['validuser'] ) ? 'disabled' : '' ); ?>
   onclick="document.location.href='index.php?action=logout'" />
 </form>
</td></tr>
</table>
<?php } else if ( $_SESSION['step'] == 4 ) { ?>
 <table border="1" width="90%" align="center">
   <th class="pageheader" colspan="2"><?php echo str_replace ( 'XXX',
     translate ( '4' ), $wizardStr )?></th>
   <tr><td colspan="2" width="50%">
     <?php etranslate ( 'This is the final step in setting up your WebCalendar Installation.' ) ?>
   </td></tr>
   <?php if ( ! empty ( $_SESSION['tz_conversion'] ) &&
     $_SESSION['tz_conversion'] != 'Y' ) { ?>
  <th class="header" colspan="2"><?php etranslate ( 'Timezone Conversion' ) ?></th></tr>
  <tr><td colspan="2">
 <?php if ( $_SESSION['tz_conversion'] != 'Success' ) {?>
   <form action="index.php?action=tz_convert" method="post">
  <ul><li><?php
/*
translate ( 'It appears that you have' ) translate ( 'NOT' )
translate ( 'converted your existing WebCalendar event data to GMT.' )
translate ( 'If you have, you may ignore this notice and not proceed with the conversion.' )
translate ( 'If this is a new installation, you may also ignore this notice.' )
*/
echo translate ( 'It appears that you have NOT converted your existing WebCalendar...' )?>
    </li></ul>
   <div align="center">
     <input type="submit" value="<?php etranslate ( 'Convert Data to GMT') ?>:" /></div>
   </form>
 <?php } else if ( $_SESSION['tz_conversion'] == 'Success' ) { ?>
    <ul><li><?php echo $tzSuccessStr ?></li></ul>
 <?php } ?>
 </td></tr>
  <?php } //end Timezone Conversion ?>
 <th class="header" colspan="2"><?php etranslate ( 'Application Settings' ) ?></th>
 <tr><td colspan="2"><ul>
  <?php if ( empty ( $PHP_AUTH_USER ) ) {
/*
translate ( 'HTTP-based authentication was not detected' )
translate ( 'You will need to reconfigure your web server if you wish to' )
translate ( 'select Web Server from the User Authentication choices below.' )
*/
 echo '<li>'.translate ( 'HTTP-based authentication was not detected...' ) ?>
   </li>
  <?php } else {
/*
translate ( 'HTTP-based authentication was detected.' )
translate ( 'User authentication is being handled by your web server.' )
translate ( 'You should select Web Server from the list of User Authentication choices below.' )
*/
   echo '<li>'.translate ( 'HTTP-based authentication was detected...' )?>
   </li>
  <?php } ?>
 </ul></td></tr>

   <tr><td>
 <?php $will_load_admin = ( ( $_SESSION['old_program_version'] == 'new_install' )?
  $checked:''); ?>
  <table width="75%" align="center" border="0"><tr>
  <form action="index.php?action=switch&amp;page=4" method="post" enctype='multipart/form-data' name="form_app_settings">
    <input type="hidden" name="app_settings"  value="1"/>
    <td class="prompt"><?php etranslate ( 'Create Default Admin Account' ) ?>:</td>
    <td><input type="checkbox" name="load_admin" value="Yes" <?php
      echo $will_load_admin ?> /><?php
         if ( $_SESSION['admin_exists'] == 0 ) {
           echo '<span class="notrecommended"> ( ' .
           translate ( 'Admin Account Not Found' ) . ' )</span>';
         } ?></td></tr>
    <tr><td class="prompt"><?php etranslate ( 'Application Name' ) ?>:</td>
   <td>
     <input type="text" size="40" name="form_application_name" id="form_application_name" value="<?php
           echo $_SESSION['application_name'];?>" /></td></tr>
     <tr><td class="prompt"><?php etranslate ( 'Server URL' ) ?>:</td>
   <td>
     <input type="text" size="40" name="form_server_url" id="form_server_url" value="<?php
           echo $_SESSION['server_url'];?>" /></td></tr>

   <tr><td class="prompt"><?php etranslate ( 'User Authentication' ) ?>:</td>
   <td>
    <select name="form_user_inc" onChange="auth_handler()">
  <?php
   echo "<option value=\"user.php\" " .
    ( $settings['user_inc'] == 'user.php' &&
     $settings['use_http_auth'] != 'true' ? $selected : '' ) .
    ">". translate ( 'Web-based via WebCalendar (default)' ) . "</option>\n";

   echo "<option value=\"http\" " .
    ( $settings['user_inc'] == 'user.php' &&
     $settings['use_http_auth'] == 'true' ? $selected : '' ) . '>'
      //  translate ( 'Web Server' ) translate ( 'Web Server (detected)' )
      //  translate ( 'Web Server (not detected)' )
     . translate ( 'Web Server (' .
    ( empty ( $PHP_AUTH_USER ) ? 'not ' : '' ) . 'detected)' ) . "</option>\n";

   if ( function_exists ( 'ldap_connect' ) ) {
    echo '<option value="user-ldap.php" ' .
     ( $settings['user_inc'] == 'user-ldap.php' ? $selected : '' ) .
     ">LDAP</option>\n";
   }

   if ( function_exists ( 'yp_match' ) ) {
    echo '<option value="user-nis.php" ' .
     ( $settings['user_inc'] == 'user-nis.php' ? $selected : '' ) .
     ">NIS</option>\n";
   }

   echo '<option value="user-imap.php" ' .
     ( $settings['user_inc'] == 'user-imap.php' ? $selected : '' ) .
     ">IMAP</option>\n";

   echo '<option value="none" ' .
    ( $settings['user_inc'] == 'user.php' &&
     $settings['single_user'] == 'true' ? $selected : '' ) .
    '>' . translate ( 'None (Single-User)' ) . "</option>\n</select>\n";
  ?>
    </td>
   </tr>
   <tr id="singleuser">
    <td class="prompt">&nbsp;&nbsp;&nbsp;<?php echo
     $singleUserStr . ' ' . $loginStr ?>:</td>
    <td>
     <input name="form_single_user_login" size="20" value="<?php echo ( empty ( $settings['single_user_login'] ) ? '' : $settings['single_user_login'] );?>" /></td>
   </tr>
   <tr>
    <td class="prompt"><?php etranslate ( 'Read-Only' ) ?>:</td>
    <td>
     <input name="form_readonly" value="true" type="radio"
 <?php echo ( $settings['readonly'] == 'true' )? $checked : '';?> /><?php etranslate ( 'Yes' ) ?>
 &nbsp;&nbsp;&nbsp;&nbsp;
 <input name="form_readonly" value="false" type="radio"
 <?php echo ( $settings['readonly'] != 'true' )? $checked : '';?> /><?php etranslate ( 'No' ) ?>
     </td>
    </tr>
   <tr>
    <td class="prompt"><?php etranslate ( 'Environment' ) ?>:</td>
    <td>
     <select name="form_mode">
     <?php if ( preg_match ( "/dev/", $settings['mode'] ) )
         $mode = 'dev'; // development
        else
         $mode = 'prod'; //production
     ?>
     <option value="prod" <?php if ( $mode == 'prod' )
      echo $selected; echo ">" . translate ( 'Production' ) ?></option>
     <option value="dev" <?php if ( $mode == 'dev' )
      echo $selected; echo ">" . translate ( 'Development' ) ?></option>
     </select>
     </td>
    </tr>
  </table>
 </td></tr>
 <table width="80%"  align="center">
 <tr><td align="center">
  <?php if ( ! empty ( $_SESSION['db_success'] ) && $_SESSION['db_success']  && empty ( $dologin ) ) { ?>
  <input name="action" type="button" value="<?php etranslate ( 'Save Settings' ) ?>" onClick="return validate();" />
   <?php if ( ! empty ( $_SESSION['old_program_version'] ) &&
    $_SESSION['old_program_version'] == $PROGRAM_VERSION  && ! empty ( $setup_complete )) { ?>
    <input type="button" name="action2" value="<?php etranslate ( 'Launch WebCalendar' ) ?>" onClick="window.open( '../index.php', 'webcalendar');" />
   <?php }
  }
  if ( ! empty ( $_SESSION['validuser'] ) ) { ?>
  <input type="button" value="<?php echo $logoutStr ?>"
   onclick="document.location.href='index.php?action=logout'" />
  <?php } ?>
 </form>
 </td></tr></table>
<?php } ?>

</body>
</html>