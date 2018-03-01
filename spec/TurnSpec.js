describe("Turn", function() {
  beforeEach(function() {
    turn = new Turn();
  });

  it("current run defaults to 1", function() {
    expect(turn.currentTurn).toEqual(1);
  });
});
