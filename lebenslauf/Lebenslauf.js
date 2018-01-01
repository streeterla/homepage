function bandoneon(content, bar)
{
	if(!content.length && !bar.length)
		return;
	content.hide();
	bar.click(function()
			{
				bar.removeClass("current");
				content.not(":hidden").slideUp("slow");
				var current = $(this);
				$(this).next()
					.not(":visible")
					.slideDown("slow", function()
							{
								current.addClass("current");
							});
			});
}

$(document).ready(function()
{
	bandoneon($(".content"), $(".bar"));
	$("#showall").click().toggle(function()
		{
			$(".content").show();
			$("#showall").text("Alle verbergen");
			$(".bar").removeClass("current");
		},
		function()
		{
			$(".content").hide();
			$("#showall").text("Alle anzeigen");
			$(".bar").removeClass("current");
		});
});
