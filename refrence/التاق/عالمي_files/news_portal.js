document.write('\n<!-- Copyright DoubleClick Inc., All rights reserved. -->\n<!-- This code was autogenerated @ Sun Dec 27 03:56:46 EST 2009 -->\n<script src=\"http://m1.emea.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n  \n');

 
var dcallowscriptaccess = 'never';
var plugin = false;
var advurl = 'http://www.stc.com.sa/';
var alttext = '';
var dcgif = 'http://m1.emea.2mdn.net/2052147/STC-Jawal112_160x600_Arb_01.jpg';
var dccreativewidth = '160';
var dcwmode = 'opaque';
var imgurl = 'http://www.stc.com.sa/';
var target = '_blank';
var dcbgcolor = '';
var dcswf = 'http://m1.emea.2mdn.net/2052147/STC-Jawal112_160x600_Arb_01.swf';
var dcminversion = '9';
var dccreativeheight = '600';

var clickTag = escape('http://ad.ae.doubleclick.net/click%3Bh=v8/3913/3/0/%2a/v%3B220964201%3B0-0%3B0%3B26919938%3B2321-160/600%3B34881081/34898911/1%3B%3B%7Esscs%3D%3fhttp://www.stc.com.sa/');
function checkFlash(v){ 
var y, x, s="Shockwave", f="Flash", o="object", u="undefined", np=navigator.plugins, nm=navigator.mimeTypes, nmd="application/x-shockwave-flash"; 
v = Math.max(Math.floor(v) || 0, 6); // check if v is a number and use Flash Player 6 as the minimum player version 
if(typeof np!=u&&typeof np[s+" "+f]==o&&(x=np[s+" "+f].description)&&!(typeof nm!=u&&nm[nmd]&&!nm[nmd].enabledPlugin)){ 
if(v<=x.match(/Shockwave Flash (\d+)/)[1])return true;} 
else if(typeof window.ActiveXObject!=u){ 
for(y=16;y>=v;y--){ 
try{x=new ActiveXObject(s+f+"."+s+f+"."+y);if((x!=null)&&(typeof x==o))return true;}catch(e){}} 
} 
return false;}

if ( checkFlash(dcminversion) )  {  
adcode = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+
' ID=FLASH_AD WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">'+
'<PARAM NAME=movie VALUE="' + dcswf  +
'?clickTag='+clickTag+'"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'><PARAM NAME=wmode VALUE='+ dcwmode +'><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+
 '<EMBED src="' + dcswf  +
'?clickTag='+clickTag+'" quality=high wmode='+dcwmode+
' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor+
' TYPE="application/x-shockwave-flash" AllowScriptAccess="'+dcallowscriptaccess+'"></EMBED></OBJECT>';
if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);} 
} else { 
document.write('<A TARGET="_blank" HREF="http://ad.ae.doubleclick.net/click%3Bh=v8/3913/3/0/%2a/v%3B220964201%3B0-0%3B0%3B26919938%3B2321-160/600%3B34881081/34898911/1%3B%3B%7Esscs%3D%3fhttp://www.stc.com.sa/"><IMG SRC="' + dcgif + '" alt="" BORDER=0></A>');
}
//-->  

document.write('\n<NOSCRIPT><a target=\"_blank\" href=\"http://ad.ae.doubleclick.net/click%3Bh=v8/3913/3/0/%2a/v%3B220964201%3B0-0%3B0%3B26919938%3B2321-160/600%3B34881081/34898911/1%3B%3B%7Esscs%3D%3fhttp://www.stc.com.sa/\"><img src=\"http://m1.emea.2mdn.net/2052147/STC-Jawal112_160x600_Arb_01.jpg\"  border=\"0\" alt=\"\" ></a></NOSCRIPT>');
