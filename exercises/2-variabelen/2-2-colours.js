"use strict";

window.onresize = setup;
/**@type {CanvasRenderingContext2D} */

let context;

setup();

function setup() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
	drawPyramid();
}

function drawPyramid() {
	/*
    context.fillRect(100,100,800,800);
    context.fillStyle="red";
    context.fillRect(150,150,700,700);
    context.fillStyle="blue";
    context.fillRect(200,200,600,600);
    context.fillStyle="yellow";
    context.fillRect(250,250,500,500);

    teveel code! nieuwe funtie aanmaken: drawSquare */
	drawSquare(100, 800);
	drawSquare(150, 700);
	drawSquare(200, 600);
	drawSquare(250, 500);
	drawSquare(300, 400);
	drawSquare(350, 300);
	drawSquare(400, 200);
	drawSquare(450, 100);
}

function drawSquare(position, size) {
	/*random kleuren toevoegen*/
	let red = Math.random() * 255;
	let green = Math.random() * 255;
	let blue = Math.random() * 255;

	context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    /* + .... + is de random waarde vastleggen, 255 is max waarde*/
	context.fillRect(position, position, size, size);
}
