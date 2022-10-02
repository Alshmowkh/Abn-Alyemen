
/*********************** SERVICES ************************************/
function CheckServicesTR()
{
	if ((document.all.voteTbl) || (document.all.DGTbl))
	{
		document.all.servicesImgTR.style.display = "";
	}
	else
	{
		document.all.servicesImgTR.style.display = "none";
	}
}

function ShowHideParticipation() 
{
	var OldStyle = document.getElementById('servicesTbl').style.display;
	
	if (OldStyle == "") 
	{
		document.getElementById('servicesTbl').style.display = "none";
		document.getElementById('imgParticipation').src = "/news/Images/News/participations-header-expand.gif";
	}
	else
	{
		document.getElementById('servicesTbl').style.display = "";
		document.getElementById('imgParticipation').src = "/news/Images/News/participations-header-collapse.gif";
	}
	return false;
}
/*********************************************************************/


/*********************** SERVICES ************************************/
function CheckServicesTR()
{
	if ((document.getElementById('voteTbl')) || (document.getElementById('DGTbl')))
	{
		document.getElementById('servicesImgTR').style.display = "";
	}
	else
	{
		document.getElementById('servicesImgTR').style.display = "none";
	}
}

function ShowHideParticipation() 
{
	var OldStyle = document.getElementById('servicesTbl').style.display;
	
	if (OldStyle == "") 
	{
		document.getElementById('servicesTbl').style.display = "none";
		document.getElementById('imgParticipation').src = "/news/Images/News/participations-header-expand.gif";
	}
	else
	{
		document.getElementById('servicesTbl').style.display = "";
		document.getElementById('imgParticipation').src = "/news/Images/News/participations-header-collapse.gif";
	}
	return false;
}
/*********************************************************************/

