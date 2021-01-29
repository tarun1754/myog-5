var gorilla,gorillaimg;
function preload(){
  gorillaimg=loadImage("go.gif");
}
function setup() {
  createCanvas(800,400);
  gorilla=createSprite(100, 300, 50, 50);
  gorilla.addImage(gorillaimg);
  gorilla.scale=0.2;
}

function draw() {
  background("black");  
  drawSprites();
}