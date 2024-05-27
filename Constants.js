"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.WHITE = 'w';
    Constants.BLACK = 'b';
    Constants.EMPTY_PLACE = ' ';
    Constants.COLUMNS = 8;
    Constants.ROWS = 8;
    Constants.NO_MOVE = 'n';
    Constants.EXIT = 'e';
    Constants.HISTORY = 'h';
    Constants.BYE = '\nBYE!';
    Constants.WHITE_WON = "\nWhite won!";
    Constants.BlACK_WON = "\nBlack won!";
    Constants.MOVE_LENGTH = 4;
    Constants.HISTORY_CHECK_LENGTH = 2;
    Constants.LETTERS_TO_COLUMNS = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
    };
    Constants.COLUMNS_TO_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
    Constants.WHITE_TURN = "\nWhite's turn";
    Constants.BLACK_TURN = "\nBlack's turn";
    Constants.INTRODUCTION = "Hi there! Lets start the game and first will be white's turn. ";
    Constants.ASKING_FOR_A_MOVE = "What do you want to do? "
        + "\nEXAMPLE OF MOVE A3B4, H(history), U( EXAMPLE OF UNDO u1, UNDOING MOVE BY GIVING THEIR INDEX))" +
        "\nIF YOU WANT TO EXIT ENTER E/e: ";
    Constants.ASKING_FOR_RECURSIVE_MOVE = "You have one more step do "
        + "it and it you do not want to make it enter N/n: ";
    return Constants;
}());
exports.default = Constants;