/*********************** STOCKSMARKETS ************************************/
try
{
	//Define Variables
	var StockTableName
	var StockId
	var XmlData
	var arr = new Array(7)
	var arrNameLinks = new Array(7)
	var arrXmlFiles = new Array(7)
	var SignGreatZero='▲'
	var SignLessZero='▼'
	var BgColorWhenChange='yellow'
	var xmlDoc
	var TextNodeDefine='';
	//Array Table Names Just Add 1 for array length (above) and add new table name
	arr[0] = "QTEX"
	arr[1] = "OMEX"
	arr[2] = "KUEX"
	arr[3] = "JOEX"
	arr[4] = "EGEX"
	arr[5] = "DUEX"
	arr[6] = "BAEX"
	arr[7] = "ABEX"
	arrNameLinks[0]='سوق الدوحة'
	arrNameLinks[1]='سوق مسقط'
	arrNameLinks[2]='سوق الكويت'
	arrNameLinks[3]='سوق عمّان'
	arrNameLinks[4]='سوق القاهرة'
	arrNameLinks[5]='سوق دبي'
	arrNameLinks[6]='سوق البحرين'
	arrNameLinks[7]='سوق أبوظبي'
	arrXmlFiles[0]='QatarMarket'
	arrXmlFiles[1]='OmanMarket'
	arrXmlFiles[2]='KuwaitMarket'
	arrXmlFiles[3]='JordanMarket'
	arrXmlFiles[4]='EgyptMarket'
	arrXmlFiles[5]='DubaiMarket'
	arrXmlFiles[6]='BahrainMarket'
	arrXmlFiles[7]='AbudabiMarket'
	arrXmlFiles[8]='INTERNATIONALMARKETS'
	arrXmlFiles[9]='OIL'
	arrXmlFiles[10]='ARABIANCURRENCIES'
	arrXmlFiles[11]='GULFCURRENCIES'	
	arrXmlFiles[12]='Metals'	
	
	StockTableName=arr[0];
}
catch(err)
{}
	
	
	
	function DoCurrencyConvert()
	{
		var CurrencyFrom
		var CurrencyTo
		Str=''
		if (document.getElementById('txtCurrencyConvert').value!='')
		{
		CurrencyFrom=document.getElementById('DDLConFrom').value*document.getElementById('txtCurrencyConvert').value
		CurrencyTo=document.getElementById('DDLConTo').value*document.getElementById('txtCurrencyConvert').value
		Str+='<TABLE dir="rtl" cellSpacing="1" cellPadding="1" width="100%" border="1"><TR>'
		Str+='<TD bgColor="#ffff33">'+document.getElementById('txtCurrencyConvert').value+'</TD>'
		Str+='<TD bgColor="#ffff33">'+document.getElementById('DDLConFrom').options[document.getElementById('DDLConFrom').selectedIndex].text+'</TD>'
		Str+='<TD bgColor="#ffff33">تساوي</TD>'
		Str+='<TD bgColor="#ffff33">'+eval((CurrencyFrom*document.getElementById('DDLConFrom').value)/(CurrencyTo*document.getElementById('DDLConFrom').value))+'</TD>'
		Str+='<TD bgColor="#ffff33">'+document.getElementById('DDLConTo').options[document.getElementById('DDLConTo').selectedIndex].text+'</TD>'
		Str+='</tr></table>'
		
		document.getElementById('divCurrencyConvertResult').innerHTML=Str;
		document.getElementById('divCurrencyConvertResult').style.display='';
		
		}
	}
	
	function GetAllStockMarkets()//This Function Call All StockMarkets
	{   try
		{
			GetBeginIntMarkets();//This Function To Draw The Table Just On The Load
			GetBeginOil();//This Function To Draw The Table Just On The Load
			GetBeginCURRENCY_DOLLAR_EURO_VS_GULF_CURRENCIES();//This Function To Draw The Table Just On The Load
			GetBeginCURRENCY_DOLLAR_EURO_VS_ARABIAN_CURRENCIES();//This Function To Draw The Table Just On The Load
			//GetBeginMetals();//This Function To Draw The Table Just On The Load
		}
		catch(err)
		{}
	
	}
	/* This Function Draw Metal Table Just One Time On Load  */
	/*function GetBeginMetals()
	{
		try
		{
				var Icount,count,nodeName,nodePrice,nodeChange
				var Str='';
				var ChangeColor=0
				var CountId=1
			
				
					
				Str+='<table border="0" bordercolor="white"  cellpadding="0" cellspacing="0" width="100%">'
			
				nodes = xmlDoc.getElementsByTagName("METS"); //Get StockMarket "METAL_x0020_PRICES" From XmlDoc

				count=nodes.length;
			
				for (Icount=0;Icount<count;Icount++)
					{
						nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockMarket Name
						nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockMarket Price
						nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockMarket Change
						
					
						if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
						{	
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true"  align="center" width="22%">'
							}
							
							Str+='<span id="spnt5col1c'+CountId+'"  style="WIDTH: 100%"  class="GreatZero">'
							Str+=Math.abs(eval(nodeChange))
							Str+='</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="5%">'
							}
							
							Str+='<span id="spnt5col2c'+CountId+'"  style="WIDTH: 100%" class="GreatZero">'+SignGreatZero+'</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="22%">'
							}
							
							Str+='<span id="spnt5col3c'+CountId+'"  style="WIDTH: 100%"  class="GreatZero">'
							Str+=nodePrice
							Str+='</span>'
							Str+='</td>'
							
						}
						
						else if(eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
						{	
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true"  align="center" width="22%">'
							}
							
							Str+='<span id="spnt5col1c'+CountId+'"  style="WIDTH: 100%"  class="LessZero">'
							Str+=Math.abs(eval(nodeChange))
							Str+='</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="5%">'
							}
							
							Str+='<span id="spnt5col2c'+CountId+'" style="WIDTH: 100%" class="LessZero">'+SignLessZero+'</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="22%">'
							}
							
							Str+='<span id="spnt5col3c'+CountId+'" style="WIDTH: 100%"  class="LessZero">'
							Str+=nodePrice
							Str+='</span>'
							Str+='</td>'
						}
						else//Check If StockMarket Change Equal Zero
						{	
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true"  align="center" width="22%">'
							}
							
							Str+='<span id="spnt5col1c'+CountId+'"  style="WIDTH: 100%"  class="EqualZero">'
							Str+=eval(nodeChange)
							Str+='</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="5%">'
							}
							
							Str+='<span id="spnt5col2c'+CountId+'"  style="WIDTH: 100%" class="EqualZero">=</span>'
							Str+='</td>'
						
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="22%">'
							}
							
							Str+='<span id="spnt5col3c'+CountId+'"  style="WIDTH: 100%"  class="EqualZero">'
							Str+=nodePrice
							Str+='</span>'
							Str+='</td>'
						}
						
						if (ChangeColor==1)		
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="60%" id="spnt5col4c'+CountId+'" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="60%" id="spnt5col4c'+CountId+'" >'
						}
					
					Str+=nodeName
					Str+='</td>'
					Str+='</tr>'
						if (ChangeColor==1)
						{
							ChangeColor=0
						}
						else
						{
							ChangeColor=1
						}	
						
					CountId+=1
			
				}
					Str+='</table>'
					document.getElementById('tdMetalsData').innerHTML =Str;
			}
			catch(err)
			{}
	}  
	
	function GetMetals()
	{
		try
		{  FillXmlData(12);
		var Icount,count,nodeName,nodePrice,nodeChange
		var CountId=1
		var CheckChange
		
	    nodes = xmlDoc.getElementsByTagName("METS"); //Get StockMarket "METAL_x0020_PRICES" From XmlDoc
		count=nodes.length;
		
			for (Icount=0;Icount<count;Icount++)
			{
				nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
				nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
				nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					
					CheckChange=document.getElementById('spnt5col1c'+CountId).innerHTML
				if (document.getElementById('spnt5col1c'+CountId).className=='LessZero')
				{CheckChange=CheckChange*-1}
					
					if ((document.getElementById('spnt5col3c'+CountId).innerHTML !=nodePrice)||eval(CheckChange) !=eval(nodeChange))
					{	
						if (document.getElementById('spnt5col3c'+CountId).innerHTML !=nodePrice)
						{
							document.getElementById('spnt5col3c'+CountId).style.backgroundColor =BgColorWhenChange;
							document.getElementById('spnt5col3c'+CountId).innerHTML =nodePrice;		
						}
						else if (document.getElementById('spnt5col3c'+CountId).style.backgroundColor ==BgColorWhenChange)
						{
							document.getElementById('spnt5col3c'+CountId).style.backgroundColor ='';
						}
						
						if(eval(CheckChange) !=eval(nodeChange))
						{
							document.getElementById('spnt5col1c'+CountId).style.backgroundColor =BgColorWhenChange;
							document.getElementById('spnt5col1c'+CountId).innerHTML =Math.abs(eval(nodeChange));
						}
						else if (document.getElementById('spnt5col1c'+CountId).style.backgroundColor ==BgColorWhenChange)
						{
							document.getElementById('spnt5col1c'+CountId).style.backgroundColor ='';
						}
									
							if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
							{
								document.getElementById('spnt5col1c'+CountId).className='GreatZero'
								document.getElementById('spnt5col2c'+CountId).className='GreatZero'
								document.getElementById('spnt5col3c'+CountId).className='GreatZero'
								document.getElementById('spnt5col2c'+CountId).innerHTML=SignGreatZero;
							
							}
							else if (eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
							{
								document.getElementById('spnt5col1c'+CountId).className='LessZero'
								document.getElementById('spnt5col2c'+CountId).className='LessZero'
								document.getElementById('spnt5col3c'+CountId).className='LessZero'
								document.getElementById('spnt5col2c'+CountId).innerHTML=SignLessZero;
							}
							else//Check If StockMarket Change Equal Than Zero
							{
								document.getElementById('spnt5col1c'+CountId).className='EqualZero'
								document.getElementById('spnt5col2c'+CountId).className='EqualZero'
								document.getElementById('spnt5col3c'+CountId).className='EqualZero'
								document.getElementById('spnt5col2c'+CountId).innerHTML='=';
							}						
						
					}	
					else
					{
					if (document.getElementById('spnt5col1c'+CountId).style.backgroundColor ==BgColorWhenChange)
					{
						document.getElementById('spnt5col1c'+CountId).style.backgroundColor ='';
					}
					if (document.getElementById('spnt5col3c'+CountId).style.backgroundColor ==BgColorWhenChange)
					{
						document.getElementById('spnt5col3c'+CountId).style.backgroundColor ='';
					}
				}		
					
				
				
			CountId+=1
			}
		}
		catch(err)
		{}
	}
	
	*/
	
	
	function GetBeginIntMarkets()
	{
		try
		{	
				var Icount,count,nodeName,nodePrice,nodeChange
				var Str='';
				var ChangeColor=0
				var CountId=1
			
				
					
				Str+='<table border="0" bordercolor="white"  cellpadding="0" cellspacing="0" width="100%">'
			
				
				nodes = xmlDoc.getElementsByTagName("INMA"); //Get StockMarket From XmlDoc
				
			
				count=nodes.length;
			
				for (Icount=0;Icount<count;Icount++)
					{
						nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
						nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
						nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
						
					
						if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
						{	
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true"  align="center" width="22%">'
							}
							
							Str+='<span id="spnt2col1c'+CountId+'"  style="WIDTH: 100%"  class="GreatZero">'
							Str+=Math.abs(eval(nodeChange))
							Str+='</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="5%">'
							}
							
							Str+='<span id="spnt2col2c'+CountId+'"  style="WIDTH: 100%" class="GreatZero">'+SignGreatZero+'</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="22%">'
							}
							
							Str+='<span id="spnt2col3c'+CountId+'"  style="WIDTH: 100%"  class="GreatZero">'
							Str+=nodePrice
							Str+='</span>'
							Str+='</td>'
							
						}
						
						else if(eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
						{	
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true"  align="center" width="22%">'
							}
							
							Str+='<span id="spnt2col1c'+CountId+'"  style="WIDTH: 100%"  class="LessZero">'
							Str+=Math.abs(eval(nodeChange))
							Str+='</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="5%">'
							}
							
							Str+='<span id="spnt2col2c'+CountId+'" style="WIDTH: 100%" class="LessZero">'+SignLessZero+'</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="22%">'
							}
							
							Str+='<span id="spnt2col3c'+CountId+'" style="WIDTH: 100%"  class="LessZero">'
							Str+=nodePrice
							Str+='</span>'
							Str+='</td>'
						}
						else//Check If StockMarket Change Equal Than Zero
						{	
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true"  align="center" width="22%">'
							}
							
							Str+='<span id="spnt2col1c'+CountId+'"  style="WIDTH: 100%"  class="EqualZero">'
							Str+=eval(nodeChange)
							Str+='</span>'
							Str+='</td>'
							
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="5%">'
							}
							
							Str+='<span id="spnt2col2c'+CountId+'"  style="WIDTH: 100%" class="EqualZero">=</span>'
							Str+='</td>'
						
							if (ChangeColor==1)
							{
								Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
							}
							else
							{
								Str+='<td nowrap="true" align="center" width="22%">'
							}
							
							Str+='<span id="spnt2col3c'+CountId+'"  style="WIDTH: 100%"  class="EqualZero">'
							Str+=nodePrice
							Str+='</span>'
							Str+='</td>'
						}
						
						if (ChangeColor==1)		
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="60%" id="spnt2col4c'+CountId+'" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="60%" id="spnt2col4c'+CountId+'" >'
						}
					
					Str+=nodeName
					Str+='</td>'
					Str+='</tr>'
						if (ChangeColor==1)
						{
							ChangeColor=0
						}
						else
						{
							ChangeColor=1
						}	
						
					CountId+=1
			
				}
					Str+='</table>'
					document.getElementById('tdGlobalIndexes').innerHTML =Str;
			}
			catch(err)
			{}
	}  
	
	
	
	
	
	function GetIntMarkets()//Update Data In The Same Table That Created Before By "GetElementById" 
	{
		try
		{ FillXmlData(8);
		var Icount,count,nodeName,nodePrice,nodeChange
		var CountId=1
		var CheckChange
		
	    nodes = xmlDoc.getElementsByTagName("INMA"); //Get StockMarket "INTERNATIONAL_MARKETS" From XmlDoc
		count=nodes.length;
		
			for (Icount=0;Icount<count;Icount++)
			{
				nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
				nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
				nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					
					
					CheckChange=document.getElementById('spnt2col1c'+CountId).innerHTML
				if (document.getElementById('spnt2col1c'+CountId).className=='LessZero')
				{CheckChange=CheckChange*-1}
				
					if ((document.getElementById('spnt2col3c'+CountId).innerHTML !=nodePrice)||eval(CheckChange) !=eval(nodeChange))
					{	
						if (document.getElementById('spnt2col3c'+CountId).innerHTML !=nodePrice)
						{
							document.getElementById('spnt2col3c'+CountId).style.backgroundColor =BgColorWhenChange;
							document.getElementById('spnt2col3c'+CountId).innerHTML =nodePrice;		
						}
						else if (document.getElementById('spnt2col3c'+CountId).style.backgroundColor ==BgColorWhenChange)
						{
							document.getElementById('spnt2col3c'+CountId).style.backgroundColor ='';
						}
						
						if(eval(CheckChange) !=eval(nodeChange))
						{
							document.getElementById('spnt2col1c'+CountId).style.backgroundColor =BgColorWhenChange;
							document.getElementById('spnt2col1c'+CountId).innerHTML =Math.abs(eval(nodeChange));
						}
						else if (document.getElementById('spnt2col1c'+CountId).style.backgroundColor ==BgColorWhenChange)
						{
							document.getElementById('spnt2col1c'+CountId).style.backgroundColor ='';
						}
									
							if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
							{
								document.getElementById('spnt2col1c'+CountId).className='GreatZero'
								document.getElementById('spnt2col2c'+CountId).className='GreatZero'
								document.getElementById('spnt2col3c'+CountId).className='GreatZero'
								document.getElementById('spnt2col2c'+CountId).innerHTML=SignGreatZero;
							
							}
							else if (eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
							{
								document.getElementById('spnt2col1c'+CountId).className='LessZero'
								document.getElementById('spnt2col2c'+CountId).className='LessZero'
								document.getElementById('spnt2col3c'+CountId).className='LessZero'
								document.getElementById('spnt2col2c'+CountId).innerHTML=SignLessZero;
							}
							else//Check If StockMarket Change Equal Than Zero
							{
								document.getElementById('spnt2col1c'+CountId).className='EqualZero'
								document.getElementById('spnt2col2c'+CountId).className='EqualZero'
								document.getElementById('spnt2col3c'+CountId).className='EqualZero'
								document.getElementById('spnt2col2c'+CountId).innerHTML='=';
							}						
						
					}	
					else
					{/* Check If This Data Changed In Latest Update*/
					if (document.getElementById('spnt2col1c'+CountId).style.backgroundColor ==BgColorWhenChange)
					{
						document.getElementById('spnt2col1c'+CountId).style.backgroundColor ='';//Clear BackGround Color To Oroginal Color
					}/* Check If This Data Changed In Latest Update*/
					if (document.getElementById('spnt2col3c'+CountId).style.backgroundColor ==BgColorWhenChange)
					{
						document.getElementById('spnt2col3c'+CountId).style.backgroundColor ='';//Clear BackGround Color To Oroginal Color
					}
				}		
					
				
				
			CountId+=1
			}
		}
		catch(err)
		{}
	}
	
	

	function GetBeginOil()
	{	
	try
	{
		var Icount,count,nodeName,nodePrice,nodeChange
		var Str='';
		var ChangeColor=0
		var CountId=1
		var coco
			
		
		Str+='<table border="0" bordercolor="white"  cellpadding="0" cellspacing="0" width="100%">'
				
		nodes = xmlDoc.getElementsByTagName("OIL"); //Get StockMarket "OIL" From XmlDoc
		
	
		count=nodes.length;
		
			for (Icount=0;Icount<count;Icount++)
				{
				nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
				nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
				nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					
				
					if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
					{	
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true"  align="center" width="22%">'
						}
						
						Str+='<span id="spnt4col1c'+CountId+'"  style="WIDTH: 100%"  class="GreatZero">'
						Str+=Math.abs(eval(nodeChange))
						Str+='</span>'
						Str+='</td>'
						
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="5%">'
						}
						
						Str+='<span id="spnt4col2c'+CountId+'"  style="WIDTH: 100%" class="GreatZero">'+SignGreatZero+'</span>'
						Str+='</td>'
						
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="22%">'
						}
						
						Str+='<span id="spnt4col3c'+CountId+'"  style="WIDTH: 100%"  class="GreatZero">'
						Str+=nodePrice
						Str+='</span>'
						Str+='</td>'
						
					}
					
					else if(eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
					{	
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true"  align="center" width="22%">'
						}
						
						Str+='<span id="spnt4col1c'+CountId+'"  style="WIDTH: 100%"  class="LessZero">'
						Str+=Math.abs(eval(nodeChange))
						Str+='</span>'
						Str+='</td>'
						
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="5%">'
						}
						
						Str+='<span id="spnt4col2c'+CountId+'" style="WIDTH: 100%" class="LessZero">'+SignLessZero+'</span>'
						Str+='</td>'
						
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="22%">'
						}
						
						Str+='<span id="spnt4col3c'+CountId+'" style="WIDTH: 100%"  class="LessZero">'
						Str+=nodePrice
						Str+='</span>'
						Str+='</td>'
					}
					else//Check If StockMarket Change Equal Than Zero
					{	
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true"  align="center" width="22%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true"  align="center" width="22%">'
						}
						
						Str+='<span id="spnt4col1c'+CountId+'"  style="WIDTH: 100%"  class="EqualZero">'
						Str+=eval(nodeChange)
						Str+='</span>'
						Str+='</td>'
						
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="5%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="5%">'
						}
						
						Str+='<span id="spnt4col2c'+CountId+'"  style="WIDTH: 100%" class="EqualZero">=</span>'
						Str+='</td>'
					
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="22%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="22%">'
						}
						
						Str+='<span id="spnt4col3c'+CountId+'"  style="WIDTH: 100%"  class="EqualZero">'
						Str+=nodePrice
						Str+='</span>'
						Str+='</td>'
					}
					
					if (ChangeColor==1)		
					{	
						Str+='<td nowrap="true" class="StockName" align="right" width="60%" id="spnt4col4c'+CountId+'" bgcolor="white">'
					}
					else
					{
						Str+='<td nowrap="true" class="StockName" align="right" width="60%" id="spnt4col4c'+CountId+'" >'
					}
				Str+=nodeName
				Str+='</td>'
				Str+='</tr>'
					if (ChangeColor==1)
					{
						ChangeColor=0
					}
					else
					{	
						ChangeColor=1
					}	
				CountId+=1
		
			}
	Str+='</table>'
	document.getElementById('tdPetrolPrices').innerHTML =Str;
	
	
	
	
		}
		catch(err)
		{}
	}  

	function GetOil()//Update Data In The Same Table That Created Before By "GetElementById" 
	{
	
		try
		{ FillXmlData(9);
		var Icount,count,nodeName,nodePrice,nodeChange
		var CountId=1
		var CheckChange
		
	    nodes = xmlDoc.getElementsByTagName("OIL"); //Get StockMarket "OIL" From XmlDoc
		count=nodes.length;
		
			for (Icount=0;Icount<count;Icount++)
			{
					nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
					nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
					nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					
					CheckChange=document.getElementById('spnt4col1c'+CountId).innerHTML
				if (document.getElementById('spnt4col1c'+CountId).className=='LessZero')
				{CheckChange=CheckChange*-1}
					
					if ((document.getElementById('spnt4col3c'+CountId).innerHTML !=nodePrice)||eval(CheckChange) !=eval(nodeChange))
					{	
						if (document.getElementById('spnt4col3c'+CountId).innerHTML !=nodePrice)
						{
							document.getElementById('spnt4col3c'+CountId).style.backgroundColor =BgColorWhenChange;
							document.getElementById('spnt4col3c'+CountId).innerHTML =nodePrice;		
						}
						else if (document.getElementById('spnt4col3c'+CountId).style.backgroundColor ==BgColorWhenChange)
						{
							document.getElementById('spnt4col3c'+CountId).style.backgroundColor ='';
						}
						
						if(eval(CheckChange) !=eval(nodeChange))
						{
							document.getElementById('spnt4col1c'+CountId).style.backgroundColor =BgColorWhenChange;
							document.getElementById('spnt4col1c'+CountId).innerHTML =Math.abs(eval(nodeChange));
						}
						else if (document.getElementById('spnt4col1c'+CountId).style.backgroundColor ==BgColorWhenChange)
						{
							document.getElementById('spnt4col1c'+CountId).style.backgroundColor ='';
						}
									
							if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
							{
								document.getElementById('spnt4col1c'+CountId).className='GreatZero'
								document.getElementById('spnt4col2c'+CountId).className='GreatZero'
								document.getElementById('spnt4col3c'+CountId).className='GreatZero'
								document.getElementById('spnt4col2c'+CountId).innerHTML=SignGreatZero;
							
							}
							else if (eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
							{
								document.getElementById('spnt4col1c'+CountId).className='LessZero'
								document.getElementById('spnt4col2c'+CountId).className='LessZero'
								document.getElementById('spnt4col3c'+CountId).className='LessZero'
								document.getElementById('spnt4col2c'+CountId).innerHTML=SignLessZero;
							}
							else//Check If StockMarket Change Equal Than Zero
							{
								document.getElementById('spnt4col1c'+CountId).className='EqualZero'
								document.getElementById('spnt4col2c'+CountId).className='EqualZero'
								document.getElementById('spnt4col3c'+CountId).className='EqualZero'
								document.getElementById('spnt4col2c'+CountId).innerHTML='=';
							}						
						
					}	
					else
					{/* Check If This Data Changed In Latest Update*/
					if (document.getElementById('spnt4col1c'+CountId).style.backgroundColor ==BgColorWhenChange)
					{
						document.getElementById('spnt4col1c'+CountId).style.backgroundColor ='';//Clear BackGround Color To Original Color
					}/* Check If This Data Changed In Latest Update*/
					if (document.getElementById('spnt4col3c'+CountId).style.backgroundColor ==BgColorWhenChange)
					{
						document.getElementById('spnt4col3c'+CountId).style.backgroundColor ='';//Clear BackGround Color To Original Color
					}
				}		
					
				
				
			CountId+=1
			}
		}
		catch(err)
		{}
	}
	
	function GetColorEuroDollar(ColName,Id)
	{	try
		{	
		var CheckChange
		CheckChange=document.getElementById(Id).innerHTML
				if (document.getElementById(Id).className=='LessZero')
				{CheckChange=CheckChange*-1}
		
		if(document.getElementById(Id))
		{	
			if (CheckChange!=ColName)//Check If StockMarket  Changed Or Not 
			{
				document.getElementById(Id).innerHTML=ColName;//Change Data
				document.getElementById(Id).style.backgroundColor=BgColorWhenChange;//Change BackGround Color
			}
			else
			{
				if (document.getElementById(Id).style.backgroundColor==BgColorWhenChange)
				{
					document.getElementById(Id).style.backgroundColor='';//Clear BackGround Color To Oroginal Color
				}
			}
		}
		}
		catch(err)
		{}
	}

	function GetBeginCURRENCY_DOLLAR_EURO_VS_ARABIAN_CURRENCIES()
	{
		try
		{
			
			var Icount,count,nodeName,nodePrice,nodeChange,nodes
			
			var Str='';
			var ChangeColor=0
			var CountId=1
			nodes = xmlDoc.getElementsByTagName("ARCU"); //Get StockMarket "CURRENCY_DOLLAR_EURO_VS_ARABIAN_CURRENCIES" From XmlDoc
			Str+='<table border="0" cellpadding="0" bordercolor="white" cellspacing="0" width="100%">'
			count=nodes.length;
			
				for (Icount=0;Icount<count;Icount++)
				{	Str+='<tr>'
					nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
					nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
					nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="25%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="25%">'
						}
						
						Str+='<span id="spnt1col1c'+CountId+'"  style="WIDTH: 100%" class="StockMarketEuroDollar">'
						Str+=Math.abs(eval(nodeChange))
						Str+='</span>'
						Str+='</td>'
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="25%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="25%">'
						}
						Str+='<span id="spnt1col2c'+CountId+'"  style="WIDTH: 100%" class="StockMarketEuroDollar">'
						Str+=nodePrice
						Str+='</span>'
						Str+='</td>'
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="50%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="50%">'
						}
					
					Str+=nodeName
					Str+='</td>'
					Str+='</tr>'
						if (ChangeColor==1)
						{
							ChangeColor=0
						}
						else
						{
							ChangeColor=1
						}	
					CountId++
				}
		Str+='</table>'
		document.getElementById('tdArabicCurrency').innerHTML =Str;//Fill New Data In The TD
		}
		catch(err)
		{}
	}


	function GetCURRENCY_DOLLAR_EURO_VS_ARABIAN_CURRENCIES()
	{	
	
		try
		{FillXmlData(10);
		
			var Icount,count,nodeName,nodePrice,nodeChange,nodes
			
			var CountId=1
		
		nodes = xmlDoc.getElementsByTagName("ARCU"); //Get StockMarket "CURRENCY_DOLLAR_EURO_VS_ARABIAN_CURRENCIES" From XmlDoc
		count=nodes.length;
			for (Icount=0;Icount<count;Icount++)
			{	
				nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
				nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
				GetColorEuroDollar(nodeChange,'spnt1col1c'+CountId);//This Function To Check If Data Change Or Not And Change BackGround Color

				GetColorEuroDollar(nodePrice,'spnt1col2c'+CountId);
			CountId++
			}
		}
		catch(err)
		{}
	}
	
	
	function GetBeginCURRENCY_DOLLAR_EURO_VS_GULF_CURRENCIES()
	{
		try
		{
			var Icount,count,nodeName,nodePrice,nodeChange,nodes
			
			var Str='';
			var ChangeColor=0
			var CountId=1
			nodes = xmlDoc.getElementsByTagName("GUCU"); //Get StockMarket "CURRENCY_DOLLAR_EURO_VS_GULF_CURRENCIES" From XmlDoc
			Str+='<table border="0" cellpadding="0" bordercolor="white" cellspacing="0" width="100%">'
			count=nodes.length;
			
				for (Icount=0;Icount<count;Icount++)
				{	Str+='<tr>'
					nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]//Get StockName
					nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
					nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="25%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="25%">'
						}
						
						Str+='<span id="spnt3col1c'+CountId+'"  style="WIDTH: 100%" class="StockMarketEuroDollar">'
						Str+=Math.abs(eval(nodeChange))
						Str+='</span>'
						Str+='</td>'
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" align="center" width="25%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" align="center" width="25%">'
						}
						Str+='<span id="spnt3col2c'+CountId+'"  style="WIDTH: 100%" class="StockMarketEuroDollar">'
						Str+=nodePrice
						Str+='</span>'
						Str+='</td>'
						if (ChangeColor==1)
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="50%" bgcolor="white">'
						}
						else
						{
							Str+='<td nowrap="true" class="StockName" align="right" width="50%">'
						}
					
					Str+=nodeName
					Str+='</td>'
					Str+='</tr>'
						if (ChangeColor==1)
						{	
							ChangeColor=0
						}
						else
						{
							ChangeColor=1
						}	
					CountId++
				}
		Str+='</table>'
		document.getElementById('tdGulfCurrency').innerHTML =Str;//Fill New Data In The TD
		}
		catch(err)
		{}
	}

	function GetCURRENCY_DOLLAR_EURO_VS_GULF_CURRENCIES()
	{
		try
		{
		 FillXmlData(11);
			var Icount,count,nodeName,nodePrice,nodeChange,nodes
			
			var CountId=1
		nodes = xmlDoc.getElementsByTagName("GUCU"); //Get StockMarket "CURRENCY_DOLLAR_EURO_VS_GULF_CURRENCIES" From XmlDoc
		count=nodes.length;
			for (Icount=0;Icount<count;Icount++)
			{	
					nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]//Get StockPrice
					nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]//Get StockChange
					GetColorEuroDollar(nodeChange,'spnt3col1c'+CountId);//This Function To Check If Data Change(Change) Or Not And Change BackGround Color

					GetColorEuroDollar(nodePrice,'spnt3col2c'+CountId);//This Function To Check If Data Change(Stock Price) Or Not And Change BackGround Color
				CountId++
			}
		}
		catch(err)
		{}
	}



