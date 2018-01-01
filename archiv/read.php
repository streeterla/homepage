<?php
	$handle = fopen("todo.txt", "r");
	if($handle)
	{
		while(!feof($handle))
		{
			$buffer = fgets($handle, 4096);
			echo $buffer;
		}
		fclose($handle)
	}
?>