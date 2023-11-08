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
