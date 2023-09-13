/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FEEFE2";
var systemLineColor = "#000000";
var systemBoxColor = "#00c800";

/* internal constants */
const col1 = [3, 4, 94];
const col2 = [255, 175, 8];

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  letterData.draw(50, 150, col1, col2);
}

function interpolate_letter(percent, oldObj, newObj) {
  return oldObj.interpolateTo(newObj, percent);
}

var swapWords = [
  "RECURVED",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
]

/**
 * Interpolates the line length.
 * If the percent is less than 50, then the line will shrink to 0.
 * If the percent is greater than 50, then the line will grow from 0 to the new length.
 */
function lineInterp(percent, oldL, newL) {
  let interpLength;
  if (percent < 50) interpLength = oldL - percent * (oldL / 50);
  else interpLength = (percent - 50) * newL / 50;

  return interpLength;
}


/**
 * THEORY:
 * 
 * If stop < start, then this means must have gone through 0.
 * If this is the case, then stop must be increased by 360.
 * This also guarantees that start < stop.
 * 
 * Convergence rule: 
 * If startA < startB < stopB < stopA, the two points should converge.
 * 
 * Divergence rule:
 * If startB < startA < stopA < stopB, the two points should diverge.
 * 
 * Clockwise rule:
 * If startA < startB < stopA < stopB, the two points should move right.
 * 
 * Anti-clockwise rule:
 * startB < startA < stopB < stopA, the two points should move left.
 */
function arcInterp(percent, startA, startB, stopA, stopB) {

  let startInterp = 0, stopInterp = 0;

  // Apply rules.
  stopA += (stopA < startA) ? 360 : 0;
  stopB += (stopB < startB) ? 360 : 0;

  // Interpolate.
  startInterp = startA + percent * (startB - startA) / 100;
  stopInterp = stopA + percent * (stopB - stopA) / 100;

  // Corrects if either start or stop go over or under 360 and 0 respectively.
  startInterp -= (startInterp > 360) ? 360 : 0; 
  stopInterp -= (stopInterp > 360) ? 360 : 0; 
  
  return [startInterp, stopInterp];
}