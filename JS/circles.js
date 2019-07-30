// Vanaj Moorthy, 2019

// polygon array
let poly = [];
let n = 300; // number of vertices

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(12);
	noFill();
	noStroke();
	n++; // add extra point for closing the polygon

	for (let i = 0; i < n; i++) {
		// make regular polygon vertices with given number of points n
		let a = {
			x: windowWidth / 2 + 100 * sin(map(i, 0, n - 1, 0, TAU)),
			y: windowHeight / 2 + 100 * cos(map(i, 0, n - 1, 0, TAU))
		};
		poly.push(a);
	}
}

// this is the draw function!
function draw() {
	background(0); // Make background black
	stroke(51, 188, 255); // Default red
	drawPoly(1000, 1000);

	stroke(54, 96, 247); // Random grey
	drawPoly(1200, 1500);

	// 29, 167, 234

	stroke(41, 72, 186); // #1da7ea
	drawPoly(2000, 1700);
}

// pls make it work
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	console.log(windowWidth);
	console.log(windowHeight);
	redraw();
}

// functions that help n stuff
function logMap(value, start1, stop1, start2, stop2) {
	// based off of linear regression + existing p5.map function; m cool
	start2 = log(start2);
	stop2 = log(stop2);

	return exp(
		start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
	);
}

function drawPoly(dx, dy) {
	// draws polygon using given vertices in the poly[] array, adds bias using parameters
	let g = 0;
	// if (mouseIsPressed) g = random(-2, 2);

	beginShape();
	for (let i = 0; i < n; i++) {
		let bias = dist(mouseX, mouseY, poly[i].x, poly[i].y);
		vertex(
			poly[i].x + dx / logMap(bias, windowWidth, 0, dx, 45) + g,
			poly[i].y + dy / logMap(bias, windowHeight, 0, dy, 45) + g
		);
	}
	endShape();
}
