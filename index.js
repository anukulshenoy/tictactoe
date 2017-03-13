var prompt = require('prompt');

prompt.start();

var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
console.log(board);

//var TictacToe = function () {
//    var game = {};
//    game.player1 = null;
//    game.player2 = null;
//    game.currentPlayer = null;
//    game.board = [
//        [0,0,0],
//        [0,0,0],
//        [0,0,0]
//    ];
//    game.checkWinner = function(board) {
//        //check all rows
//        for (var i = 0; i < board.length; i++) {
//                var current = board[i][0];
//            if (current === board[i][1] && current === board[i])
//        }
//    }
//}