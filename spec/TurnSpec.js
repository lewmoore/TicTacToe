describe("Turn", function() {
  beforeEach(function() {
    turn = new Turn(player);
    player = new Player();
  });

  it("maximum turn count is set to 9", function() {
    expect(turn.maxTurnCount).toEqual(9);
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

  it("Change turn returns the current player", function() {
    expect(turn.changeTurn()).toEqual("O");
  });
});
