"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Figure_1 = require("./Figure");
var Validations_1 = require("./Validations");
var Constants_1 = require("./Constants");
var HelpingFunctions_1 = require("./HelpingFunctions");
var Wornings_1 = require("./Wornings");
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(color) {
        return _super.call(this, color) || this;
    }
    Queen.prototype.reachablePositions = function (position, board, afterEating) {
        if (!(this instanceof Queen)) {
            console.log(Wornings_1.default.notValidFigure());
            return [];
        }
        var row = position.getRow();
        var column = position.getColumn();
        var reachablePositions = [];
        var reachableLeftRow = row - 1, reachableLeftColumn = column - 1;
        var reachableRightRow = row - 1, reachableRightColumn = 1 + column;
        var reachableLeftDownRow = 1 + row, reachableLeftDownColumn = column - 1;
        var reachableRightDownRow = 1 + row, reachableRightDownColumn = 1 + column;
        var leftIsCaptured = false, rightIsCaptured = false;
        var leftDownIsCaptured = false, rightDownIsCaptured = false;
        var leftAfterEating = false, rightAfterEating = false;
        var leftDownAfterEating = false, rightDownAfterEating = false;
        var leftSameColorFigure = false, rightSameColorFigure = false;
        var leftDownSameColorFigure = false, rightDownSameColorFigure = false;
        while (Validations_1.default.validPlace(reachableLeftRow, reachableLeftColumn) ||
            Validations_1.default.validPlace(reachableRightRow, reachableRightColumn) ||
            Validations_1.default.validPlace(reachableLeftDownRow, reachableLeftDownColumn) ||
            Validations_1.default.validPlace(reachableRightDownRow, reachableRightDownColumn)) {
            if (Validations_1.default.validPlace(reachableLeftRow, reachableLeftColumn)
                && !leftSameColorFigure) {
                if (leftIsCaptured && Validations_1.default.placeIsEmpty(reachableLeftRow, reachableLeftColumn, board)) {
                    leftIsCaptured = false;
                }
                if (!Validations_1.default.placeIsEmpty(reachableLeftRow, reachableLeftColumn, board)) {
                    var figure = board.getBoard()[reachableLeftRow][reachableLeftColumn];
                    if (figure instanceof Figure_1.default) {
                        if (this.hasOppositeColor(figure)) {
                            leftIsCaptured = true;
                            leftAfterEating = true;
                        }
                        else {
                            leftSameColorFigure = true;
                        }
                    }
                }
                else if (!leftIsCaptured && (!afterEating || leftAfterEating)) {
                    HelpingFunctions_1.default.addingPositionToArray(reachableLeftRow, reachableLeftColumn, reachablePositions);
                }
            }
            if (Validations_1.default.validPlace(reachableRightRow, reachableRightColumn)
                && !rightSameColorFigure) {
                if (rightIsCaptured && Validations_1.default.placeIsEmpty(reachableRightRow, reachableRightColumn, board)) {
                    rightIsCaptured = false;
                }
                if (!Validations_1.default.placeIsEmpty(reachableRightRow, reachableRightColumn, board)) {
                    var figure = board.getBoard()[reachableRightRow][reachableRightColumn];
                    if (figure instanceof Figure_1.default) {
                        if (this.hasOppositeColor(figure)) {
                            rightIsCaptured = true;
                            rightAfterEating = true;
                        }
                        else {
                            rightSameColorFigure = true;
                        }
                    }
                }
                else if (!rightIsCaptured && (!afterEating || rightAfterEating)) {
                    HelpingFunctions_1.default.addingPositionToArray(reachableRightRow, reachableRightColumn, reachablePositions);
                }
            }
            if (Validations_1.default.validPlace(reachableLeftDownRow, reachableLeftDownColumn)
                && !leftDownSameColorFigure) {
                if (leftDownIsCaptured && Validations_1.default.placeIsEmpty(reachableLeftDownRow, reachableLeftDownColumn, board)) {
                    leftDownIsCaptured = false;
                }
                if (!Validations_1.default.placeIsEmpty(reachableLeftDownRow, reachableLeftDownColumn, board)) {
                    var figure = board.getBoard()[reachableLeftDownRow][reachableLeftDownColumn];
                    if (figure instanceof Figure_1.default) {
                        if (this.hasOppositeColor(figure)) {
                            leftDownIsCaptured = true;
                            leftDownAfterEating = true;
                        }
                        else {
                            leftDownSameColorFigure = true;
                        }
                    }
                }
                else if (!leftDownIsCaptured && (!afterEating || leftDownAfterEating)) {
                    HelpingFunctions_1.default.addingPositionToArray(reachableLeftDownRow, reachableLeftDownColumn, reachablePositions);
                }
            }
            if (Validations_1.default.validPlace(reachableRightDownRow, reachableRightDownColumn)
                && !rightDownSameColorFigure) {
                if (rightDownIsCaptured && Validations_1.default.placeIsEmpty(reachableRightDownRow, reachableRightDownColumn, board)) {
                    rightDownIsCaptured = false;
                }
                if (!Validations_1.default.placeIsEmpty(reachableRightDownRow, reachableRightDownColumn, board)) {
                    var figure = board.getBoard()[reachableRightDownRow][reachableRightDownColumn];
                    if (figure instanceof Figure_1.default) {
                        if (this.hasOppositeColor(figure)) {
                            rightDownIsCaptured = true;
                            rightDownAfterEating = true;
                        }
                        else {
                            rightDownSameColorFigure = true;
                        }
                    }
                }
                else if (!rightDownIsCaptured && (!afterEating || rightDownAfterEating)) {
                    HelpingFunctions_1.default.addingPositionToArray(reachableRightDownRow, reachableRightDownColumn, reachablePositions);
                }
            }
            reachableLeftRow--, reachableLeftColumn--;
            reachableRightRow--, reachableRightColumn++;
            reachableLeftDownRow++, reachableLeftDownColumn--;
            reachableRightDownRow++, reachableRightDownColumn++;
        }
        return reachablePositions;
    };
    Queen.prototype.toString = function () {
        if (this.getColor() === Constants_1.default.BLACK)
            return '🟥';
        return "⬜️";
    };
    return Queen;
}(Figure_1.default));
exports.default = Queen;
