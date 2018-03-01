function Turn(player) {
  this.currentTurn = 1;
  this.currentPlayer = player.playerX;
}

Turn.prototype.changeTurn = function() {
  this.currentTurn += 1;
};

Turn.prototype.changePlayer = function(player) {
  if (this.currentTurn % 2 !== 0) {
    this.currentPlayer = player.playerX;
  } else {
    this.currentPlayer = player.playerO;
  }
};
