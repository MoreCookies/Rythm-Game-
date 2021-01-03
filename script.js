let circleX = 30;
let circleY = 30;
let colour = 0;
let goingBack = false;
function preload() {
  blueNote = loadImage("Blue note.svg")
}
function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSB);
}

function draw() {
  // Runs in a loop
  background(50);
  //player note pressing things
  fill(255, 204, 100);
  //notes
  image()
  /*
  ellipse(circleX, circleY, 30);
  ellipse(circleX + 35, circleY, 30);
  ellipse(circleX + (35 * 2), circleY, 30);
  ellipse(circleX + (35 * 3), circleY, 30);

  ellipse(circleX, circleY, 25);
  ellipse(circleX + 35, circleY, 25);
  ellipse(circleX + (35 * 2), circleY, 25);
  ellipse(circleX + (35 * 3), circleY, 25);
  */
  circleY += 5
  //Teleports notes back to the top of the screen
  if (circleY >= windowHeight - 20) {
    circleY = 30;
  }
}
