"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var Validations_1 = require("./Validations");
var Constants_1 = require("./Constants");
var Figure_1 = require("./Figure");
var Pown_1 = require("./Pown");
var Move_1 = require("./Move");
var Queen_1 = require("./Queen");
var HelpingFunctions = /** @class */ (function () {
    function HelpingFunctions() {
    }
    HelpingFunctions.addingPositionToArray = function (figuresNewRow, figuresNewColumn, reachablePositions) {
        var pos = Position_1.default.getPositionUsingBoardPlaces(figuresNewColumn, figuresNewRow);
        var destPosition = new Position_1.default(pos);
        reachablePositions.push(destPosition);
    };
    HelpingFunctions.deleteAllfiguresBetweenGivenPositions = function (start, dest, board) {
        var startRow = start.getRow();
        var startColumn = start.getColumn();
        var destRow = dest.getRow();
        var destColumn = dest.getColumn();
        var eat = false;
        while (startRow > destRow && startColumn > destColumn) {
            startRow--;
            startColumn--;
            if (!Validations_1.default.placeIsEmpty(startRow, startColumn, board)) {
                HelpingFunctions.decrementCounter(board, startRow, startColumn);
                eat = true;
                board.getBoard()[startRow][startColumn] = Constants_1.default.EMPTY_PLACE;
            }
        }
        while (startRow < destRow && startColumn < destColumn) {
            startRow++;
            startColumn++;
            if (!Validations_1.default.placeIsEmpty(startRow, startColumn, board)) {
                HelpingFunctions.decrementCounter(board, startRow, startColumn);
                eat = true;
                board.getBoard()[startRow][startColumn] = Constants_1.default.EMPTY_PLACE;
            }
        }
        while (startRow < destRow && startColumn > destColumn) {
            startRow++;
            startColumn--;
            if (!Validations_1.default.placeIsEmpty(startRow, startColumn, board)) {
                HelpingFunctions.decrementCounter(board, startRow, startColumn);
                eat = true;
                board.getBoard()[startRow][startColumn] = Constants_1.default.EMPTY_PLACE;
            }
        }
        while (startRow > destRow && startColumn < destColumn) {
            startRow--;
            startColumn++;
            if (!Validations_1.default.placeIsEmpty(startRow, startColumn, board)) {
                HelpingFunctions.decrementCounter(board, startRow, startColumn);
                eat = true;
                board.getBoard()[startRow][startColumn] = Constants_1.default.EMPTY_PLACE;
            }
        }
        return eat;
    };
    HelpingFunctions.decrementCounter = function (board, row, column) {
        if (board.getBoard()[row][column] === Constants_1.default.BLACK) {
            board.decrementBlackCounter();
        }
        else {
            board.decrementWhiteCounter();
        }
    };
    HelpingFunctions.constructBoard = function (boardMatrix) {
        for (var row = 0; row < Constants_1.default.ROWS; row++) {
            for (var column = 0; column < Constants_1.default.COLUMNS; column++) {
                if ((row + column) % 2 !== 0 && row < 3) {
                    boardMatrix[row][column] = new Pown_1.default(Constants_1.default.BLACK);
                }
                else if ((row + column) % 2 !== 0 && row > 4) {
                    boardMatrix[row][column] = new Pown_1.default(Constants_1.default.WHITE);
                }
                else {
                    boardMatrix[row][column] = Constants_1.default.EMPTY_PLACE;
                }
            }
        }
    };
    HelpingFunctions.getTurn = function (player) {
        if (player === Constants_1.default.WHITE) {
            console.log(Constants_1.default.WHITE_TURN);
        }
        else {
            console.log(Constants_1.default.BLACK_TURN);
        }
    };
    HelpingFunctions.possibleMove = function (board, move, afterEating) {
        var m = new Move_1.default(move);
        var start = m.getStart();
        var dest = m.getDest();
        var checkerboard = board.getBoard();
        var figure = checkerboard[start.getRow()][start.getColumn()];
        var reachablePositions = [];
        if (figure instanceof Figure_1.default) {
            reachablePositions = figure.reachablePositions(start, board, afterEating);
        }
        var canMoveToGivenPos = reachablePositions.some(function (pos) { return pos.getRow() === dest.getRow() && pos.getColumn() === dest.getColumn(); });
        return canMoveToGivenPos;
    };
    HelpingFunctions.becomeQueen = function (row, column, board) {
        var boardPlate = board.getBoard();
        var figure = boardPlate[row][column];
        if (!(figure instanceof Pown_1.default)) {
            return;
        }
        if (row !== 0 && figure.getColor() === Constants_1.default.WHITE) {
            return;
        }
        else if (figure.getColor() === Constants_1.default.BLACK && row !== 7) {
            return;
        }
        boardPlate[row][column] = new Queen_1.default(figure.getColor());
    };
    HelpingFunctions.swap = function (newRow, newColumn, row, column, board) {
        var boardPlate = board.getBoard();
        var temp = boardPlate[row][column];
        boardPlate[newRow][newColumn] = temp;
        boardPlate[row][column] = ' ';
        HelpingFunctions.becomeQueen(newRow, newColumn, board);
    };
    HelpingFunctions.undoMove = function (userChoice, board) {
        var history = board.getHistory();
        var stepHistory = history.getSteps();
        var boardHistory = history.getBoardHistory();
        var index = parseInt(userChoice.charAt(1));
        board.setBoard(history.changeBoard(index - 1));
        history.setBoardHistory(boardHistory.slice(0, index));
        history.setStepHistory(stepHistory.slice(0, index));
    };
    HelpingFunctions.deepCopyMatrix = function (matrix) {
        return matrix.map(function (row) { return row.map(function (item) {
            if (item instanceof Figure_1.default) {
                return item;
            }
            else {
                return item;
            }
        }); });
    };
    HelpingFunctions.changePlayer = function (player) {
        return (player === Constants_1.default.WHITE) ? Constants_1.default.BLACK : Constants_1.default.WHITE;
    };
    HelpingFunctions.finalWordsToSayToPlayers = function (userChoice, player) {
        if (userChoice.length === 1) {
            console.log(Constants_1.default.BYE);
        }
        else if (player === Constants_1.default.WHITE) {
            console.log(Constants_1.default.BlACK_WON);
        }
        else {
            console.log(Constants_1.default.WHITE_WON);
        }
    };
    HelpingFunctions.reachablePositionsExists = function (reachablePositionsAfterEating) {
        return reachablePositionsAfterEating.length !== 0;
    };
    return HelpingFunctions;
}());
exports.default = HelpingFunctions;
