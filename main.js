leftWristX=0;
rightWristX=0;
difference = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
 
    my_posenet=ml5.poseNet(video, model_loaded);
    my_posenet.on("pose", got_poses);

}
function model_loaded(){
    console.log("Model Loaded"); 
   }

function got_poses(results){
    if(results.length>0){
        console.log(results);   
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
}}

   function draw(){
    background('#0000FF');
    textSize(difference);
    fill('#fc0328');
   text('Hello', 50, 400);

   }