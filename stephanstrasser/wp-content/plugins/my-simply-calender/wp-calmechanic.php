<?php
/*
Plugin Name: My Simply Calender
Plugin URI: http://www.adityasubawa.com/blog/post/60/install-my-simply-calender-on-your-wordpress.html
Description: Display Simply Calender for WordPress.
Version: 1.2
Author: Aditya Subawa
Author URI: http://www.adityasubawa.com
*/
class wp_calmechanic extends WP_Widget{
    function __construct(){
     $params=array(
            'description' => 'Display Simply Calender', //deskripsi  dari plugin  yang di tampilkan
            'name' => 'My Simply Calender'  //title dari plugin
        );
        parent::__construct('wp_calmechanic', '', $params); 
    }
    public function form($instance){
       ?>
<p><label for="<?php echo $this->get_field_id('title'); ?>">Title: <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo attribute_escape($title); ?>" /></label></p>
<p><label for="<?php echo $this->get_field_id('author_credit'); ?>"><?php _e('Give credit to plugin author?'); ?><input type="checkbox" class="checkbox" <?php checked( $instance['author_credit'], 'on' ); ?> id="<?php echo $this->get_field_id('author_credit'); ?>" name="<?php echo $this->get_field_name('author_credit'); ?>" /></label></p>
<p><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ZMEZEYTRBZP5N&lc=ID&item_name=Aditya%20Subawa&item_number=426267&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted" target="_blank"><img src="https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif" alt="<?_e('Donate')?>" /></a></p>
   <?php
    }
    public function widget($args, $instance){
      extract($args, EXTR_SKIP);
    $authorcredit = isset($instance['author_credit']) ? $instance['author_credit'] : false ; // give plugin author credit
    echo $before_widget;
    $title = empty($instance['title']) ? '' : apply_filters('widget_title', $instance['title']);
    if (!empty($title))
      echo $before_title . $title . $after_title;;?>
	  <?php
date("Y-m-d H:i:s");
$d=date('d');
$m=date('m');
$y=date('Y');
$nm=date('F');
$bln=$_GET['bln'];
$thn=$_GET['thn'];
if (($bln !="") && ($thn!=""))
{
$m=date('m',mktime(0,0,0,$bln,1,$thn));
$y=date('Y',mktime(0,0,0,$bln,1,$thn));
$nm=date('F',mktime(0,0,0,$bln,1,$thn));
}
$mbef=$m-1;
$maft=$m+1;
$nmmbef=date('M',mktime(0,0,0,$mbef,1,$thn));
$nmmaft=date('M',mktime(0,0,0,$maft,1,$thn));
$ybef=$y;
$yaft=$y;
if ($mbef<1) {$mbef=12; $ybef=$y-1;}
if ($maft>12) {$maft=1; $yaft=$y+1;}
$jmlkosong=date('w',mktime(0,0,0,$m,1,$y));
echo "<style type=\"text/css\">
.calmechanic{
display: block;
padding:2px;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border: 1px solid #9BA0AF;
color: #082B33;
text-indent: 10px;
font-size: 14px;
}
.calmechanic caption{
text-align:center;
}
.calmechanic th{
border: 1px solid #9BA0AF;
color: #dedede;
text-align:left;
text-indent: 10px;
font-size: 14px;
background: #333;
}
.calmechanic td {
text-align:center;
}
</style>";
echo "<table summary=\"Calendar\" class=\"calmechanic\">";
echo "<caption>$nm $y</caption>";
echo "<thead>";
echo "<tr>";
echo "<th abbr=\"Monday\" scope=\"col\" title=\"Monday\">M</th>";
echo "<th abbr=\"Tuesday\" scope=\"col\" title=\"Tuesday\">T</th>";
echo "<th abbr=\"Wednesday\" scope=\"col\" title=\"Wednesday\">W</th>";
echo "<th abbr=\"Thursday\" scope=\"col\" title=\"Thursday\">T</th>";
echo "<th abbr=\"Friday\" scope=\"col\" title=\"Friday\">F</th>";
echo "<th abbr=\"Saturday\" scope=\"col\" title=\"Saturday\">S</th>";
echo "<th abbr=\"Sunday\" scope=\"col\" title=\"Sunday\">S</th>";
echo "</tr>";
echo "</thead>";
echo "<tfoot>";
echo "<tr>";
echo "<td class=\"pad\" abbr=\"October\" colspan=\"3\" id=\"prev\"><a href=\"?bln=$mbef&thn=$ybef\" title=\"\">&laquo; $nmmbef</a></td>";
echo "<td class=\"pad\">&nbsp;</td>";
echo "<td class=\"pad\" abbr=\"December\" colspan=\"3\" id=\"next\"><a href=\"?bln=$maft&thn=$yaft\" title=\"\">$nmmaft &raquo;</a></td>";
echo "</tr>";
echo "</tfoot>";
echo "<tbody>";
$jmlhari=date('t',mktime(0,0,0,$m,1,$y));
for ($i=1; $i<=$jmlkosong; $i++)
{
echo "<td>&nbsp;</td>";
}
$kolom=$jmlkosong;
for ($i=1; $i<=$jmlhari;$i++)
{
$kolom=$kolom+1;
$warna="#000000";
if ($kolom=='7') {$warna="#FF0000";}
if (($i==date('j')) && ($m==date('m')) && ($y==date('Y')))
{
$warna="#0000FF";
}
$clk="";
$cur="";
echo "<td onClick=\"$clk\" style=\"$cur\"><font color=\"$warna\"><div align=\"center\" class=\"style1\">$i</div></font></td>";
if ($kolom=='7')
{
echo '</tr><tr>';
$kolom=0;}
}
echo "</tbody>";
echo "</table>";
	 if ($authorcredit) { ?>
			<p style="font-size:10px;">
				Plugins by <a href="http://www.adityasubawa.com" title="Bali Web Design">Bali Web Design</a>
			</p>
			<?php }
	echo $after_widget;
  }
}
add_action('widgets_init', 'register_wp_calmechanic');
function register_wp_calmechanic(){
    register_widget('wp_calmechanic');
}
?>
