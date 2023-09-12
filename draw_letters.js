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
  let newLetter = {};

  newLetter.sWeight = oldObj.sWeight;

  newLetter.offsetx1     = map(percent, 0, 100, oldObj.offsetx1, newObj.offsetx1);
  newLetter.offsety1     = map(percent, 0, 100, oldObj.offsety1, newObj.offsety1);
  newLetter.radius1      = map((2 * percent > 100) ? 100 : 2 * percent, 0, 100, oldObj.radius1, newObj.radius1);

  newLetter.arcStart1    = arcInterp(percent, oldObj.arcStart1, newObj.arcStart1, oldObj.arcStop1, newObj.arcStop1)[0];
  newLetter.arcStop1     = arcInterp(percent, oldObj.arcStart1, newObj.arcStart1, oldObj.arcStop1, newObj.arcStop1)[1];

  newLetter.offsetx2     = map(percent, 0, 100, oldObj.offsetx2, newObj.offsetx2);
  newLetter.offsety2     = map(percent, 0, 100, oldObj.offsety2, newObj.offsety2);
  newLetter.radius2      = map((2 * percent > 100) ? 100 : 2 * percent, 0, 100, oldObj.radius2, newObj.radius2);

  newLetter.arcStart2    = arcInterp((percent < 50) ? 0 : 2 * (percent - 50), oldObj.arcStart2, newObj.arcStart2, oldObj.arcStop2, newObj.arcStop2)[0];
  newLetter.arcStop2     = arcInterp((percent < 50) ? 0 : 2 * (percent - 50), oldObj.arcStart2, newObj.arcStart2, oldObj.arcStop2, newObj.arcStop2)[1];

  newLetter.lineXCenter  = map((2 * percent > 99) ? 100 : 2 * percent, 0, 100, oldObj.lineXCenter, newObj.lineXCenter);
  newLetter.lineYCenter  = map((percent < 50) ? 0 : 2 * (percent - 50), 0, 100, oldObj.lineYCenter, newObj.lineYCenter);
  newLetter.lineLength   = map(percent, 0, 100, oldObj.lineLength, newObj.lineLength);
  newLetter.lineRotation = map((percent < 50) ? 0 : 2 * (percent - 50), 0, 100, oldObj.lineRotation, newObj.lineRotation);

  newLetter.draw = oldObj.draw;

  return newLetter;
}

var swapWords = [
  "RECURVED",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
]

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