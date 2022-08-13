
function preload() {
	world_start = loadSound("world_start.wav");
	mariojump= loadSound("jump.wav");
	mariocoin = loadSound("coin.wav");
	mariokick = loadSound("kick.wav");
	mariogameover = loadSound("gameover.wav");
	mariodie=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('gameconsole');
	posenet=ml5.poseNet(video,modalloaded());
	posenet.on('pose',gotposes);
}

function draw() {
	game()
	
}
function modalloaded(){
console.log("modalloaded");
}
function gotposes(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}






