//---------------------------------------------------------------------------------------------
//		ProjectName : Ktulu
//		PageName : menu.js
//		PageDescrip : Navigation Menu
//		AuthoredBy : Rajai Wakileh
//		AuthoredOn : 09.04.2003
//---------------------------------------------------------------------------------------------
var bolOpened = true;


function InitializeRightMenu()
{
	if (document.getElementById("mnuHead") != null && document.getElementById("mnuMain") != null)
	{
		bolOpened = document.getElementById("mnuHead").className == "mnuHeadOpened" ? true : false;
	}

	if (!bolOpened)
	{
		if (document.getElementById("mnuMain"))
		{
			document.getElementById("mnuMain").style.display = "none";
			bolOpened = false;
		}
	}
}
InitializeRightMenu()

// Added By Moayad Al-Saleh
if (document.getElementById("mnuHeadHumanRights") != null && document.getElementById("mnuMainHumanRights") != null)
{
	bolOpened = document.getElementById("mnuHeadHumanRights").className == "mnuHeadOpenedHumanRights" ? true : false;
}

if (!bolOpened)
{
	if (document.getElementById("mnuMainHumanRights"))
	{
		document.getElementById("mnuMainHumanRights").style.display = "none";
		bolOpened = false;
	}
}

// Added By Moayad Al-Saleh 28/12/2008
if (document.getElementById("mnuHeadGazaUnderFire") != null && document.getElementById("mnuMainGazaUnderFire") != null)
{
	bolOpened = document.getElementById("mnuHeadGazaUnderFire").className == "mnuHeadOpenedGazaUnderFire" ? true : false;
}

if (!bolOpened)
{
	if (document.getElementById("mnuMainGazaUnderFire"))
	{
		document.getElementById("mnuMainGazaUnderFire").style.display = "none";
		bolOpened = false;
	}
}
//---------------------------------------------------------------------------------------------
//		Author : Rajai Wakileh
//		Name : showHideMnu
//		Description : Shows/Hide Menu header according to the current level
//		Version : 1.0.1
//		I/N Parameter : N/A
//		O/P Parameter : N/A
//		Return Value : N/A
//---------------------------------------------------------------------------------------------
function showHideMnu()
{document.getElementById("tblrightservices").style.height='20'
	if (bolOpened)
	{
		document.getElementById("mnuHead").className = "mnuHeadClosed";
		document.getElementById("mnuMain").style.display = "none";
		bolOpened = false;
	}
	else
	{
		document.getElementById("mnuHead").className = "mnuHeadOpened";
		document.getElementById("mnuMain").style.display = "";
		bolOpened = true;
	}
	document.getElementById("tblrightservices").style.height='20'
	var timer=window.setTimeout("document.getElementById('tblrightservices').style.height='100%'",5)
}

function showHideMnuHumanRights()
{
	document.getElementById("tblrightservices").style.height='20'
	if (bolOpened)
	{
		document.getElementById("mnuHeadHumanRights").className = "mnuHeadClosedHumanRights";
		document.getElementById("mnuMainHumanRights").style.display = "none";
		bolOpened = false;
	}
	else
	{
		document.getElementById("mnuHeadHumanRights").className = "mnuHeadOpenedHumanRights";
		document.getElementById("mnuMainHumanRights").style.display = "";
		bolOpened = true;
	}
	document.getElementById("tblrightservices").style.height='20'
	var timer=window.setTimeout("document.getElementById('tblrightservices').style.height='100%'",5)
}
function showHideMnuGazaUnderFire()
{
	document.getElementById("tblrightservices").style.height='20'
	if (bolOpened)
	{
		document.getElementById("mnuHeadGazaUnderFire").className = "mnuHeadClosedGazaUnderFire";
		document.getElementById("mnuMainGazaUnderFire").style.display = "none";
		bolOpened = false;
	}
	else
	{
		document.getElementById("mnuHeadGazaUnderFire").className = "mnuHeadOpenedGazaUnderFire";
		document.getElementById("mnuMainGazaUnderFire").style.display = "";
		bolOpened = true;
	}
	document.getElementById("tblrightservices").style.height='20'
	var timer=window.setTimeout("document.getElementById('tblrightservices').style.height='100%'",5)
}
function showHideCategory(categoryID)
{
		var bCurrentStateOpened;
		//alert(categoryID);
		//alert(document.getElementById("toggle_" + categoryID));
		
		bCurrentStateOpened = (document.getElementById("toggle_" + categoryID).className == "toggleSignCollapse")?true:false;
		//alert(bCurrentStateOpened);
		if (bCurrentStateOpened)
		{
			document.getElementById("toggle_" + categoryID).className = "toggleSignExpand";
			//document.getElementById(categoryID).innerHtml = "<table><tr><td>hiiii</td></tr></table>";
			document.getElementById(categoryID).style.display = "none";
		}
		else
		{
			document.getElementById("toggle_" + categoryID).className = "toggleSignCollapse";
			//alert(document.getElementById(categoryID).innerText);
			//document.getElementById(categoryID).innerText = "";
			document.getElementById(categoryID).style.display = "";
		}
}


