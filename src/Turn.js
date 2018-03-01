function Turn(player) {
  this.currentTurn = 1;
  this.currentPlayer = player.playerX;
}

Turn.prototype.changeTurn = function() {
  this.currentTurn += 1;
};
