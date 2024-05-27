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
var Constants_1 = require("./Constants");
var Validations_1 = require("./Validations");
var HelpingFunctions_1 = require("./HelpingFunctions");
var Wornings_1 = require("./Wornings");
var Pown = /** @class */ (function (_super) {
    __extends(Pown, _super);
    function Pown(color) {
        var _this = _super.call(this, color) || this;
        _this.reachablePositionsWithoutEating = [1, -1];
        _this.reachablePositionsAfterEating = [2, -2];
        return _this;
    }
    Pown.prototype.reachablePositions = function (position, board, afterEating) {
        if (!(this instanceof Pown)) {
            console.log(Wornings_1.default.notValidFigure());
            return [];
        }
        var row = position.getRow();
        var column = position.getColumn();
        var reachablePositions = [];
        for (var reachableRow = 0; reachableRow < this.reachablePositionsWithoutEating.length; reachableRow++) {
            for (var reachableColumn = 0; reachableColumn < this.reachablePositionsWithoutEating.length; reachableColumn++) {
                var eatableFigureRow = this.reachablePositionsWithoutEating[reachableRow] + row;
                var eatableFigureColumn = this.reachablePositionsWithoutEating[reachableColumn] + column;
                var figuresNewRow = this.reachablePositionsAfterEating[reachableRow] + row;
                var figuresNewColumn = this.reachablePositionsAfterEating[reachableColumn] + column;
                if (Validations_1.default.validPlace(eatableFigureRow, eatableFigureColumn)) {
                    if (Validations_1.default.placeIsEmpty(eatableFigureRow, eatableFigureColumn, board)
                        && (!afterEating)) {
                        HelpingFunctions_1.default.addingPositionToArray(eatableFigureRow, eatableFigureColumn, reachablePositions);
                    }
                    else if (!Validations_1.default.placeIsEmpty(eatableFigureRow, eatableFigureColumn, board) &&
                        Validations_1.default.validPlace(figuresNewRow, figuresNewColumn) &&
                        Validations_1.default.placeIsEmpty(figuresNewRow, figuresNewColumn, board)) {
                        var figure = board.getBoard()[eatableFigureRow][eatableFigureColumn];
                        if (figure instanceof Figure_1.default) {
                            if (this.hasOppositeColor(figure)) {
                                HelpingFunctions_1.default.addingPositionToArray(figuresNewRow, figuresNewColumn, reachablePositions);
                            }
                        }
                    }
                }
            }
        }
        return reachablePositions;
    };
    Pown.prototype.toString = function () {
        if (this.getColor() === Constants_1.default.BLACK)
            return '🔴';
        return "⚪";
    };
    return Pown;
}(Figure_1.default));
exports.default = Pown;
