"use strict";

window.onresize = drawBox;

drawBox();

function drawBox() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.lineWidth = 5;
	context.strokeStyle = "#FF0000";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(200, 200);
	context.stroke();

	context.beginPath();
	context.moveTo(50, 200);
	context.lineTo(200, 50);
	context.stroke();

	context.strokeStyle = "#000";
	context.beginPath();
	context.rect(50, 50, 150, 150);
	context.stroke();
}
