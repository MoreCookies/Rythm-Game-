class note {
  constructor(track, time, currentSong) {
    this.track = track;
    this.time = time;
    this.xPos = winWidth/2+(track;
    this.yPos = 
  }
  
  display() {
    //draw the note with the updated positions
    if(currentSong.currentTime()-((abs(125-winHeight)/noteSpeedSlider.value())*deltaTime) >= this.time) {
      image(noteColour, xPos, yPos, 30);
    }
  }
  
  update() {
    /*
    Contents:
    -change the y position of the circle or note
    */
    
  }
  
  detect(currentTime) {
    //detects if the note time is near and the player has pressed the corresponding key and if its kinda close

  }
  