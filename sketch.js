var play = 1;
var end = 0;
var gameState = "play";
var resetLine;
var reset;
var gameOver;
var score = 0;

var PC, PCImg;
var floor1,floor2,floor3;
var floor1Img, floor2Img, floor3Img;
var tower, towerImg;

var floorsGroup;

function preload(){
  PCImg = loadImage("assets/ghost_Img.png")
  towerImg = loadImage("assets/tower.png")
  
  floor1Img = loadImage("assets/plank.png")
  floor2Img = loadImage("assets/plank2.png")
  floor3Img = loadImage("assets/plank3.png")
  }

function setup(){
  createCanvas(1000,700);
  tower = createSprite(250,175,500,700);
  PC = createSprite(250,175,50,50);
  resetLine = createSprite(250,0,1000,0.1);
 
  floorsGroup = new Group();

  tower.velocityY = 1;


tower.addImage("tower", towerImg);
PC.addImage("PC",PCImg);
PC.scale = 0.05
//floor1.addImage("assets/plank.png",floor1Img);
//floor2.addImage("assets/plank2.png",floor2Img);
//floor3.addImage("assets/plank3.png",floor3Img);
}

function draw(){

  textSize(20);
  fill("black")
  text("Score: "+ score,30,50);
  score = score + Math.round(getFrameRate()/60);

  if(keyDown("left_arrow")){
    PC.x = PC.x-3
  }
  if(keyDown("right_arrow")){
    PC.x = PC.x+3
  }

  if((touches.length > 0 || keyDown("up_arrow")) && PC.y  >= height-120) {
    PC.velocityY = 10;
     touches = [];
  }
  if (tower.y < 0){
    tower.y = tower.height/2;
  }

floorsGroup.setLifetimeEach(-1);

if(gameState === "end"){
  stroke("red");
  fill("red");
  textSize(50);
  text("Game Over");
}
  if(PC.isTouching(resetLine)){
    PC.velocityY = 0;
    tower.velocityY = 0;
    gameState==="end";
  }

  if(touches.length>0 || keyDown("SPACE")) {      
    reset();
    touches = []
  }

  drawSprites();
}
    function spawnFloors(){
      if(frameCount % 60 === 0) {
        var floorsGroup = createSprite(600,height-95,20,30);
        floorsGroup.setCollider('circle',0,0,45)
      
        floorsGroup.velocityY = -(6 + 3*score/100);
  }
}

