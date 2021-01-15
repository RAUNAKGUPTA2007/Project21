var bullet, wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
  speed=random(223,321)
  weight=random(30,52)
  
  bullet.velocityX = speed; 
}

function draw() {
  background(0);  
   if(hasCollied(bullet,wall)){
     bullet.velocityX = 0;
     var d = 0.5*speed*speed*weight/(thickness*thickness*thickness)
    if(d>10){
      wall.shapeColor= "red";
    }
    if(d<10){
      wall.shapeColor= "green";
    }
   }


  drawSprites();
}
function hasCollied(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else{
    return false;
  }
}