/*********************************************************************/


/************************** STOCKMARKETTICKER ************************/
var Timer
	function TimerGetAllStockMarketAndTicker()//This Timer To Get All New Data From XmlFile
	{
		try
		{
	
		
		try
		{
			if (document.getElementById('tdGlobalIndexes').style.display=='')//Check Id Td Of GlobalIndexes Displayed Or Not If Displayed Will Fill it New Data
			{
				GetIntMarkets();
			}
		}
		catch(err)
		{
		}
		try
		{
			if (document.getElementById('tdPetrolPrices').style.display=='')//Check Id Td Of PetrolPrices Displayed Or Not If Displayed Will Fill it New Data
			{
				GetOil();
			}
		}
		catch(err)
		{
		}
		try
		{
			if (document.getElementById('tdGulfCurrency').style.display=='')//Check Id Td Of GulfCurrency Displayed Or Not If Displayed Will Fill it New Data
			{
				GetCURRENCY_DOLLAR_EURO_VS_GULF_CURRENCIES();
			}
		}
		catch(err)
		{
		}
		try
		{
			if (document.getElementById('tdArabicCurrency').style.display=='')//Check Id Td Of ArabicCurrency Displayed Or Not If Displayed Will Fill it New Data
			{
				GetCURRENCY_DOLLAR_EURO_VS_ARABIAN_CURRENCIES();
			}
		}
		catch(err)
		{
		}
		try
		{
			/*if (document.getElementById('tdMetalsData').style.display=='')//Check Id Td Of MetalsData Displayed Or Not If Displayed Will Fill it New Data
			{
				GetMetals();
			}*/
		}
		catch(err)
		{
		}
		try
		{
			if (document.getElementById('tblStockTicker').style.display=='')
			{
			GetStockTickerByIdTimer(StockId);//This Function To Get New Data For Ticker 
			}
		}
		catch(err)
		{
		}
	
		//Clear Cuurentlly Time And Create New Timer
		if (Timer)
		{window.clearTimeout(Timer)}
			
		Timer=window.setTimeout("TimerGetAllStockMarketAndTicker()",document.getElementById('hdnStockGetXmlTimer').value)  	
		}
		catch(err)
		{}
	}


	function GetStockLinks()//Thi Function To Create StockName Links That's Appear In The Left Side On The Page
		{	
		try
		{
			var LinkName=''
			var StrStockLinks='';
			var StockPriceTicker='';
			var nodes,count,Icount,nodeName,nodePrice,nodeChange,nodeStockLinks
			var CountId=0;
			var InitialSelected ='selected'
			//Generate StockNamesLinks
			StrStockLinks+='<SELECT dir="rtl" style="width:100%;" style="font-weight: bold;" onchange="GetStockTickerById(this.value);">'
				for (Icount=0;Icount<arr.length;Icount++)
					{	
						StrStockLinks+='<OPTION '+InitialSelected+' dir="rtl" value='+CountId+'>';
						StrStockLinks+=arrNameLinks[Icount];
						StrStockLinks+='</OPTION>';
						InitialSelected=''
					CountId+=1
				}
			StrStockLinks+='</SELECT>'
			document.getElementById('tdArabicMarket').innerHTML =StrStockLinks;//Fill New Data 
		}
		catch(err)
		{}
	}
	
		/*This Function Received StockeTickerId And And Received Data By StockeTickerId*/
	function GetStockTickerById(StockPriceId)
	{   try
		{
		
		try
		{
			if (document.getElementById('tdbStockMarkets'))
			{
			
			document.getElementById('tdbStockMarkets').focus();//This To Indicate To StockMarket Ticker When User Click On StockName Links
			}
			
		}
		catch(err)
		{}		
				if (StockPriceId>=0 && StockPriceId<=arr.length)
				{
					StockId=StockPriceId
				}
				else
				{
					StockId=(Math.floor(Math.random()*((arr.length+1)-0)) + 0);
					StockPriceId=StockId
					
				}
			
				FillXmlData(StockPriceId)
			StockTableName=arr[StockPriceId];//Get StockMarket Name By Id;
			var Str='';
			var CountId=0
			var StockPriceTicker='';
			var count,nodes,Icount,nodeName
			
			nodes = xmlDoc.getElementsByTagName(StockTableName); //Get StockMarket Data From Xml Data By StockName
			nodeName=nodes.item(0).childNodes[0][TextNodeDefine] //Get MarketName 
			nodePrice=nodes.item(0).childNodes[1][TextNodeDefine] //GetMarketPrice
			nodeChange=nodes.item(0).childNodes[2][TextNodeDefine] //GetMarketChange
			/*Create Marquee That Show Stock Ticker*/
			StockPriceTicker+='<marquee dir="rtl"   id="mrqStockPricesTiker" scrollAmount=4 direction="right" behavior="scroll" height="25" valign="middle">'
			StockPriceTicker+='<span class="StockNameTicker">' + nodeName + '</span>';
			StockPriceTicker+='&nbsp;'; 
			document.getElementById('MarketSelectedName').innerHTML=nodeName
				if (eval(nodeChange)>eval(0.0))//Check If That Change Greater Than Zero
				{
					StockPriceTicker+='<span class="GreatZero" id="TickerMainName'+StockPriceId+'">' + nodePrice
					StockPriceTicker+=SignGreatZero; //This Variable Indicate To Up Sign
					StockPriceTicker+=eval(nodeChange)
				}
				else if (eval(nodeChange)<eval(0.0))//Check If That Change Less Than Zero
				{
					StockPriceTicker+='<span class="LessZero" id="TickerMainName'+StockPriceId+'">' + nodePrice
					StockPriceTicker+=SignLessZero;
					StockPriceTicker+=Math.abs(eval(nodeChange)) //This Variable Indicate To Down Sign
				}
				else//Check If That Change Equal Zero
				{
					StockPriceTicker+='<span class="EqualZero" id="TickerMainName'+StockPriceId+'">' + nodePrice
					StockPriceTicker+='='//This Variable Indicate To Equal Sign
					StockPriceTicker+=eval(nodeChange)
				}  
					StockPriceTicker+='</span>';
					StockPriceTicker+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
				
				
				nodes=xmlDoc.getElementsByTagName(StockTableName); 
				count=nodes.length;
		
			for (Icount=1;Icount<count;Icount++)
			{
				nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine] //Get MarketName 
				nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine] //GetMarketPrice
				nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine] //GetMarketChange
				
				StockPriceTicker+='<span class="StockNameChildTicker">' + nodeName + '</span>';
				//////		
				StockPriceTicker+='&nbsp;'	
					
				if (eval(nodeChange)>eval(0.0))//Check If That Change Greater Than Zero
				{
					StockPriceTicker+='<span class="GreatZero" id="TickerDetailsPrice'+StockPriceId+Icount+'">' + nodePrice 
					StockPriceTicker+=SignGreatZero//This Variable Indicate To Up Sign
					StockPriceTicker+=eval(nodeChange)
				}
				else if (eval(nodeChange)<eval(0.0))//Check If That Change Less Than Zero
				{
					StockPriceTicker+='<span class="LessZero" id="TickerDetailsPrice'+StockPriceId+Icount+'">' + nodePrice
					StockPriceTicker+=SignLessZero//This Variable Indicate To Down Sign
					StockPriceTicker+=Math.abs(eval(nodeChange))
				}
				else//Check If That Change Equal Zero
				{	
					StockPriceTicker+='<span class="EqualZero" id="TickerDetailsPrice'+StockPriceId+Icount+'">' + nodePrice
					StockPriceTicker+='='//This Variable Indicate To Equal Sign
					StockPriceTicker+=eval(nodeChange)
				}   
				//////		
				StockPriceTicker+='</span>';
				//////	
				StockPriceTicker+='&nbsp;&nbsp;&nbsp;'	;	
				CountId++
			}
			
		
			StockPriceTicker+='</marquee>'
					
			document.getElementById('tdStockPricesTicker').innerHTML='';
			document.getElementById('tdStockPricesTicker').innerHTML =StockPriceTicker
			document.getElementById('mrqStockPricesTiker').direction='right';
			document.getElementById('mrqStockPricesTiker').scrollAmount=4			
							
			GetStockTickerByIdTimer(StockId);	
		}
		catch(err)
		{}
	
	}

	function GetStockTickerByIdTimer(StockPriceId)
	{	
		try
		{FillXmlData(StockPriceId)
			StockTableName=arr[StockPriceId];
			var CheckChangeChild='';
			var CheckChangemain='';
			var Str='';
			var CountId=0
			var StockPriceTicker='';
			var count,nodes,Icount,nodeName
			var CheckChange
			
			nodes = xmlDoc.getElementsByTagName(StockTableName); //Get StockMarket By StockTableName From XmlDoc
			nodeName=nodes.item(0).childNodes[0][TextNodeDefine]//Get StockName
			nodePrice=nodes.item(0).childNodes[1][TextNodeDefine]//Get StockPrice
			nodeChange=nodes.item(0).childNodes[2][TextNodeDefine]//Get StockChange
		

			if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
			{
				CheckChangemain+=nodePrice
				CheckChangemain+=SignGreatZero;
				CheckChangemain+=eval(nodeChange)
			}
			else if (eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
			{
				CheckChangemain+=nodePrice
				CheckChangemain+=SignLessZero;
				CheckChangemain+=Math.abs(eval(nodeChange))
			}
			else//Check If StockMarket Change Equal Than Zero
			{
				CheckChangemain+=nodePrice
				CheckChangemain+='='
				CheckChangemain+=eval(nodeChange)
			}  

			CheckChange=document.getElementById('TickerMainName'+StockPriceId).innerHTML
				if (document.getElementById('TickerMainName'+StockPriceId).className=='LessZero')
				{CheckChange=CheckChange*-1}


		if (document.getElementById('TickerMainName'+StockPriceId))
		{
			if ((CheckChange!=CheckChangemain))
			{	
				
				if (eval(nodeChange)>eval(0.0))//Check If StockMarket Change Great Than Zero
				{
					document.getElementById('TickerMainName'+StockPriceId).innerHTML=CheckChangemain;
					document.getElementById('TickerMainName'+StockPriceId).className='GreatZero';
					
				}
				else if (eval(nodeChange)<eval(0.0))//Check If StockMarket Change Less Than Zero
				{
					document.getElementById('TickerMainName'+StockPriceId).innerHTML=CheckChangemain;
					document.getElementById('TickerMainName'+StockPriceId).className='LessZero';
				}
				else//Check If StockMarket Change Equal Than Zero
				{
					document.getElementById('TickerMainName'+StockPriceId).innerHTML=CheckChangemain;
					document.getElementById('TickerMainName'+StockPriceId).className='EqualZero';
				}  
			}	
			else
			{
			}
		}

		nodes= xmlDoc.getElementsByTagName(StockTableName); //Get StockMarket By StockTableName From XmlDoc
		count=nodes.length;
			
			for (Icount=1;Icount<count;Icount++)
			{
				CheckChangeChild='';
				nodeName=nodes.item(Icount).childNodes[0][TextNodeDefine]
				nodePrice=nodes.item(Icount).childNodes[1][TextNodeDefine]
				nodeChange=nodes.item(Icount).childNodes[2][TextNodeDefine]
		
												
								
				if (eval(nodeChange)>eval(0.0))
				{
					CheckChangeChild+=nodePrice
					CheckChangeChild+=SignGreatZero;
					CheckChangeChild+=eval(nodeChange)
				}
				else if (eval(nodeChange)<eval(0.0))
				{
					CheckChangeChild+=nodePrice
					CheckChangeChild+=SignLessZero;
					CheckChangeChild+=Math.abs(eval(nodeChange))
				}
				else
				{
					CheckChangeChild+=nodePrice
					CheckChangeChild+='='
					CheckChangeChild+=eval(nodeChange)
				} 
		
				CheckChange=document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).innerHTML
				if (document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).className=='LessZero')
				{CheckChange=CheckChange*-1}
				
				if (document.getElementById('TickerDetailsPrice'+StockPriceId+Icount))
				{
					if ((CheckChange!=CheckChangeChild))
					{
						if (eval(nodeChange)>eval(0.0))
						{
							document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).innerHTML=CheckChangeChild;
							document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).className='GreatZero';
						}
						else if (eval(nodeChange)<eval(0.0))
						{
							document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).innerHTML=CheckChangeChild;
							document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).className='LessZero';
						}
						else
						{
							document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).innerHTML=CheckChangeChild;
							document.getElementById('TickerDetailsPrice'+StockPriceId+Icount).className='EqualZero';
						}  				
					}
					else
					{}
				}						
				CountId++
			}
			
		}
		catch(err)
		{}

	}

