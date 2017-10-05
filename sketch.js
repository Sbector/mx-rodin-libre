var cariatide;
var canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.position(0,0);
	cariatide = loadModel('assets/cari.obj');

}

function draw() {
	clear();
	translate(0,55,map(mouseX,0,windowWidth,0,500));
	rotateX(radians(180));
	rotateY(frameCount * 0.008);
	// rotateZ(frameCount * 0.1);
	model(cariatide);
}
