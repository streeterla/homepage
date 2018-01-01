function note(f)
{
//	$("div#Punkte").hide();
//	$("div#Note").hide();
	
	$("div#OK").addClass("roundbutton");
	
	var ga1 = f.GA1.value * 1;
	var ga2 = f.GA2.value * 1;
	var wiso = f.WISO.value * 1;
	
	var punkte = ((2 * (ga1 + ga2)) + wiso) /  5;
	var note;
	
	f.Punkte.value = punkte;
	
	if(punkte >= 92)
		note = 1;
	if(punkte < 92 && punkte >= 81)
		note = 2;
	if(punkte < 81 && punkte >= 67)
		note = 3;
	if(punkte < 67 && punkte >= 50)
		note = 4;
	if(punkte < 50 && punkte >= 30)
		note = 5;
	if(punkte < 30)
		note = 6;
		
	f.Note.value = note;
	
	$("div#Punkte").fadeIn("slow");
	$("div#Note").fadeIn("slow");
	$("div#Nochmal").fadeIn("slow");
}

function nochmal(g)
{
	$("div#OK").removeClass("roundbutton");
	$("div#Punkte").hide();
	$("div#Note").hide();
	$("div#Nochmal").hide();
	g.GA1.value = "";
	g.GA2.value = "";
	g.WISO.value = "";
}


jQuery(document).ready(function()
{
	$("div#Punkte").hide();
	$("div#Note").hide();
	$("div#Nochmal").hide();
});