/*********************************************************************/

/***************************** Get Data Xml AllStocks By Ajax HttpRequest ******************/
		var xmlHttp

		function FillXmlData(XmlFile)
		{
	
			if (XmlFile>=0 && XmlFile<=arrXmlFiles.length)
				{
					XmlFile=arrXmlFiles[XmlFile]
				}
				else
				{	
					XmlFile=(Math.floor(Math.random()*((arrXmlFiles.length+1)-0)) + 0);
					XmlFile=arrXmlFiles[XmlFile]
						
				}
				
			try
			{
			
				xmlHttp=GetXmlHttpObject()
				if (xmlHttp==null)
				{
					alert ("Browser does not support HTTP Request")
					return
				} 
				var url="/news/controls/GetStockXml.aspx"
				
				url=url+"?XmlFile="+XmlFile+"&sid="+Math.random();
				
				xmlHttp.onreadystatechange=stateChanged 
				
				if (window.ActiveXObject)//IE
				{
				try
				{
				xmlHttp.open("GET",url,false)}
				catch(err)
				{}
				}
				else if (window.XMLHttpRequest)//FireFox
				{
				xmlHttp.open("GET",url,false)
				}
				
				xmlHttp.send(null)
				
				if (window.ActiveXObject)
				{
				
				}
				
				else if (document.implementation.createDocument)//If FireFox Define XmlDox "Create Document"
				{
					xmlDoc = document.implementation.createDocument("", "doc", null);
					
					var parser = new DOMParser(); 
					xmlDoc = parser.parseFromString(xmlHttp.responseText , "text/xml"); 
					TextNodeDefine='textContent'
				}
				else
				{
					alert ("Browser does not support Stock Market Service")
				}
			
			
				
							
				if (document.getElementById('tblLoading').style.display=='')//Check If Data Received Or Not
				{
					document.getElementById('tdbStockMarkets').style.display ='';
					document.getElementById('tblStockNameLink').style.display ='';
					document.getElementById('tblLoading').style.display ='none';
				}
				
			}
			catch(err)
			{
				
			}
		} 
		
		/*This Function Work When The XmlHttp Received The Data */
		function stateChanged() 
		{ 
			try
			{	
				if (window.ActiveXObject)
				{	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
					{	
						xmlDoc=new ActiveXObject("Microsoft.XMLDOM")
			
					xmlDoc.loadXML(xmlHttp.responseText)//Load Xml File From Server
					xmlDoc.async=true
					TextNodeDefine='text'
					}
				}
			}
			catch(err)
			{
				document.getElementById('tdbStockMarkets').style.display ='none';
				document.getElementById('tblStockNameLink').style.display ='none';
			} 
		} 

		function GetXmlHttpObject()
		{ 
			try
			{
				var objXMLHttp=null
				if (window.XMLHttpRequest)
				{
					objXMLHttp=new XMLHttpRequest()
				}
				else if (window.ActiveXObject)
				{
					objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
				}
				return objXMLHttp
			}
			catch(err)
			{
				document.getElementById('tdbStockMarkets').style.display ='none';
				document.getElementById('tblStockNameLink').style.display ='none';
			}
		} 

