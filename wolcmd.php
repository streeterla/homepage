<h4><u>Einf&uuml;hrung:</u></h4>
Mit dem Tool wolcmd ist es m&ouml;glich, einen Computer &uuml;ber das Netzwerk von einem anderem Computer aus zu starten.
Praktisch ist es vor allem, anschlie&szlig;end per Remote auf dem anderen Computer zu arbeiten. 
<h4><u>Beschreibung:</u></h4>
Am einzuschaltenden Computer m&uuml;ssen folgende Einstellungen vorgenommen werden:
Im Ger&auml;temanager unter Netzwerkadapter -> Rechtsklick auf die Netzwerkkarte -> Eigenschaften -> Reiter "Erweitert" muss bei "Wake Up Capabilities" der Wert "Magic Frame" eingestellt werden. Im Reiter "Energieverwaltung" muss die Option "Ger&auml;t kann den Computer aus dem Standbymodus aktivieren" abgehackt sein.
Im BIOS muss unter Power -> PowerUpControl die Option "Power Up On PCI-Card" aktiviert werden.<p />
Das war eigentlich schon alles. Jetzt kann der PC von einem Fremdrechner aus mit dem Befehl wolcmd [mac address] [ipaddress] [subnet mask] [port number] hochgefahren werden. Die Portnummer ist im Normalfall immer 7. MAC-Adresse, IP-Adresse und Subnetzmaske sind &uuml;ber den Befehl ipconfig /all zu bestimmen.
<h4><u>Beispiel:</u></h4>
J:\WolCmd.exe 0013729C68BE 10.203.100.7 255.255.255.255
<h4><u>Download:</u></h4>
Das Tool steht <a title="Depicus" href="http://www.depicus.com/wake-on-lan/wake-on-lan-cmd.aspx" target="_blank">hier</a> zum Download bereit.