var temp_arrow;
var bow;
var score=0;
var arrow;
var redbgroup;
var arrowgroup;
function preload(){ 
  
  
  //load your images here
  
groundImage=loadImage("background0.png")  ;   
  
  greenballImage=loadImage("green_balloon0.png");
  
bowImage=loadImage("bow0.png");

redballImage=loadImage("red_balloon0.png");

pinkballImage=loadImage("pink_balloon0.png");

blueballImage=loadImage("blue_balloon0.png");

  arrowImage=loadImage("arrow0.png");}


function setup() {
createCanvas(600, 600);
 
 //add code here
 
 ground= createSprite(400,200,400,20); ground.addImage("background0.png",groundImage) ;ground.x=ground.width/2; 
ground.scale=1.5;
  
  // green ball 
  ;
 
 
  for(var i=100;i<390;i=i+60){
    green_balloon=createSprite(50,i,10,10);
    green_balloon.addImage(greenballImage)
    green_balloon.scale = 0.1
  }
  
  for(var i=100;i<390;i=i+80){
    red_balloon=createSprite(100,i,10,10);
    red_balloon.addImage(redballImage);
    red_balloon.scale = 0.1 ;
    redbgroup.add(red_balloon);
  }
 
  // blue ball
for(var i=100;i<390;i=i+100){
    blue_balloon=createSprite(150,i,10,10);
    blue_balloon.addImage(blueballImage)
    blue_balloon.scale = 0.1
  }
  
  for(var i=140;i<390;i=i+140){
    pink_balloon=createSprite(200,i,10,10);
    pink_balloon.addImage(pinkballImage)
    }
  
  // bow 
  
  bow=createSprite(360,200,0.5,0.5)
  bow.addImage("bow0.png",bowImage);
   
  
  score=0;
  
  redbgroup=new Group();
  arrowgroup =new Group();
}
function draw() {
  
  
  //add code here 
  
  ground.velocityX = -2; console.log(ground.x); if(ground.x<0){         ground.x = ground.width/2; } 
 
  bow.y=World.mouseY;
  
  if(keyDown("space")){
 temp_arrow=createArrow();
 temp_arrow.addImage(arrowImage);
 temp_arrow.y=bow.y;
}
  
  
  drawSprites() 
  text("score : "+score,420,50);
  
  
}
// create arrow for bow
  function createArrow(){
  arrow=createSprite(360,200,5,10);
  arrow.velocityX= -6;
  arrow.scale=0.3;
    arrowgroup.add(arrow);
  return arrow;
  }
  
