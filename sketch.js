var moving, fixed;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,400);
  moving = createSprite(400, 200, 50, 80);
  fixed = createSprite(200, 200, 80, 50);

  fixed.debug = true;
  moving.debug = true;


  gameObject1 = createSprite(300, 100, 50, 50);
  gameObject2 = createSprite(500, 100, 50, 50);
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(0); 
  
  moving.x = mouseX;
  moving.y = mouseY;


  if(isTouching(moving, gameObject1))
  {
    moving.shapeColor = "yellow";
    gameObject1.shapeColor = "yellow";
  } 
  else
  {
    moving.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  bounceOff(gameObject1,gameObject2);

  drawSprites();
}



/*
ALGORITHMS
- the actual logic to solve a problem
- pre-defined algorithms: - isTouching() 
                          - bounce()

return - Keyword to give back a value to the function draw
-return 100;
-return "Rishith";



ARGUMENTS
- Real values that take some memory from the storage
- They exist
- Passing arguments to the function
- Function is accepting/taking arguments

PARAMETERS
- Not real
- Do not take any memory
- Do not exist
- PLACEHOLDERS for arguments
*/