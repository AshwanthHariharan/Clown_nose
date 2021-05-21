noseX=0;

noseY=0;

function preload() {

clown_nose = loadImage("https://i.postimg.cc/Y0RdKM5z/clown.png")  

}

function setup() {

canvas = createCanvas(300,300);

canvas.center();

video = createCapture(VIDEO);

video.size(300, 300);

video.hide();

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);

}

function modelLoaded() {

console.log("Posenet is Initialized");

}

function gotPoses(results) {

if(results.length > 0) {

console.log(results);

noseX = results[0].pose.nose.x-32;

noseY = results[0].pose.nose.y-8;

}

}

function draw() {

image(video, 0, 0, 300, 300);

image(clown_nose, noseX, noseY, 70,70)
   
}

function takesnapshot() {

save('myFilterImage.png');

}