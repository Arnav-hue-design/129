song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("Aasman ko Chukar Dekha.mp3");
    song2 = loadSound("ATTS.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        leftWristY = results[0].pose.leftWristX.y;
        console.log("leftWristX ="+ leftWristX + "leftWristY =" + leftWristY);
        rightWristX = results[0].pose.rightWristX.x;
        rightWristY = results[0].pose.rightWristX.y;
        console.log("rightWristX ="+ rightWristX + "rightWristY =" + rigthWristY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 600);
}