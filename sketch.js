// Create the variables
var car,wall;
var speed, distance;

function setup() {
  // Create the canvas
  createCanvas(1600,400);

  // Create the car sprite
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue";

  //Set a random value to speed
  speed = random(55, 90);

  // Setr a random value to distance
  distance = random(400, 1500);

  // Create the wall sprite and give a colour to it
  wall = createSprite(100, 200, 60, height/2);
  wall.shapeColor = "80, 80, 80";
}

function draw() {
  background(255,255,255); 
  
  // Assign the speed variable as the X velocity of the car
  car.velocityX = speed;

  // Detect the collision
  if(wall.x - cat.x < (car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5*distance*speed*speed/22500;
    if (deformation > 180) {
     car.shapeColor = color(225, 0, 0) ;
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0) ;
     }
     if (deformation < 100) {
      car.shapeColor = color(0, 255, 0) ;
     }
    }
  


  drawSprites();
}