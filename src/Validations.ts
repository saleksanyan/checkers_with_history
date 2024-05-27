import Move from './Move';
import Position from './Position';
import Constants from './Constants';
import Board from './Board';
import Figure from './Figure';
import Wornings from './Wornings';

class Validations{


    public static validPlace(row:number,column:number): boolean{
        return column < Constants.COLUMNS && row < Constants.ROWS
        && column >= 0 && row >= 0;
    }


    public static placeIsEmpty(row: number,column: number, board: Board): boolean{

        return board.getBoard()[row][column] === Constants.EMPTY_PLACE;
        
    }


    public static validMove(moveUsingLetters: string){

        if(moveUsingLetters.length === Constants.MOVE_LENGTH){

            let move = new Move(moveUsingLetters);

            return move !== undefined && move.getDest() !== undefined 
            && move.getStart() !== undefined && 
                move.getStart().getColumn() !== undefined && move.getDest().getColumn() !== undefined 
                && !isNaN(move.getStart().getRow()) && !isNaN(move.getDest().getRow());

        }

        return false;
    }



    public static validMoveUndo( userChoice: string, board: Board, player: string ): boolean{



        if(userChoice.length !== Constants.HISTORY_CHECK_LENGTH){

            return false;

        }


        
        let stepIndex = userChoice.charAt(1);

        let boardHistory = board.getHistory().getBoardHistory();



        if(userChoice.charAt(0) !== 'u' ||
            !(Validations.isNumber(stepIndex) && (boardHistory.length >= parseInt(stepIndex)))){

            
            console.log(Wornings.notValidHistoryReference());

                
            return false;

        }


        let chosenBoard = board.getHistory().getBoardHistory()[parseInt(stepIndex)-1];
        
        let move = new Move(Object.keys(board.getHistory().getSteps()[parseInt(stepIndex)-1])[0]);

        let row = move.getStart().getRow();

        let column = move.getStart().getColumn();

        let figureOnReversedBoard = chosenBoard[row][column];

    
        if(figureOnReversedBoard instanceof Figure){


            return figureOnReversedBoard.getColor() === player;

        }

        return false;

    }




    private static isNumber(value: string): boolean
    {
        return ((value !== '') && !isNaN(Number(value.toString())));
    
    }

}

export default Validations;