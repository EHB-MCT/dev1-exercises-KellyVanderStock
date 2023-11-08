"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
	let i = 1;

	while (i <= 4) {
		Utils.fillCircle(i * 100, 100, 50);
		i++;
	}
}
