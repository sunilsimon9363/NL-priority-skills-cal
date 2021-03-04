

var noclest = ["3111","3112","3011","3233","3234","3413","8432","3214","3211","3212","3215","3216","2174","2241","2148","2133","2132","2232","2175","2147","2221","2171","2173","8252","0714","2123","0711","2121","2281","4165","2172","2113","5121"];

var selectedValue = 0;

document.getElementById("score").click();

var selectedValue = 0;
function resizedWindow(){
  var w = window.outerWidth;
  var h = window.outerHeight;

  
}
function openTab2(evt) {
     document.getElementById("content1").style.display = "block";
document.getElementById("content2").style.display = "block";   
    document.getElementById("content2a").style.display = "block"; 
document.getElementById("content2b").style.display = "block";
document.getElementById("content2c").style.display = "block";
document.getElementById("content2d").style.display = "block"; 
     document.getElementById("cal").style.display = "block";  
     document.getElementById("content3").style.display = "none";
     openTab(evt);	
}
function openTab1(evt) {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2a").style.display = "none"; 
document.getElementById("content2").style.display = "none"; 
document.getElementById("content2b").style.display = "none";
document.getElementById("content2c").style.display = "none";
document.getElementById("content2d").style.display = "none"; 
    document.getElementById("cal").style.display = "none"; 
    document.getElementById("content3").style.display = "block";
    openTab(evt);
}
function openTab(evt) {
  var i, tablinks;
  tablinks = document.getElementsByClassName("tab button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}
function calculate() {
    selectedValue = 0;
    if(document.getElementById("e7").checked == true){selectedValue = selectedValue + 24;}
if(document.getElementById("e6").checked == true){selectedValue = selectedValue + 22;}
if(document.getElementById("e5").checked == true){selectedValue = selectedValue + 20;}
if(document.getElementById("e0").checked == true){selectedValue = selectedValue + 0;}
if(document.getElementById("f5").checked == true){selectedValue = selectedValue + 20;}
if(document.getElementById("f0").checked == true){selectedValue = selectedValue + 0;}
if(document.getElementById("age1").checked == true){selectedValue = selectedValue + 12;}
if(document.getElementById("age2").checked == true){selectedValue = selectedValue + 16;}
if(document.getElementById("age3").checked == true){selectedValue = selectedValue + 8;}
if(document.getElementById("age4").checked == true){selectedValue = selectedValue + 4;}
if(document.getElementById("age5").checked == true){selectedValue = selectedValue + 0;}
if(document.getElementById("edu1").checked == true){selectedValue = selectedValue + 24;}
if(document.getElementById("edu2").checked == true){selectedValue = selectedValue + 20;}
if(document.getElementById("edu3").checked == true){selectedValue = selectedValue + 15;}
if(document.getElementById("edu4").checked == true){selectedValue = selectedValue + 12;}
if(document.getElementById("edu5").checked == true){selectedValue = selectedValue + 6;}
if(document.getElementById("exp1").checked == true){selectedValue = selectedValue + 40;}
if(document.getElementById("exp2").checked == true){selectedValue = selectedValue + 30;}
if(document.getElementById("exp3").checked == true){selectedValue = selectedValue + 20;}
if(document.getElementById("exp4").checked == true){selectedValue = selectedValue + 10;}
if(document.getElementById("a1").checked == true){selectedValue = selectedValue + 10;}
if(document.getElementById("a2").checked == true && document.getElementById("a2").checked == false && document.getElementById("a2").checked == false){selectedValue = selectedValue + 5;}
if(document.getElementById("a3").checked == true){selectedValue = selectedValue + 7;}
if(document.getElementById("a4").checked == true){selectedValue = selectedValue + 7;}

var userLang = navigator.language || navigator.userLanguage; 

var jsId = document.cookie.match(/JSESSIONID=[^;]+/);
    if(jsId != null) {
        if (jsId instanceof Array)
            jsId = jsId[0].substring(11);
        else
            jsId = jsId.substring(11);
    }


document.getElementById("cal").innerHTML = "YOUR SCORE = " + selectedValue + " / 148";
}
function chknoc()
{
   var nocvalid = 0;
   var n;
  n = document.getElementById("numb").value;
  for (i = 0; i < noclest.length; i++) { 
  	if( n == noclest[i])
	{
	   nocvalid = 1;
	}
  }
  if(nocvalid == 1){
   document.getElementById("calnoc").innerHTML = "Your NOC is APPLICABLE";
  }
  else{
   document.getElementById("calnoc").innerHTML = "SORRY ! Your NOC is NOT - APPLICABLE";
	}
}