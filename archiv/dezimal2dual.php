<html>
  <head>
    <title>Umrechnen einer Dezimalzahl in eine Dualzahl</title>
    <link rel="stylesheet" type="text/css" href="css.css" />
    <script type="text/javascript"><!--

	function umrechnen(f)
	{
		var rest = f.betrag.value;
		var wrongDual = "";
		var wrightDual = "";
		while (dez != 0)
		{
			rest = dez%2;
			dez = parseInt(dez/2);
			wrongDual+= "" + rest;
		}
		var ergArray = wrongDual;
		for(var i = ergArray.length-1; i >= 0; i--)
		{
			wrightDual+= ergArray[i];
		}
		f.ausgabe.value = wrightDual;
	}
//--></script>
  </head>
  <body>
    <form>
      <input type="text" name="betrag" />  
      <input type="button" value="Umrechnen!" onclick="umrechnen(this.form)" />  
      <input type="text" name="ausgabe" />
    </form>
  </body>
</html>
  
