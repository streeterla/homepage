function loadPage(obj,target)
{
	if(!obj.length && !target.length)
		return;
	obj.click(function(e)
	{
		e.preventDefault();
		var url = $(this).attr("href");
		obj.removeClass("current");
		$(this).addClass("current");
		target.fadeOut("slow", function()
		{
			target.load(url, function()
			{
				target.fadeIn("slow");
			});
		});
	});
}

$(document).ready(function()
{
	loadPage($("#othersidebar span a"),$("#othermain"));
	loadPage($("#othermain ul li a"),$("#othermain"));
});
