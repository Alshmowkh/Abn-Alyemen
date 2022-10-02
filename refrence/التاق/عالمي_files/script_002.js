// This Function Adde By Moayad Smaller '## 26/12/2007 
//## This function Created To Check Special Characters ##
//# Begin
function parametersChecking(Str,SpecialCheck,ControlId) // Seperate Between Chars With ##
{
	var SpecialCharsCheck =new Array()
	var SpecialCharsCheck=SpecialCheck.split('##')
	var Invalid
	var InvalidChars
	Invalid=false;
	InvalidChars=''
	try
	{
		if (Str!='')
		{
			for(var I=0;I<SpecialCharsCheck.length;I++)
			{
				if (SpecialCharsCheck[I]!='')
				{
					if (Str.indexOf(SpecialCharsCheck[I])!=-1)
					{
						Invalid=true
						InvalidChars = InvalidChars + ' ' + SpecialCharsCheck[I]
					}
				}
			}
			if (Str.indexOf("'")!=-1)
			{
				Invalid=true
				InvalidChars = InvalidChars + ' ' + "'"
				if (document.getElementById(ControlId))
				{
					document.getElementById(ControlId).focus();
				}
			}
		}
		if (Invalid)
		{
			if (document.getElementById(ControlId))
			{
				document.getElementById(ControlId).focus();
			}
			return InvalidChars
		}
		else
		{
			return null
		}
	}
	catch(Err)
	{
		return InvalidChars
	}
	
}
//# End

function RegExpTest(strInput)
{
  var regExpPattern = /\S{10}/g;    //Create regular expression pattern to check for long words
  var matchesArray;
  var strReturn = "";
  var firstIndex = 0;
  strReturn=strInput
  /*//var ver = Number(ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion())
  while ((matchesArray = regExpPattern.exec(strInput)) != null)
  {
     //alert(arr.index + "-" + arr.lastIndex + "-\s-" + arr + "<br>");
     strReturn += strInput.substring(firstIndex,matchesArray.lastIndex) + "&#32;";
     firstIndex = matchesArray.lastIndex;
  }
  strReturn += strInput.substring(firstIndex,strInput.length);
  regExpPattern = /</g;  //Create regular expression pattern to check for <
  strReturn = strReturn.replace(regExpPattern, "&lt;");    //Replace < character with "&lt;".
  
  regExpPattern = />/g;  //Create regular expression pattern to check for <
  strReturn = strReturn.replace(regExpPattern, "&gt;");    //Replace > character with "&gt;"
  */
  regExpPattern = /\r\n/g;  //Create regular expression pattern to check for a new line character
  strReturn = strReturn.replace(regExpPattern, "<br>");    //Replace new line character with "<br>".

  return strReturn ;
}

function RegExpEmailTest(strInput)
{
  //The corresponding regular expression for text would be
  //var regExpPattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  //The corresponding regular expression for multilingual text would be
  var regExpPattern = /(\w+|\W+)([-+.](\w+|\W+))*@(\w+|\W+)([-.](\w+|\W+))*\.(\w+|\W+)([-.](\w+|\W+))*/;    //Create regular expression pattern to check email expression
  if (regExpPattern.test(strInput))
	return true;
  else
	return false;

}

function CheckJS(strInput)
{
	var found= true;
	while (found) 
	{
		strInput = strInput.replace("<","&lt;");
		strInput = strInput.replace(">","&gt;");
		if ((strInput.search("<") > -1) || (str.search(">") > -1))
			found=true;
		else
		found=false;
	}
	
	return strInput; 
}

function openLogin(url,urlParam,MenuBar)
{

	if (MenuBar != null)
	{
		if (MenuBar != 1)
		{
		MenuBar = 0
		}
		
		var Link	
		Link = url + escape(urlParam) ;	
		//alert(Link)
		window.open(Link ,"Popup","resizable=" + MenuBar + ",height=450,width=590,status=no,toolbar=no,menubar=" + MenuBar + ",location=no,scrollbars=yes");
		
	}
	else 
	{
	var Link	
		Link = url + escape(urlParam) ;	
		//alert(Link)
		window.open(Link ,"Popup","height=450,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");
	}

		/*var Link	
		Link = url + escape(urlParam) ;	
		//alert(Link)
		window.open(Link ,"Popup","height=450,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");*/
}

function checkValidations(txtContent)
{
	if(window.document.all.item(txtContent).value == '' )
	{
		alert("الرجاء إدخال النص المراد البحث عنه");
		return false;
	}
	else
	{
		return true;
	}
}

function GetVoteCookieValue(sParent, sName, sValue)
{
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++)
	{
		// a name/value pair (a crumb) is separated by an equal sign
		var aCrumb = aCookie[i].split("=");
		if (aCookie[i].lastIndexOf(sName)> -1) 
		{
				var aCrumb = aCookie[i].split("=");
				if (sParent == aCrumb[0])
				{ 
					if (sName == aCrumb[1])
					{
						if (aCrumb[2].search(",") > -1)
						{
							var aCrumb2 = aCrumb[2].split(",");
							for (var l=0; l < aCrumb2.length; l++)
							{
								if (aCrumb2[l] == sValue)
									return aCrumb2[l];
							}
						}
						else
						{
							if (aCrumb[2] == sValue)
								return unescape(aCrumb[2]);
						}
					}
					
				}
			//}
		}

	}
	// a cookie with the requested name does not exist
	return null;
}

function CheckCookie(vid)
{
	var voteId = GetVoteCookieValue("vote","vID",vid);
	if (voteId)
	{
		DisableRadioButtons(document.getElementsByName("voteSelect" + vid))
		
		var votePartLink = document.getElementById("votePart" + vid);
		if (votePartLink)
			votePartLink.removeAttribute("href");
	}
}

function DisableRadioButtons(btn)
{
	for (var x = 0;x < btn.length; x++)
	{
		btn[x].disabled = true;
		btn[x].readOnly = true;
	}
}

function OpenVoteUrl(url, type, vid)
{
	if (type == 0)
	{
		if ((document.getElementById("yourAnswer"+vid).value > 0) && (document.getElementById("yourVote"+vid).value == vid))
		{
			var voteId = GetVoteCookieValue("vote","vID",vid);
			if (voteId)
			{
				url = url + "&yourAnswer=" + document.getElementById("yourAnswer"+vid).value + "&disablevote=true";
			}
			else
			{
				url = url + "&yourAnswer=" + document.getElementById("yourAnswer"+vid).value;	
			}
			window.open(url,vid,"height=333,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");	
		}
	}
	else
		window.open(url,vid,"height=333,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");	
}

function submit(voteID,actionType)
{	
	if(actionType == 1)
	{	if (document.all.yourAnswer.value > 0)	
		{
			voteForm.actionType.value = actionType;
			voteForm.dispType.value = 1;
			voteForm.voteID.value = voteID;
			voteForm.submit();
		}
	}
	else
	{
		voteForm.actionType.value = 0;
		voteForm.dispType.value = 1;
		voteForm.voteID.value = voteID;
		voteForm.submit();	
	}
}

function OpenVote(path , vid)
{
	window.open(path,vid,"height=333,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");
}

function voteHome()
{
	if (window.opener)
	{
		window.opener.top.location.href = "/Portal/vote/";
		window.opener.top.focus();
	}
	else
		window.location.href = "/Portal/vote/";
}

function sendVote(VoteLink)
{
	window.open("/Portal/aspx/sendArticle.aspx?EML="+VoteLink,"","height=450,width=590");
}

function openAnalysis(VoteLink)
{
	if (window.opener)
		window.opener.top.location.href = VoteLink;
	else
		window.location.href = VoteLink;
}

function OpenDG(paramStr)
{
	window.navigate("/NR/exeres/34A8E2E7-6048-4017-ACC7-A03A062DC347.htm?" + paramStr);
}


