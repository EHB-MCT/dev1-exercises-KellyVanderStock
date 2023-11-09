"use strict";
import context from "./context.js";

//demo circles
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

//3-1-a
/**
 * draw a line between 2 coordinates
 * @param {number} x1 startpunt op x van de lijn
 * @param {number} y1 startpunt op y van de lijn
 * @param {number} x2 eindpunt op x van de lijn
 * @param {number} y2 eindpunt op y van de lijn
 */
export function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

//3-1-g

/**
 * Draws bigger circles starting from center of canvas
 * @param {number} x x-coordinate center of the circle
 * @param {number} y y-coordinate center of the circle
 * @param {number} r radius of the circle
 */

export function strokeCircle(x, y, r) {
	context.beginPath();
	context.arc(x, y, r, 0, Math.PI * 2);
	context.stroke();
}

//3-1-n

/**
 * formats an rgb, based on parameters
 * @param {number} r  red number between 0 and 255 (255,0,0)
 * @param {number} g  green number between 0 and 255 (0,255,0)
 * @param {number} b  blue number between 0 and 255 (0,0,255)
 * @returns 
 */

export function rgb(r,g,b) {
	return "rgb(" + r + "," + g + "," + b + ")";
}
