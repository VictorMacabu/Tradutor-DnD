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
  var select = document.querySelector('select');
  
  select.addEventListener('change', selectfont);
  
  function selectfont(){
   var muda=select.value
   var font1=document.getElementById("iTextsai").style.fontStyle = "italic"; 
   var font2=document.getElementById("iTextsai").style.fontFamily = "DavekFontAnoes";
   var font3=document.getElementById("iTextsai").style.fontFamily = "IokharicDraconic";
   var font4=document.getElementById("iTextsai").style.fontFamily = "RelanicFontElfica";
   if (muda==='comum') {
    text1=font1;
   } else if (muda==='Anoico') {
    text1=font2;
   } else if (muda==='Dracônico') {
    text1=font3;
   } else if( muda==='Elfico') {
    text1=font4;
   }
}