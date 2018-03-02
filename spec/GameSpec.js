describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  it("Game initialises with an array", function() {
    expect(game.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });


});
