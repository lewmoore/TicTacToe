describe("Player", function() {
  beforeEach(function() {
    player = new Player();
  });

  it("Player has a player X", function() {
    expect(player.playerX).toEqual("X");
  });
});
