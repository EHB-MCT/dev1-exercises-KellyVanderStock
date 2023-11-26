"use strict";


import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
   
    context.fillRect(0, 0, width, height);
    drawRandomBubbles();
}


function drawRandomBubbles(){


}