/********************************************************************/

/*********************************************************************/

function ShowHide(ID) 
{
	
	var imgID;
	var ResultTable;
	if (ID==null)
	{
		imgID=0;
		ID='';
	}
	else
	{
		imgID=ID;
	}
	
	var OldStyle;
	
	if (imgID==0)
	{
		ResultTable = document.getElementById("ResultTable");
	}
	else
	if (imgID==1)
	{
		ResultTable = ResultTable1;
	}
	else
	{
		ResultTable= ResultTable2;
	}
	
	OldStyle = ResultTable.style.display;
	
	if (OldStyle=='' ) 
	{
		ResultTable.style.display='none';
		document.getElementById('imgPlus'+ID).src="/news/Images/News/newsaddings-expand.gif";
	}
	else
	{
		ResultTable.style.display='';
		document.getElementById('imgPlus'+ID).src="/news/Images/News/newsaddings-collapse.gif";
	}
	return false;
}

function ShowHideLatestNews() 
{
	var OldStyle = document.getElementById('trstock').style.display;
	
	if (OldStyle == "") 
	{
		document.getElementById('trstock').style.display = "none";
		document.getElementById('imgStock').src = "/News/images/News/stock-expand.gif";
	}
	else
	{
		document.getElementById('trstock').style.display = "";
		document.getElementById('imgStock').src = "/News/images/News/stock-collapse.gif";
	}
	return false;
}