function checkNewsValidations(txtNewsSearchContent)
{
	if(window.document.all.item(txtNewsSearchContent).value == "" )
	{
		alert("الرجاء إدخال النص المراد البحث عنه");
		return false;
	}
	else
	{
		return true;
	}
}
function checkAllValidations(btnID)
{
	if(window.document.getElementById(btnID).value == '' )
		{
			alert('الرجاء إدخال النص المراد البحث عنه');
				return false;
         }
         else
         {
			return true;
         }
}
function openWindowOnFocus(strURL, strWinTarget, strWinFeatures) 
{
	var pWindow = window.top.open(strURL, strWinTarget, strWinFeatures);
	if (pWindow)
		pWindow.focus();
}

/*SHEARCH SERVICE */
//================================
// ##when the selection changes on the Main topics list, then the items in the Sub Topics should change
//================================
function lstMainTopics_onchange(ddlMainTopics, ddlSubTopics,hdnSubTopicsXml,hdnMainTopicIndex)
{
	var oMainTopicsList = document.getElementById(ddlMainTopics)
	var oSubTopicsList = document.getElementById(ddlSubTopics)
	if (oMainTopicsList.selectedIndex > -1)
	{
		document.getElementById(hdnMainTopicIndex).value = oMainTopicsList.selectedIndex
		LoadSubTopics(oMainTopicsList.value,0,ddlSubTopics,hdnSubTopicsXml);
	}
	else
	{
		oSubTopicsList.innerHTML = ""
		document.getElementById(hdnMainTopicIndex).value = 0
	}

}

function lstSubTopics_onchange(ddlSubTopics, hdnSubTopicsSel, hdnSubTopicsSelText)
{

	var oSubTopicsList = document.all.item(ddlSubTopics)
	var ohdnObj = document.all.item(hdnSubTopicsSel)
	var ohdnObjtext = document.all.item(hdnSubTopicsSelText)
	

	if (oSubTopicsList.selectedIndex > -1)
	{
		ohdnObj.value = oSubTopicsList.options(oSubTopicsList.selectedIndex).value;
		ohdnObjtext.value = oSubTopicsList.options(oSubTopicsList.selectedIndex).innerText;
	}
	else
	{
		ohdnObj.vaue= "00";
		ohdnObjtext.value = "";
	}
}

//================================
// ## This function loads the Main topics list with the Main Topics
// ##PARAM intSelectedItemID: the item that will be selected in the list.
//================================
function LoadMainTopics(intSelectedItemID)
{

var oList = document.getElementById("<%=ddlMainTopics.ClientID%>")
var XMLDoc=new ActiveXObject("Microsoft.XMLDOM")
XMLDoc.async="false"
XMLDoc.loadXML(document.getElementById ("<%=hdnMainTopicsXml.ClientID%>").value );
//Clear the list
oList.innerHTML = ""; 

var ElemList = XMLDoc.getElementsByTagName("Item");
  for (var i=0; i<= ElemList.length -1; i++)
  {
	var oOption = document.createElement("OPTION");
	oList.options.add(oOption);
	oOption.innerText = ElemList.item(i).attributes(1).value;
	oOption.value = ElemList.item(i).attributes(0).value;
	if (oOption.value == intSelectedItemID) 
		{
			oOption.selected = true; 
		}
  }
  
}

//================================
// ##This function loads the Sub topics list with the Sub Topics
// ##PARAM intMainTopicID: The ID of the parent Main topic that will be used to load specific sub topics into the sub topics list
// ##PARAM intSelectedItemID: the item that will be selected in the list.
//================================
function LoadSubTopics(intMainTopicID, intSelectedItemID, ddlSubTopics ,hdnSubTopicsXml)
{var XMLDoc
var oList = document.getElementById(ddlSubTopics)
		if (window.ActiveXObject)
		{
			XMLDoc=new ActiveXObject("Microsoft.XMLDOM")
			XMLDoc.async=false
			XMLDoc.loadXML(document.getElementById(hdnSubTopicsXml));
			TextNodeDefine='text'
					
			//clear the list
			oList.innerHTML = ""; 
			//add the elements from the XML to the list
			var ElemList = XMLDoc.getElementsByTagName("Item");
			var oOption = document.createElement("OPTION");
			oList.options.add(oOption);
			oOption.innerText = "الجميع";
			oOption.value = "00";

			for (var i=0; i<= ElemList.length -1; i++)
			{
				if (intMainTopicID == ElemList.item(i).attributes(2).value)
				{
					var oOption = document.createElement("OPTION");
					oList.options.add(oOption);
					oOption.innerText = ElemList.item(i).attributes(1).value;
					oOption.value = ElemList.item(i).attributes(0).value;
					if (oOption.value == intSelectedItemID) 
						{
							oOption.selected = true; 
						}
				}
				
			}
					
					
		}
		
		else if (document.implementation.createDocument)
		{
			XMLDoc = document.implementation.createDocument("", "doc", null);
			
			var parser = new DOMParser(); 
			XMLDoc = parser.parseFromString(document.getElementById(hdnSubTopicsXml).value, "text/xml"); 
			TextNodeDefine='textContent'
						//clear the list
			oList.innerHTML = ""; 
			//add the elements from the XML to the list
			var ElemList = XMLDoc.getElementsByTagName("Item");
			var oOption = document.createElement("OPTION");
			oOption.text = "الجميع";
			oOption.value = "00";
			oList.add(oOption,null);
			for (var i=0; i<= ElemList.length -1; i++)
			{
				if (intMainTopicID == ElemList.item(i).getAttribute("ParentGuid"))
				{
					var oOption = document.createElement("OPTION");
					oOption.text = ElemList.item(i).getAttribute("Name");
					oOption.value = ElemList.item(i).getAttribute("Guid");
					oList.add(oOption,null);
					if (oOption.value == intSelectedItemID) 
						{
							oOption.selected = true; 
						}
				}
				
			}	
		}
		else
		{
			alert ("Browser does not support Stock Market Service")
		}





}

//================================
// ##when the selection changes on the Sites list, then the items in the Channels list should change
//================================

function lstSites_onchange(ddlSite,ddlChannel,ddlSection,hdnChannelsXml,hdnSectionsXml,hdnSearchedSiteIndex)
{
	//alert("hi")
	var oSitesList = document.getElementById(ddlSite)
	var oChannelsList = document.getElementById(ddlChannel)
	var oSectionsList = document.getElementById(ddlSection)
	
	if (oSitesList.selectedIndex > -1)
	{
		LoadChannels(oSitesList.value,0,ddlChannel,hdnChannelsXml);
		LoadSections(0,0,ddlSection,hdnSectionsXml)
		document.getElementById(hdnSearchedSiteIndex).value = oSitesList.selectedIndex
	}
	else
	{
		document.getElementById(hdnSearchedSiteIndex).value = 0
	}
	
}
function lstChannels_onchange(ddlChannel,hdnChannelSel,hdnChannelSelText,hdnSectionsXml,ddlSection)
{
	var ochannelsList = document.getElementById(ddlChannel)
	var ohdnObj = document.getElementById(hdnChannelSel)
	var ohdnObjtext = document.getElementById(hdnChannelSelText)
	if (ochannelsList.selectedIndex > -1)
	{
		ohdnObj.value = ochannelsList.value;
		ohdnObjtext.value = ochannelsList[0].text;
		LoadSections(ochannelsList.value,0,ddlSection,hdnSectionsXml);
	}
	else
	{
		ohdnObj.vaue= "00"
		ohdnObjtext.value = ""
	}
}

function lstSections_onchange(ddlSection,hdnSectionSel,hdnSectionSelText)
{
	var oSectionList = document.all.item(ddlSection)
	var ohdnObj = document.all.item(hdnSectionSel)
	var ohdnObjtext = document.all.item(hdnSectionSelText)
	if (oSectionList.selectedIndex > -1)
	{
		ohdnObj.value = oSectionList.options(oSectionList.selectedIndex).value;
		ohdnObjtext.value = oSectionList.options(oSectionList.selectedIndex).innerText;
	}
	else
	{
		ohdnObj.vaue= "00"
		ohdnObjtext.value = ""
	}
}


