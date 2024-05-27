"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var History = /** @class */ (function () {
    function History() {
        this.boardHistory = [];
        this.steps = [];
    }
    History.prototype.getBoardHistory = function () {
        return this.boardHistory;
    };
    History.prototype.getSteps = function () {
        return this.steps;
    };
    History.prototype.addBoardHistory = function (board) {
        this.boardHistory.push(board);
    };
    History.prototype.addStepHistory = function (step) {
        this.steps.push(step);
    };
    History.prototype.setBoardHistory = function (boardHistory) {
        this.boardHistory = boardHistory;
    };
    History.prototype.setStepHistory = function (steps) {
        this.steps = steps;
    };
    History.prototype.changeBoard = function (indexFromBoardHistroy) {
        return this.boardHistory[indexFromBoardHistroy];
    };
    History.prototype.showStepHistry = function () {
        if (this.steps.length === 0) {
            return "\nNo history yet";
        }
        var stepHistory = "\n";
        this.steps.forEach(function (element, index) {
            stepHistory += "".concat(index + 1, ". ").concat(element, " \n");
        });
        return stepHistory;
    };
    return History;
}());
exports.default = History;
