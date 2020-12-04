var bullet , wall

var speed , weight,thickness

var damage

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 40, 20);
  bullet.shapeColor="white"

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  wall = createSprite(1400,200,thickness,height/2)  

  bullet.velocityX = speed / 2 
  
  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness)
  console.log(damage)
  console.log(thickness)
  console.log(wall.width)

}

function draw() {
  background("black");   

    if(isTouching(bullet,wall))
    {
      if(damage<100){
       bullet.shapeColor="green"
       bullet.velocityX=0
      }

      else if(damage>100 && damage<180){
        bullet.shapeColor="yellow"
        bullet.velocityX=0
      }

      else if(damage>180){
        bullet.shapeColor="red"
        bullet.velocityX=0
      }
      else{
        bullet.shapeColor="white"        
     }
    }      
  drawSprites();
}