//================================
// ##This function loads the Channelst list
// ##PARAM intSiteID: The ID of the parent Site that will be used to load specific Channels
// ##PARAM intChannelID: the item that will be selected in the list.
//================================
function LoadChannels(intSiteID, intChannelID, ddlChannel,hdnChannelsXml)
{
var XMLDoc
var oList = document.getElementById(ddlChannel)
		if (window.ActiveXObject)
		{
			XMLDoc=new ActiveXObject("Microsoft.XMLDOM")
			XMLDoc.async=false
			XMLDoc.loadXML(document.getElementById(hdnChannelsXml).value);
			TextNodeDefine='text'
			//clear the list
			oList.innerHTML = ""; 
			//add the elements from the XML to the list
			var ElemList = XMLDoc.getElementsByTagName("Item");
			var oOption = document.createElement("OPTION");
			oList.options.add(oOption);
			oOption.innerText = "الجميع";
			oOption.value = "00";
			for (var i=1; i<= ElemList.length -1; i++)
			{
				if (intSiteID == ElemList.item(i).attributes(2).value)
				{
					var oOption = document.createElement("OPTION");
					oList.options.add(oOption);
					oOption.innerText = ElemList.item(i).attributes(1).value;
					oOption.value = ElemList.item(i).attributes(0).value;
					if (oOption.value == intChannelID) 
						{
							oOption.selected = true; 
						}
				}
				
			}
			
			
		}
		
		else if (document.implementation.createDocument)
		{
			XMLDoc = document.implementation.createDocument("", "doc", null);
			
			var parser = new DOMParser(); 
			XMLDoc = parser.parseFromString(document.getElementById(hdnChannelsXml).value, "text/xml"); 
			TextNodeDefine='textContent'
			
			oList.innerHTML = ""; 
			//add the elements from the XML to the list
			var ElemList = XMLDoc.getElementsByTagName("Item");
			var oOption = document.createElement("OPTION");
			oOption.text = "الجميع";
			oOption.value = "00";
			oList.add(oOption,null);
			for (var i=1; i<= ElemList.length -1; i++)
			{
				if (intSiteID == ElemList.item(i).getAttribute("ParentGuid"))
				{
					var oOption = document.createElement("OPTION");
					oOption.text = ElemList.item(i).getAttribute("Name");
					oOption.value = ElemList.item(i).getAttribute("Guid");
					oList.add(oOption,null);
					if (oOption.value == intChannelID) 
						{
							oOption.selected = true; 
						}
				}
				
			}
			
			
			
		}
		else
		{
			alert ("Browser does not support Stock Market Service")
		}


}
//================================
// ##This function loads the Sub topics list with the Sub Topics
// ##PARAM intMainTopicID: The ID of the parent Main topic that will be used to load specific sub topics into the sub topics list
// ##PARAM intSelectedItemID: the item that will be selected in the list.
//================================
function LoadSections(intSubTopicID, intSelectedItemID,ddlSection ,hdnSectionsXml)
{var XMLDoc

		if (window.ActiveXObject)
		{
			var oList = document.all.item(ddlSection)
			var XMLDoc=new ActiveXObject("Microsoft.XMLDOM")
			XMLDoc.async="false"
			XMLDoc.loadXML(document.all.item(hdnSectionsXml).value);
			var ElemList = XMLDoc.getElementsByTagName("Item");
			//clear the list
			oList.innerHTML = ""; 
			//add the elements from the XML to the list  
			var oOption = document.createElement("OPTION");
			oList.options.add(oOption);
			oOption.innerText = "الجميع";
			oOption.value = "00";

			for (var i=1; i<= ElemList.length -1; i++)
			{
				if (intSubTopicID == ElemList.item(i).attributes(2).value)
				{
					var oOption = document.createElement("OPTION");
					oList.options.add(oOption);
					oOption.innerText = ElemList.item(i).attributes(1).value;
					oOption.value = ElemList.item(i).attributes(0).value;
					if (oOption.value == intSelectedItemID) 
						{
							oOption.selected = true; 
						}	
				}
			}
			
		}
		
		else if (document.implementation.createDocument)
		{
			XMLDoc = document.implementation.createDocument("", "doc", null);
			
			var parser = new DOMParser(); 
			XMLDoc = parser.parseFromString(document.getElementById(hdnSectionsXml).value, "text/xml"); 
			TextNodeDefine='textContent'
			var oList = document.getElementById(ddlSection)
			var ElemList = XMLDoc.getElementsByTagName("Item");
			//clear the list
			oList.innerHTML = ""; 
			//add the elements from the XML to the list  
			var oOption = document.createElement("OPTION");
			oOption.text = "الجميع";
			oOption.value = "00";
			oList.add(oOption,null);
			for (var i=1; i<= ElemList.length -1; i++)
			{
				if (intSubTopicID == ElemList.item(i).getAttribute("ParentGuid"))
				{
					var oOption = document.createElement("OPTION");
					oOption.text =  ElemList.item(i).getAttribute("Name");
					oOption.value = ElemList.item(i).getAttribute("Guid");
					oList.add(oOption,null);
					if (oOption.value == intSelectedItemID) 
						{
							oOption.selected = true; 
						}	
				}
			}
			
		}
		else
		{
			alert ("Browser does not support Stock Market Service")
		}

}

function CheckAll(AllFlag,chkContent,chkHeadline,chkMainSummary,chkSecondarySummary)
{
	if (window.document.getElementById(AllFlag).checked == 1)
	{
		window.document.getElementById(chkContent).checked = 1
		window.document.getElementById(chkContent).disabled = 1
		window.document.getElementById(chkHeadline).checked = 1
		window.document.getElementById(chkHeadline).disabled = 1
		window.document.getElementById(chkMainSummary).checked = 1
		window.document.getElementById(chkMainSummary).disabled = 1
		window.document.getElementById(chkSecondarySummary).checked = 1
		window.document.getElementById(chkSecondarySummary).disabled = 1
	}
	else
	{
		window.document.getElementById(chkContent).disabled = 0
		window.document.getElementById(chkHeadline).disabled = 0
		window.document.getElementById(chkMainSummary).disabled = 0
		window.document.getElementById(chkSecondarySummary).disabled = 0
	}
 }
 

function checkCountries(rblGeoOptions,ddlCountries1,ddlCountries2,ddlCountries3,ddlCountries4,ddlCountries5,ddlCountries6)
{
	var rblGeoOptionsid0 = rblGeoOptions + "_0"
	var rblGeoOptionsid1 = rblGeoOptions + "_1"
	if(window.document.getElementById(rblGeoOptionsid0).checked == true)
	{
		window.document.getElementById(ddlCountries1).disabled = true;
		window.document.getElementById(ddlCountries2).disabled = true;
		window.document.getElementById(ddlCountries3).disabled = true;
		window.document.getElementById(ddlCountries4).disabled = true;
		window.document.getElementById(ddlCountries5).disabled = true;
		window.document.getElementById(ddlCountries6).disabled = true;
	}
	else
	{
		if(window.document.getElementById(rblGeoOptionsid1).checked == true)
		{
			window.document.getElementById(ddlCountries1).disabled = false;
			window.document.getElementById(ddlCountries2).disabled = false;
			window.document.getElementById(ddlCountries3).disabled = false;
			window.document.getElementById(ddlCountries4).disabled = true;
			window.document.getElementById(ddlCountries5).disabled = true;
			window.document.getElementById(ddlCountries6).disabled = true;
		}
		else
		{
			window.document.getElementById(ddlCountries1).disabled = true;
			window.document.getElementById(ddlCountries2).disabled = true;
			window.document.getElementById(ddlCountries3).disabled = true;
			window.document.getElementById(ddlCountries4).disabled = false;
			window.document.getElementById(ddlCountries5).disabled = false;
			window.document.getElementById(ddlCountries6).disabled = false;
		}
	}
}

function checkDatelists(rblSearchPeriod,ddlFromDay,ddlFromMonth,ddlFromYear,ddlToDay,ddlToMonth,ddlToYear,ddlSpecifyPeriod)
{
	var rblSearchPeriodId0 = rblSearchPeriod + "_0"
	var rblSearchPeriodId1 = rblSearchPeriod + "_1"
	if(window.document.getElementById(rblSearchPeriodId0).checked == true)
	{
		window.document.getElementById(ddlFromDay).disabled = true;
		window.document.getElementById(ddlFromMonth).disabled = true;
		window.document.getElementById(ddlFromYear).disabled = true;
		window.document.getElementById(ddlToDay).disabled = true;
		window.document.getElementById(ddlToMonth).disabled = true;
		window.document.getElementById(ddlToYear).disabled = true;
		window.document.getElementById(ddlSpecifyPeriod).disabled = false;
	}
	else
	{
		window.document.getElementById(ddlFromDay).disabled = false;
		window.document.getElementById(ddlFromMonth).disabled = false;
		window.document.getElementById(ddlFromYear).disabled = false;
		window.document.getElementById(ddlToDay).disabled = false;
		window.document.getElementById(ddlToMonth).disabled = false;
		window.document.getElementById(ddlToYear).disabled = false;
		window.document.getElementById(ddlSpecifyPeriod).disabled = true;
	}
}