function ShowHideLatestNews2() 
{
	var OldStyle = tblLatestNews.style.display;
	
	if (OldStyle == "") 
	{
		tblLatestNews.style.display = "none";
		document.getElementById('imgLatestNews').src = "/News/images/icons/mainpage-news-expand.gif";
	}
	else
	{
		tblLatestNews.style.display = "";
		document.getElementById('imgLatestNews').src = "/News/images/icons/mainpage-news-collapse.gif";
	}
	return false;
}

function UpdateLatestItemsTable() 
{
	var OldStyle;
	var oTable = document.getElementById('tblLatestItems');
	
	OldStyle = oTable.style.display;
	if (OldStyle=='' ) 
	{
		oTable.style.display='none';
		document.getElementById('imgPlusLatest').src="/news/Images/News/whatsnew-header-expand.gif";
	}
	else
	{
		oTable.style.display='';
		document.getElementById('imgPlusLatest').src="/news/Images/News/whatsnew-header-collapse.gif";
	}
	return false;
}

/*function openServices(strType,EncodedURL)
{	
	switch (strType) 
	{ 
		case "print" : 
		var intWinW = 680; 
		var intWinH = 420; 
		var strURL = "/News/aspx/print.htm"; 
		var strProperties = "menubar=yes, resizable=yes,  "; 
		break;

		case "sendArticle" : 
		var intWinW = 500; 
		var intWinH = 375; 
		var strProperties = "resizable=no, ";  
		var strURL = "/News/aspx/sendArticle.aspx?EML=" + EncodedURL 
		break; 
	}
	if (strURL != null) 
	{ 
		var intScreenW = parseInt(screen.width, 10); 
		var intScreenH = parseInt(screen.Height, 10); 
		var intWinT = (intScreenH - intWinH)/2; 
		var intWinL = (intScreenW - intWinW)/2;
		strProperties += 'height=' + intWinH + ', width=' + intWinW + ', top=' + intWinT + ', left=' + intWinL + ', scrollbars=yes,toolbar=yes'; 
		var winObject = window.open(strURL, 'PageServices', strProperties, false); 
		winObject.focus(); 
	} 
} */
  
  
  

