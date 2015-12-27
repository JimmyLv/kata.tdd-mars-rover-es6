describe("MarsRover", function() {
    it("should be a constructor function", function() {
        expect(typeof window.MarsRover).toBe("function");
    });

    it("should be a constructor function taking one argument", function() {
        expect(window.MarsRover.length).toBe(1);
    });
});