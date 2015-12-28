var MarsRover = function (initialPositionAndOrientation) {
  var result = initialPositionAndOrientation.split("").map(function(x){return parseInt(x)});
  this.x = result[0];
  this.y = result[1];
  this.orientation = result[2];
};

MarsRover.prototype.execute = function (command) {
  if (command === "M") {
    this.status = "0" + (this.y+1) + "N";
  } else if (command === "L") {
    this.status = "00W";
  } else if (command === "R") {
    this.status = "00E";
  }
};
