<?php
/*if(isset($_POST[cookies]))
{
	setcookie("bslogin", "autoeinloggen");
}*/
if (isset($_POST[login]) && isset($_POST[passwort]))
{
	include("db.php");
	//db string to get the username
	$loginquery = 'select user from logins where user = "' . $_POST[login] . '"';
	//get username
	$login = mysql_query($loginquery) or die(mysql_error());
	//db string to get the password
	$passwdquery = 'select password from logins where password = "' . $_POST[passwort] . '"';
	//get the password
	$passwd = mysql_query($passwdquery) or die(mysql_error());
	//load xml file containing accounts
	$users = simplexml_load_file('accounts.xml');
	//check each account
	for($i=0,$size=count($users->account);$i<$size;$i++)
	{
		if((($users->account[$i]->login == $_POST[login]) && ($users->account[$i]->passwort == $_POST[passwort]) && (mysql_result($login, 0, "user") == $_POST[login]) && (mysql_result($passwd, 0, "password") == $_POST[passwort]))) 
		{
			if(isset($_POST[cookies]))
			{
				setcookie("bslogin", "autoeinloggen", time()+(3600*24));
			}
			header("Location: http://www.streeter.at/berufsschule");
		}
	}
	//enable error reporting for all errors
	error_reporting(E_ALL);
	//close db connecten
	mysql_close();
}
?>
<html>
  <head>
    <meta name="robots" content="noindex">
    <title>Registrierung f&uuml;r Berufsschuldokumente</title>
    <link rel="stylesheet" type="text/css" href="css.css">
	<link type="text/css" href="javascript/ext/ext-4.0.5/resources/css/ext-all.css" rel="stylesheet" />
	<!-- extjs -->
	<script src="javascript/ext/ext-4.0.5/ext-all.js"></script>
	<script src="javascript/ext/ext-4.0.5/locale/ext-lang-de.js"></script>
	<script>
		Ext.onReady(function()
		{
			//Fenster definieren
			Ext.define("EinfachOOP.HTMLWindow",
			{
				extend: "Ext.window.Window",
				title: "Registrierung erfolgreich!",
				layout: "fit",
				html: "",
				width: 300,
				height: 200,
				initComponent: function()
				{
					this.callParent(arguments);
					this.add(
/*						{
							html: this.html
						},
*/					{
						xtype: "button",
						text: "Schlieﬂen",
						scope: this,
						handler: this.logAndClose
					});
					console.debug("Fenster erstellt");
				},
				logAndClose: function(wnd)
				{
					console.log("geschlossen");
					this.close();
				},
				modal: true
			});
			
			var hw = Ext.create("EinfachOOP.HTMLWindow",
			{
				html: "<u>Window Test!</u>"
			});
				
			
			Ext.create("Ext.form.Panel",
			{
				id: "extForm",
				renderTo: Ext.getBody(), //"formular",
				xtype: "fieldcontainer",
				standardSubmit: true,
				url: "mailto:streeter@vr-web.de",
				width: 300,
				title: "Registrieren f&uuml;r Berufsschuldokumente",
				items: [
				{
					fieldLabel: "Vorname",
					xtype: "textfield",
					name: "vorname",
					grow: true,
					growMin: 200,
					emptyText: "Vorname",
					allowBlank: false
				},
				{
					fieldLabel: "Nachname",
					xtype: "textfield",
					name: "name",
					grow: true,
					growMin: 200,
					emptyText: "Nachname",
					allowBlank: false
				},
				{
					fieldLabel: "Benutzername",
					xtype: "textfield",
					name: "benutzername",
					grow: true,
					growMin: 200,
					emptyText: "Benutzername",
					allowBlank: false
				},
				{
					fieldLabel: "Email",
					xtype: "textfield",
					name: "email",
					grow: true,
					inputType: "email",
					growMin: 200,
					allowBlank: false
					//regExp: "\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b"
				},
				{
					fieldLabel: "Passwort",
					xtype: "textfield",
					name: "passwort",
					inputType: "password",
					grow: true,
					growMin: 200,
					allowBlank: false,
				}],
				buttons: [
				{
					text: "Abschicken",
					handler: function()
					{
						if(this.up('form').getForm().isValid())
						{
							console.debug("abgeschickt");
							hw.show();
							this.up('form').getForm().submit();
						}
					}
				},
				{
					text: "Zur&uuml;cksetzen",
					handler: function()
					{
						console.debug("reset");
						this.up('form').getForm().reset();
					}
				},
				{
					text: "Zur&uuml;ck",
					handler: function()
					{
						console.debug("zur&uuml;ck");
						history.back();
					}
				}]
			});
		});
	</script>
  </head>
  <body>
    <div align="center">
      <!--form action="mailto:streeter@vr-web.de" method="post" name="Formular" id="formular" enctype="text/plain">
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
      </form-->
    </div>
  </body>
</html>    
