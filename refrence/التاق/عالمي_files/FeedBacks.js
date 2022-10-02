var xmlHttpAjaxFeedBack
var CurrentPageNo
var TotalFeedBackArticles
// Get Article FeedBack Information 
function GetArticleCalendarInfo(Render)
{	
	xmlHttpAjaxFeedBack=GetXmlHttpObjectFeedBack();
	if (xmlHttpAjaxFeedBack==null)
	{
		alert ("Your browser does not support AJAX!");
		return;
	} 
	var url="/portal/Aspx/GetPaginationFeedBack.aspx";
	url=url+"?CurrentGuid="+CurrentGuidFeedBackPagination;
	url=url+"&PageNo="+Render;
	//url=url+"&Sr="+Math.random();
	CurrentPageNo=Render
	document.getElementById('imgLoadingFeedBackArticles').style.display=''
	xmlHttpAjaxFeedBack.onreadystatechange=stateChangedFeedBack;
	xmlHttpAjaxFeedBack.open("GET",url,true); 
	xmlHttpAjaxFeedBack.send(null);
	
}
function GetXmlHttpObjectFeedBack()
{
	var xmlHttpAjaxFeedBack=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttpAjaxFeedBack=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			xmlHttpAjaxFeedBack=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttpAjaxFeedBack=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttpAjaxFeedBack;
}
function stateChangedFeedBack() 
{
	if (xmlHttpAjaxFeedBack.readyState==4)
	{ 
		document.getElementById(ObjHTML).innerHTML=xmlHttpAjaxFeedBack.responseText
		TotalFeedBackArticles=document.getElementById("hdnTotalFeedBackArticles").value
		Render(CurrentPageNo)
		document.getElementById('imgLoadingFeedBackArticles').style.display='none'
	}
}
function Render(intPageNo)
{
	var FeedBackList=TotalFeedBackArticles;
	var strOutput="";
	var strName = "";
	var strText = "";
	var strTitle = "";
	var intPagesCount;			// Total pages count
	var intPageSize = 10;		// Number of feedbacks per page
	var intStartingPage;		// The starting page (for pagination)
	var intEndPage;				// The end page (for pagination)
	var intPageOfPages;			// The current pagination of pages (for pagination)
	var intPageOfPagesSize=10;	// Total number of displayed pagination (for pagination)
	var bFlag = true;				
		
	if (FeedBackList>0)
	{
		intPagesCount = Math.ceil(FeedBackList/intPageSize);
		
		if (intPagesCount >1)
			{
				intPageOfPages = Math.floor(intPageNo/intPageOfPagesSize) +1;
				intStartingPage = (intPageOfPages-1)*intPageOfPagesSize + 1;
				intEndPage = intStartingPage + intPageOfPagesSize -2;
				if (intPageOfPages>1)
				{
					intStartingPage = intStartingPage -1;
					intEndPage = intStartingPage + intPageOfPagesSize -1;
				}
				
				if (intEndPage>=intPagesCount)
				{
					bFlag = false;
					intEndPage=intPagesCount;
				}
				strOutput =  '<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td height="20"></td></tr><tr><td bgColor="#EFF3FF" dir ="rtl" width ="100%" style="FONT-WEIGHT: normal; FONT-SIZE: 14pt; FONT-FAMILY: Arabic Transparent; TEXT-ALIGN: right;">';
				
				if (intPageOfPages>1)
				{
					strOutput = strOutput + ' <a style="TEXT-DECORATION: none;" href="javascript:" onclick="GetArticleCalendarInfo(' + ((intPageOfPages-1)*intPageOfPagesSize -1) + ');"> ' + '&nbsp;&nbsp;<<&nbsp;' + ' </a>   ';
				}
				for (var j=intStartingPage; j<= intEndPage; j++)
				{
					if (j == intPageNo)
					{
						strOutput = strOutput + j ;
					}
					else
					{
						strOutput = strOutput + ' <a style="TEXT-DECORATION: none;" href="javascript:" onclick="GetArticleCalendarInfo(' + j + ');"> ' + j + ' </a> ';
					}
				}
				if(bFlag)
				{
					strOutput = strOutput + '   <a style="TEXT-DECORATION: none;" href="javascript:" onclick="GetArticleCalendarInfo(' + j + ');"> ' + '&nbsp; >>' + ' </a> ';
				}
				strOutput = strOutput + '</td></tr><tr><td height="20px"></td></tr></table>';
			}
		document.getElementById("FeedBacksTD").innerHTML = strOutput;
	}
}