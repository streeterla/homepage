<html>
  <head>
    <title>Privater Login-Bereich</title>
    <link rel="stylesheet" type="text/css" href="css.css">
  </head>
  <body>
    <div align="center">
      <form action="privat.php" method="POST">
        <table border="0" cellpadding="3" cellspacing="2">
          <tr>
            <td>Benutzer:</td>
            <td><input name="benutzer" size="20"></td>
          </tr>
          <tr>
            <td>Passwort:</td>
            <td><input type="password" name="passwort" size="20"></td>
          </tr>
          <tr>
            <td></td>
            <td><table border="0" cellpadding="3" cellspacing="2"><tr><td>
            <td><input type="submit" name="next" value="Login"></td>
            <td><input type="reset" name="next" value="Zur&uuml;cksetzen></td></tr></table></td>
          </tr>
        </table>
      </form>
    </div>
  </body>
</html>