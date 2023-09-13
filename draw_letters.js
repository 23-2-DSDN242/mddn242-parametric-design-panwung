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
  "QWERTYUI",
  "01101100",
  "MRGREENZ",
  "CARCOSA1",
  "EMPTYSTR",
]