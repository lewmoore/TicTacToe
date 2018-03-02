describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  it("Game initialises with an array", function() {
    expect(game.board).toEqual([]);
  });
});
