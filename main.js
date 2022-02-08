eyeX=0;
eyeY=0;

function preload(){
    glasses = loadImage('https://i.postimg.cc/L6Ls0r7n/glasses.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        eyeX = results[0].pose.rightEye.x - 25
        eyeY = results[0].pose.rightEye.y - 20
        console.log("eye x =" + eyeX);
        console.log("eye y =" + eyeY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(glasses, eyeX, eyeY, 93, 50)
}

function take_snapshot(){
    save('myFilterImage.png')
}