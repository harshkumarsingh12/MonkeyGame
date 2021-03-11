
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 400);
  score=0;
  survivalTime=0;
  
  ground=createSprite(300,350,600,10);
  
   monkey=createSprite(90,350,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  monkey.setCollider("rectangle",0,0,80,monkey.height);
  monkey.debug = false;

  
}


function draw() {
  background("white");
  
  if(keyDown("space")&&monkey.y >= 310){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3;   
  monkey.collide(ground);    
  
  ground.velocityX = -7 ;
 ground.x = ground.width/2;
  
  if (frameCount%180===0){
    fruits();
  }
  
  if (frameCount%250===0){
    stones();
  }
  
  if (monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  

  console.log(monkey.y);
  

  drawSprites();
  
  fill("black") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  text("Survival Time: "+ survivalTime,30,50);
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(130,210)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
}

function stones(){
  obstacle=createSprite(670,310,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
}




