<html>
<head>
<title>JavaScript</title>
</head>
<body>
<script language="JavaScript">
document.write("griasde<br />");
var entscheidung = confirm("Seite anzeigen?");
if (entscheidung)
{
	for (var i=0; i<=10; i++) 
	{
	   document.write("Das Quadrat von " + i + " ist: ");
	   document.write(i*i + "<br />");
	}
	var d = new Date();
	document.write("Tag: " + d.getDate() + "<br>");
	document.write("Monat: " + (d.getMonth()+1) + "<br>");
	document.write("Jahr: " + d.getFullYear() + "<p>"); 
	document.write(d.toLocaleString() + "<p>");
	document.write(location.href + "<p>");
	var name = prompt("Wie heiﬂen Sie?", "<Ihr Name>");
	if (name != null)
		alert("Sie heiﬂen " + name);
}
</script>
<a href="javascript:location.reload();">neu laden</a>
</body>
</html>