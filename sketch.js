var circleX = 0

function setup() {
  createCanvas(1200, 1400);
}

unction draw() {

 if (mouseIsPressed){
    fill(255);
  }
  else {
    fill(237,34,93);
  }
  ellipse(mouseX, mouseY, 25, 25);

}
