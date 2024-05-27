"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var Start = /** @class */ (function () {
    function Start() {
        var game = new Game_1.default();
        game.play();
    }
    return Start;
}());
var start = new Start();
