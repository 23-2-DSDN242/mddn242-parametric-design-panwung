/**
 * 
 * SUGGESTIONS:
 * may need parameters for smaller arcs to add visual interest (this could also be hard coded and proportional to the main curve)
 * may need parameters for a shadow (draw everything twice and make the first iteration slightly offset, use different colour)
 * may need parameters for circles to add visual interest
 * 
 */
class Character {
  constructor(
    offsetx1, offsety1, radius1, arcStart1, arcStop1,
    offsetx2, offsety2, radius2, arcStart2, arcStop2, 
    lineXCenter, lineYCenter, lineLength, lineRotation
  ) {
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
    const STROKE_WEIGHT_SCALE = 1/12;
    push();
    translate(posx, posy);
    noFill();
    strokeWeight(this.radius1 * STROKE_WEIGHT_SCALE);
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



class Oldge {
  constructor(size, offsetx, offsety) {
    this.type = "old";
    this.size = size;
    this.offsetx = offsetx;
    this.offsety = offsety;
  }
}


const SIZE = 70;

const alphabet = {
  "default": new Oldge(40, 0, 0),
  "A": new Character(
    -5, 0, SIZE, 30, 330,
    -5, 0, SIZE * 2/3, 0, 150, 
    40, 0, 70, 0
  ),
  "B": new Character(
    5, 0, SIZE, 210, 150,
    5, 0, SIZE * 2/3, 200, 0, 
    -40, -35, 140, 0
  ),
  "C": new Character(
    0, 0, SIZE, 30, 330,
    0, 0, SIZE * 2/3, 300, 330, 
    -15, 0, 35, 0
  ),
  "D": new Character(
    -5, 0, SIZE, 30, 330,
    -5, 0, SIZE * 2/3, 270, 45, 
    40, -35, 140, 0
  ),
  "E": new Character(
    0, 0, SIZE, 30, 330,
    0, 0, SIZE * 2/3, 115, 225, 
    5, 0, 35, 90
  ),
  
  "F": new Oldge(50, 15, 0),

  "G": new Character(
    -5, 0, SIZE, 30, 330,
    -5, 0, SIZE * 2/3, 0, 70, 
    40, 17.5, 35, 0
  ),

  "H": new Oldge(50, 15, 0),
  "I": new Oldge(50, 15, 0),
  "J": new Oldge(50, 15, 0),
  "K": new Oldge(50, 15, 0),
  "L": new Oldge(50, 15, 0),
  "M": new Oldge(50, 15, 0),
  "N": new Oldge(50, 15, 0),

  "O": new Character(
    0, 0, SIZE, 0, 360,
    0, 0, SIZE * 2/3, 300, 240,
    0, 0, 0, 0
  ),

  "P": new Oldge(50, 15, 0),

  "Q": new Character(
    -5, 0, SIZE, 0, 360,
    -5, 0, SIZE * 2/3, 310, 30, 
    40, 17.5, 35, 0
  ),

  "R": new Oldge(50, 15, 0),
  "S": new Oldge(50, 15, 0),
  "T": new Oldge(50, 15, 0),
  "U": new Oldge(50, 15, 0),
  "V": new Oldge(50, 15, 0),
  "W": new Oldge(50, 15, 0),
  "X": new Oldge(50, 15, 0),
  "Y": new Oldge(50, 15, 0),
  "Z": new Oldge(50, 15, 0),
  "0": new Oldge(40, 0, 17),
  "1": new Oldge(40, 0, 17),
  "2": new Oldge(40, 0, 17),
  "3": new Oldge(40, 0, 17),
  "4": new Oldge(40, 0, 17),
  "5": new Oldge(40, 0, 17),
  "6": new Oldge(40, 0, 17),
  "7": new Oldge(40, 0, 17),
  "8": new Oldge(40, 0, 17),
  "9": new Oldge(40, 0, 17)
}
