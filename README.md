[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11538107&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2

I wanted my typeface to be as simple and concise as possible, utilizing only a minimal number of arcs and lines, and avoiding clutter for readability. Each character consists of two arcs and a line. There is one global parameter for stroke thickness, five parameters for each of the two arcs, and four parameters for the line. 

The first arc, the blue arc, is generally used as an outer arc, and thus for most characters it has a larger radius. The second arc, the orange arc, is mostly used as an accent to add visual interest, though it does have a more important role in some characters. The line can serve as extra detail in some characters, but for the most part it serves the practical function of being a verticle or horizontal line in contrast to the curved arcs. Letters and numbers are distinguished by the line having a 10 degree slant.

The 15 parameters per character:
  * `sWeight`      : lineweight of character
  * `offsetx1`     : x offset of the blue arc
  * `offsety1`     : y offset of the blue arc
  * `radius1`      : radius of the blue arc
  * `arcStart1`    : degree to start the blue arc
  * `arcStop1`     : degree to end the blue arc
  * `offsetx2`     : x offset of the orange arc
  * `offsety2`     : y offset of the orange arc
  * `radius2`      : radius of the orange arc
  * `arcStart2`    : degree to start the orange arc
  * `arcStop2`     : degree to end the orange arc
  * `lineXCenter`  : x line centre position
  * `lineYCenter`  : y line centre position
  * `lineLength`   : length of the line
  * `lineRotation` : rotation of the line

The overall project, in spite of a few hiccups trying to get the interpolation to work, went by very smoothly. This I believe was due to the pure simplicity of the letterforms I was producing.