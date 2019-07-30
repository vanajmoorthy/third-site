function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(0);
	let dirX = (mouseX / width - 0.5) * 2;
	let dirY = (mouseY / height - 0.5) * 2;
	directionalLight(255, 255, 255, -dirX, -dirY, -1);
	sphere(160, 70, 70);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
