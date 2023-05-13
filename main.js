song = "";

leftWristx = 0;
lestWristy = 0;

RightWristx = 0;
RightWristy = 0;

function preload(){
song = loadSound("mm.mp3");
}


function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("Posenet is Initialized");
}

function gotPoses(results){
if(results.length > 0 ){
    console.log(results);
    leftWristx = results[0].pose.leftWrist.x;
    leftWristy = results[0].pose.leftWrist.y;
    console.log("LeftWristX = " + leftWristx + "LeftWristY = " + leftWristy );

    RightWristx = results[0].pose.rightWrist.x;
    RightWristy = results[0].pose.rightWrist.y;
    console.log("RightWristX = " + rightWristx + "RightWristY = " + rightWristy );
}
}


function draw(){
    image(video, 0, 0, 600, 500);         
}

function play(){
    song.play();
    song.setVolume(25);
    song.rate(0.7);
}