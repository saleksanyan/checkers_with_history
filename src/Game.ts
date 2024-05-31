import Board from './Board';

import { question } from 'readline-sync';
import Constants, { Color, GameStatus } from './Constants';
import HelpingFunctions from './HelpingFunctions';


import Validations from './Validations';
import Wornings from './Wornings';
import Position from './Position';



class Game{
    private board: Board;

    constructor(){
        this.board = new Board();
    }

    play(){
        console.log(GameStatus.INTRODUCTION);
        let userChoice: string = Color.EMPTY_PLACE;
        while(!this.board.end()){
            let playerColor = this.board.getWhosTurn();
            console.log( this.board.toString());
            HelpingFunctions.printSteps(this.board);
            HelpingFunctions.getTurn(playerColor);
            userChoice = question(GameStatus.GET_FIGUR_POSITION).toLowerCase().trim();

            if(userChoice === GameStatus.EXIT){
                break;
            }
            else if(Validations.validMoveUndo(userChoice, this.board, playerColor)){
                HelpingFunctions.undoMove(userChoice, this.board);
            }
            else if(Validations.isValidPosition(userChoice, this.board)){
                let isValidMove = HelpingFunctions.performMove(this.board, userChoice);
                if(isValidMove) this.board.changeTurn();
            }else{
                Wornings.notValidPosition();
            }

            
        }

        HelpingFunctions.finalWordsToSayToPlayers(userChoice, this.board.getWhosTurn());

    }

}

export default Game;