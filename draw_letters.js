/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FEEFE2";
var systemLineColor = "#000000";
var systemBoxColor = "#00c800";

/* internal constants */
const col1 = [3, 4, 94]
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
  
  newLetter.offsetx1     = map(percent, 0, 100, oldObj.offsetx1, newObj.offsetx1);
  newLetter.offsety1     = map(percent, 0, 100, oldObj.offsety1, newObj.offsety1);
  newLetter.radius1      = map(percent, 0, 100, oldObj.radius1, newObj.radius1);
  newLetter.arcStart1    = map(percent, 0, 100, oldObj.arcStart1, newObj.arcStart1);
  newLetter.arcStop1     = map(percent, 0, 100, oldObj.arcStop1, newObj.arcStop1);

  newLetter.offsetx2     = map(percent, 0, 100, oldObj.offsetx2, newObj.offsetx2);
  newLetter.offsety2     = map(percent, 0, 100, oldObj.offsety2, newObj.offsety2);
  newLetter.radius2      = map(percent, 0, 100, oldObj.radius2, newObj.radius2);
  newLetter.arcStart2    = map(percent, 0, 100, oldObj.arcStart2, newObj.arcStart2);
  newLetter.arcStop2     = map(percent, 0, 100, oldObj.arcStop2, newObj.arcStop2);

  newLetter.lineXCenter  = map(percent, 0, 100, oldObj.lineXCenter, newObj.lineXCenter);
  newLetter.lineYCenter  = map(percent, 0, 100, oldObj.lineYCenter, newObj.lineYCenter);
  newLetter.lineLength   = map(percent, 0, 100, oldObj.lineLength, newObj.lineLength);
  newLetter.lineRotation = map(percent, 0, 100, oldObj.lineRotation, newObj.lineRotation);

  newLetter.draw = oldObj.draw

  return newLetter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
