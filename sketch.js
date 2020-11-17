var rect1,rect2

function setup() {
createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
 rect2= createSprite(200,200,50,50);
 rect1.shapeColor='green';
 rect2.shapeColor='green';
 rect1.debug=true;
 rect2.debug=true;
 rect1.velocityX=2;
 rect1.velocityY=3;
rect2.velocityX=-3;
rect2.velocityY=-4;
edges=createEdgeSprites();
}

function draw() {
  background(255,255,255); 
 rect1.bounceOff(edges);
 rect2.bounceOff(edges);
  if(isTouching(rect1,rect2)){
      rect1.shapeColor='red';
      rect2.shapeColor='red';
    } else {
      rect1.shapeColor='green';
      rect2.shapeColor='green';
    }
    bounceOff(rect1,rect2)
  drawSprites();
}
function isTouching(object1,object2) {
  if (object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.y-object1.y<object1.height/2+object2.height/2&&
    object1.y-object2.y<object1.height/2+object2.height/2) {
      return true;
    }else{
      return false
    }
}
function bounceOff(object1,object2){
  if (object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.y-object1.y<object1.height/2+object2.height/2&&
    object1.y-object2.y<object1.height/2+object2.height/2) {
      object1.velocityX=-1*object1.velocityX
      object1.velocityY=-1*object1.velocityY
      object2.velocityX=-1*object2.velocityX
      object2.velocityY=-1*object2.velocityY
    }
}