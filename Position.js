"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Constants");
var Position = /** @class */ (function () {
    function Position(placeOnBoard) {
        var placeToNum = parseInt(placeOnBoard.charAt(1));
        this.row = 8 - (placeToNum);
        this.column = 0;
        this.setColumnUsingLetters(placeOnBoard.charAt(0));
    }
    Position.prototype.getColumn = function () {
        return this.column;
    };
    Position.prototype.getRow = function () {
        return this.row;
    };
    Position.prototype.setColumn = function (newColumn) {
        this.column = newColumn;
    };
    Position.prototype.setColumnUsingLetters = function (newColumn) {
        this.column = Constants_1.default.LETTERS_TO_COLUMNS[newColumn];
    };
    Position.prototype.setRow = function (newRow) {
        this.row = newRow;
    };
    Position.prototype.getPositionInRowsAndColumns = function () {
        return [this.row, this.column];
    };
    Position.getPositionUsingBoardPlaces = function (column, row) {
        return Constants_1.default.COLUMNS_TO_LETTERS[column] + (8 - row);
    };
    Position.prototype.toString = function () {
        return Constants_1.default.COLUMNS_TO_LETTERS[this.column] + (8 - this.row);
    };
    return Position;
}());
exports.default = Position;
