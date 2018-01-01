<?php
	if($_GET["q"])
	{
		$handle = fopen("todo.txt", "a");
		fwrite($handle, ";" .$_GET["q"]);
		fclose($handle);
	}
?>