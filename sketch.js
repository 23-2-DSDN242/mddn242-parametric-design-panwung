const canvasWidth = 960;
const canvasHeight = 500;


class Letter {
  constructor(size, arcStart, arcStop, lineXOffset, lineYOffset, lineLength) {
    this.size = size;
    this.arcStart = arcStart;
    this.arcStop = arcStop;

    this.lineXOffset = lineXOffset;
    this.lineYOffset = lineYOffset;
    this.lineLength = lineLength;
  }
}


/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = new Letter(150, 30, 330, 90, -75, 330);
const letterB = new Letter(150, 210, 150, -90, -150, 330); 
const letterC = new Letter(150, 30, 330, -40, -35, 285); 

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noFill();
  stroke(strokeColor);
  strokeWeight(9);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData.size;
  let start = letterData.arcStart * Math.PI/180;
  let stop = letterData.arcStop * Math.PI/180;

  let lxOff = posx + letterData.lineXOffset;
  let lyOff = posy + letterData.lineYOffset;
  let lineLength = letterData.lineLength;

  let scalar = letterData.scalar;


  arc(posx, posy, size2, size2, start, stop);
  line(lxOff, lyOff, lxOff, lineLength);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
