function Game(turn) {
  this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.turn = turn
}

Game.prototype.displayBoard = function() {
  return this.board[0] + " | " + this.board[1] + " | " + this.board[2] + " "
  + '\n' + '-----------\n' + ' ' + this.board[3] + ' | ' + this.board[4] + ' | ' + this.board[5]
  + '\n' + '-----------\n' + ' ' + this.board[6] + ' | ' + this.board[7] + ' | ' + this.board[8];
};

Game.prototype.playerMove = function(move){
  this.board[move - 1] = this.turn.currentPlayer
  this.turn.changeTurn()
  return this.displayBoard()

}
