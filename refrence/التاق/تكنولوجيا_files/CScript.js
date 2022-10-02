// JScript File

function createXMLHttp() 
{
    if (typeof XMLHttpRequest != "undefined") 
    {
        return new XMLHttpRequest();
    } 
    else if (window.ActiveXObject) 
    {
      var aVersions = [ "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp","Microsoft.XMLHttp"];

      for (var i = 0; i < aVersions.length; i++) {
        try 
        {
            var oXmlHttp = new ActiveXObject(aVersions[i]);
            return oXmlHttp;
        } 
        catch (oError) 
        {
        }
      }
    }
    throw new Error("XMLHttp object could be created.");
}

//-------------------------------------------------------------------




function SignIn(maills)




{
    var _maills = document.getElementById(maills).value;
    
    
    
 /*if (_maills== '')
  {
  //document.write("لابد من ادخال الإيميل");
  document.getElementById('divmessage').innerHTML =document.write("لابد من ادخال الإيميل");
  }
  
var emailFormat = /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2})?$/i
if (_maills.search(emailFormat) == -1)
{
document.getElementById('divmessage').innerHTML =document.write("تأكد من الإيميل");
}
   */
  
    
    var _XmlHttp = createXMLHttp();
    _XmlHttp.open("get", "addmail.aspx?maills="+_maills + "&rnd=" + Math.floor(Math.random() * 10000), true);
    
    _XmlHttp.onreadystatechange = function()   
        {
            if(_XmlHttp.readyState == 4)
            {
                /*if(_XmlHttp.responseText=='1')
                {
                    document.getElementById('divInvalidLogin').style.display='none';
                    window.location = 'default.aspx';
                    //writelogin();
                }
                else
                {
                    document.getElementById('divInvalidLogin').style.display='block';
                }
                document.getElementById('divlogincon').style.display='block';
                document.getElementById('divloginloading').style.display='none';*/
                                               
                document.getElementById('divmessage').innerHTML = _XmlHttp.responseText;
                if(_XmlHttp.responseText == 'تمت الإضافة')
                {
					document.getElementById('mailtext').style.display = 'none';
                }
                else
					document.getElementById('mailtext').style.display = 'block';
            }
            else
            {                                
				document.getElementById('mailtext').style.display = 'none';
                document.getElementById('divmessage').innerHTML = '<img src="images/loading4.gif" >';
            }
        };
        
    _XmlHttp.send(null);
    
    return false;
}

