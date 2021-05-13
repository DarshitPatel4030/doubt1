var poly;
var Sling;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
poly= new Polygon(400,200,100,50)
Sling=new SlingShot(300,300)
}

function draw() {
  background(255,255,255);
poly.display();
}
