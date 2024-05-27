"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wornings = /** @class */ (function () {
    function Wornings() {
    }
    Wornings.notValidMove = function () { console.log("\nThis is not a valid move!"); };
    Wornings.notValidFigure = function () { console.log("\nNot valid figure for your move!"); };
    Wornings.notValidPosition = function () { console.log("\nNot valid position!"); };
    Wornings.notValidHistoryReference = function () { console.log("\nNot valid history reference!"); };
    return Wornings;
}());
exports.default = Wornings;
