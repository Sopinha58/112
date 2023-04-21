webcam.set({
    with: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera= document.getElementById("camera");
webcam.attach('#camera');

function take_snapshot(){
    webcam.snap(function (data_uri){
     document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';  
    }
    );
}
console.log('ml5 vrsion: ', ml5.vrcion);
classificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QhbC10XG5/model.json',modelLoaded);

function modelLoaded(){
    console.log('modeL loaded');
}

function check(){
img= document.getElementById('captured_iamge');
classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = toSpeak;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}


function gotResult(error, results){
if(error){
    console.error(error);
}
else{console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
gesture = results[0].label;
toSpeak = "";
if (gesture ="coração"){
    toSpeak = "Isso parece...coração!!";
    document.getElementById("result_object_gesture_icon").innerHTML = "&#128076";
}
else if(gesture =="negtivo")
{
    toSpeak = "Isso parece...negativo!!";
    document.getElementById("result_object_gesture_icon").innerHTML = "&#128077";
}
else if(gesture =="paz e amor")
{
    toSpeak = "Isso parece...paz e amor!!";
    document.getElementById("result_object_gesture_icon").innerHTML = "&#9996";
}
else if(gesture =="positivo")
{
    toSpeak = "Isso parece...positivo!!";
    document.getElementById("result_object_gesture_icon").innerHTML = "&#129305";
}
speak();
}
}