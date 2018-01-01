<?php
if(isset($_POST[cookies]))
{
	setcookie("bslogin", "autoeinloggen");
}
include("db.php");
$loginquery = 'select user from logins where user = "' . $_POST[login] . '"';
$login = mysql_query($loginquery);
$passwdquery = 'select password from logins where password = "' . $_POST[passwort] . '"';
$passwd = mysql_query($passwdquery);
$users = simplexml_load_file('accounts.xml');
for($i=0,$size=count($users->account);$i<$size;$i++)
if(($users->account[$i]->login == $_POST[login]) && ($users->account[$i]->passwort == $_POST[passwort]) && (mysql_result($login, 0, "user") == $_POST[login]) && (mysql_result($passwd, 0, "password") == $_POST[passwort])) 
{
	header("Location: http://www.streeter.at/berufsschule");
}
mysql_close();
?>
<html>
  <head>
    <meta name="robots" content="noindex">
    <title>Registrierung f&uuml;r Berufsschuldokumente</title>
    <link rel="stylesheet" type="text/css" href="css.css">
  </head>
  <body>
    <div align="center">
      <p>Hier kannst du dich f&uuml;r die Berufsschuldokumente registrieren:</p>
      <form action="mailto:streeter@vr-web.de" method="post" name="Formular" enctype="text/plain">
        <table border="0" cellpadding="3" cellspacing="2">
          <tr>
            <td>Name: </td>
            <td><input type="text" name="name" size="20"</td>
          </tr>
          <tr>
            <td>Vorname: </td>
            <td><input type="text" name="vorname" size="20"</td>
          </tr>
          <tr>
            <td>Benutzername:</td>
            <td><input type="text" name="benutzername" size="20"</td>
          </tr>
          <tr>
            <td>Email-Adresse: (optional)</td>
            <td><input type="text" name="email" size="20"</td>
          </tr>
          <tr>
            <td>Passwort:</td>
            <td><input type="password" name="passwort" sitze="20"</td>
          </tr>
	  <tr>
	    <td>
              <table border="0" cellpadding="3" cellspacing="2">
                <tr>
	          <td><input type="submit" name="next" value="Abschicken"></td>
	          <td><input type="reset" name="reset" value="Zur&uuml;cksetzen"></td>
                </tr>
              </table>
            </td>
            <td><a href="javascript:back();"><input type="button" value="zur&uuml;ck zum Login"></a></td>
          </tr>
        </table>
      </form>
    </div>
  </body>
</html>    

