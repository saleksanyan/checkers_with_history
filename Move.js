"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var HelpingFunctions_1 = require("./HelpingFunctions");
var Figure_1 = require("./Figure");
var Move = /** @class */ (function () {
    function Move(move) {
        this.start = new Position_1.default(move.substring(0, 2));
        this.dest = new Position_1.default(move.substring(2, 4));
    }
    Move.prototype.getStart = function () {
        return this.start;
    };
    Move.prototype.getDest = function () {
        return this.dest;
    };
    Move.prototype.setDest = function (newDest) {
        this.dest.setRow(newDest.getRow());
        this.dest.setColumn(newDest.getColumn());
    };
    Move.prototype.setStart = function (newStart) {
        this.start.setRow(newStart.getRow());
        this.start.setColumn(newStart.getColumn());
    };
    Move.move = function (move, board) {
        var m = new Move(move);
        var row = m.getStart().getRow();
        var column = m.getStart().getColumn();
        var newRow = m.getDest().getRow();
        var newColumn = m.getDest().getColumn();
        var startPos = m.getStart();
        var destPos = m.getDest();
        var boardHistory = board.getHistory();
        boardHistory.addBoardHistory(HelpingFunctions_1.default.deepCopyMatrix(board.getBoard()));
        boardHistory.addStepHistory(move);
        var eat = HelpingFunctions_1.default.deleteAllfiguresBetweenGivenPositions(startPos, destPos, board);
        HelpingFunctions_1.default.swap(newRow, newColumn, row, column, board);
        var figure = board.getBoard()[newRow][newColumn];
        if (figure instanceof Figure_1.default) {
            if (eat) {
                return figure.reachablePositions(destPos, board, true);
            }
        }
        return [];
    };
    return Move;
}());
exports.default = Move;
