var DIRECTIONS = {};

DIRECTIONS["N"] = new Vector(0, 1);
DIRECTIONS["E"] = new Vector(1, 0);
DIRECTIONS["S"] = new Vector(0, -1);
DIRECTIONS["W"] = new Vector(-1, 0);

var ORIENTATIONS = ["N", "E", "S", "W"]; // Object.keys(DIRECTIONS);

var MarsRover = function (initialPositionAndOrientation) {
  var result = initialPositionAndOrientation.split("");
  this.x = parseInt(result[0]);
  this.y = parseInt(result[1]);
  this.position = new Position(this.x, this.y);
  this.orientation = result[2];
};

MarsRover.prototype.execute = function (commandString) {

  var commands = commandString.split("");
  for (var i = 0; i < commands.length; i++) {
    var command = commands[i];
    if (command === "M") {
      moveForward.call(this);
    } else if (command === "L") {
      turnLeft.call(this);
    } else if (command === "R") {
      turnRight.call(this);
    }
  }
};

function moveForward() {
  this.position = this.position.shift(DIRECTIONS[this.orientation])
}

function Vector(offsetX, offsetY) {
  this.offsetX = offsetX;
  this.offsetY = offsetY;
}

function turnLeft() {
  this.orientation = ORIENTATIONS[(ORIENTATIONS.indexOf(this.orientation) + 3) % ORIENTATIONS.length];
}

function turnRight() {
  this.orientation = ORIENTATIONS[(ORIENTATIONS.indexOf(this.orientation) + 1) % ORIENTATIONS.length];
}

MarsRover.prototype.status = function () {
  return this.position + this.orientation;
};
