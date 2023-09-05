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

  newLetter.arcStart1    = interpCalculator(percent, oldObj.arcStart1, newObj.arcStart1, oldObj.arcStop1, newObj.arcStop1)[0];//oldObj.arcStart1 + percent * (newObj.arcStart1 - oldObj.arcStart1) / 100;
  newLetter.arcStop1     = interpCalculator(percent, oldObj.arcStart1, newObj.arcStart1, oldObj.arcStop1, newObj.arcStop1)[1];//oldObj.arcStop1 + percent * (newObj.arcStop1 - oldObj.arcStop1) / 100;

  newLetter.offsetx2     = map(percent, 0, 100, oldObj.offsetx2, newObj.offsetx2);
  newLetter.offsety2     = map(percent, 0, 100, oldObj.offsety2, newObj.offsety2);
  newLetter.radius2      = map((2 * percent > 100) ? 100 : 2 * percent, 0, 100, oldObj.radius2, newObj.radius2);

  newLetter.arcStart2    = 0//oldObj.arcStart2 + ((percent < 50) ? 0 : 2 * (percent - 50)) * (newObj.arcStart2 - oldObj.arcStart2) / 100;
  newLetter.arcStop2     = 0//oldObj.arcStop2 + ((percent < 50) ? 0 : 2 * (percent - 50)) * (newObj.arcStop2 - oldObj.arcStop2) / 100;

  newLetter.lineXCenter  = map((2 * percent > 99) ? 100 : 2 * percent, 0, 100, oldObj.lineXCenter, newObj.lineXCenter);
  newLetter.lineYCenter  = map((percent < 50) ? 0 : 2 * (percent - 50), 0, 100, oldObj.lineYCenter, newObj.lineYCenter);
  newLetter.lineLength   = map(percent, 0, 100, oldObj.lineLength, newObj.lineLength);
  newLetter.lineRotation = map(percent, 0, 100, oldObj.lineRotation, newObj.lineRotation);

  newLetter.draw = oldObj.draw;

  return newLetter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
]

function interpCalculator(percent, startA, startB, stopA, stopB) {

  let startInterp = 0; // startA + percent * (startB - startA) / 100;
  let stopInterp = 0; // stopA + percent * (startB - stopA) / 100;




  /**
   * Moves both start and stop in one direction clockwise or anti-clockwise.
   */
  if (startA < stopB && stopA > startB) {
    // Clockwise
    if (startA > startB) {

      startB += 360; // Creates +ve ratio
    }
    
    // Anti-clockwise
    else if (startA < startB) {
      startA += 360; // Creates -ve ratio
    }



  }



  /**
   * --------------------------------------------------------
   * REDO ALL OF THIS BELOW
   * --------------------------------------------------------
   */



  /**
   * Moves start anti-clockwise and stop clockwise.
   */
  else if (startA < stopB && stopA < startB) {
    if (startA < startB) startA += 360;
    if (stopA > stopB) stopB += 360;
  }

  /**
   * Moves start clockwise and stop anti-clockwise.
   */
  else if (startA > stopB && stopA > startB) {

    if (startA > startB) startB += 360;
    if (stopA < stopB) stopA += 360;
  }


  /**
   * --------------------------------------------------------
   * REDO ALL OF THIS ABOVE
   * --------------------------------------------------------
   */

  // Interpolate
  startInterp = startA + percent * (startB - startA) / 100;
  stopInterp = stopA + percent * (stopB - stopA) / 100;

  // Corrects if either start or stop go over or under 360 and 0 respectively.
  startInterp += (startInterp > 360) ? -360 : (startInterp < 0) ? 360 : 0; 
  stopInterp += (stopInterp > 360) ? -360 : (stopInterp < 0) ? 360 : 0; 
  
  return [startInterp, stopInterp];
}


/**
 * 
 * 
 * FOUR POSSIBLE COMBINATIONS: (THIS IS WRONG)
 * IF startA < stopB AND stopA > startB -> MOVE ALL +VE 
 * IF startA > stopB AND stopA < startB -> MOVE ALL -VE
 * 
 * IF startA < stopB AND stopA < startB -> STOP MOVE +VE AND START MOVE -VE
 * IF startA > stopB AND stopA > startB -> STOP MOVE -VE AND START MOVE +VE
 * 
 * NEEDS SECONDARY CONDITION:
 *  refer to x to b and s to w and a to q
 *  refer to a to b and b to a (this one is for anti-clockwise)
 * 
 * 
 * 
 * 
 * 
 * 
 *
 * r to j : start move -ve, stop move -ve
 * startR > startJ
 * stopR < stopJ
 * 
 * startR > stopR
 * startJ < stopJ
 * 
 * startR < stopJ
 * stopR > startJ
 * 
 * 
 * 
 * 
 * 
 * a to q : stop SHOULD move +ve and start SHOULD move -ve
 * startA > startQ
 * stopA < stopQ
 * 
 * startA > stopA
 * startQ < stopQ
 * 
 * startA < stopQ
 * stopA > startQ
 * 
 * a to b : start and stop SHOULD move TOGETHER
 * startA < startB
 * stopA > stopB
 * 
 * startA < stopA
 * startB > stopB
 * 
 * startA < stopB
 * stopA > startB
 * 
 * b to a : start and stop SHOULD move TOGETHER ANTI-CLOCKWISE
 * startB > startA
 * stopB < stopA
 * 
 * startB > stopB
 * startA < stopA
 * 
 * startB < stopA
 * stopB > startA
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * u to v : stop SHOULD stay still and start SHOULD move +ve
 * startU > startV
 * stopU = stopV
 * 
 * startU > stopU
 * startV < stopV
 * 
 * startU > stopV
 * stopU > startV
 * 
 * v to u : stop SHOULD stay still and start SHOULD move -ve
 * 
 * startV < stopU
 * stopV < startU
 * 
 * q to n : start and stop SHOULD move TOGETHER
 * startQ < startN
 * stopQ > stopN
 * 
 * startQ < stopQ
 * startN > stopN
 * 
 * startQ < stopN
 * stopQ > startN
 * 
 * 
 * 
 * 
 * 
 * 
 * s to w : stop SHOULD move +ve and start SHOULD move -ve 
 * startS < startW
 * stopS < stopW
 * 
 * startS < stopS
 * startW > stopW
 * 
 * startS < stopW
 * stopS < startW
 * 
 * x to b : both should move anti-clockwise
 * startX < startB
 * stopX > stopB
 * 
 * startX < stopX
 * startB > stopB
 * 
 * startX < stopB
 * stopX < startB
 * 
 * 
 *
 * b to x : both should move clockwise
 * startB > startX
 * stopB < stopX
 * 
 * startB > stopB
 * startX < stopX
 * 
 * startB > stopX
 * stopB > startX
 * 
 */

