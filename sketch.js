
var trex ,trex_running;
var groud;
var groundImage, invisibleGro
function preload (){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
grounImage = loadImage("groudd1.png")
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,180,20,50);
trex.addAnimation("running,trex_running")

trex.addAnimation("running", trex_running);

//agregar tamaño y posicion al trex
trex.scale =0.5;
  //crear sprite del suelo
  groud=createSprite(200,180,400  ,20);
 groud.addImage("ground,groundImage");

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible =false;
  background("white")

  if(keyDown("space")) {

  ground.velocityX =-2
console.log(trex.y);
  //trex choca con el suelo
  trex.collide(groud);
  grund.X
  drawSprites();
