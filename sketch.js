var thickness, wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1500,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet=createSprite(50,200,50,20)
  wall=createSprite(1100,200,thickness,height/2)
}

function draw() {
  background("black");  
  drawSprites();
  bullet.velocityX = speed
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
    {
      bullet.velocityX = 0
      var damage = 0.5 * speed * weight *speed/(thickness*thickness*thickness)
      if(damage>10){
        wall.shapeColor = "red"
      }

      if(damage<10){
        wall.shapeColor = "green"
      }
    }

}
