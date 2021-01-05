/*
MISSIONS

Rules
-if task is completed, put "COMPLETED" next to the task, like this.
eat burrito - COMPLETED
-put your name next to the task if you're working on it
-you are allowed to put notes next to the task, like updates on progress, or noticed problems, or asks for help
-if the task is indented it means it has to be done followed by the note before it, for example, below the task "make "pressed" version of all notes" is an indented task which is "add player controls". make pressed version of all notes must be completed before doing add player controls

TASKS
-add player controls
  
-make note class
  -detects if the player has pressed notes and if so gives points i guess
  -moves down
  -shows note based on the song.currentTime() and the time paramater given
  -
  -get a song to play
    -map song in osu!
      -put it inside of the game
        -make scoring system

relieve your stress area
suggestions
-mash your keyboard
-type random words in hopes of calming down
-work on stuff idk magentaNote
-oh.
*/
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
let circleX = winWidth/2;
let circleY = 125;

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
function blueNoteConsole() {
	console.log("BlueNoteLoaded")
}
function redNoteConsole() {
	console.log("RedNoteLoaded")
}
function magentaNoteConsole() {
	console.log("MagentaNoteLoaded")
}
function frenzyNoteConsole() {
	console.log("frenzyNoteLoaded")
}
function orangeNoteConsole() {
	console.log("orangeNoteLoaded")
}
function yellowNoteConsole() {
	console.log("yellowNoteLoaded")
}
function pressedNoteConsole() {
	console.log("PressedNoteLoaded")
}

function lineTopScale() {
	img.resize(200,200)
} 

function scaleBackground() {
  gameBackground.resize(winWidth, winHeight);
}
function preload() {
	redNote = loadImage("Notes/RedNote.png", redNoteConsole);
	blueNote = loadImage("Notes/BlueNote.png", blueNoteConsole);
	magentaNote = loadImage("Notes/MagentaNote.png", magentaNoteConsole);
	frenzyNote = loadImage("Notes/FrenzyNote.png", frenzyNoteConsole);
	orangeNote = loadImage("Notes/OrangeNote.png", orangeNoteConsole);
	yellowNote = loadImage("Notes/YellowNote.png", yellowNoteConsole);
	pressedNote = loadImage("Notes/PressedNote.png", pressedNoteConsole);
  img = loadImage("Images/LineTop.jpg", lineTopScale);
  gameBackground = loadImage("Images/gameBackgroundPOG.jpg", scaleBackground);
	//asgore = loadSound("asgore.mp3", playAsgore);
}

function setup() {
	//framesPerSecond(fps);
  doggo = loadImage("Images/doggo.jpg")
	createCanvas(winWidth, winHeight);
	circleX = windowWidth / 2
	colorMode(HSB);
	imageMode(CENTER);
	buttonRed = createButton('Red');
	buttonRed.position(900,30);

	buttonMagenta = createButton('Magenta');
	buttonMagenta.position(900,50);

	buttonOrange = createButton('Orange');
	buttonOrange.position(900,70);

	buttonBlue = createButton('Blue');
	buttonBlue.position(900,90);

  buttonYellow = createButton('Yellow')
  buttonYellow.position(900,110);
  lineColour = "blue"
  noteColour = blueNote;

	noteSpeedSlider = createSlider(1, 25, 5)
	noteSpeedSlider.position(12, 12)
}

function draw() {
  //BOX
  //package length object package getMatchedCSSRules SVGPathSegCurvetoQuadraticSmoothRel webkitConvertPointFromNodeToPage frenzyNoteConsole getMatchedCSSRules HTMLAllCollection encodeURIComponent webkitConvertPointFromNodeToPage SVGPathSegCurvetoQuadraticSmoothRel VideoPlaybackQuality break PressedNoteLoaded webkitConvertPointFromNodeToPage pageYOffset
  
  //image(pogbox, (circleX*1.5), 125, 130, 50);
	//buttons for customizing note colours
  imageMode(CORNER);
	background(gameBackground);
  imageMode(CENTER);
	buttonRed.mousePressed(colourR);
	buttonMagenta.mousePressed(colourM);
	buttonOrange.mousePressed(colourO);
	buttonBlue.mousePressed(colourB);
	buttonYellow.mousePressed(colourY);
	// Runs in a loop
	
  fill("cyan")
  rect(0, 0, winWidth, 125);
	//asgore = loadSound("asgore.mp3", playAsgore); 
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
	  image(img, 360, 82, 170,85);
}
/*
function playAsgore() {
  console.log("loadedAudio")
  asgore.volume(1)
  asgore.autoplay(true);
}
*/

