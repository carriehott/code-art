var circleX = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250, 250, 100);
  
  noStroke();
  fill(250, 200, 200);
  ellipse(circleX, 200, 100, 100);
  
  circleX = circleX + 30;
  
}
