var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function sTART(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
console.log(event);
 var content=event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML=content;
 console.log(content);
 if(content=="take my selfie"){
console.log("taking selfie");
y }
}
function speck(){
var speech1=window.speechSynthesis;
speck_data="taking your selfie in 5 seconds";
 var utterthis=new SpeechSynthesisUtterance(speck_data);
 speech1.speak(utterthis);
 Webcam.attach(camera);
 setTimeout(function(){
take_snapshot();
save();
 },5000);
}
camera=document.getElementById("camera");
Webcam.set({
width:360,height:250,image_format:'jpeg',jpeg_quality:90
});
function take_snapshot(){
Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
});
}
function save(){
link=document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href=image;
link.click();
}