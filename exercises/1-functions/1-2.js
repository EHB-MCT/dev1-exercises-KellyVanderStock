"use strict";

window.onresize = drawCircle;

drawCircle();

function drawCircle() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

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
