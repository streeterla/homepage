//loads the content of a link into the target
function loadPage(obj,target)
{
	if(!obj.length && !target.length)
		return;
	obj.click(function(e)
	{
		e.preventDefault();		
		var url = $(this).attr("href");		
		$(this).css({color:"red"});		
		target.fadeOut("fast", function()
		{
			target.load(url, function()
			{
				target.fadeIn("fast");
			});
		});	
	});
}

//toggles a class to a div
function animatedCss()
{
	$("#date").toggleClass("date", 5000);
}

//sidemaps effects
function mainmenu()
{
	$(" #sitemapNav ul ").css({display: "none"}); // Opera Fix
	$(" #sitemapNav li").hover(function(){
			$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
			},function(){
			$(this).find('ul:first').css({visibility: "hidden"});
			});
}

$(document).ready(function()
{
	$("#drumrum").load("home.php");
	loadPage($("#navi_main span a"),$("#drumrum"));
	loadPage($("#sitemapNav li ul li a"),$("#drumrum"));
	loadPage($("#sitemapNav li ul li ul li a"),$("#drumrum"));
	mainmenu();
	animatedCss();
});