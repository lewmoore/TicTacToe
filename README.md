# TicTacToe

### Summary

This is a short tech test that is designed to emulate a game of TicTacToe written in Javascript and tested with Jasmine

### Instructions

This game has been designed to be used in the console. In order to play this game, create a new game with `game = new Game(turn = new Turn(player = new Player))`. This generates a new game, with two players, X and O.

You can then take it in turns to add an X or O to the board with the command `game.playerMove(1)` with the argument being the square you want to play.

### Further Work

This tech test is a work in progress and if I had more time to complete this I would include win conditions within the Game constructor function. This would consist of a prototype function that would identify if the `this.board` array has three consecutive elements of X or O.