/*********************************************************************/

/*function ShowHide() 
{
	var OldStyle;

	OldStyle = ResultTable.style.display;
	if (OldStyle=='' ) 
	{
		ResultTable.style.display='none';
		document.getElementById('imgPlus').src="/news/Images/News/newsaddings-expand.gif";
	}
	else
	{
		ResultTable.style.display='';
		document.getElementById('imgPlus').src="/news/Images/News/newsaddings-collapse.gif";
	}
	return false;
}*/

function ShowHideLatestNews() 
{
	var OldStyle = document.getElementById('trstock').style.display;
	
	if (OldStyle == "") 
	{
		document.getElementById('trstock').style.display = "none";
		document.getElementById('imgStock').src = "/News/images/News/stock-expand.gif";
	}
	else
	{
		document.getElementById('trstock').style.display = "";
		document.getElementById('imgStock').src = "/News/images/News/stock-collapse.gif";
	}
	return false;
}

function ShowHideLatestNews2() 
{
	var OldStyle = document.getElementById('tblLatestNews').style.display;
	
	if (OldStyle == "") 
	{
		document.getElementById('tblLatestNews').style.display = "none";
		document.getElementById('imgLatestNews').src = "/News/images/icons/mainpage-news-expand.gif";
	}
	else
	{
		document.getElementById('tblLatestNews').style.display = "";
		document.getElementById('imgLatestNews').src = "/News/images/icons/mainpage-news-collapse.gif";
	}
	return false;
}

