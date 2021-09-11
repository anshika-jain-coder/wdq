img="";
status="";
function preload(){
    img=loadImage('ta.jpg');
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
    text(" AC",230,22);
    noFill();
    stroke("#FF0000");
    rect(230,10,320,150);

    fill("#FF0000");
    text("TV",250,190);
    noFill();
    stroke("#FF0000");
    rect(250,180,270,180);
}