//************************ Ad Commerce ****************************/
function FillCommerceFrames()
{
	var pageURL = document.location.href;
	var mode1;
	var mode2;
	var TOPBANNER468X60		= "";
	var TOPBANNER120X60		= "";
	var RIGHTBANNER120X240	= "";
	var SPONSORBANNER		= "";
	
	mode1 = pageURL.search("NRMODE=Unpublished");
	mode2 = pageURL.search("NRMODE=Update");
	
	if ((mode1 == -1) && (mode2 == -1))
	{
		TOPBANNER468X60		= "<IFRAME src=\"http://jazad.aljazeera.net/jazcommerce/default.aspx?sThisPage=_1_Channels_News_&BannerType=Banner\" frameBorder=\"0\" width=\"468\" scrolling=\"no\" height=\"60\" marginTop=\"0\" marginRight=\"0\" marginLeft=\"0\" valign=\"top\" marginBottom=\"0\"></IFRAME>";
		RIGHTBANNER120X240	= "<IFRAME src=\"http://jazad.aljazeera.net/jazcommerce/default.aspx?sThisPage=_1_Channels_News_&BannerType=PortalAd\" frameBorder=\"0\" width=\"150\" scrolling=\"no\" height=\"140\" marginTop=\"0\" marginRight=\"0\" marginLeft=\"0\" valign=\"top\" marginBottom=\"0\"></IFRAME>";
		SPONSORBANNER		= '<IFRAME src="http://ajnad.aljazeera.net/banners/default.aspx?BannerType=AJA_Portal_Sponsor&sThisPage=AJA_News_Portal" name="AJAD" scrolling="no" border="0" frameborder="0" marginwidth="1" marginheight="1" height="50" width="390"></IFRAME>'
	}
	else
	{
		TOPBANNER468X60		= "<IMG src=\"/News/KServices/images/adImages.bmp\" border=\"0\" width=\"468\" height=\"60\">";
		RIGHTBANNER120X240	= "<IMG src=\"/News/KServices/images/adImages.bmp\" border=\"0\" width=\"150\" height=\"140\">";
		SPONSORBANNER		= "<IMG src=\"/News/KServices/images/adImages.bmp\" border=\"0\" width=\"390\" height=\"50\">";
	}
	if (document.getElementById('TopADCommerce468X60'))
	document.getElementById('TopADCommerce468X60').innerHTML  = TOPBANNER468X60;
	
	if (document.getElementById('SPONSORAD320X50'))
	document.getElementById('SPONSORAD320X50').innerHTML  = SPONSORBANNER;
	
	if (document.getElementById('RIGHTBANNER120X240'))
	document.getElementById('RIGHTBANNER120X240').innerHTML  = RIGHTBANNER120X240;

}


if ((document.getElementById('TopADCommerce468X60')) || (document.getElementById('RIGHTBANNER120X240')) || (document.getElementById('SPONSORAD320X50')))
	FillCommerceFrames();