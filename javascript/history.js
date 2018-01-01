$(document).ready(function()
{
	$.address.init().change(function(event)
	{
		console.log("change");
		$("#drumrum").load($("#navi_main span a").attr("href"));
	}).externalChange(function(event)
	{
		console.log("externalchange");
		$("#drumrum").load($("#navi_main span a").attr("href"));
	});
	
});