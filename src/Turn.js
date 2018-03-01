function Turn() {
  this.currentTurn = 1;
}

Turn.prototype.changeTurn = function() {
  this.currentTurn += 1;
};
