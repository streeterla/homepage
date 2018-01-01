<h4><u>Einf&uuml;hrung:</u></h4>
Wenn ich morgens in die Arbeit komme, dann starte ich immer meinen Firefox, Outlook, die Eingabeaufforderung und den Windows-Explorer.
In der Eingabeaufforderung wechsle ich dann immer in das selbe Verzeichnis. 
Also habe ich mir - um mir diese Arbeit abzunehmen - ein batch-Skript geschrieben:
<p>
      <code>
        @echo off<br>
        start /MAX "C:\Programme\Mozilla Firefox" "firefox.exe"<br>
        start /MAX "C:\Programme\Microsoft Office\OFFICE11" "OUTLOOK.EXE"<br>
        start "C:\WINNT\system32\cmd.exe" /D C:\JWorld\projects\pcm\aula3\net<br>
        start /MAX explorer /e<br>
        :end<br>
      </code>
    </p>
<h4><u>Beschreibung:</u></h4>
Mit "start" wird ein Programm gestartet. Dazu muss der absolute Pfad zur entsprechenden EXE-Datei angegeben werden.<br>
Der Parameter "/MAX" l&auml;sst das Programm in einem maximierten Fenster starten.<br>
Mit dem Parameter /D plus Pfadangabe spare ich mir das Welchseln des Verzeichnisses in der Eingabeaufforderung.<br> 
Zum Starten des Windows-Explorers muss keine EXE-Datei angegeben werden. Der Befehl "explorer" reicht.<br>
Der Parameter "/e" startet den Explorer in der Standartansicht.<br> 
Das Ganze dann einfach in eine .bat-Datei (zum Beispiel start.bat) schreiben - fertig!
<p>
Als Shell-Skript unter Linux ist das ganze gleich noch vie einfacher zu realisieren. 
Hier schreibt man die Namen der Anwendungen einfach untereinander. Dazwischen muss dann noch ein & stehen. Also so:
</p>
<p>
<code>
    # !/bin/sh<br>
    firefox &<br>
    mozilla-thunderbird &<br>
    pidgin &<br>
    irssi<br>
</code>
</p>
<h5><u>Anmerkung:</u></h5>
Nat&uuml;rlich muss die entsprechende Anwendung auch korrekt angelegt sein, also unter /usr/bin existieren.