function validateText(txtContent,rblSearchPeriod,ddlFromYear,ddlFromMonth,ddlFromDay,ddlToYear,ddlToMonth,ddlToDay,ddlsite)
{
	var re1 = /\*/gi;
	var re2 = /\#/gi;
	var re3 = /\!/gi;
	var re4 = /\@/gi;
	var re5 = /\%/gi;
	var re6 = /\$/gi;
	var re7 = /\^/gi;
	var re8 = /\&/gi;
	var searchStr = window.document.getElementById(txtContent).value;
	
	if((searchStr.length < 1) || (searchStr == " "))
	{
		alert('الرجاء إدخال النص المراد البحث عنه');
		window.document.all.item(txtContent).focus();
		return false;
	}
	else
	{
		if((searchStr.search(re1) != -1)|| (searchStr.search(re2)!= -1) || (searchStr.search(re3)!= -1) || (searchStr.search(re4)!= -1) || (searchStr.search(re5)!= -1) || (searchStr.search(re6)!= -1)|| (searchStr.search(re7)!= -1)|| (searchStr.search(re8)!= -1))
		{
			alert('الرجاء عدم استخدام الرموز الخاصة');
			window.document.all.item(txtContent).focus();
			return false;
		}
		else
		{
			if (ValidateDate(rblSearchPeriod,ddlFromYear,ddlFromMonth,ddlFromDay,ddlToYear,ddlToMonth,ddlToDay))
			{
				return true;
			}
			else
			{
				alert('الرجاء إختيار التاريخ بطريقة صحيحة');
				return false;
			}
			
		}
	}
}

function ValidateMonthsNo (fromDate,ToDate) 
{

	var fyear = fromDate.getFullYear()
	var fmonth = fromDate.getMonth()
	var fDay = fromDate.getDate()

	var tYear = ToDate.getFullYear()
	var tMonth= ToDate.getMonth()
	var tDay = ToDate.getDate()

	var yearDiff = tYear - fyear  
	var monthDiff 
	if (yearDiff == 0) 
	{
	monthDiff = tMonth - fmonth 
		if (monthDiff  > 6)
		{
			return false 
		}
		else
		 {
			if (monthDiff == 6 )
			{
				if (tDay <= fDay)
				{return true}
				else 
				{return false}
			}
			return true
		 }
	}
	else 
	{
		if (yearDiff ==1)
		{
			var fMonthDiff = 13 - fmonth 
			monthDiff = tMonth + fMonthDiff
			if (monthDiff > 6 )
			{
				return false 
			}
			else 
				{
					if (monthDiff == 6 )
					{
						if (tDay <= fDay)
						{return true}
						else 
						{return false}
					}
					return true
				}
		}
		else 
		{
			return false
		}
	}
}

function ValidateDate(rblSearchPeriod,ddlFromYear,ddlFromMonth,ddlFromDay,ddlToYear,ddlToMonth,ddlToDay)
{
 
	var rblSearchPeriodId1 = rblSearchPeriod + "_1"
	if (window.document.getElementById(rblSearchPeriodId1).checked)
	{    

		var fYear = window.document.all.item(ddlFromYear).value
		var fMonth = window.document.all.item(ddlFromMonth).value
		var fDay = window.document.all.item(ddlFromDay).value
		var fDate = new Date(fYear,fMonth,fDay);
		var toYear = window.document.all.item(ddlToYear).value
		var toMonth = window.document.all.item(ddlToMonth).value
		var toDay = window.document.all.item(ddlToDay).value
		var toDate = new Date(toYear,toMonth,toDay);
		var monthsNo 
	
   
		if (fDate > toDate)
		{
			return false;
		}
		else
		{return true;}
	}
	else
	{return true;}
}

/*************************** DISCUSSION ********************************/

function drawPages(pURL,totRecords,loc,discid,poolID,pageGroup,NoPageGroups,pageSize,appPath)
{
	//var pageSize = 2;
	var text = "",page,j=0;
	var totPages = Math.ceil(totRecords/pageSize);
	var counter=0;
	if(pageGroup == 1)
	{
		text += "<td align=\"right\" dir=\"rtl\" ><img src=\"" + appPath + "/images/previous.gif\" align=\"absmiddle\" border=\"0\">&nbsp;<label class=\"dgTableHeaderLink\">السابق </label></td>";
		j=0;
	}
	else 
	if (pageGroup > 1)
	{
		j= (pageGroup * NoPageGroups) -NoPageGroups+ 1;
		text += "<td align=\"right\" dir=\"rtl\"><a align=\"center\" href=\"" + pURL + "&amp;choice=3&dgDiscID=" + discid + "&dgPoolID=" + poolID + "&loc=" + (j-1) + "&pagesize=" + pageSize + "&group=" + (pageGroup-1)  + "\"><img src=\"" + appPath + "/images/previous.gif\" border=\"0\" align=\"absmiddle\"><span class=\"dgTableHeaderLink\">السابق</span></a></td>";
	}
	text += "<td align=\"center\" dir=\"rtl\">";
	for (var i=j;(i<=totPages);i++)
	{
		if(i==0)
			++i;
		page = i;
		
		counter++;
		if (page == loc)
			text += "<label class=\"dgTableHeader\">" + loc + "</label>&nbsp;|&nbsp;";
		else
			text += "<a class=\"dgTableHeaderLink\" align=\"center\" href=\"" + pURL + "&amp;choice=3&dgDiscID=" + discid + "&dgPoolID=" + poolID + "&loc=" + page + "&pagesize=" + pageSize + "&group=" + pageGroup + "\">" + page + "</a>&nbsp;|";
		
		if (counter>=(NoPageGroups))
			break;		
	}
	text = text.slice(0,text.length-7);
	text += "</td>";
	
	if((totRecords <= pageSize) || (totPages <= (pageGroup * NoPageGroups)))
	{
		text += "<td align=\"left\" dir=\"ltr\" ><img src=\"" + appPath + "/images/next.gif\" border=\"0\" align=\"absmiddle\"><span class=\"dgTableHeaderLink\">التالي</span></td>";
	}
	else
	if(totPages > (pageGroup * NoPageGroups))
		text += "<td align=\"left\" dir=\"ltr\" ><a align=\"center\" href=\"" + pURL + "&amp;choice=3&dgDiscID=" + discid + "&dgPoolID=" + poolID + "&loc=" + (page+1) + "&pagesize=" + pageSize + "&group=" + (pageGroup+1)  + "\"><img src=\"" + appPath + "/images/next.gif\" align=\"absmiddle\" border=\"0\"><span class=\"dgTableHeaderLink\">التالي</span></a></td>";
	
	//text = text.slice(0,text.length-7);
	document.write(text);
}

