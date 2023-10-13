"use strict";

window.onresize = drawCircle;

drawCircle();

function drawCircle() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "#fea500";
	context.fillRect(50, 50, 300, 300);

	context.fillStyle = "#ffff01";
	context.beginPath();
	context.arc(200, 250, 100, 0, 2 * Math.PI);
	context.fill();

    context.fillStyle= "#0000FE";
    context.fillRect(50,250,300,100);
}
