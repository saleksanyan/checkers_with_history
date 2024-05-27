"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("./Board");
var readline_sync_1 = require("readline-sync");
var Constants_1 = require("./Constants");
var HelpingFunctions_1 = require("./HelpingFunctions");
var Move_1 = require("./Move");
var Validations_1 = require("./Validations");
var Wornings_1 = require("./Wornings");
var Game = /** @class */ (function () {
    function Game() {
        this.board = new Board_1.default();
        this.player = Constants_1.default.WHITE;
        this.reachablePositionsAfterEating = [];
    }
    Game.prototype.play = function () {
        debugger;
        console.log(Constants_1.default.INTRODUCTION);
        var userChoice = Constants_1.default.EMPTY_PLACE;
        var notValidAction = false;
        var recursiveMove = false;
        while (!this.board.end()) {
            console.log(this.board.toString(this.player));
            HelpingFunctions_1.default.getTurn(this.player);
            if (HelpingFunctions_1.default.reachablePositionsExists(this.reachablePositionsAfterEating)) {
                userChoice = (0, readline_sync_1.question)(Constants_1.default.ASKING_FOR_RECURSIVE_MOVE).toLocaleLowerCase().trim();
                recursiveMove = this.reachablePositionsAfterEating.some(function (pos) { return pos.toString() === userChoice.substring(2, userChoice.length); });
            }
            else {
                userChoice = (0, readline_sync_1.question)(Constants_1.default.ASKING_FOR_A_MOVE);
            }
            this.reachablePositionsAfterEating = [];
            userChoice = userChoice.toLocaleLowerCase().trim();
            notValidAction = true;
            if (userChoice === Constants_1.default.EXIT) {
                break;
            }
            else if (userChoice === Constants_1.default.NO_MOVE) {
                this.player = HelpingFunctions_1.default.changePlayer(this.player);
            }
            else if (userChoice === Constants_1.default.HISTORY) {
                console.log(this.board.getHistory().showStepHistry());
            }
            else if (Validations_1.default.validMoveUndo(userChoice, this.board, this.player)) {
                HelpingFunctions_1.default.undoMove(userChoice, this.board);
            }
            else if (!Validations_1.default.validMove(userChoice)) {
                Wornings_1.default.notValidPosition();
            }
            else {
                if (recursiveMove || HelpingFunctions_1.default.possibleMove(this.board, userChoice, false)) {
                    this.reachablePositionsAfterEating = Move_1.default.move(userChoice, this.board);
                    notValidAction = false;
                }
                else {
                    Wornings_1.default.notValidMove();
                }
            }
            if ((!HelpingFunctions_1.default.reachablePositionsExists(this.reachablePositionsAfterEating))
                && (!notValidAction)) {
                this.player = HelpingFunctions_1.default.changePlayer(this.player);
            }
            recursiveMove = false;
        }
        HelpingFunctions_1.default.finalWordsToSayToPlayers(userChoice, this.player);
    };
    return Game;
}());
exports.default = Game;
