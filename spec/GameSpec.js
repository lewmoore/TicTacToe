describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  it("Game initialises with an array", function() {
    expect(game.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Game shows a 3 x 3 board", function() {
    expect(game.displayBoard()).toEqual(1 + " | " + 2 + " | " + 3 + " "
    + '\n' + '-----------\n' + ' ' + 4 + ' | ' + 5 + ' | ' + 6 + '\n' + '-----------\n'
  + ' ' + 7 + ' | ' + 8 + ' | ' + 9);
  });
});
