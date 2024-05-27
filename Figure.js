"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Figure = /** @class */ (function () {
    function Figure(color) {
        this.color = color;
    }
    Figure.prototype.getColor = function () {
        return this.color;
    };
    Figure.prototype.hasOppositeColor = function (otherFigure) {
        return (this.color !== otherFigure.color);
    };
    return Figure;
}());
exports.default = Figure;
