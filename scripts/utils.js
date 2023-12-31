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

export function rgb(r, g, b) {
	return "rgb(" + r + "," + g + "," + b + ")";
}

//3-1-p

/**
 * The function draws the stroke of a circle AND fills it
 * @param {number} x
 * @param {number} y
 * @param {number} r
 */

export function fillAndStrokeCircle(x, y, r) {
	context.beginPath();
	context.arc(x, y, r, 0, Math.PI * 2);
	context.stroke();
	context.fill();
}

//3-1-r

/**
 * The function draws the stroke of a circle AND fills it
 * @param {*} x x-coordinate of center of ellipse
 * @param {*} y y-coordinate of center of ellipse
 * @param {*} rX radius on x of ellipse
 * @param {*} rY radius on y of ellipse
 */

export function fillAndStrokeEllipse(x, y, rX, rY) {
	context.beginPath();
	context.ellipse(x, y, rX, rY, Math.PI / 2, 0, 2 * Math.PI);
	context.stroke();
	context.fill();
}

//hsl functie maken zoals demo
