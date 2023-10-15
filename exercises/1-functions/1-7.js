"use strict";

window.onresize = drawStarry;

drawStarry();

function drawStarry() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.lineWidth = 8;
	context.fillStyle = "orange";
	context.beginPath();
	context.rect(50, 50, 350, 350);
	context.fill();
	context.stroke();

	//diagonaal naar rechts beneden
	context.strokeStyle = "#fff";
	context.beginPath();
	context.moveTo(170, 170);
	context.lineTo(280, 280);

	context.stroke();

	context.beginPath();
	context.moveTo(150, 190);
	context.lineTo(260, 300);
	context.stroke();

	context.beginPath();
	context.moveTo(120, 200);
	context.lineTo(250, 330);
	context.stroke();

	context.beginPath();
	context.moveTo(190, 150);
	context.lineTo(300, 260);
	context.stroke();

	context.beginPath();
	context.moveTo(200, 120);
	context.lineTo(330, 250);
	context.stroke();

	//diagonaal

	context.beginPath();
	context.moveTo(280, 170);
	context.lineTo(170, 280);
	context.stroke();

	context.beginPath();
	context.moveTo(260, 150);
	context.lineTo(150, 260);
	context.stroke();

	context.beginPath();
	context.moveTo(250, 120);
	context.lineTo(120, 250);
	context.stroke();

	context.beginPath();
	context.moveTo(300, 190);
	context.lineTo(190, 300);
	context.stroke();

	context.beginPath();
	context.moveTo(330, 200);
	context.lineTo(200, 330);
	context.stroke();

	//arcs
	context.fillStyle = "#fff";
	context.beginPath();
	context.arc(50, 50, 170, 0, Math.PI);
	context.stroke();
	context.fill();

	context.beginPath();
	context.arc(400, 50, 170, 0, Math.PI);
	context.stroke();
	context.fill();

	context.beginPath();
	context.arc(400, 400, 170, 0, Math.PI * 2);
	context.stroke();
	context.fill();
	context.beginPath();
	context.arc(50, 400, 170, 0, Math.PI * 2);
	context.stroke();
	context.fill();

	context.strokeStyle = "orange";
	context.beginPath();
	context.rect(50, 50, 350, 350);
	context.stroke();


    context.lineWidth=50;
    context.beginPath();
    context.moveTo(207,207);
    context.lineTo(243,243);
    context.stroke();
}
