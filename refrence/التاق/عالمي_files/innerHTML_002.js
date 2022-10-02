function OpenSurveyWindow()
{
	window.open ("/Portal/Aspx/Survey.aspx","Survey","menubar=0,resizable=0,width=578,top=50%,left=50%,height=450,scrollbars=1");
}


function OpenSurveyService()
{
	if (document.getElementById('divSurveyService'))
	{
		document.getElementById('divSurveyService').style.display='none';
	}
}
/********************* ADS **************************************/
function FillAddsdoubleclick(GuidSection,AddsLabelName,Width,Height,SectionGettingPath)
{
	var pageURL = document.location.href;
	var mode1;
	var mode2;
	var TopRighttAD468x60		= "";
	var Str='';
	var SectionPath='';
	
	mode1 = pageURL.search("NRMODE=Unpublished");
	mode2 = pageURL.search("NRMODE=Update");
	if (document.title.search("Monitoring")==-1)
	{
		
		
		if ((mode1 == -1) && (mode2 == -1))
		{
			ord = (typeof(ord)!='undefined') ? ord : Math.random()*10000000000000000;
			Str+='<scr'+'ipt language="JavaScript" src="http://ad.ae.doubleclick.net/adj/aljazeera_AR/'+SectionPath+';sz='+Width+'x'+Height+';ord='+ord+'?" type="text/javascript"></scr'+'ipt>';
			TopRighttAD468x60	= Str;
		}
		else
		{
			TopRighttAD468x60	= "<IMG src=\"/News/KServices/images/adImages.bmp\" border=\"0\" width=\""+Width+"\" height=\""+Height+"\">";
		}
	}
	
	if (document.getElementById(AddsLabelName)) 
	{
		document.getElementById(AddsLabelName).innerHTML  = TopRighttAD468x60;
	}
}