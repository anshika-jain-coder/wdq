img="";
status="";
function preload(){
    img=loadImage('bot.png');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelLoaded(){
    console.log("model loaded by anshika jain");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text(" Water bottle",250,75);
    noFill();
    stroke("#FF0000");
    rect(250,60,140,350);
}