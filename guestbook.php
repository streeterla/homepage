<html>
	<head>
		<title>Ins G&auml;stebuch eintragen</title>
		<link rel="stylesheet" type="text/css" href="css.css">
		<link type="text/css" href="javascript/ext/ext-4.0.5/resources/css/ext-all.css" rel="stylesheet" />
		<!-- extjs -->
		<script src="javascript/ext/ext-4.0.5/ext-all.js"></script>
		<script src="javascript/ext/ext-4.0.5/locale/ext-lang-de.js"></script>
		<!-- jQuery -->
		<script src="javascript/jquery/jquery-2.0.0.min.js"></script>
	</head>
	<body>
		<div id="guestbook">
		</div>
			<script>
				$(document).ready(function()
				{
						Ext.create("Ext.form.Panel",
						{
							id: "extForm",
							renderTo: "guestbook", 
							xtype: "fieldcontainer",
							url: "guestbook.php",
							width: 800,
							title: "Dein Eintrag ins G&auml;stebuch:",
							standardSubmit: true,
							items: [
							{
								fieldLabel: "Autor",
								xtype: "textfield",
								focus: true,
								name: "Autor",
								grow: true,
								growMin: 200,
								allowBlank: false
							},
							{
								fieldLabel: "Nachricht",
								xtype: "htmleditor",
								grow: true,
								width: 800,
								name: "Inhalt",
								allowBlank: false
							}],
							buttons: [
							{
								text: "Abschicken",
								name: "formaction",
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
			<!--form action="guestbook.php" method="post">
				<fieldset>
					<legend>Ins G&auml;stebuch Eintragen</legend>
					<label>Name: <input type="text" name="Autor" /></label>
					<label>Text: <textarea name="Inhalt" rows="6" cols="40"></textarea></label>
					<label>{FRAGE}: <input type="text" name="Antwort"/></label>
					<input type="submit" name="formaction" value="Eintragen" />
				</fieldset>
			</form-->
			<div id="messages">
<?php
include("db.php");
include("gbeintrag.php");
error_reporting(E_ALL);
ini_set('display_errors', 1);
//new entry
if ('POST' == $_SERVER['REQUEST_METHOD']) 
{	
    if (!isset($_POST['Autor'], $_POST['Inhalt'])) 
	{
        die ('Benutzen sie nur Formulare von der Homepage.');
	}
	//trim inputs
	$autor = trim($_POST['Autor']);
	$inhalt = trim($_POST['Inhalt']);
	//check whether each input was filled
	if (('' == $autor) or 
        ('' == $inhalt) )
	{
        die ('Bitte füllen sie das Formular vollständig aus.');
    }
	//create query
	$query = sprintf('INSERT INTO Guestbook (Autor, Datum, Inhalt)
			          VALUES ("%s", NOW(), "%s")', mysql_real_escape_string($autor), mysql_real_escape_string($inhalt));
	//execute query
	mysql_query($query);

	//read start page
	echo "<div id='maindiv'>";
	readfile("index.html");
	echo "</div>";
}
//get existing entries
//sql string
$sql = 'SELECT Datum, Autor, Inhalt 
		FROM Guestbook
		ORDER BY Datum DESC';
//create query
$result = mysql_query($sql) or die("keine Abfrage möglich: " . mysql_error);
	
//check if there are entities in database
if(mysql_num_rows($result))
{
	//for all entities
	while($row = mysql_fetch_assoc($result))
	{
/*		echo '<div class="beitrag">'."\n";
        echo '    <span class="autor">'.htmlentities($row['Autor'])."</span>\n";
        echo '    <span class="datum">'.$row['Datum']."</span>\n";
        echo "    <p>\n";
        echo '	  <span class="inhalt">' . nl2br(htmlspecialchars(preg_replace('~\S{30}~', '\0 ', $row['Inhalt']))) . '</span>';
        echo "    </p>\n";
        echo "</div>\n";
*/		
		$entry = new Eintrag('Autor', 'Datum', 'Inhalt', $row);
		$entry->writeEntry();
	}
}
else
{
	echo '<p class="info">Es sind keine Gästebucheinträge vorhanden</p>';
}	
?>
		</div>
	</body>
</html>