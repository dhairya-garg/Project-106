var cat=0;
var dog=0;

function Startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ba6sv0ps_/model.json', modelReady)
    
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error)
    }else{
        console.log(results)
        random_number_r = Math.floor(Math.random()* 255)+ 1
        random_number_b = Math.floor(Math.random()* 255)+ 1
        random_number_g = Math.floor(Math.random()* 255)+ 1
    
    document.getElementById("results_label").innerHTML= 'i can hear -'+results[0].label;
    document.getElementById("results_confidence").innerHTML= 'accuracy -'+(results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("results_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

    document.getElementById("results_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
img=document.getElementById("animal_image");
if (results[0].label == "barking") {
    img.src="bark.gif";
    dog=dog+1;
}
else if (results[0].label == "meowing") {
    img.src="meow.gif";
cat=cat+1;

} else {
  img.src="listen.gif" ; 
}
}}
