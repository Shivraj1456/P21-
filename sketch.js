
var wall, thickness;
var bullet, speed, weight;

function setup() {

  createCanvas(1600,400);


  wall= createSprite(1200,200,thickness,height/2);
 
  thickness=random(22,83);
  bullet=createSprite(50,200,35,30);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background("black");  

  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    car.velocityX =0;
    var deformation=0.5 * weight * speed * speed22509;
    if (deformation>180){
      bullet.shapeColor="white";
    }
    if (deformation<180 && deformation>100){
      bullet.shapeColor="white";
    }
    if (deformation<100){
      bullet.shapeColor="white";
    }
    if (hasCollided(bullet, wall))
    {
     bullet.velocityX=0;
     var damage=0.5 *speed* speed/(thickness * thickness * thickness)
      if (damage>10)
      {
        wall.shapeColor="red";
      }
      if (damage<10)
      {
        wall.shapeColor="green";
      }

    }
    function hasCollided(Lbullet, Lwall)
    {
    bulletRightEdge=Lbullet.x +Lbullet.width;
    bulletLeftEdge=Lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true;
    }
    return false;
      
    }
    
    

    }
    drawSprites();
  }
  
