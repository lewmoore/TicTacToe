describe("Turn", function() {
  beforeEach(function() {
    turn = new Turn();
  });

  it("current run defaults to 1", function() {
    expect(turn.currentTurn).toEqual(1);
  });

  it("Turn can change the current turn", function() {
    turn.changeTurn();
    expect(turn.currentTurn).toEqual(2);
  });
});
