<!-- colorpicker -->
<script src="javascript/colorPicker.js"></script>
<!-- heise doubleclick plugin -->
<script src="javascript/socialshareprivacy/jquery.socialshareprivacy.min.js"></script>
<script src="javascript/heisedoublclick.js"></script>
<link type="text/css" href="javascript/socialshareprivacy/socialshareprivacy/socialshareprivacy.css" rel="stylesheet" />
<!-- history -->
<!--script type="text/javascript" src="javascript/history.js"></script-->
<!-- animated css -->
<script src="javascript/animatedCss.js"></script>
<!-- form for extjs-history -->
<!--form id="history-form" class="x-hidden">
	<input type="hidden" id="x-history-field" />
	<iframe id="x-history-frame"></iframe>
</form-->
<div id="content_main">
	<div id="top">
		<div id="colorpicker">
		</div>
		<div id="canvas">
			
		</div>
		<a href="http://www.streeter.at" target="parent"><img style="vertical-align: center" 
		   src="pics/banner.jpg" alt="Mein Banner" height="56" width="234" border="1" align="center"></img></a>
		<p>Du bist der <img src="http://box1.counter-service.de/clog/streeter/cimg/" border="0" alt="Counter"></img>. Besucher auf meiner Seite.
			<div id="date">
			</div>
		</p>
	</div>
	<div id="mainlinks">
		<p><h3>Hier erstmal ein paar wichtige Links:</h3></p>
		<div id="smalllinksleft">
    <script data-lang="de" data-url="https://www.xing.com/profile/Martin_Strasser" type="XING/Share" data-counter="right"></script>
			<script>
				;(function (d, s) {
				var x = d.createElement(s),
				s = d.getElementsByTagName(s)[0];
				x.src = "https://www.xing-share.com/js/external/share.js";
				s.parentNode.insertBefore(x, s);
				})(document, "script");
			</script>
			<!--a href="https://www.xing.com/profile/Martin_Strasser" target="_blank">
				<img width="118" height="23" border="0" alt="XING" src="http://www.xing.com/img/buttons/3_de_btn.gif">
			</a-->
		</div>
		<div id="linkwrapper">
			<a title="google" href="http://www.google.de" target="_blank">
				<img src="http://www.google.com/images/logo_sm.gif" alt="google" height="50" width="150" border="0"></a>
			<a title="Hockeyweb" href="http://www.hockeyweb.de/oberliga/ol-sued" target="_blank">
				<img src="pics/hockeyweb.png" alt="Hockeyweb" height="50" width="150" border="0"</a>
			<br />
			<a title="Cannibals-Homepage" href="http://www.la-cannibals.de" target="_blank">
				<img src="pics/Cannibals.JPG" alt="Cannibals" height="50" width="150"></a>
			<a title="Eishockeyergebnisse" href="https://www.flashscore.de/eishockey/deutschland/oberliga-sud/" target="_blank">
				<img src="https://www.flashscore.de/res/_fs/image/logo/flashscore_de.2.png" alt="2. Buli-Liveergebnisse" height="50" width="150" border="0"></a>
		</div>
	</div>
	<div id="inputsearch">
		<!-- Search in google -->
		<form target="_blank" method="GET" action="http://www.google.de/search">
			<input TYPE="text" name="q" size="35" maxlength="255" value="" />
			<input TYPE="hidden" name="hl" value="de" />
			<input type="submit" name="btnG" VALUE="Suche in Google" class="submitbutton" />
		</form>
		<!-- Search in wikipedia -->
		<form name="searchform" target="_blank" action="http://de.wikipedia.org/wiki/Spezial:Search">
			<input name="search" type="text" size="35" /> 
			<input type="submit" value="Suche in Wikipedia" class="submitbutton"/>
		</form>
		<!-- Search LEO German-English Dictionary -->
		<form target="_new" method="get" action="http://dict.leo.org/ende">
			  <input type="text" name="search" size=35 maxlength=255 value="" />
			  <input type="submit" value="Suche in dict.leo" class="submitbutton" />
		</form>
	</div>
	<div id="socialshareprivacy"></div>
</div>
<script>
	showDate();
	//addToken("home.php");
</script>
