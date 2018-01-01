<!doctype html>
<html>

<head>
	<title>Test Image Loaded</title>
	<style>
		body { font: 12px normal Helvetica, Arial, sans-serif; }
		ul { list-style: none; }
		li { height: 20px; }
		li span { padding: 5px; float: left; width: 100px; }
		li .head { background-color: #EEE; font-weight: bold; }
		li .delay { width: 100px; }
		li .loaded { width: 100px; }
		li .img { width: 300px; }
		li img { vertical-align: bottom; }
		li p { clear: left; }
	</style>
</head>

<body>

<h1>Image load event</h1>
<?php $random = rand(1, 2500) * rand(1, 2500); ?>

<h2>Run callback when all images is loaded</h2>
<ul id="all">
	<li><p><span class="head delay">Delay</span><span class="head loaded">Loaded</span><span class="head img">Image</span></p></li>
	<li><p><span class="delay">500ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=500&<?php print $random; ?>" alt="Image 500ms delay"/></span></p></li>
	<li><p><span class="delay">1000ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=1000&<?php print $random; ?>" alt="Image 1000ms delay"/></span></p></li>
	<li><p><span class="delay">1500ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=1500&<?php print $random; ?>" alt="Image 1500ms delay"/></span></p></li>
	<li><p><span class="delay">2000ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=2000&<?php print $random; ?>" alt="Image 2000ms delay"/></span></p></li>
	<li><p><span class="delay">2500ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=2500&<?php print $random; ?>" alt="Image 2500ms delay"/></span></p></li>
</ul>

<h2>Run callback when each image is loaded</h2>
<ul id="each">
	<li><p><span class="head delay">Delay</span><span class="head loaded">Loaded</span><span class="head img">Image</span></p></li>
	<li><p><span class="delay">500ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=500&<?php print $random; ?>" alt="Image 500ms delay"/></span></p></li>
	<li><p><span class="delay">1000ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=1000&<?php print $random; ?>" alt="Image 1000ms delay"/></span></p></li>
	<li><p><span class="delay">1500ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=1500&<?php print $random; ?>" alt="Image 1500ms delay"/></span></p></li>
	<li><p><span class="delay">2000ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=2000&<?php print $random; ?>" alt="Image 2000ms delay"/></span></p></li>
	<li><p><span class="delay">2500ms</span><span class="loaded">false</span><span class="img"><img src="imgloader.php?delay=2500&<?php print $random; ?>" alt="Image 2500ms delay"/></span></p></li>
</ul>

<p><a href="javascript:location.reload();">Reload this page</a></p>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="pi.imgloaded.js"></script>
<script>
$('#all img').imagesLoaded(function (e) {
	$(this).parent().siblings('span.loaded').text('true');
}, true);

$('#each img').imagesLoaded(function (e) {
	$(this).parent().siblings('span.loaded').text('true');
});
</script>
</body>
</html>