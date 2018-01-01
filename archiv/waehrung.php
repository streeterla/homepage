<html>
<head>
<link rel="stylesheet" type="text/css" href="css.css">
<title>Euro-Rechner</title>
<script type="text/javascript"><!--
function umrechnen(f) { //f ist eine Referenz
                        //auf das Formular
   var betrag = f.betrag.value;
   if (betrag.indexOf(",")!=-1) {
      betrag = betrag.substring(0, betrag.indexOf(",")) + "." +
               betrag.substring(betrag.indexOf(",")+1, betrag.length);
   }
   if (f.umrechnung[0].checked) {
      f.ausgabe.value = betrag / 1.95583;
   } else {
      f.ausgabe.value = 1.95583 * betrag;
   }
}
//--></script>
</head>
<body>
<form>
<input type="text" name="betrag" /><br />
<input type="radio" name="umrechnung" value="DMEUR" checked="checked" /> DM nach Euro | 
<input type="radio" name="umrechnung" value="EURDM" /> Euro nach DM<br />
<input type="button" value="Umrechnen!"
onclick="umrechnen(this.form)" />
<input type="text" name="ausgabe" />
</form>
</body>
</html>
