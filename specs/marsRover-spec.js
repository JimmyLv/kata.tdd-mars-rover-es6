describe("MarsRover", function () {
  var marsRover;
  beforeEach(function () {
    var currentPosition = Position(0, 0);
    marsRover = new MarsRover(currentPosition, "N");
  });

  describe("#construction", function () {

    it("should be a constructor function", function () {
      expect(typeof MarsRover).toBe("function");
    });

    it("should be a constructor function taking two argument", function () {
      expect(MarsRover.length).toBe(2);
    });

  });

  describe("#moveForward", function () {

    it("should return 00N given MarsRover with 01N received M command", function () {
      marsRover.execute("M");
      expect(marsRover.status).toBe("01N");
    });

    it("should return 00N given MarsRover with 00W received L command", function () {
      marsRover.execute("L");
      expect(marsRover.status).toBe("00W");
    });

  });
});
