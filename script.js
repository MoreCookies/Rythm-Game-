/*
wall of burrito
burrito

*/
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

let circleX = 30;
let circleY = 30;
let colour = 0;
let goingBack = false;
let noteColour;
let aPressed = false;
let sPressed = false;
let dPressed = false;
let fPressed = false;
let asgore;
function preload() {
  blueNote = loadImage("Notes/BlueNote.png")
	redNote = loadImage("Notes/RedNote.png")
	magentaNote = loadImage("Notes/MagentaNote.png")
  frenzyNote = loadImage("Notes/FrenzyNote.png")
	orangeNote = loadImage("Notes/OrangeNote.png")
  pressedNote = loadImage("Notes/PressedNote.png")
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSB);
  imageMode(CENTER);
  noteColour = blueNote;
}

function draw() {
  // Runs in a loop
  background(50);
  //asgore = loadSound("asgore.mp3", playAsgore); 
  //player note pressing things
  fill(255, 204, 100);
  //notes (not really)
  for(var i = 0; i < 4; i++) {
    line(circleX+(40*i), 0, circleX+(40*i), windowHeight-20)
    image(noteColour, circleX+(40*i), circleY, 30)
  }
  //player note control press pog score generator epicness idk 
  for(var l = 0; l < 4; l++) {
    image(noteColour, circleX, windowHeight-100, 35, 35);
    image(noteColour, circleX+40, windowHeight-100, 35, 35);
    image(noteColour, circleX+(40*2), windowHeight-100, 35, 35);
    image(noteColour, circleX+(40*3), windowHeight-100, 35, 35);
    if(aPressed) {
      image(pressedNote, circleX, windowHeight-100, 32, 32);
    }
    if(sPressed) {
      image(pressedNote, circleX+40, windowHeight-100, 32, 32);
    }
    if(dPressed) {
      image(pressedNote, circleX+(40*2), windowHeight-100, 32, 32);
    }
    if(fPressed) {
      image(pressedNote, circleX+(40*3), windowHeight-100, 32, 32);
    }
    
  }
  circleY += 5
  //Teleports notes back to the top of the screen
  if (circleY >= windowHeight - 20) {
    circleY = 30;
  }

  //player controls alpha
  if(keyIsDown(65)) {
    aPressed = true;
  } else {
    aPressed = false;
  }
  if(keyIsDown(83)) {
    sPressed = true;
  } else {
    sPressed = false;
  }
  if(keyIsDown(68)) {
    dPressed = true;
  } else {
    dPressed = false;
  }
  if(keyIsDown(70)) {
    fPressed = true;
  } else {
    fPressed = false;
  }
}

function playAsgore() {
  console.log("loaded")
  asgore.play();
}