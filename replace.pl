#!/usr/bin/perl -w
 
if(  !$ARGV[0] )  {die  "請指定檔案\r\n";}
$fn= $ARGV[0];
 
open(FILE, $fn) or die "$!";
$cnt=0;
$data="";
while(<FILE>){
  $cnt += ($_ =~ s/\?v=0c2e31b2ea//ig);
  $data .= $_;
}
 
print "[$fn]總共置換：". $cnt."筆\n";
close( FILE);
open( FILE, "> $fn") or die "$!";
print FILE $data;
close( FILE);
