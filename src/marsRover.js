var MarsRover = function (position, orientation) {
  this.position = position;
  this.orientation = orientation;
};

MarsRover.prototype.execute = function (command) {
  if (command === "M") {
    this.status = "01N";
  } else if (command === "L") {
    this.status = "00W";
  }
};
