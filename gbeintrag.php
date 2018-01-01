<?php
class Eintrag
{
	//fields
	public $autor;
	public $datum;
	public $inhalt;
	public $row = array();
	
	
	//constutors
	//public function __construct() {}
	public function __construct($autor, $datum, $inhalt, $row)
	{
		echo var_dump($row);
		$this->$autor = $autor;
		$this->$datum = $datum;
		$this->$inhalt = $inhalt;
		$this->$row = $row;
	}
	
	//write entry to guestbook
	public function writeEntry()
	{
		echo '<div class="beitrag">'."\n";
        echo '    <span class="autor">'.htmlentities($row[$autor])."</span>\n";
        echo '    <span class="datum">'.$row[$datum]."</span>\n";
        echo "    <p>\n";
        echo '	  <span class="inhalt">' . nl2br(htmlspecialchars(preg_replace('~\S{30}~', '\0 ', $row[$inhalt]))) . '</span>';
        echo "    </p>\n";
        echo "</div>\n";
	}
}
?>