<html>
	<head>
		<title>Quickosia - die d&auml;mlichste Suchmaschine der Welt</title>
		<link type="text/css" href="quickosia.css" rel="stylesheet" />
	</head>
	<body>
		<div id="quick">
			<img src="quickosia.JPG" />
		</div>
<?php
	if(!('POST' == $_SERVER['REQUEST_METHOD']))
	{
?>
		<div id="search">
			<!-- Search in google -->
			<form method="POST" action="quickosia.php">
				<fieldset>
					<label>Quickosia</label>
					<input TYPE="text" name="q" size="35" maxlength="255" value="">
					<input TYPE="hidden" name="hl" value="de">
					<input type="submit" name="btnG" VALUE="Such den Quick">
				</fieldset>
			</form>
		</div>
<?php
	}
	else
	{
		if(isset($_POST['q']))
		{
			$searchstring = $_POST['q'];
			echo '
			<div id="erg">
				<iframe src="http://www.google.de/search?q=' . $searchstring . '&iframe=true&width=95%">keine Iframes erlaubt</iframe>
			</div>
			';
		}
		else
		{
			echo 'Du hast keinen Text eingegeben - Depp!';
		}
	}
?>
		<div id="impressum">
			<a href="http://www.streeter.at/impressum.php">Impressum</a>
		</div>
	</body>
</html>