function drawArchivePagesSearch(totRecords,loc,url,pageGroup,NoPageGroups,pageSize)
{
	var text = "",page,j=0;	
	var totPages = Math.ceil(totRecords/pageSize);
	//alert("totRecords = " + totRecords);
	//alert("pageGroup = " + pageGroup);
	//alert("url = " + url);
	//alert("loc = " + loc);
	var counter=0;
	if(pageGroup == 1)
	{
		//text += "<td align=\"right\" dir=\"rtl\" ><img src=\"" + appPath + "/images/previous.gif\" align=\"absmiddle\" border=\"0\">&nbsp;<label class=\"dgTableHeaderLink\">&#1575;&#1604;&#1587;&#1575;&#1576;&#1602;</label></td>";
		j=0;
	}
	else 
	if (pageGroup > 1)
	{
		j = (pageGroup * NoPageGroups) - NoPageGroups+ 1;
		//text += "<td align=\"right\" dir=\"rtl\"><a align=\"center\" href=\"" + url + "&sloc=" + (j-1) + "&pagesize=" + pageSize + "&group=" + (pageGroup-1)  + "\"><img src=\"" + appPath + "/images/previous.gif\" border=\"0\" align=\"absmiddle\"><label class=\"dgTableHeaderLink\">&#1575;&#1604;&#1587;&#1575;&#1576;&#1602;</label></a></td>";
	}
	text += "<td align=\"right\" class=\"archivePaging\" dir=\"rtl\">";
	//alert("j = " + j);
	//alert("totPages = " + totPages);
	for (var i=j;(i<=totPages);i++)
	{
		if(i==0)
			++i;
		page = i;
		//alert("page = " & page)
		counter++;
		if (page == loc)
			text += "<label class=\"archivePaging\">" + loc + "</label>&nbsp;&nbsp;";
		else
			text += "<a  class=\"archivePaging\" align=\"center\" href=\"" + url + "&sloc=" + page + "&pagesize=" + pageSize + "&group=" + pageGroup + "\">" + page + "</a>&nbsp;&nbsp;";
		
		if (counter>=(NoPageGroups))
			break;		
	}

	text = text.slice(0,text.length-7);
	text += "</td>";
	
	if(pageGroup == 1)
	{
		text += "<td align=\"left\" dir=\"rtl\" ><label class=\"archivePagingGroups2\">&#1575;&#1604;&#1587;&#1575;&#1576;&#1602;</label>";
	}
	else
	if (pageGroup > 1)
	{
		text += "<td align=\"left\" dir=\"rtl\"><a  class=\"archivePagingGroups\" align=\"center\" href=\"" + url + "&sloc=" + (j-1) + "&pagesize=" + pageSize + "&group=" + (pageGroup-1)  + "\">&#1575;&#1604;&#1587;&#1575;&#1576;&#1602;</a>";
	}
	
	if((totRecords <= pageSize) || (totPages <= (pageGroup * NoPageGroups)))
	{
		text += "&nbsp;&nbsp;<label class=\"archivePagingGroups2\">&#1575;&#1604;&#1578;&#1575;&#1604;&#1610;</label>";
	}
	else
	if(totPages > (pageGroup * NoPageGroups))
		text += "&nbsp;&nbsp;<a class=\"archivePagingGroups\" align=\"center\" href=\"" + url + "&sloc=" + (page+1) + "&pagesize=" + pageSize + "&group=" + (pageGroup+1)  + "\">&#1575;&#1604;&#1578;&#1575;&#1604;&#1610;</a></td>";

	//text = text.slice(0,text.length-7);
	document.write(text);
	
}


function drawPagesSearch(totRecords,loc,url,pageGroup,NoPageGroups,pageSize,appPath)
{
	var text = "",page,j=0;	
	var totPages = Math.ceil(totRecords/pageSize);
	
	var counter=0;
	if(pageGroup == 1)
	{
		text += "<td align=\"right\" dir=\"rtl\" ><img src=\"" + appPath + "/images/previous.gif\" align=\"absmiddle\" border=\"0\">&nbsp;<label class=\"dgTableHeaderLink\">السابق</label></td>";
		j=0;
	}
	else 
	if (pageGroup > 1)
	{
		j= (pageGroup * NoPageGroups) -NoPageGroups+ 1;
		text += "<td align=\"right\" dir=\"rtl\"><a align=\"center\" href=\"" + url + "&sloc=" + (j-1) + "&pagesize=" + pageSize + "&group=" + (pageGroup-1)  + "\"><img src=\"" + appPath + "/images/previous.gif\" border=\"0\" align=\"absmiddle\"><span class=\"dgTableHeaderLink\">السابق</span></a></td>";
	}
	text += "<td align=\"center\" dir=\"rtl\">";
	for (var i=j;(i<=totPages);i++)
	{
		if(i==0)
			++i;
		page = i;
		
		counter++;
		if (page == loc)
			text += "<label class=\"dgTableHeader\">" + loc + "</label>&nbsp;|&nbsp;";
		else
			text += "<a class=\"dgTableHeaderLink\" align=\"center\" href=\"" + url + "&sloc=" + page + "&pagesize=" + pageSize + "&group=" + pageGroup + "\">" + page + "</a>&nbsp;|&nbsp;";
		
		if (counter>=(NoPageGroups))
			break;		
	}

	text = text.slice(0,text.length-7);
	text += "</td>";
	if((totRecords <= pageSize) || (totPages <= (pageGroup * NoPageGroups)))
	{
		text += "<td align=\"left\" dir=\"ltr\" ><img src=\"" + appPath + "/images/next.gif\" border=\"0\" align=\"absmiddle\"><label class=\"dgTableHeaderLink\">التالي</label></td>";
	}
	else
	if(totPages > (pageGroup * NoPageGroups))
		text += "<td align=\"left\" dir=\"ltr\" ><a  align=\"center\" href=\"" + url + "&sloc=" + (page+1) + "&pagesize=" + pageSize + "&group=" + (pageGroup+1)  + "\"><img src=\"" + appPath + "/images/next.gif\" align=\"absmiddle\" border=\"0\"><span class=\"dgTableHeaderLink\">التالي</span></a></td>";

	//text = text.slice(0,text.length-7);
	document.write(text);
	
}

function drawDropList(dropName,start,size,selected)
{
	var i, dropTxt;
	dropTxt = "<SELECT runat=\"server\" ID=\""+dropName+"\" NAME=\""+dropName+"\">\n\r";
	for(i=start;i<=size;i++)
		{
			if(i == selected)
				dropTxt += "<option selected value=\""+i+"\">"+i+"</option>";
			else
				dropTxt += "<option value=\""+i+"\">"+i+"</option>";
		}
	dropTxt += "</select>";	
	document.write(dropTxt);
}

/*************************** DISCUSSION ********************************/
function showhide(msg)
{
	var item = document.all.item("msg"+msg);
	var iImage = document.all.item("img"+msg);
	if (item.style.display == "block")
	{
		iImage.src = "/Portal/KServices" + "/images/plus.gif";
		item.style.display = "none";
	}
	else
	{
		iImage.src = "/Portal/KServices" + "/images/minus.gif";
		item.style.display = "block";
	}
}


/**************************	CHANNEL ARCHIVE SEARCH ************************/
function radioList_action(listID, txtID)
{
	var listId0 = listID + "_0";
	var listId1 = listID + "_1";
	
	if (window.document.getElementById(listId0).checked)
	{
		window.document.getElementById(txtID).disabled = true;
		window.document.getElementById(txtID).style.backgroundColor = "Gainsboro";
	}
	else
	{
		window.document.getElementById(txtID).disabled = false;
		window.document.getElementById(txtID).style.backgroundColor = "white";
	}
	
}

function validateArchive(listID, txtID, yearsID)
{
	var listId0 = listID + "_0";
	var listId1 = listID + "_1";
	
	if (window.document.getElementById(yearsID).selectedIndex == 0)
	{
		alert("الرجاء اختيار سنة البحث");
		return false;
	}
	
	if (window.document.getElementById(listId1).checked)
	{
		if (window.document.getElementById(txtID).value == "")
		{
			alert("الرجاء إدخال الموضوع المراد البحث عنه");
			window.document.getElementById(txtID).focus();
			return false;
		}
	}
	return true;
}

function validateReportsArchive(txtID,listID)
{
	var listId0 = listID + "_0";
	var listId1 = listID + "_1";
	
	if (window.document.all.item(listId1).checked)
	{
		if (window.document.all.item(txtID).value == "")
		{
			alert("الرجاء إدخال الموضوع المراد البحث عنه");
			window.document.all.item(txtID).focus();
			return false;
		}
	}
	return true;
}


function validateTextInput(txtObjId)
{

return true
}

