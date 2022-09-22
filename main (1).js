var reconocedorvoz=windows.webkitSpeechRRecocnition;
var reconocedor =new reconocedorvoz();
var textbox =document.getElementById("textbox");

function start(){
    document.getElementById("microfono").src="giphy.gif";
    document.getElementById("textbox").innerHTML="";
    reconocedor.start();
    setTimeout(function() {
      document.getElementById ("microfono").src="mic.jpg";
    }, 4000);

}
reconocedor.onresult=function(event){
    
}