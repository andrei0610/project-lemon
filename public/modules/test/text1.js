window.onload = myMain;

function myMain() {
  document.getElementById("buton").onclick = function(){verificaRaspuns();}
  document.forms.test1.onreset = anuleaza ;

}

function verificaRaspuns(){
var x = document.forms.test1.answ1 ;


alert(x[3].checked);
if( x[3].checked ) { document.getElementById("1d").style.backgroundColor = "green"; }


else {
  if( x[0].checked ) { document.getElementById("1d").style.backgroundColor="green" ; document.getElementById("1a").style.backgroundColor="red";}
  if( x[1].checked ) { document.getElementById("1d").style.backgroundColor="green" ; document.getElementById("1b").style.backgroundColor="red";}
  if( x[2].checked ) { document.getElementById("1d").style.backgroundColor="green" ; document.getElementById("1c").style.backgroundColor="red";}


}

}

function anuleaza(){

for(var i=1 ; i<=10 ; i++)
{
 for(var j="a" ; j<="d";j++)
 {
 document.getElementById(i+j).style.backgroundColor=white ;
 }


}

}
