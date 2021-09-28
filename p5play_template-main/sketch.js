var sprite;
function setup() {
  createCanvas(400,400);
   sprite = createSprite(200,200,50,50);
}

function draw() 
{
  
  background("white");
  drawSprites();
if (keyIsDown(RIGHT_ARROW)){
  sprite.position.x = sprite.position.x + 4;
}
if (keyIsDown(LEFT_ARROW)){
  sprite.position.x = sprite.position.x - 4;
}
if (keyIsDown(UP_ARROW)){
  sprite.position.y = sprite.position.y -4;
}
if (keyIsDown (DOWN_ARROW)){
  sprite.position.y = sprite.position.y + 4;
}
}




