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

  newLetter.arcStart1    = oldObj.arcStart1 + percent * (newObj.arcStart1 - oldObj.arcStart1) / 100;
  newLetter.arcStop1     = oldObj.arcStop1 + percent * (newObj.arcStop1 - oldObj.arcStop1) / 100;

  newLetter.offsetx2     = map(percent, 0, 100, oldObj.offsetx2, newObj.offsetx2);
  newLetter.offsety2     = map(percent, 0, 100, oldObj.offsety2, newObj.offsety2);
  newLetter.radius2      = map((2 * percent > 100) ? 100 : 2 * percent, 0, 100, oldObj.radius2, newObj.radius2);

  newLetter.arcStart2    = oldObj.arcStart2 + ((percent < 50) ? 0 : 2 * (percent - 50)) * (newObj.arcStart2 - oldObj.arcStart2) / 100;
  newLetter.arcStop2     = oldObj.arcStop2 + ((percent < 50) ? 0 : 2 * (percent - 50)) * (newObj.arcStop2 - oldObj.arcStop2) / 100;

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