function getMonthName(monthNo)
{
	
	var monthsNames = new Array 
	monthsNames[1] = "يناير / كانون الثاني" ; 
	monthsNames[2] = "فبراير / شباط" ; 
	monthsNames[3] = "مارس / آذار" ; 
	monthsNames[4] = "أبريل / نيسان" ; 
	monthsNames[5] = "مايو / آيار" ; 
	monthsNames[6] = "يونيو / حزيران" ; 
	monthsNames[7] = "يوليو / تموز" ; 
	monthsNames[8] = "أغسطس / آب" ; 
	monthsNames[9] = "سبتمبر / أيلول" ; 
	monthsNames[10] = "أكتوبر / تشرين الأول" ; 
	monthsNames[11] = "نوفمبر / تشرين الثاني" ; 
	monthsNames[12] = "ديسمبر / كانون الأول" ; 

	document.write(monthsNames[parseInt(monthNo)]);
}	

function enableList(listID, selIndex)
{
	var selNo = window.document.all.item(selIndex).selectedIndex;
	if (selNo == 0)
	{
		window.document.all.item(listID).disabled = true;
	}
	else
	{
		window.document.all.item(listID).disabled = false;
	}
}

// check empty spaces if empty return false if not return true
function LTrim(str)
{
  var whitespace = new String(" \t\n\r");

  var s = new String(str);

  if (whitespace.indexOf(s.charAt(0)) != -1) {
    // We have a string with leading blank(s)...

    var j=0, i = s.length;

    // Iterate from the far left of string until we
    // don't have any more whitespace...
    while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
    j++;


    // Get the substring from the first non-whitespace
    // character to the end of the string...
    s = s.substring(j, i);
  }

  return s;
}

function RTrim(str)
{
  // We don't want to trip JUST spaces, but also tabs,
  // line feeds, etc.  Add anything else you want to
  // "trim" here in Whitespace
  var whitespace = new String(" \t\n\r");
  var s = new String(str);

  if (whitespace.indexOf(s.charAt(s.length-1)) != -1) {
    // We have a string with trailing blank(s)...

    var i = s.length - 1;       // Get length of string

    // Iterate from the far right of string until we
    // don't have any more whitespace...
    while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1)
      i--;


    // Get the substring from the front of the string to
    // where the last non-whitespace character is...
    s = s.substring(0, i+1);
  }

  return s;
}

function fnEmptyField (strValue)
{  
	strValue = RTrim(LTrim(strValue));
	if (strValue == "" )
    	return false;
    else
		return true;		
     	    
    }
                   	
function postFeedbackVal(name, email, country, comments)
{
	var url = "/Channel/KServices/SupportPages/postFeedback/postFeedbackAction.htm";
	if (document.getElementById('txtEmail').value != "")
	{
		if(!(CheckEmail(document.getElementById('txtEmail').value)))
		{
			if(!(RegExpEmailTest(document.getElementById('txtEmail').value)))
			{
				alert("الرجاء إدخال البريد الإلكتروني بشكل صحيح")
				document.getElementById('txtEmail').focus();
				return false;
			}
		}	
	}
	// check if txtComments empty or not
	var strComment
	strComment = document.getElementById('txtComments').value
	for (var i=0; i < strComment.length; i++)
            {
				if (strComment.charAt(i) != "<" )
					strComment = strComment.replace("<","&lt;");
                          
            }
    //strComment = strComment.replace("<","&lt;");
    document.getElementById('txtComments').value = strComment;
    
	if (!fnEmptyField(strComment))
	{
		alert("الرجاء إدخال التعليق");
		document.getElementById('txtComments').focus();
		return false;
	}	
	
	window.open(url,"","height=333,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");	
	return true;
	
}
 

function CheckEmail(checkValue)
{
	var allValid = true;
	if (checkValue.indexOf("@")<=0 || checkValue.indexOf("@") == checkValue.length-1 || checkValue.indexOf(".") == checkValue.length-1)
	allValid = false;
	return allValid; 
}


////////////////////////////////////////////////Key////////////////_u47 ?////_u47 ?///////////////////////////////

/*

txt --> TextBox

chk --> CheckBox

ddl --> DropDownList

rb  --> RadioButton

hdn --> Hiddin Field
*/

 

 




function GetIndexOfRadioBox(rbID, ItemsCount)
{
	var i = 0;
	for (i=0;i<ItemsCount;i++)
		{
			if(document.getElementById(rbID + "_" + i).checked)
				{
					return i;
				}
		}
	return 0;
}

function ReformatURL(strURL)
{
	document.location.href = strURL
	return false
}

function DropDownList_onchange(ddlist,hdnfield)
{

	if(document.all.item(ddlist).selectedIndex>-1)
		{
			document.all.item(hdnfield).value = document.all.item(ddlist)(document.all.item(ddlist).selectedIndex).text
		}
	else
		{
			document.all.item(hdnfield).value=0
		}
}

function DateRadioButton_onchange(radiobutton,ddlFromDay,hdnFromDay,ddlFromMounth,hdnFromMounth,ddlFromYear,hdnFromYear,ddlToDay,hdnToDay,ddlToMounth,hdnToMounth,ddlToYear,hdnToYear)
{
	if(document.all.item(radiobutton + "_1").checked)
	{
		DropDownList_onchange(ddlFromDay,hdnFromDay)
		DropDownList_onchange(ddlFromMounth,hdnFromMounth)
		DropDownList_onchange(ddlFromYear,hdnFromYear)
		DropDownList_onchange(ddlToDay,hdnToDay)
		DropDownList_onchange(ddlToMounth,hdnToMounth)
		DropDownList_onchange(ddlToYear,hdnToYear)
	}
}