function ShowHideLatestNews3() 
{
	var OldStyle = document.getElementById('tblLatestNews').style.display;
	
	if (OldStyle == "") 
	{
		document.getElementById('tblLatestNews').style.display = "none";
		document.getElementById('imgLatestNews').src = "/News/images/HumanRights-expand.gif";
		document.getElementById('imgLatestNews').width = "21";
		document.getElementById('imgLatestNews').height = "22";
	}
	else
	{
		document.getElementById('tblLatestNews').style.display = "";
		document.getElementById('imgLatestNews').src = "/News/images/HumanRights-collapse.gif";
		document.getElementById('imgLatestNews').width = "21";
		document.getElementById('imgLatestNews').height = "22";
	}
	return false;
}

function UpdateLatestItemsTable() 
{
	var OldStyle;
	var oTable = document.getElementById('tblLatestItems');
	
	OldStyle = oTable.style.display;
	if (OldStyle=='' ) 
	{
		oTable.style.display='none';
		document.getElementById('imgPlusLatest').src="/news/Images/News/whatsnew-header-expand.gif";
	}
	else
	{
		oTable.style.display='';
		document.getElementById('imgPlusLatest').src="/news/Images/News/whatsnew-header-collapse.gif";
	}
	return false;
}

function openServices(strType,EncodedURL)
{	
	switch (strType) 
	{ 
		case "print" : 
		var intWinW = 680; 
		var intWinH = 420; 
		var strURL = "/News/aspx/print.htm"; 
		var strProperties = "menubar=yes, resizable=yes,  "; 
		break;

		case "sendArticle" : 
		var intWinW = 500; 
		var intWinH = 375; 
		var strProperties = "resizable=no, ";  
		var strURL = "/News/aspx/sendArticle.aspx?EML=" + EncodedURL 
		break; 
		
		case "flash" : 
		var intWinW = 500; 
		var intWinH = 375; 
		var strProperties = "resizable=no, ";
		EncodedURL=ArticleURL;
		var strURL = "/News/aspx/sendArticle.aspx?EML="+escape(EncodedURL)
		
		break; 
	}
	if (strURL != null) 
	{ 
		var intScreenW = parseInt(screen.width, 10); 
		var intScreenH = parseInt(screen.Height, 10); 
		var intWinT = (intScreenH - intWinH)/2; 
		var intWinL = (intScreenW - intWinW)/2;
		strProperties += 'height=' + intWinH + ', width=' + intWinW + ', top=' + intWinT + ', left=' + intWinL + ', scrollbars=yes,toolbar=yes'; 
		var winObject = window.open(strURL, 'PageServices', strProperties, false); 
		winObject.focus(); 
	} 
} 
  
  
  