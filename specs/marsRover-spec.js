describe("MarsRover", function () {
  var marsRover;
  beforeEach(function () {
    marsRover = new MarsRover("00N");
  });

  describe("#received single command", function () {
    it("should return 00W given MarsRover with 00N received L command", function () {
      marsRover.execute("L");
      expect(marsRover.status()).toBe("00W");
    });

    it("should return 00E given MarsRover with 00N received R command", function () {
      marsRover.execute("R");
      expect(marsRover.status()).toBe("00E");
    });

    it("should return 01N given MarsRover with 00N received M command", function () {
      marsRover.execute("M");
      expect(marsRover.status()).toBe("01N");
    });

    it("should return 01W given MarsRover with 11W received M command", function () {
      var marsRover = new MarsRover("11W");
      marsRover.execute("M");
      expect(marsRover.status()).toBe("01W");
    });
  });

  describe("#received multiple commands", function () {
    it("should return 10N given MarsRover with 00N received RML command", function () {
      marsRover.execute("RML");
      expect(marsRover.status()).toBe("10N");
    });
  });
});
