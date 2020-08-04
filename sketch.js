var gameState = 0;
var form;
var player;
var mario;
var hurdle1, hurdle2,hurdle3,hurdle4,hurdle5;

function preload(){
  mario = loadAnimation("mario/mario1.png","mario/mario2.png","mario/mario3.png" );
  Hurdlespng = loadImage("Hurdle.png")

}



function setup() {
 

  
  createCanvas(displayWidth,displayHeight - 100);
  form = new Form();
  player = new Player();
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(100); 
  if (gameState === 0){

 
    textSize(23);
    text("Hurdles Math Game!!", 100,100);
    textSize(13);
    text("Enter Your Name",100,200);

    form.display();

  }

  if (gameState === 1){

    camera.position.x = player.player.x + 500; 
    hurdle1 = new Hurdles(500);
    hurdle1.createHurdles();
   // hurdle2 = new Hurdles(500);
   // hurdle3 = new Hurdles(500);
  //  hurdle4 = new Hurdles(500);
    //hurdle5 = new Hurdles(500);

  }
  drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    player.distance = player.distance + 40;
    player.player.x = player.distance;

  }



}