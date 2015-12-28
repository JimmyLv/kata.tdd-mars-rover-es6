var MarsRover = function (initialPositionAlienation) {
  this.initialPositionAlienation = initialPositionAlienation;
};

MarsRover.prototype.execute = function (command) {
  if (command === "M") {
    this.status = "0" + (parseInt(this.initialPositionAlienation.split("")[1])+1) + "N";
  } else if (command === "L") {
    this.status = "00W";
  } else if (command === "R") {
    this.status = "00E";
  }
};
