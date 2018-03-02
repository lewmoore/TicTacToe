function Game() {
  this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

Game.prototype.displayBoard = function() {
  return 1 + " | " + 2 + " | " + 3 + " "
  + '\n' + '-----------\n' + ' ' + 4 + ' | ' + 5 + ' | ' + 6
  + '\n' + '-----------\n' + ' ' + 7 + ' | ' + 8 + ' | ' + 9;
};
