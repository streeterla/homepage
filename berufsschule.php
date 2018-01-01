<?php
	$cookie = $_COOKIE["bslogin"];
	if($cookie == "autoeinloggen")
	{
		header("Location: http://www.streeter.at/berufsschule");
	}
?>
<link rel="stylesheet" type="text/css" href="css.css">
<link type="text/css" href="javascript/ext/ext-4.0.5/resources/css/ext-all.css" rel="stylesheet" />
<!-- extjs -->
<script src="javascript/ext/ext-4.0.5/ext-all.js"></script>
<script src="javascript/ext/ext-4.0.5/locale/ext-lang-de.js"></script>
<!-- jQuery -->
<script src="javascript/jquery/jquery-2.0.0.min.js"></script>
<script>
	$(document).ready(function()
	{
			Ext.create("Ext.form.Panel",
			{
				id: "extForm",
				renderTo: "bslogintop", 
				xtype: "fieldcontainer",
				url: "bsfiles.php",
				width: 300,
				title: "Login zu den Berufsschuldokumenten:",
				standardSubmit: true,
				items: [
				{
					fieldLabel: "Login",
					xtype: "textfield",
					focus: true,
					name: "login",
					grow: true,
					growMin: 200,
					allowBlank: false
				},
				{
					fieldLabel: "Passwort",
					xtype: "textfield",
					inputType: "password",
					name: "passwort",
					grow: true,
					growMin: 200,
					allowBlank: false,
				},
				{
					fieldLabel: "Automatisch einloggen",
					xtype: "checkboxfield",
					name: "cookies",
					inputType: "checkbox",
				}],
				buttons: [
				{
					text: "Abschicken",
					handler: function()
					{
						console.debug("abgeschickt");
						this.up('form').getForm().submit();
					}
				},
				{
					text: "Zur&uuml;cksetzen",
					handler: function()
					{
						console.debug("reset");
						this.up('form').getForm().reset();
					}
				}],
				keys: [
				{ 
					key: [Ext.EventObject.ENTER], 
					handler: function() 
					{
						console.debug("abgeschickt");
						this.up('form').getForm().submit();
					}		
				}]
			});
	});
</script>
<div id="bslogin">
	<div id="bslogintop"></div>
	<p>Falls du noch keinen Account hast, kannst du dich <a href="bsfiles.php" title="zur Registrierung">hier registrieren</a></p>
</div>
