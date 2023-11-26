"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "#fff";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawMoreLines();
}



function drawMoreLines(){

   





  for( let x=0; x<=60;x++){
    Utils.drawLine(0+x*10,0,600-x*10,300 );

  }


for( let y=0; y<=30;y++){
    Utils.drawLine(0,0+y*10,600,300-y*10 )
}

}