// **********************************************************************************************
// This Method used to bulid the search result URL with the required Querey string which selects the search options
// Mohammad Al-Zou'bi @ 9-4-2206
function BuildSearchResultURL(hdnURL,hdnNow,hdnBeforeDay,hdnBeforeWeek,hdnBeforeMonth,hdnBefore6Mounth,txtCont,chkHeadline,chkSum1,chkSum2,chkBody,chkAll,ddlSite,ddlChannel,ddlSection,ddlMTopic,ddlSTopic,rbCountries,ddlCountry1,ddlCountry2,ddlCountry3,ddlCountry4,ddlCountry5,ddlCountry6,rbDuration,ddlperiod,ddlFday,ddlFmounth,ddlFyear,ddlTday,ddlTmounth,ddlTyear,ddlSize,ddlOrder)
{

	var SearchWordSpecialChars
	SearchWordSpecialChars=parametersChecking(document.getElementById(txtCont).value,';##,##--##<##>',txtCont)		
	
	if (SearchWordSpecialChars!='' && SearchWordSpecialChars!=null)
	{
		alert(SearchWordSpecialChars+' الرجاء عدم إدخال الرموز التالية')
		return false;
	}
	
	var strURL;
	if(validateText(txtCont,rbDuration,ddlFyear,ddlFmounth,ddlFday,ddlTyear,ddlTmounth,ddlTday,ddlSite))
	{
		var strSearchText
		var Headline;
		var Sum1;
		var Sum2;
		var Body;
		var SGuid;
		var CGuid;
		var SectionGuid;
		var MTopic;
		var STopic;
		var SText;
		var CText;
		var SectionText;
		var MTopicText;
		var STopicText;
		var strSearchCriteria;
		var strcountries;
		var strCountriesNames;
		var fDate;
		var TDate;
		var Country1;
		var Country2;
		var Country3;
		var country4;
		var Country5;
		var Country6;
		var Country1Value;
		var Country2Value;
		var Country3Value;
		var country4Value;
		var Country5Value;
		var Country6Value;
		var fDate;
		var TDate;
		var pSize;
		var Order;
		
		
		strSearchText = document.getElementById(txtCont).value
		SGuid = DropDownListSelectedValue(ddlSite);
		SText = DropDownListSelectedText(ddlSite);
		CGuid = DropDownListSelectedValue(ddlChannel);
		CText = DropDownListSelectedText(ddlChannel);
		SectionGuid = DropDownListSelectedValue(ddlSection);
		SectionText = DropDownListSelectedText(ddlSection);
		MTopic = DropDownListSelectedValue(ddlMTopic);
		MTopicText = DropDownListSelectedText(ddlMTopic);
		STopic = DropDownListSelectedValue(ddlSTopic);
		STopicText = DropDownListSelectedText(ddlSTopic);
		Country1 = DropDownListSelectedText(ddlCountry1);
		Country2 = DropDownListSelectedText(ddlCountry2);
		Country3 = DropDownListSelectedText(ddlCountry3);
		Country4 = DropDownListSelectedText(ddlCountry4);
		Country5 = DropDownListSelectedText(ddlCountry5);
		Country6 = DropDownListSelectedText(ddlCountry6);
		Country1Value = DropDownListSelectedValue(ddlCountry1);
		Country2Value = DropDownListSelectedValue(ddlCountry2);
		Country3Value = DropDownListSelectedValue(ddlCountry3);
		Country4Value = DropDownListSelectedValue(ddlCountry4);
		Country5Value = DropDownListSelectedValue(ddlCountry5);
		Country6Value = DropDownListSelectedValue(ddlCountry6);
		pSize = DropDownListSelectedValue(ddlSize);
		Order = DropDownListSelectedValue(ddlOrder);
		
		strSearchCriteria = strSearchText;
		
		// **********************************************
		// ** Search In 
		if (document.getElementById(chkAll).checked ==1)
		{
			Headline =1;
			Sum1 = 1;
			Sum2 = 1;
			Body = 1;
			//strSearchCriteria +="%2Fالجميع" 
		}
		else
		{
			Headline =(document.getElementById(chkHeadline).checked)?1:0;
			Sum1 = (document.getElementById(chkSum1).checked)?1:0;
			Sum2 = (document.getElementById(chkSum2).checked)?1:0;
			Body = (document.getElementById(chkBody).checked)?1:0;
		}
		// ** End of Search In
		// **********************************************
		
		// **********************************************
		// ** Searched Site 
		if (SGuid == "00")
		{
			SGuid="";
		}
		else
		{
			strSearchCriteria += "%2F" + SText;
		}
		// ** End of Searched Site 
		// **********************************************
		
		// **********************************************
		// ** Searched Channel 
		if (CGuid == "00")
		{
			CGuid="";
		}
		else
		{
			strSearchCriteria += "%2F" + CText;
		}
		// ** End of Searched Channel 
		// **********************************************
		
		// **********************************************
		// ** Searched Section 
		if (SectionGuid == "00")
			{
			SectionGuid="";
		}
		else
		{
			strSearchCriteria += "%2F" + SectionText;
		}
		// ** End of Searched Section 
		// **********************************************
		
		// **********************************************
		// ** Searched Main Topic 
		if (MTopic == "00")
			{
			MTopic="";
		}
		else
		{
			strSearchCriteria += "%2F" + MTopicText;
		}
		// ** End of Searched Main Topic 
		// **********************************************
		
		// **********************************************
		// ** Searched Sub Topic 
		if (STopic == "00")
			{
			STopic="";
		}
		else
		{
			strSearchCriteria += "%2F" + STopicText;
		}
		// ** End of Searched Sub Topic 
		// **********************************************
		
		// **********************************************
		// ** Searched Countries
		if (GetIndexOfRadioBox(rbCountries,3)==1)
		{
			strcountries="";
			strCountriesNames="";
			if (Country1 != "الجميع")
			{
				strcountries = Country1Value;
				strCountriesNames = Country1;
			}
			if(strcountries != "")
			{
				if (Country2 != "الجميع")
				{
					strCountriesNames += "," +Country2;
					strcountries += "," +Country2Value;
				}
			}
			else
			{
				if (Country2 != "الجميع")
				{
					strCountriesNames += Country2;
					strcountries += Country2Value;
				}
			}
			if(strcountries != "")
			{
				if (Country3 != "الجميع")
				{
					strCountriesNames += "," +Country3;
					strcountries += "," +Country3Value;
				}
			}
			else
			{
				if (Country3 != "الجميع")
				{
					strCountriesNames += Country3;
					strcountries += Country3Value;
				}
			}
		}
		else if(GetIndexOfRadioBox(rbCountries,3)==2)
		{
			strcountries="";
			strCountriesNames = "";
			if (Country4 != "الجميع")
			{
				strcountries = Country4Value;
				strCountriesNames = Country4;
			}
			if(strcountries != "")
			{
				if (Country5 != "الجميع")
				{
					strcountries += "-" +Country5Value;
					strCountriesNames += "," +Country5;
				}
			}
			else
			{
				if (Country5 != "الجميع")
				{
					strcountries += Country5Value;
					strCountriesNames += Country5;
				}
			}
			if(strcountries != "")
			{
				if (Country6 != "الجميع")
				{
					strcountries += "-" +Country6Value;
					strCountriesNames += "," +Country6;
				}
			}
			else
			{
				if (Country6 != "الجميع")
				{
					strcountries += Country6Value;
					strCountriesNames += Country6;
				}
			}
		}
		else
		{
			strcountries = "";
			strCountriesNames="";
		}
		// ** End of Searched Countries
		// **********************************************
		
		// **********************************************
		// ** Searched Date
		if (GetIndexOfRadioBox(rbDuration,2)==1)
		{
			fDate = DropDownListSelectedText(ddlFday) + "%2F" + DropDownListSelectedText(ddlFmounth) + "%2F" +DropDownListSelectedText(ddlFyear)
			TDate = DropDownListSelectedText(ddlTday) + "%2F" + DropDownListSelectedText(ddlTmounth) + "%2F" +DropDownListSelectedText(ddlTyear)
			strSearchCriteria += " " + fDate + " - " + TDate
		}
		else
		{
			
			if (DropDownListSelectedValue(ddlperiod)==1)
			{
				TDate = document.getElementById(hdnNow).value
				fDate = document.getElementById(hdnBeforeDay).value
				strSearchCriteria += " " + fDate + " - " + TDate
			}
			else if(DropDownListSelectedValue(ddlperiod)==2)
			{
				TDate = document.getElementById(hdnNow).value
				fDate = document.getElementById(hdnBeforeWeek).value
				strSearchCriteria += " " + fDate + " - " + TDate
			}
			else if(DropDownListSelectedValue(ddlperiod)==3)
			{
				TDate = document.getElementById(hdnNow).value
				fDate = document.getElementById(hdnBeforeMonth).value
				strSearchCriteria += " " + fDate + " - " + TDate
			}
			else if(DropDownListSelectedValue(ddlperiod)==4)
			{
				TDate = document.getElementById(hdnNow).value
				fDate = document.getElementById(hdnBefore6Mounth).value
				strSearchCriteria += " " + fDate + " - " + TDate
			}
			else
			{
				fDate="";
				TDate="";
			}
		}
		// ** End of Searched Date
		// **********************************************
		
		strSearchCriteria += " " + strCountriesNames;

		strURL = document.getElementById(hdnURL).value + "?Content=" + document.getElementById(txtCont).value + "&title=" + Headline + "&sum1=" + Sum1 + "&sum2=" + Sum2 + "&cont=" + Body;
		strURL += "&site=" + SGuid + "&chnl=" + CGuid + "&Section=" + SectionGuid + "&mTopic=" + MTopic;
		strURL += "&sTopic=" + STopic + "&countries=" + strcountries + "&fdate=" + fDate + "&tdate=" + TDate; 
		strURL += "&pagno=1&size=" + pSize + "&order=" + Order + "&Criteria=" + strSearchCriteria;

		window.location.href=strURL
	}
	
	return false;
}

function DropDownListSelectedText(ddlDropDownList)
{
	return (document.getElementById(ddlDropDownList).item(document.getElementById(ddlDropDownList).selectedIndex).text);
}

function DropDownListSelectedValue(ddlDropDownList)
{
	return (document.getElementById(ddlDropDownList).item(document.getElementById(ddlDropDownList).selectedIndex).value);
}

