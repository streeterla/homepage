<html>
  <head>
    <title>Login-Bereich zu Berufsschuldokumenten</title>
    <link rel="stylesheet" type="text/css" href="css.css">
  </head>
  <body>
    <div align="center">
      <p>Hier kannst Du dich anmelden, um zu den Berufsschuldokumenten zu gelangen:</p>
      <form action="bsfiles.php" method="POST">
        <table border="0" cellpadding="3" cellspacing="2">
          <tr>
            <td>Login:</td>
            <td><input name="login" size="20"></td>
          </tr>
          <tr>
            <td>Passwort:</td>
            <td><input type="password" name="passwort" size="20"></td>
          </tr>
          <tr>
            <td></td>
            <td><table border="0" cellpadding="3" cellspacing="2"><tr><td>
            <td><input type="submit" name="next" value="Login"></td>
            <td><input type="reset" name="next" value="Zur&uuml;cksetzen"/></td></tr></table></td>
          </tr>
        </table>
      </form>
    <p>Falls du noch keinen Account hast, kannst du dich <a href="bsfiles.php" title="zur Registrierung">hier registrieren</a></p>
    </div>
  </body>
</html>