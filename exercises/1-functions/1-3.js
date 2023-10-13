"use strict";

window.onresize = drawRectangles;

drawRectangles();

function drawRectangles() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.strokeStyle = "#FF0000";
	context.beginPath();
	context.rect(50, 50, 150, 150);
	context.stroke();
	//kader
	/*
	context.beginPath();
	context.rect(50, 50, 300, 300);
	context.stroke();
    */
	//kader
	context.beginPath();
	context.rect(200, 200, 150, 150);
	context.stroke();

	context.fillStyle = "#000";
	context.beginPath();
	context.rect(125, 125, 150, 150);
	context.stroke();
	context.fill();

	context.beginPath();
	context.rect(75, 275, 50, 50);
	context.stroke();

	context.beginPath();
	context.rect(275, 75, 50, 50);
	context.stroke();

	context.fillStyle = "#000";
	context.beginPath();
	context.rect(50, 325, 25, 25);
	context.fill();

	context.beginPath();
	context.rect(325, 50, 25, 25);
	context.fill();
}
