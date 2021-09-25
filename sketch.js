var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaves;
var appleImg;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  redleafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}





  



function draw() {
  background(0);
  rabbit.x=World.mouseX;

  var r = Math.round(random(1,4));

  if(r==1){
    createapples();
  }
  else if(r==2){
    createleaves();
  }
  else if(r==3){
    createorangeleaves();
  }
  else{
    createredleaves();
  }
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createapples(){
  if(frameCount % 80 == 0){
    apple = createSprite(Math.round(random(50,350)),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY=2;
    apple.lifetime= 300;
    apple.depth = rabbit.depth
    rabbit.depth = apple.depth + 1;
  }
  
  
}
function createleaves(){
  if(frameCount % 80 == 0){
    leaves = createSprite(Math.round(random(50,350)),40,10,10)
    leaves.addImage(leafImg);
    leaves.scale = 0.1;
    leaves.velocityY=2;
    leaves.lifetime= 165;
    leaves.depth = rabbit.depth;
    rabbit.depth = leaves.depth + 1;
  }

}

function createorangeleaves(){
  if(frameCount % 80 == 0){
    orangeleaves = createSprite(Math.round(random(50,350)),40,10,10)
    orangeleaves.addImage(orangeleafImg);
    orangeleaves.scale = 0.1;
    orangeleaves.velocityY=2;
    orangeleaves.lifetime= 165;
    orangeleaves.depth = rabbit.depth;
    rabbit.depth = orangeleaves.depth + 1;
  }

}

function createredleaves(){
  if(frameCount % 80 == 0){
    redleaves = createSprite(Math.round(random(50,350)),40,10,10)
    redleaves.addImage(redleafImg);
    redleaves.scale = 0.1;
    redleaves.velocityY=2;
    redleaves.lifetime= 165;
    redleaves.depth = rabbit.depth;
    rabbit.depth = redleaves.depth + 1;
  }

}