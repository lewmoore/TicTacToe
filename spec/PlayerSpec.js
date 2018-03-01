describe("Player", function() {
  beforeEach(function() {
    player = new Player();
  });

  it("Player has a player X", function() {
    expect(player.playerX).toEqual("X");
  });

  it("Player has a player O", function() {
    expect(player.playerO).toEqual("O");
  });

  it("Player can make a move", function() {
    expect(player.move("A1")).toEqual("A1");
  });
});
