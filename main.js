function preload(){}

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
        console.log("x =" + results[0].leftEye.pose.x + 50);
        console.log("y =" + results[0].leftEye.pose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}
