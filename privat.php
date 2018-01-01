<html>
  <head>
    <meta name="robots" content="noindex">
    <title>Privater Bereich</title>
	<link type="text/css" href="javascript/ext/ext-4.0.5/resources/css/ext-all.css" rel="stylesheet" />
	<!-- extjs -->
	<script src="javascript/ext/ext-4.0.5/ext-all.js"></script>
	<script src="javascript/ext/ext-4.0.5/locale/ext-lang-de.js"></script>
    <link rel="stylesheet" type="text/css" href="css.css">
	<!-- jQuery -->
	<script src="javascript/jquery/jquery-2.0.0.min.js"></script>
  </head>
  <body>
<?php
if ($_POST[benutzer] == "jawerwoi" && $_POST[passwort] == "jaihoid")
{
?>
    <center>
      <iframe name="googlecalendar" src="http://www.google.com/calendar/embed?src=martin.strasser%40googlemail.com&ctz=Europe/Rome" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </center>
<?php
}
else
{
?>
<script>
	Ext.onReady(function()
	{
		//Fenster definieren
		Ext.define("EinfachOOP.HTMLWindow",
		{
			extend: "Ext.window.Window",
			title: "Falscher login",
			//layout: "fit",
			//html: "",
			minimizable : true,
			maximizable : true,
			width: 300,
			height: 200,
			initComponent: function()
			{
				this.callParent(arguments);
				this.add([
				{
						html: this.html
				},
				{
					xtype: "button",
					text: "Schlieﬂen",
//					scope: this,
					handler: this.logAndClose
				}]);
				console.debug("Fenster erstellt");
			},
/*			listeners :
			{
				"beforeclose": 
				{
					$("#drumrum").load("home.php");
				}
			},*/
			logAndClose: function(wnd)
			{
				console.log("geschlossen");
				//close();
				$(document.body).load("index.html");
			},
			modal: true
		});
			
		var hw = Ext.create("EinfachOOP.HTMLWindow",
		{
			html: "Permission denied - <br />oder f&uuml;r diejenigen, die des Englischen nicht so m&auml;chtig sind: <br />Du Depp werst hoid woi a foischs Passwort eigem hom!!!"
		});
		hw.show();
	});
</script>
<?php
}
 ?>
</html>
