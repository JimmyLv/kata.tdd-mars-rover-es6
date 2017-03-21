var Position = function (x, y) {
  this.x = x;
  this.y = y;

  this.shift = function (vector) {
    var x = this.x + vector.offsetX;
    var y = this.y + vector.offsetY;
    return new Position(x, y);
  };

  this.toString = function () {
    return this.x.toString() + this.y.toString();
  };
};
