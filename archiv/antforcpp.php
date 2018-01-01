<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.fh-landshut.de/~mstrass3/ich.html">
<HTML>
  <HEAD>
    <TITLE> MARTIN STRASSERS kleine Homepage - ANT anstelle von make </TITLE>
    <link rel="stylesheet" type="text/css" href="css.css">
  </HEAD>
  <BODY>
    <p>Ich programmiere zur Zeit ein wenig in C++, komme aber eigentlich aus der JAVA-Ecke. Darum bin ich mit ANT mehr vertraut, als mit make.<br>
       Darum habe ich mir ein ANT-Build-File erstellt, das mir die Arbeit abnimmt, die C++-Sourcedateien zu kompilieren, diese in einen &quot;src&quot;
       -Ordner zu verschieben und die ausf&uuml;hrbaren Dateien in einen &quot;bin&quot;-Ordner. Dieses Build-File sieht folgenderma&szlig;en aus:<br>
    </p>
    <p>
      <pre>
        <code>
          &lt;project name=&quot;verschieben&quot; default=&quot;verschieben&quot; basedir=&quot;.&quot;&gt;
          	&lt;target name=&quot;verschieben&quot; depends=&quot;compile&quot;&gt;
                	&lt;move todir=&quot;src&quot;&gt;
                        	&lt;fileset dir=&quot;${basedir}&quot;&gt;
                               		&lt;include name=&quot;*.cpp&quot; /&gt;
                                	&lt;exclude name=&quot;*.exe&quot; /&gt;
                        	&lt;/fileset&gt;
                	&lt;/move&gt;
                	&lt;move todir=&quot;bin&quot;&gt;
                        	&lt;fileset dir=&quot;${basedir}&quot;&gt;
                                	&lt;include name=&quot;*.exe&quot; /&gt;
                                	&lt;exclude name=&quot;*.cpp&quot; /&gt;
                        	&lt;/fileset&gt;
                	&lt;/move&gt;
        	&lt;/target&gt;
        	&lt;target name=&quot;compile&quot;&gt;
                	&lt;exec executable=&quot;g++&quot; failonerror=&quot;true&quot;&gt;
                        	&lt;arg line=&quot;${sourcefile}.cpp&quot; /&gt;
                        	&lt;arg line=&quot;-o&quot; /&gt;
                        	&lt;arg line=&quot;${sourcefile}.exe&quot; /&gt;
                	&lt;/exec&gt;
        	&lt;/target&gt;
	  &lt;/project&gt;
        </code>
      </pre>
    </p>
    <p>
      <u>Beschreibung:</u><br>
      In diesem Build-File befinden sich zwei Targets: &quot;verschieben&quot; und &quot;compile&quot;. Das erste dieser beiden Targets verschiebt <br>
      alle Source-Dateien in einen &quot;src&quot;-Ordner und alle ausf&uuml;hrbaren Dateien in einen &quot;bin&quot;-Ordner.<br>
      Dieses Target wird aber nur ausgef&uuml;hrt, wenn das &quot;compile&quot;-Target fehlerfrei durchlaufen wurde. <br>
      Dieses kompiliert mit dem g++-Compiler ein c++-File, dessen Name &uuml;ber ein Property eingelesen wird. Das entstehende ausf&uuml;hrbare File
      hei&szlig;t so, wie das Property und bekommt &quot;.exe&quot; als Dateiendung. Das Build-File wird folgenderma&szlig;en aufgerufen: <br><br>

      <code><br>
        ant -Dsourefile=&lt;name des sourcefiles&gt;<br>
      <code><br><br>

      Also zum Beispiel so:<br><br>

      <code><br>
        ant -Dsourcefile=lotto<br>
      <code><br><br>

      So wird das Sourcefile kompiliert und mitsamt der ausf&uuml;hrbaren Datei in die entsprechenden Ordner verschoben. <br>
    </p>
  </body>
</html>

