   function trocaimg(){
    document.getElementById("Logo").src="img/dv42.1.png";
  }
  function voltaimg(){
    document.getElementById("Logo").src="img/292183.png";
  } 
  function passatxt(){
  var text1=document.forms["nTabTraduc"].elements[0].value
    document.getElementById("iTextsai").innerHTML = text1;
  }  
  function selectfont1(){ 
    var font1 = document.getElementById("iTextsai").style.fontStyle = "italic"; 
     document.getElementById("iTextsai").style.fontSize = "22px";
     document.getElementById("iTextsai").style.fontFamily = "arial";
     font1
  }
  function selectfont2(){
    var font2 = document.getElementById("iTextsai").style.fontFamily = "DavekFontAnoes";
    document.getElementById("iTextsai").style.fontSize = "22px";
    font2 
  }
    function selectfont3(){
    var font3 = document.getElementById("iTextsai").style.fontFamily = "IokharicDraconic";
    document.getElementById("iTextsai").style.fontSize = "22px";
    font3
  }
    function selectfont4(){
    var font4 = document.getElementById("iTextsai").style.fontFamily = "RelanicFontElfica";
    document.getElementById("iTextsai").style.fontSize = "22px";
    font4 
  }