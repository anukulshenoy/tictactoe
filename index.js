//node prompt for command line interaction
var prompt = require('prompt');
prompt.start();

//var player = "1";

//prompt.get(['Player ' + player + ' its your turn: '], function (err, result) {
//    console.log(result);
//});


// game setup
var TictacToe = function () {
    var game = {};
    game.player1 = "PLAYER 1";
    game.player2 = "PLAYER 2";
    game.winner = null;
    game.currentPlayer = null;
    //track the player position
    game.gameover = false;
    //create unique identifiers for each position on the board?
    game.board = [
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ];
    game.renderBoard = function () {
        //render the board in the command line in a user friendly form;
            console.log(this.board[0] + '\n' + this.board[1] + '\n'  + this.board[2])

    }
    game.play = function () {
        var currentPlayer = this.player2;
        var context = this;
        var i = 0;
        function ask () {
            if (currentPlayer === context.player1) {
                currentPlayer = context.player2;
            }
            else {
                currentPlayer = context.player1;
            }
            prompt.get([currentPlayer], function (err, result) {
                console.log(result);
                result = result[currentPlayer].split("");
                var row = parseInt(result[0]);
                var column = parseInt(result[1]);
                if (currentPlayer === context.player1) {
                    context.board[row][column] = "X";
                }
                else {
                    context.board[row][column] = "O";
                }
                context.renderBoard();
                //context.checkWinner(context.board);
                i++;
                game.checkWinner(context.board);
                ask();
            });
            if (i === 9) {
                return;
            }
        }
            ask();

    };
    //see if we have a winner
    game.checkWinner = function(board) {
        //check all rows
        for (var i = 0; i < board.length; i++) {
            var current = board[i][0];
            //check rows
            if (current === board[i][1] && current === board[i][2]) {
                if (current === 'X' || current === 'O') {
                    this.gamover = true;
                    if (current === 'X') {
                        this.winner = this.player1;
                    }
                    else  {
                        this.winner = this.player2;
                    }
                }

            }
            for (var j = 0; j < board[i].length; j++) {
                var col = board[0][j];
                if (col === board[1][j] && col === board[2][j]) {
                    if (col === 'X' || col === 'O') {
                        this.gamover = true;
                        if (col === 'X') {
                            this.winner = this.player1;
                        }
                        else  {
                            this.winner = this.player2;
                        }
                    }
                }
            }
        }
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[2][2] === board[1][1]) {
            var col = board[0][0];
            if (col === 'X' || col === 'O') {
                this.gamover = true;
                if (col === 'X') {
                    this.winner = this.player1;
                }
                else  {
                    this.winner = this.player2;
                }
            }
        }
        if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === board[2][0]) {
            var col = board[1][1];
            if (col === 'X' || col === 'O') {
                this.gamover = true;
                if (col === 'X') {
                    this.winner = this.player1;
                }
                else  {
                    this.winner = this.player2;
                }
            }
        }
         if (this.winner) {
             console.log(this.winner + "WINS");
         }
    };
    return game;
}

var tictactoe = TictacToe();
tictactoe.play();