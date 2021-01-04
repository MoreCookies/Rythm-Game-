class note {
  constructor(track, time, currentSong) {
    this.track = track;
    this.time = time;
  }
  
  display() {
    //draw the note with the updated positions
    if(currentSong.currentTime()-1.05 >= this.time) {
      
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
}