$(document).ready(function()
{
	//Tooltipps initialisieren
	Ext.QuickTips.init();
	//Colorpicker erstellen
	Ext.create("Ext.picker.Color",
	{
		id: "changecolor",
		value: "cc0000",
		listeners:
		{
			select: function(pickerCmp, selectedColor)
			{
				document.bgColor = selectedColor;
				//document.getElementById("drumrum").style.backgroundColor = selectedColor;
				//alert("Text: " + document.getElementById("colorpicker").innerHTML);
				console.debug("Farbe gewählt: " + selectedColor);
				setCookie("selectedColor", selectedColor, 365);
			}
		},
		renderTo: document.getElementById("colorpicker")
	});
	
	
	//Tooltipp hinzufügen
	Ext.create("Ext.tip.ToolTip",
	{
		target: "colorpicker",
		html: "<b>Hintergrundfarbe &auml;ndern</b>",
		//autoHide: true,
		//dismissDelay: 2000,
		closable: true,
		anchor: "top",
		trackMouse: true
	});
});
