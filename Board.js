"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelpingFunctions_1 = require("./HelpingFunctions");
var History_1 = require("./History");
var Board = /** @class */ (function () {
    function Board() {
        this.matrix = [[], [], [], [], [], [], [], []];
        this.history = new History_1.default();
        HelpingFunctions_1.default.constructBoard(this.matrix);
        this.blackCounter = 12;
        this.whiteCounter = 12;
        // for (let row = 0; row < 8; row++) {
        //     for (let column = 0; column < this.matrix.length; column++) {
        //         this.matrix[row][column] = ' ';
        //     }
        // }
        // this.matrix[1][1] = new Pown(Position.getPositionUsingBoardPlaces(1,1), Constants.BLACK);
        // this.matrix[0][0] = new Queen(Position.getPositionUsingBoardPlaces(0,0), Constants.WHITE);
        // this.matrix[3][3] = new Pown(Position.getPositionUsingBoardPlaces(3,3), Constants.WHITE);
        // this.matrix[2][4] = new Pown(Position.getPositionUsingBoardPlaces(2,4), Constants.BLACK);
    }
    Board.prototype.decrementWhiteCounter = function () {
        this.whiteCounter--;
    };
    Board.prototype.decrementBlackCounter = function () {
        this.blackCounter--;
    };
    Board.prototype.setBoard = function (newBoard) {
        this.matrix = newBoard;
    };
    Board.prototype.getBoard = function () {
        return this.matrix;
    };
    Board.prototype.getHistory = function () {
        return this.history;
    };
    Board.prototype.end = function () {
        return this.blackCounter === 0 || this.whiteCounter === 0;
    };
    Board.prototype.toString = function (player) {
        var board = '\n___________________________________________\n';
        if (player === 'w') {
            for (var row = 0; row < this.matrix.length; row++) {
                board += ' ' + (8 - row) + ' | ';
                for (var column = 0; column < this.matrix.length; column++) {
                    if (this.matrix[row][column] === ' ') {
                        board += '  ' + ' | ';
                    }
                    else {
                        board += this.matrix[row][column] + ' | ';
                    }
                }
                board += '\n___________________________________________\n';
            }
        }
        else {
            for (var row = this.matrix.length - 1; row >= 0; row--) {
                board += ' ' + (8 - row) + ' | ';
                for (var column = 0; column < this.matrix.length; column++) {
                    if (this.matrix[row][column] === ' ') {
                        board += '  ' + ' | ';
                    }
                    else {
                        board += this.matrix[row][column] + ' | ';
                    }
                }
                board += '\n___________________________________________\n';
            }
        }
        board += '     A    B    C    D    E    F    G    H\n';
        return board;
    };
    return Board;
}());
exports.default = Board;
