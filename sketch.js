

function setup() {
  createCanvas(1500, 1400);
}

function draw() {

 if (mouseIsPressed){
    noStroke();
    fill(255);
  }
  else {
    noStroke();
    fill(237,34,93);
  }
  ellipse(mouseX, mouseY, 50, 50);

}
