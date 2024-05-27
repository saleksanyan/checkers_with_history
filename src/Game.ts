import Board from './Board';

import { question } from 'readline-sync';
import Constants from './Constants';
import HelpingFunctions from './HelpingFunctions';
import Move from './Move';


import Validations from './Validations';
import Wornings from './Wornings';
import Position from './Position';



class Game{



    private board: Board;

    private player: string;



    private reachablePositionsAfterEating: Position[];


    constructor(){

        this.board = new Board();

        this.player =  Constants.WHITE;

        this.reachablePositionsAfterEating = [];

    }


    play(){


        console.log(Constants.INTRODUCTION);

        let userChoice: string = Constants.EMPTY_PLACE;

        let notValidAction = false;

        let recursiveMove = false;

        while(!this.board.end()){

            console.log( this.board.toString( this.player ) );

            HelpingFunctions.printSteps(this.board);


            HelpingFunctions.getTurn(this.player);

            
            if(HelpingFunctions.reachablePositionsExists(this.reachablePositionsAfterEating)){


                userChoice = question(Constants.ASKING_FOR_RECURSIVE_MOVE ).toLocaleLowerCase().trim();


                recursiveMove = this.reachablePositionsAfterEating.some((pos) =>
                    { return pos.toString() === userChoice.substring(2, userChoice.length)})


            }else{

                userChoice = question(Constants.ASKING_FOR_A_MOVE);

            }


            this.reachablePositionsAfterEating = [];

            userChoice = userChoice.toLocaleLowerCase().trim();

            notValidAction = true;


            if(userChoice === Constants.EXIT){

                break;
            
            }
            else if(userChoice === Constants.NO_MOVE){

                this.player = HelpingFunctions.changePlayer(this.player);
                
            }
            else if(Validations.validMoveUndo(userChoice, this.board, this.player) ){

                HelpingFunctions.undoMove(userChoice, this.board);


            }
            else if(!Validations.validMove(userChoice)){

                Wornings.notValidPosition();

                                    
            }else{

                if(recursiveMove || HelpingFunctions.possibleMove
                    (this.board, userChoice, false,  this.player)){

                    this.reachablePositionsAfterEating = Move.move(userChoice, this.board);

                    notValidAction = false;

                }else{

                    Wornings.notValidMove();

                }

            }


            if((!HelpingFunctions.reachablePositionsExists(this.reachablePositionsAfterEating))
                && (!notValidAction)){

                this.player = HelpingFunctions.changePlayer(this.player);

            }


            recursiveMove = false;

        }

        HelpingFunctions.finalWordsToSayToPlayers(userChoice, this.player);

    }

}

export default Game;