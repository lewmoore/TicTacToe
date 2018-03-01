describe("Turn", function() {
  beforeEach(function() {
    turn = new Turn(player);
    player = new Player();
  });

  it("current run defaults to 1", function() {
    expect(turn.currentTurn).toEqual(1);
  });

  it("Turn can change the current turn", function() {
    turn.changeTurn();
    expect(turn.currentTurn).toEqual(2);
  });

  it("sets current player to Player X byt default", function() {
    expect(turn.currentPlayer).toEqual("X");
  });

  it("current player can be changed to player O", function() {
    turn.changeTurn();
    expect(turn.currentPlayer).toEqual("O");
  });
});
