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
	drawPattern();
}

function drawPattern() {
	let margin = 50;
	let canvasHeight = context.canvas.height;
	let canvasWidth = context.canvas.width;

	context.fillStyle = "#2c3e50";
	context.fillRect(margin, margin, canvasWidth - margin*2, canvasHeight-margin*2); /*dark*/
	context.fillStyle = "#3498db";
	context.fillRect(margin, canvasHeight-margin*4, canvasWidth - margin*2,margin*3); /*blue*/
	context.fillStyle = "#ecf0f1";
	context.fillRect(canvasWidth / 3, margin, canvasWidth / 3, canvasHeight-margin*2); /*light*/
	context.fillStyle = "#e74c3c";
	context.fillRect(margin, canvasHeight/4, canvasWidth - margin*2, canvasHeight/5); /*red*/
}
