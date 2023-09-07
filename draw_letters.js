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

let c;

function interpCalculator(percent, startA, startB, stopA, stopB) {

  let startInterp = 0; // startA + percent * (startB - startA) / 100;
  let stopInterp = 0; // stopA + percent * (startB - stopA) / 100;

  if (startA < stopB && stopA > startB) {

    // Clockwise
    if (startA > stopA && startB < stopB) {
      startB += 360; // Creates +ve ratio
    }
    
    // Anti-clockwise
    else if (startA < stopA && startB > stopB) {
      startA += 360; // Creates -ve ratio
    }
  }

  





  c = compare(startA, startB, stopA, stopB);





  // else if (startA < stopB && stopA < startB) {
  //   // console.log("<<<<<");

  //   /*
  //   * b to h : start +ve, stop -ve || stopH is 360 and needs to be 0
  //   * startB < startH && stopB < stopH
  //   * startB > stopB && startH < stopH
  //   * startB < stopH && stopB < startH
  //   * 
  //   * 
  //   * 
  //   * f to t:
  //   * startF < startT
  //   * stopF < stopT
  //   * 
  //   * startF < stopF
  //   * startT < stopT
  //   * 
  //   * startF stopT
  //   * 
  //   * 
  //   * 
  //   */

  //   if (stopA < stopB && stopB > startA) {
  //     console.log("fjlhkfsk")
  //     stopB -= 360;
  //   }

  // }

  // else if (startA > stopB && stopA > startB) {
  //   console.log(">>>>>");
  // }

  




  // Interpolate
  startInterp = startA + percent * (startB - startA) / 100;
  stopInterp = stopA + percent * (stopB - stopA) / 100;

  // Corrects if either start or stop go over or under 360 and 0 respectively.
  startInterp += (startInterp > 360) ? -360 : (startInterp < 0) ? 360 : 0; 
  stopInterp += (stopInterp > 360) ? -360 : (stopInterp < 0) ? 360 : 0; 
  
  return [startInterp, stopInterp];
}


function compare(startA, startB, stopA, stopB) {
  let c = [];


  c.push(["startA ? startB : " + startA + ((startA < startB) ? "<" : ">") + startB]);
  c.push(["stopA ? stopB   : " + stopA + ((stopA < stopB) ? "<" : ">") + stopB]);

  c.push(["startA ? stopA  : " + startA + ((startA < stopA) ? "<" : ">") + stopA]);
  c.push(["startB ? stopB  : " + startB + ((startB < stopB) ? "<" : ">") + stopB]);

  c.push(["startA ? stopB  : " + startA + ((startA < stopB) ? "<" : ">") + stopB]);
  c.push(["stopA ? startB  : " + stopA + ((stopA < startB) ? "<" : ">") + startB])

  return c;
}



/**
 * 
 * /**
   * --------------------------------------------------------
   * REDO ALL OF THIS BELOW
   * --------------------------------------------------------
   */



  /* 
   * x to b : both should move anti-clockwise
   * startX < startB && stopX > stopB
   * startX < stopX && startB > stopB
   * startX < stopB & stopX < startB

   * b to h : start +ve, stop -ve || stopH is 360 and needs to be 0
   * startB < startH && stopB < stopH
   * startB > stopB && startH < stopH
   * startB < stopH && stopB < startH
   * 
   * y to u : stop +ve, start -ve;
   * startY < startU
   * stopY < stopU
   * startY < stopY
   * startU > stopU
   * 
   * startY < stopU && stopY < startU
   * 
   */


//   else if (startA < stopB && stopA < startB) {

//     if (startA < startB && startA < stopA) {
//       startA += 360;
//     }
    
    


//     if (stopA > stopB) {
//       stopB += 360;
//     }
    

//     // with && startA < stopA, y to u works BUT b to r breaks
//     /**
//      * stopA < stopB AND NOT startA < stopA = -360
//      * stopA < stopB AND startA < stopA = do nothing
//      * 
//      * 
//      * so u to y should not call this 
//      * but b to r should call this
//      * 
//      * both are triggered upon (stopA < stopB)
//      * and both respond to (stopA < stopB && startA < stopA)
//      * 
//      * a different condition must be met
//      */
//     if (stopA < stopB && startA < stopA) {
//       stopB -= 360;
//     }



//   }


//   /*
//   * r to t : both should move clockwise
//   * startR > startT
//   * stopR > stopT
//   * 
//   * startR < stopR
//   * startT < stopT
//   * 
//   * startR > stopT && stopR > startT
//   * 
//   * 
//   * u to y : stop -ve, start +ve
//   * startU > startY && stopU > stopY
//   * startU > stopU && startY < stopY
//   * startU > stopY && stopU > startY
//   * 
//   * 
//   * 
//  * u to b :
//  * startU > startB
//  * stopU > stopB
//  * 
//  * startU 
//  * 
//  * startU > stopB
//  * stopU > startB
//   * 
//   */


//   else if (startA > stopB && stopA > startB) {

//     if (startA > startB && startA > stopA) {
//       startB += 360;
//     } 


//     // if (startA > startB) startB += 360;
//     // if (stopA < stopB) stopA += 360;
//   }


//   
//    * --------------------------------------------------------
//    * REDO ALL OF THIS ABOVE
//    * --------------------------------------------------------
/*
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
 * r to t : both should move clockwise
 * startR > startT
 * stopR > stopT
 * 
 * startR < stopR
 * startT < stopT
 * 
 * startR > stopT
 * stopR > startT
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
 * c to v : start +ve, stop -ve
 * startC < startV
 * stopC > stopV
 * 
 * startC < stopC
 * startV < stopV
 * 
 * startC < stopV
 * stopC > startV
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
 *     if ((startA < startB && stopA < stopB) && (startA > stopA && startB < stopB)) {
      stopB -= 360;
    }

    else if (startA < startB && startA < stopA) {
      startA += 360;

    }
    
    // else if (stopA > stopB) {
    //   stopB += 360;
    // }

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
 * 
 * b to h : start +ve, stop -ve || stopH is 360 and needs to be 0
 * startB < startH
 * stopB < stopH
 * 
 * startB > stopB
 * startH < stopH
 * 
 * startB < stopH
 * stopB < startH
 * 
 * u to b :
 * startU > stopB
 * stopU > startB
 * 
 * 
 */

