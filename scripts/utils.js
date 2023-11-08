"use strict";
import context from "./context.js";

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} r
 */
export function fillCircle(x, y, r) {
	context.beginPath();
	context.arc(x, y, r, 0, Math.PI * 2);
	context.fill();
}

/**
 * draw a line between 2 coordinates
 * @param {number} x1 startpunt op x van de lijn 
 * @param {number} y1 startpunt op y van de lijn 
 * @param {number} x2 eindpunt op x van de lijn
 * @param {number} y2 eindpunt op x van de lijn
 */
export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo (x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}