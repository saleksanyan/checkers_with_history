import Position from './Position';
import Constants, { BoardConstants, Color, GameStatus } from './Constants';
import Board from './Board';
import Figure from './Figure';
import Wornings from './Wornings';
import Move from './Move';

class Validations{

    public static isValidPlace(row:number,column:number): boolean{
        return column < BoardConstants.COLUMNS && row < BoardConstants.ROWS
        && column >= 0 && row >= 0;
    }

    public static isValidPosition(userInput: string, board: Board): boolean{
        if(userInput.length!==2) return false;
        if(!this.isNumber(userInput.charAt(1))) return false;
        let position = new Position(userInput);
        let figure = board.getBoard()[position.getRow()][position.getColumn()];
        let hasSameColor = false;
        if(figure instanceof Figure){
            hasSameColor = figure.getColor() === board.getWhosTurn();
        }
        return hasSameColor && this.isValidPlace(position.getRow(), position.getColumn());
    }


    public static placeIsEmpty(row: number,column: number, board: Board): boolean{

        return board.getBoard()[row][column] === Color.EMPTY_PLACE;
        
    }


    public static notStepBack(figurColor: string, row: number, currentPosition: Position){

        if(figurColor === Color.WHITE){
            return currentPosition.getRow()> row;
        }
        return currentPosition.getRow()< row;

    }

    public static validMoveUndo( userChoice: string, board: Board, player: string ): boolean{



        if(userChoice.length !== BoardConstants.HISTORY_CHECK_LENGTH){

            return false;

        }


        
        let stepIndex = userChoice.charAt(1);

        let boardHistory = board.getHistory().getBoardHistory();



        if(userChoice.charAt(0) !== GameStatus.UNDO ||
            !(Validations.isNumber(stepIndex) && (boardHistory.length >= parseInt(stepIndex)))){

            
            // console.log(Wornings.notValidHistoryReference());

                
            return false;

        }


        let chosenBoard = board.getHistory().getBoardHistory()[parseInt(stepIndex)-1];
        
        let getMoveString = Object.keys(board.getHistory().getSteps()[parseInt(stepIndex)-1])[0];

        let move = new Move
        (new Position(getMoveString.substring(0,2)),new Position(getMoveString.substring(2,4)));

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