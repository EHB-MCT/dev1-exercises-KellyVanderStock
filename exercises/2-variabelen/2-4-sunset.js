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
	drawSunset();
}

function drawSunset() {
	let margin = 0;
	let canvasHeight = context.canvas.height;
	let canvasWidth = context.canvas.width;

	context.fillStyle = "#ea9e24";
	context.fillRect(margin, margin,canvasWidth,canvasHeight/4); /*yellow*/
	context.fillStyle = "#fc701b";
	context.fillRect(margin,canvasHeight/4,canvasWidth,canvasHeight/4); /*orange*/
	context.fillStyle = "#a51f02";
	context.fillRect(margin, (canvasHeight/4)*2,canvasWidth,canvasHeight/4); /*red*/

	context.fillStyle = "#ffffc8";
	context.beginPath();
	context.arc(canvasWidth/2, (canvasHeight/4)*3, canvasWidth/4, 0,  Math.PI, true);
	context.fill();

	context.fillStyle = "#00198c";
	context.fillRect(margin,(canvasHeight/4)*3, canvasWidth,canvasHeight/4); /*blue*/
}
