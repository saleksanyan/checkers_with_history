"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = require("./Move");
var Constants_1 = require("./Constants");
var Figure_1 = require("./Figure");
var Wornings_1 = require("./Wornings");
var Validations = /** @class */ (function () {
    function Validations() {
    }
    Validations.validPlace = function (row, column) {
        return column < Constants_1.default.COLUMNS && row < Constants_1.default.ROWS
            && column >= 0 && row >= 0;
    };
    Validations.placeIsEmpty = function (row, column, board) {
        return board.getBoard()[row][column] === Constants_1.default.EMPTY_PLACE;
    };
    Validations.validMove = function (moveUsingLetters) {
        if (moveUsingLetters.length === Constants_1.default.MOVE_LENGTH) {
            var move = new Move_1.default(moveUsingLetters);
            return move !== undefined && move.getDest() !== undefined
                && move.getStart() !== undefined &&
                move.getStart().getColumn() !== undefined && move.getDest().getColumn() !== undefined
                && !isNaN(move.getStart().getRow()) && !isNaN(move.getDest().getRow());
        }
        return false;
    };
    Validations.validMoveUndo = function (userChoice, board, player) {
        if (userChoice.length !== Constants_1.default.HISTORY_CHECK_LENGTH) {
            return false;
        }
        var stepIndex = userChoice.charAt(1);
        var boardHistory = board.getHistory().getBoardHistory();
        if (userChoice.charAt(0) !== 'u' ||
            !(Validations.isNumber(stepIndex) && (boardHistory.length >= parseInt(stepIndex)))) {
            console.log(Wornings_1.default.notValidHistoryReference());
            return false;
        }
        var chosenBoard = board.getHistory().getBoardHistory()[parseInt(stepIndex) - 1];
        var move = new Move_1.default(board.getHistory().getSteps()[parseInt(stepIndex) - 1]);
        var row = move.getStart().getRow();
        var column = move.getStart().getColumn();
        var figureOnReversedBoard = chosenBoard[row][column];
        if (figureOnReversedBoard instanceof Figure_1.default) {
            return figureOnReversedBoard.getColor() === player;
        }
        return false;
    };
    Validations.isNumber = function (value) {
        return ((value !== '') && !isNaN(Number(value.toString())));
    };
    return Validations;
}());
exports.default = Validations;
