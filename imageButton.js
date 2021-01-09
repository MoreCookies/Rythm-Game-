class imgButton {
  constructor(img, xPos, yPos) {
    this.dispImg = img;
    this.x = xPos;
    this.y = yPos;
  }

  display() {
    stroke(255);
    tint(225, 200, 0);
    image(this.dispImg, this.xPos, this.yPos);
  }

  isOver(xPos, yPos, xPos2, yPos2) {
    if(xPos >= xPos2-1 && xPos <= xPos2+this.dispImg.width && yPos >= yPos2-1 && yPos <= yPos2+this.dispImg.height && mouseIsPressed) {
      return true
    } else {
      return false
    }
  }
}