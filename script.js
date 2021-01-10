//variables
let fps = 60;
let colour = 0;
let goingBack = false;
let noteColour;
let aPressed = false;
let sPressed = false;
let dPressed = false;
let fPressed = false;
let left = 65; //a
let leftmiddle = 83; //s
let rightmiddle = 68; //d
let right = 70; //f
let lineColour;
let asgore;
let winHeight = 750;
let winWidth = 1150;
let score = 0;
let circleX = winWidth  /  2;
let circleY = 125;
let songPlaying = false;
let asgore1;
class imgButton {
  constructor(img, xPos, yPos) {
    this.dispImg = img;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  display() {
    stroke(255);
    if(this.isOver(mouseX, mouseY)) {
      tint(225, 200, 0);
    } else {
      noTint();
    }
    image(this.dispImg, this.xPos, this.yPos);
  }

  isOver(xPos, yPos) {
    
    if(xPos >= this.xPos-1 && xPos <= this.xPos+this.dispImg.width && yPos >= this.yPos-1 && yPos <= this.yPos+this.dispImg.height && mouseIsPressed) {
      return true
    } else {
      return false
    }
    
  }
}
//functions
function colourR() {
  noteColour = redNote
  lineColour = "red"
}
function colourM() {
  noteColour = magentaNote;
  lineColour = "magenta"
}
function colourO() {
  noteColour = orangeNote;
  lineColour = "orange"
}
function colourB() {
  noteColour = blueNote;
  lineColour = "blue"
}
function colourY() {
  noteColour = yellowNote;
  lineColour = "yellow"
}
function colourLB() {
	noteColour = lightBlueNote;
}

function lineTopScale() {
  img.resize(200,  200)
}

function scaleBackground() {
	gameBackground.resize(winWidth, winHeight);
}

//Asgore
function buttonAsgore() {
  console.log("loading asgore")
}

function playAsgore() {
  console.log("asgorePlaying")
  asgore1.play();
}
function asgoreSong() {
	console.log("asgorePicLoaded")
}
//GasGasGas
function buttonGGG() {
	console.log("loading GasGasGas")
	gasGasGas = loadSound("Songs/GasGasGas.mp3", playGGG)
}
function playGGG(){
	console.log("GasGasGasPlaying")
	gasGasGas.play()
}
function preload() {
  redNote = loadImage("Notes/RedNote.png");
  blueNote = loadImage("Notes/BlueNote.png", );
  magentaNote = loadImage("Notes/MagentaNote.png");
  frenzyNote = loadImage("Notes/FrenzyNote.png");
  orangeNote = loadImage("Notes/OrangeNote.png");
  yellowNote = loadImage("Notes/YellowNote.png");
	lightBlueNote = loadImage("Notes/lightBlueNote.png")
  pressedNote = loadImage("Notes/PressedNote.png");
  frame = loadImage("Images/Frame.png")
  asgoreSong = loadImage("SongImages/asgorePic.png", asgoreSong)
	gameBackground = loadImage("Images/gameBackgroundPOG.jpg", scaleBackground);
}

function setup() {
  //framesPerSecond(fps);
	doggo = loadImage("Images/doggo.jpg")
  createCanvas(winWidth, winHeight);
  circleX = windowWidth / 2
  colorMode(HSB);
  imageMode(CENTER);
  buttonRed = createButton('Red');
  buttonRed.position(900,  30);
  buttonMagenta = createButton('Magenta');
  buttonMagenta.position(900,  50);
  buttonOrange = createButton('Orange');
  buttonOrange.position(900,  70);
  buttonBlue = createButton('Blue');
  buttonBlue.position(900,  90);
	buttonYellow = createButton('Yellow')
	buttonYellow.position(900,  110);
	buttonLBlue = createButton('Light Blue')
	buttonLBlue.position(900, 130);
	lineColour = "blue"
	noteColour = blueNote;
  noteSpeedSlider = createSlider(1, 25, 5)
  noteSpeedSlider.position(12, 12)
  //button test
  asgoreButton2 = new imgButton(asgoreSong, 100, 100);
}

function draw() {
  //buttons for customizing note colours
	
	imageMode(CORNER);
  background(gameBackground);
	imageMode(CENTER);
  buttonRed.mousePressed(colourR);
  buttonMagenta.mousePressed(colourM);
  buttonOrange.mousePressed(colourO);
  buttonBlue.mousePressed(colourB);
  buttonYellow.mousePressed(colourY);
	buttonLBlue.mousePressed(colourLB);
  // Runs in a loop
  
	fill("cyan")
	rect(0, 0, winWidth, 125);
  //player note pressing things
  fill(255, 204, 100);
  //notes (not really)

  for (var i = 0; i < 4; i++) {
    stroke(lineColour)
    line(circleX + (40 * i), 125, circleX + (40 * i), winHeight)
    image(noteColour, circleX + (40 * i), circleY, 30)
  }

  //player note control press pog score generator epicness idk 
  for (var l = 0; l < 4; l++) {
		image(frame, circleX, winHeight - 80, 40, 40);
    image(frame, circleX + 40, winHeight - 80, 40, 40);
    image(frame, circleX + (40 * 2), winHeight - 80, 40, 40);
    image(frame, circleX + (40 * 3), winHeight - 80, 40, 40);
    image(noteColour, circleX, winHeight - 80, 35, 35);
    image(noteColour, circleX + 40, winHeight - 80, 35, 35);
    image(noteColour, circleX + (40 * 2), winHeight - 80, 35, 35);
    image(noteColour, circleX + (40 * 3), winHeight - 80, 35, 35);
    if (aPressed) {
      image(pressedNote, circleX, winHeight - 80, 32, 32);
    }
    if (sPressed) {
      image(pressedNote, circleX + 40, winHeight - 80, 32, 32);
    }
    if (dPressed) {
      image(pressedNote, circleX + (40 * 2), winHeight - 80, 32, 32);
    }
    if (fPressed) {
      image(pressedNote, circleX + (40 * 3), winHeight - 80, 32, 32);
    }
  }
  circleY += noteSpeedSlider.value()
  //Teleports notes back to the top of the screen
  if (circleY >= winHeight - 20) {
    circleY = 125;
  }

  //player controls alpha
  if (keyIsDown(left)) {
    aPressed = true;
  } else {
    aPressed = false;
  }
  if (keyIsDown(leftmiddle)) {
    sPressed = true;
  } else {
    sPressed = false;
  }
  if (keyIsDown(rightmiddle)) {
    dPressed = true;
  } else {
    dPressed = false;
  }
  if (keyIsDown(right)) {
    fPressed = true;
  } else {
    fPressed = false;
  }
  if(asgoreButton2.isOver(mouseX, mouseY) && songPlaying == false) {
    songPlaying = true;
    asgore1 = loadSound("Songs/asgore.mp3", playAsgore);
  }
  if(asgore1.isPlaying()) {
    songPlaying = true;
  } else {
    songPlaying = false;
  }
  asgoreButton2.display();
}
