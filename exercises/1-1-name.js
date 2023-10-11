"use strict";

window.onresize = drawName;

drawName();

function drawName() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.lineWidth = 10;
	context.strokeStyle = "#990000";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(50, 300);
	context.stroke();

    context.beginPath();
    context.moveTo(50,200);
    context.lineTo(125, 50);
    context.stroke();

    context.beginPath();
    context.moveTo(140,300);
    context.lineTo(70, 160);
    context.stroke();

  
    context.strokeStyle= "#330099";
    context.beginPath();
    context.moveTo(150,260);
    context.lineTo(210,260);
    context.lineTo(170,230);
    context.lineTo(150,260);
    context.lineTo(170,295);
    context.lineTo(220,295);
    context.stroke();

   context.strokeStyle="#666600";
   context.beginPath();
   context.moveTo(250,100);
   context.lineTo(250,300);
   context.lineTo(280,300);
   context.stroke();

   
   context.strokeStyle="#cc9900";
   context.beginPath();
   context.moveTo(300,100);
   context.lineTo(300,300);
   context.lineTo(330,300);
   context.stroke();

   
   context.strokeStyle="#ff9999";
   context.beginPath();
   context.moveTo(350,230);
   context.lineTo(380,300);
   context.lineTo(400,300);
   context.stroke();

   context.beginPath();
   context.moveTo(420,230);
   context.lineTo(390,350);
   context.lineTo(360,350)
   context.stroke();

}
