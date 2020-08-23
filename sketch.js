var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  //gives random speed and weight
  speed = random(233,321);
  weight = random(30,52);

  //gives random thickness
  thickness = random(22,83);

  //creates the wall and gives its colour
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  //creates the bullet and gives its white colour
  bullet = createSprite(50,200,10,20);
  bullet.shapeColor = color(255);

  //gives the velocityX of the bullet
  bullet.velocityX = speed;

 

}

 

function draw() {
  background(0);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
   bullet.velocityX = 0;
    //creates damage
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }else 
    if(damage<10){
      wall.shapeColor = "green";
    }
    
}
  
  
  drawSprites(); 
}
   

