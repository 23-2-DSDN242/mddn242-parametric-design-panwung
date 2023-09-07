class Character {
  constructor(
    sWeight,
    offsetx1, offsety1, radius1, arcStart1, arcStop1,
    offsetx2, offsety2, radius2, arcStart2, arcStop2, 
    lineXCenter, lineYCenter, lineLength, lineRotation
  ) {
    this.sWeight = sWeight;

    this.offsetx1 = offsetx1;
    this.offsety1 = offsety1;
    this.radius1 = radius1;
    this.arcStart1 = arcStart1;
    this.arcStop1 = arcStop1;

    this.offsetx2 = offsetx2;
    this.offsety2 = offsety2;
    this.radius2 = radius2;
    this.arcStart2 = arcStart2;
    this.arcStop2 = arcStop2;

    this.lineXCenter = lineXCenter;
    this.lineYCenter = lineYCenter;
    this.lineLength = lineLength;
    this.lineRotation = lineRotation;
  }

  draw(posx, posy, col1, col2) {
    push();
    translate(posx, posy);
    noFill();
    strokeWeight(this.sWeight);
    strokeCap(ROUND);

    stroke(col1);
    arc(
      this.offsetx1, this.offsety1, 
      this.radius1, this.radius1, 
      this.arcStart1 * Math.PI/180, this.arcStop1 * Math.PI/180
    );

    stroke(col2);
    arc(
      this.offsetx2, this.offsety2, 
      this.radius2, this.radius2, 
      this.arcStart2 * Math.PI/180, this.arcStop2 * Math.PI/180
    );

    stroke(col1);
    translate(this.lineXCenter, this.lineYCenter);
    rotate(this.lineRotation * Math.PI/180);
    line(
      0, - this.lineLength/2, 
      0, + this.lineLength/2
    );
    pop();
  }
}

/**
 * Because editor.js creates new objects without the draw(...) method,
 * this class is used to convert those new objects into ones that inherit this method.
 */
class CharConverter extends Character {
  constructor(obj) {
    super(
      obj.sWeight,
      obj.offsetx1, obj.offsety1, obj.radius1, obj.arcStart1, obj.arcStop1,
      obj.offsetx2, obj.offsety2, obj.radius2, obj.arcStart2, obj.arcStop2, 
      obj.lineXCenter, obj.lineYCenter, obj.lineLength, obj.lineRotation
    );
  }
}


const SIZE = 70;
const STROKE_WEIGHT = SIZE/12;