function BuildSimpleSearchResultURLDDL(hdnSearchResultURL, txtContent, searchIndll)
{
	var SearchWordSpecialChars
	SearchWordSpecialChars=parametersChecking(document.getElementById(txtContent).value,';##,##--##<##>',txtContent)		
	
	if (SearchWordSpecialChars!='' && SearchWordSpecialChars!=null)
	{
		alert(SearchWordSpecialChars+' الرجاء عدم إدخال الرموز التالية')
		return false;
	}
	
	//alert("hi")
	var SearchResultURL;
	var searchtext;
	var searchsite;
	var searchsiteName;
	searchtext = document.getElementById(txtContent).value;
	searchsite = DropDownListSelectedValue(searchIndll);
	searchsiteName = DropDownListSelectedText(searchIndll);
	if(checkAllValidations)
	{
		//SearchResultURL = document.getElementById(hdnSearchResultURL).value + ".htm?content=" + searchtext + "&site=" + searchsite + "&pagno=1&Criteria=" + searchtext + "%2F" + searchsiteName;
		SearchResultURL = "/portal/search.aspx?q=" + searchtext;
		document.location.href=SearchResultURL;
	}
	return false;
}

function BuildSimpleSearchResultURL(hdnSearchResultURL,txtALLSearchContent,hdnSearchedSite, hdnSearchedSiteName)
{
	var SearchWordSpecialChars
	SearchWordSpecialChars=parametersChecking(document.getElementById(txtALLSearchContent).value,';##,##--##<##>',txtALLSearchContent)		
	
	if (SearchWordSpecialChars!='' && SearchWordSpecialChars!=null)
	{
		alert(SearchWordSpecialChars+' الرجاء عدم إدخال الرموز التالية')
		return false;
	}
	//alert("hi")
	var SearchResultURL;
	var searchtext;
	var searchsite;
	var searchsiteName;
	searchtext = document.getElementById(txtALLSearchContent).value;
	searchsite = document.getElementById(hdnSearchedSite).value;
	searchsiteName = document.getElementById(hdnSearchedSiteName).value;
	if(checkAllValidations(txtALLSearchContent))
	{
		
		//SearchResultURL = document.getElementById(hdnSearchResultURL).value + ".htm?content=" + searchtext + "&site=" + searchsite + "&pagno=1&Criteria=" + searchtext + "%2F" + searchsiteName;
		SearchResultURL = "/portal/search.aspx?q=" + searchtext;
		window.location.href=SearchResultURL;
	}
	return false;
}
function BuildPortalSimpleSearchResultURL(hdnSearchResultURL,txtALLSearchContent )
{
	var SearchResultURL;
	var searchtext;
	var SearchWordSpecialChars
	
	SearchWordSpecialChars=parametersChecking(document.getElementById(txtALLSearchContent).value,';##,##--##<##>',txtALLSearchContent)		
	
	if (SearchWordSpecialChars!='' && SearchWordSpecialChars!=null)
	{
		alert(SearchWordSpecialChars+' الرجاء عدم إدخال الرموز التالية')
		return false;
	}
	

	searchtext = document.getElementById(txtALLSearchContent).value;
	
	if(checkAllValidations(txtALLSearchContent))
	{
		//CountAreaHits('7')
		//SearchResultURL = document.getElementById(hdnSearchResultURL).value + ".htm?content=" + searchtext + "&site=" + "" + "&pagno=1&Criteria=" + searchtext + "%2F" + "الجميع";
		SearchResultURL = "/portal/search.aspx?q=" + searchtext;
		//alert(SearchResultURL)
		window.location.href=SearchResultURL;
	}
	return false;
}

function BuildSimpleNewsSearchResultURL(hdnSearchResultURL,txtNewsSearchContent,hdnSearchedSite, hdnSearchedSiteName)
{
	var SearchWordSpecialChars
	SearchWordSpecialChars=parametersChecking(document.getElementById('GeneralSearchControl1_GeneralSearch_txtNewsSearchContent').value,';##,##--##<##>','GeneralSearchControl1_GeneralSearch_txtNewsSearchContent')		
	
	if (SearchWordSpecialChars!='' && SearchWordSpecialChars!=null)
	{
		alert(SearchWordSpecialChars+' الرجاء عدم إدخال الرموز التالية')
		return false;
	}
		
	//alert("hi")
	var SearchResultURL;
	var searchtext;
	var searchsite;
	var searchsiteName;
	searchtext = document.getElementById(txtNewsSearchContent).value;
	searchsite = document.getElementById(hdnSearchedSite).value;
	searchsiteName = document.getElementById(hdnSearchedSiteName).value;
	if(checkNewsValidations(txtNewsSearchContent))
	{
		//SearchResultURL = document.getElementById(hdnSearchResultURL).value + ".htm?content=" + searchtext + "&site=" + searchsite + "&pagno=1&Criteria=" + searchtext + "%2F" + searchsiteName;
		SearchResultURL = "/portal/search.aspx?q=" + searchtext;
		window.location.href=SearchResultURL;
	}
	return false;
}

function fillDays(ddlYear,ddlMonth, ddlDays)
{
	var intYear;
	var intMonth;
	var oDate;
	var LastDayinTheMonth;
	var arrMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	intYear = DropDownListSelectedValue(ddlYear);
	intMonth = DropDownListSelectedValue(ddlMonth);
	oDate = Date();
	LastDayinTheMonth  = arrMonthDays[intMonth - 1];
	if (IsLeapYear(intYear) && intMonth == 2) 
	{
        LastDayinTheMonth = LastDayinTheMonth + 1;
    }
	document.getElementById(ddlDays).outerHTML = '<select class="SearchDropDownListText" id="' + ddlDays + '"><option selected value=1>1</option>';
	var i;
	for(i=2;i<=LastDayinTheMonth;i++)
	{
		document.getElementById(ddlDays).outerHTML += '<option value=' + i + '>' + i + '</option>';
	}
	document.getElementById(ddlDays).outerHTML += '</select>';
}

function IsLeapYear(intYear)
{
	if (((intYear % 4) ==0) && (((intYear % 100)>0) || ((intYear % 400)==0)))
		return true;
	else
		return false;
}

function knowledgeBg() {
	document.getElementById("know").src = "/Portal/KServices/images/Header/knowledgeMover.jpg";

}
function economyBg() {
	document.getElementById("economy").src = "/Portal/KServices/images/Header/ebusinessMover.jpg";

}
function studiesBg() {
	document.getElementById("studies").src = "/Portal/KServices/images/Header/studiesMover.gif";

}
function rightBg() {
	document.getElementById("right").src = "/Portal/KServices/images/Header/humanRightMover.jpg";

}
function learnBg() {
	document.getElementById("learn").src = "/Portal/KServices/images/Header/learnMover.jpg";

}
function englishBg() {
	document.getElementById("english").src = "/Portal/KServices/images/Header/englishMover.jpg";

}
function BloggersBg() {
	document.getElementById("bloggers").src = "/Portal/KServices/images/Header/madonoMover.jpg";

}

function defaultBg() 
{
	if(document.getElementById("studies"))
	{
		document.getElementById("studies").src = "/Portal/KServices/images/Header/studies.gif";
	}
	document.getElementById("learn").src = "/Portal/KServices/images/Header/learn.jpg";
	document.getElementById("english").src = "/Portal/KServices/images/Header/english.jpg";
	if(document.getElementById("bloggers"))
	{
		document.getElementById("bloggers").src = "/Portal/KServices/images/Header/madono.jpg";
	}
}

function hideDrop() {
if (document.getElementById("dropMenu"))
	document.getElementById("dropMenu").style.display= "none";
}
function getImageTop(Elem)
{
	try
	{
		yPos = Elem.offsetTop;
		tempEl = Elem.offsetParent;
		while (tempEl != null) 
		{
			yPos += tempEl.offsetTop;
			tempEl = tempEl.offsetParent;
		}
	}
	catch(e)
	{}
	return yPos;
}
function getImageLeft(Elem) 
{
	try
	{
		xPos = Elem.offsetLeft;
		tempEl = Elem.offsetParent;
		while (tempEl != null) 
		{
			xPos += tempEl.offsetLeft;
			tempEl = tempEl.offsetParent;
		}
	}
	catch(e)
	{}
	return xPos;
}
function showDrop(e)
{
	var obj = document.getElementById('dropMenu');
	obj.style.display='';
	obj.style.left = getImageLeft(e) - 32 + 'px';
	obj.style.top = getImageTop(e) - 4 + 'px';
}    
  
document.onclick = function (){
if(window.event!=null && window.event !=undefined)
if(window.event.srcElement.id!='ImgHeaderMoreSites' && window.event.srcElement.id!='dropMenu')
	hideDrop();
	
};
