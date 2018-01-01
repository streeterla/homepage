<h4><u>Einf&uuml;hrung:</u></h4>
DotNET-Anwendungen k&ouml;nnen lokal problemlos angewandt werden. Im Netzwerk z.B. auf Netzlaufwerken ist dies nicht mehr ganz so einfach. 
Die Anwendungen brauchen erst die n&ouml;tigen Rechte, um im LAN ausgef&uuml;hrt werden zu k&ouml;nnen. In Version 1.0 und 1.1 des DotNET-Frameworks
gab es in der Windowsverwaltung noch Einstellungsprogramme mit grafischer Oberfl&auml;che, in der den DotNET-Anwendungen die ben&ouml;tigen Rechte 
zugewiesen werden konnten. Diese geh&ouml;ren seit DotNET2.0 leider der Vergangenheit an. Mit Konsolenanwendungen ist es aber noch m&ouml;glich, 
die richtigen Einstellungen zu treffen. Die meisten dieser Konsolenanwendungen sind aber nur in den professional-Versionen des DotNET-Frameworks enthalten. 
Das Tool "caspol" steht aber immer zur Verf&uuml;gung. <br>
Zum einfacheren Umgang mit dem caspol-Tool habe ich zwei batch-Skripte erstellt. <br>
Hier das batch-Skript zum <b>Hinzuf&uuml;gen</b> der Rechte an die entsprechende Anwendung:<br><br>
<code>@echo off<br>
	SET CASPOL=.\caspol.exe<br>
	%caspol% -m -addgroup 1.2 -url %1 FullTrust -name %2<br><br>
</code>
<h4><u>Beschreibung:</u></h4>
Mit dem Befehlt "SET CASPOL=.\caspol.exe" definiere ich eine Variable. Sie zeigt auf den das caspol-Tool.<br>
In diesem Beispiel muss das Batch-Skript also im selben Verzeichnis wie das caspol-Tool liegen, typischerweise im Verzeichnis des DotNet-Frameworks.<br>
In der letzten Zeile rufe ich die Variable auf. Der Parameter -m steht f&uuml;r machine. Es werden also Rechte auf Computerebene vergeben.<br>
"Addgroup" f&uuml;gt eine neue Sicherheitsgruppe hinzu. Hinter "url" folgt der Pfad zur DotNET-Anwendung, der die Rechte zugewiesen werden sollen.<br>
Um DotNET-Anwendungen von einem Netzlaufwerk aus laufen zu lassen ist die "FullTrust"-Richtlinie erforderlich.<br>
Zuletzt wird der Sicherheitsrichtlinie ein Name zugewiesen.
<h4><u>Verwendung:</u></h4>
&Uuml;ber "start" -> "ausf&uuml;hren -> "cmd" l&auml;sst sich die Eingabeaufforderung &ouml;ffnen. <br>
Anschlie&szlig;end muss mit "cd" auf der Verzeichnis, in dem das Batch-Skript und das caspol-Tool liegen, gewechselt werden. <br>
Zuletzt ruft man das Batch-Skript gefolgt vom Pfad auf die DotNET-Anwendung und einem gew&auml;hlten Namen f&uuml;r die Sicherheitsrichtlinie auf.
<h4><u>Beispiel:</u></h4>
<code>SetSecuritySettings.bat \\srvvib05\DRX$\DRXTransfer\StrasserMartinIT\net\* aula</code><br><br>
Nun kann die DotNET-Anwendung von einem Netzlaufwerk aus gestartet werden.
<hr noshade="noshade" /><hr noshade="noshade" />
<h4><u>Entfernen der Berechtigung:</u></h4>
Um eine versehentlich angelegte Berechtigung wieder zu <b>l&ouml;schen</b> habe ich folgendes batch-Skript geschrieben:<br>
<code>@echo off<br>
	SET CASPOL=.\caspol.exe<br>
	%caspol% -m -rg %1<br><br>
</code>
<h4><u>Beschreibung:</u></h4>
Der Befehlt "SET CASPOL=.\caspol.exe" ist schon vom obigen Skript bekannt. In der zweiten Zeile wird die Berechtigung dann entfernt.<br>
"-m" steht wieder f&uuml;r die Computerebene. "-rg" bedeutet "remove Group" und entfernt die Sicherheitsgruppe.
<h4><u>Verwendung:</u></h4>
Erst werden die Schritte wie oben ausgef&uuml;hrt. Die Eingabeaufforderung wird ge&ouml;ffnet und in das Verzeichnis, in dem das Batch-Skript liegt wird gewechselt<br>
Anschlie&szlig;end wird das Batch-Skript gefolgt vom Namen der Gruppe, die gel&ouml;scht werden soll, aufgerufen.
<h4><u>Beispiel:</u></h4>
<code>DeleteSecuritySettings.bat aula