const alphabet = {
  "default": new Character(
    STROKE_WEIGHT,
    0, -35, SIZE, 100, 260,
    0, -35, SIZE, 280, 80,
    0, -35, 35, 90
  ),
  "A": new Character(
    STROKE_WEIGHT,
    -5, 0, SIZE, 30, 330,
    -5, 0, SIZE * 2/3, 0, 150, 
    40, 0, 70, 0
  ),
  "B": new Character(
    STROKE_WEIGHT,
    5, 0, SIZE, 210, 150,
    5, 0, SIZE * 2/3, 200, 0, 
    -40, -35, 140, 0
  ),
  "C": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 30, 330,
    0, 0, SIZE * 2/3, 300, 330, 
    -15, 0, 35, 0
  ),
  "D": new Character(
    STROKE_WEIGHT,
    -5, 0, SIZE, 30, 330,
    -5, 0, SIZE * 2/3, 270, 45, 
    40, -35, 140, 0
  ),
  "E": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 30, 330,
    0, 0, SIZE * 2/3, 115, 225, 
    5, 0, 35, 90
  ),
  "F": new Character(
    STROKE_WEIGHT,
    -30, 0, SIZE, 20, 90,
    30, 0, SIZE, 200, 270,
    0, 0, 60, 90
  ),
  "G": new Character(
    STROKE_WEIGHT,
    -5, 0, SIZE, 30, 330,
    -5, 0, SIZE * 2/3, 0, 70, 
    40, 17.5, 35, 0
  ),
  "H": new Character(
    STROKE_WEIGHT,
    -10, 35, SIZE, 270, 360,
    -10, 35, SIZE * 2/3, 270, 360, 
    -25, -35, 140, 0
  ),
  "I": new Character(
    STROKE_WEIGHT,
    0, -35, SIZE, 269, 271,
    0, -35, SIZE * 2/3, 240, 300, 
    0, 0, 70, 0
  ),
  "J": new Character(
    STROKE_WEIGHT,
    0, -35, SIZE, 269, 271,
    0, 35, SIZE * 2/3, 60, 120, 
    0, 0, 70, 0
  ),
  "K": new Character(
    STROKE_WEIGHT,
    -10, 35, SIZE, 270, 0,
    -10, -35, SIZE * 2/3, 0, 90, 
    -25, -35, 140, 0
  ),
  "L": new Character(
    STROKE_WEIGHT,
    0, -35, SIZE, 240, 300,
    0, 35, SIZE * 2/3, 60, 120, 
    0, 0, 70, 0
  ),
  "M": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 120, 60,
    0, 0, SIZE * 2/3, 130, 270, 
    0, 5, 35, 0
  ),
  "N": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 120, 60,
    0, 0, SIZE * 2/3, 130, 190, 
    0, -15, 35, 90
  ),
  "O": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 0, 360,
    0, 0, SIZE * 2/3, 300, 240,
    0, 0, 0, 0
  ),
  "P": new Character(
    STROKE_WEIGHT,
    5, 0, SIZE, 0, 360,
    5, 0, SIZE * 2/3, 90, 300,
    -40, 35, 140, 0
  ),
  "Q": new Character(
    STROKE_WEIGHT,
    -5, 0, SIZE, 0, 360,
    -5, 0, SIZE * 2/3, 300, 90, 
    40, 35, 140, 0
  ),
  "R": new Character(
    STROKE_WEIGHT,
    -10, 35, SIZE, 270, 360,
    -10, -17.5, SIZE * 2/3, 260, 30, 
    -25, 0, 70, 0
  ),
  "S": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 0, 120,
    0, 0, SIZE, 180, 300,
    0, 0, 45, 90
  ),
  "T": new Character(
    STROKE_WEIGHT,
    0, 35, SIZE, 210, 250,
    0, -35, SIZE, 30, 70, 
    0, 0, 70, 0
  ),
  "U": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 300, 240,
    0, 0, SIZE * 2/3, 280, 330, 
    0, 15, 35, 90
  ),
  "V": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 100, 240,
    0, 0, SIZE, 300, 80, 
    0, 0, 0, 0
  ),
  "W": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 300, 240,
    0, 0, SIZE * 2/3, 90, 240, 
    0, -5, 35, 0
  ),
  "X": new Character(
    STROKE_WEIGHT,
    35, 0, SIZE, 90, 160,
    -35, -0, SIZE, 270, 340,
    0, 0, 95, 45
  ),
  "Y": new Character(
    STROKE_WEIGHT,
    10, -17.5, SIZE, 100, 220,
    10, -17.5, SIZE * 2/3, 110, 190,
    15, 35, 140, 0
  ),
  "Z": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 60, 180,
    0, 0, SIZE, 240, 0,
    0, 0, 45, 90
  ),
  "0": new Character(
    STROKE_WEIGHT,
    0, -35, SIZE, 0, 360,
    0, -35, SIZE * 2/3, 170, 250,
    0, -35, 35, 10
  ),
  "1": new Character(
    STROKE_WEIGHT,
    -13, -90, SIZE, 0, 120,
    -13, -90, SIZE * 2/3, 330, 190,
    23, -35, 140, 10
  ),
  "2": new Character(
    STROKE_WEIGHT,
    0, -70, SIZE, 170, 270,
    0, 0, SIZE, 350, 90,
    0, -35, 140, 10
  ),
  "3": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 300, 180,
    0, -70, SIZE, 180, 60, 
    0, -35, 70, 10
  ),
  "4": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 300, 45,
    0, -70, SIZE, 120, 230, 
    0, -35, 140, 10
  ),
  "5": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 300, 180,
    0, -70, SIZE, 120, 0, 
    0, -35, 70, 10
  ),
  "6": new Character(
    STROKE_WEIGHT,
    5, 0, SIZE, 220, 160,
    5, 0, SIZE * 2/3, 120, 360, 
    -33, -35, 140, 10
  ),
  "7": new Character(
    STROKE_WEIGHT,
    6, -70, SIZE, 170, 270,
    6, -70, SIZE * 2/3, 340, 40,
    6, -35, 140, 10
  ),
  "8": new Character(
    STROKE_WEIGHT,
    0, 0, SIZE, 300, 240,
    0, -70, SIZE, 120, 60,
    0, -35, 70, 10
  ),
  "9": new Character(
    STROKE_WEIGHT,
    -5, -70, SIZE, 40, 340,
    -5, -70, SIZE * 2/3, 340, 40,
    33, -35, 140, 10
  )
}
