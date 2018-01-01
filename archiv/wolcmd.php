<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.fh-landshut.de/~mstrass3/ich.html">
<HTML>
  <HEAD>
    <TITLE> MARTIN STRASSERS kleine Homepage - ICH </TITLE>
    <link rel="stylesheet" type="text/css" href="css.css">
  </HEAD>
  <BODY>
    <p>
      Mit dem Tool wolcmd ist es m&ouml;glich, einen Computer &uuml;ber das Netzwerk von einem anderem Computer aus zu starten.<br> 
      Praktisch ist es vor allem, anschlie&szlig;end per Remote auf dem anderen Computer zu arbeiten. <br><br>

      Am einzuschaltenden Computer m&uuml;ssen folgende Einstellungen vorgenommen werden:<br>
      Im Ger&auml;temanager unter Netzwerkadapter -> Rechtsklick auf die Netzwerkkarte -> Eigenschaften -> Reiter "Erweitert" 
      muss bei "Wake Up Capabilities" der Wert "Magic Frame" eingestellt werden. Im Reiter "Energieverwaltung" muss die Option 
      "Ger&auml;t kann den Computer aus dem Standbymodus aktivieren" abgehackt sein.<br>
      Im BIOS muss unter Power -> PowerUpControl die Option "Power Up On PCI-Card" aktiviert werden.<br><br>

      Das war eigentlich schon alles. Jetzt kann der PC von einem Fremdrechner aus mit dem Befehl 
      wolcmd [mac address] [ipaddress] [subnet mask] [port number] hochgefahren werden. 
      Die Portnummer ist im Normalfall immer 7. MAC-Adresse, IP-Adresse und Subnetzmaske sind über den Befehl ipconfig /all zu bestimmen.<br><br>

      Ein Beispiel:<br>
      J:\WolCmd.exe 0013729C68BE 10.203.100.7 255.255.255.255<br><br><br>

      Das Tool steht <a title="Depicus" href="http://www.depicus.com/wake-on-lan/wake-on-lan-cmd.aspx" target="_blank">hier</a> zum Download bereit. 
    <p>
  </BODY>
</HTML>
