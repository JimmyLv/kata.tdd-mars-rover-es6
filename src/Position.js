var Position = function(x, y) {
  this.x = x;
  this.y = y;
};

Position.prototype.shift = function(vector){
  var x = this.x + vector.offsetX;
  var y = this.y + vector.offsetY;
  return new Position(x, y);
};

Position.prototype.toString = function() {
  return this.x.toString() + this.y.toString();
};
