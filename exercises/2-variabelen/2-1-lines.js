"use strict";

window.onresize = setup;
/**@type {CanvasRenderingContext2D} */

let context; /* globaal*/

setup();

function setup() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
	/* let weghalen! bij let context = ... */
	drawLines(); /* om teveel code te vermijden */
}

function drawLines() {
	/*context.lineWidth = 5;
	context.beginPath();
	context.moveTo(200, 100);
	context.lineTo(700, 100);
	context.stroke();
    
    zonder margin,
    we moeten een canvas breedte ophalen*/

	let margin = 200;
	/* margin als waarde*/
	let canvasWidth = context.canvas.width;
	/*breedte opgehaald */

	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(margin, 100);
	context.lineTo(canvasWidth - margin, 100);
	/*margin aangemaakt*/
	context.lineTo(margin, 150);
	context.lineTo(canvasWidth - margin, 150);
	context.lineTo(margin, 200);
	context.lineTo(canvasWidth - margin, 200);
	context.lineTo(margin, 250);
	context.lineTo(canvasWidth - margin, 250);
	context.lineTo(margin, 300);
	context.lineTo(canvasWidth - margin, 300);
	context.closePath(); /* van allereerste punt naar allerlaatste*/
	context.stroke();
}
