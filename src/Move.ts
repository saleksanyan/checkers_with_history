import Board from './Board';
import Position from './Position';
import Pown from './Pown';
import Queen from './Queen';
import Constants from './Constants';
import HelpingFunctions from './HelpingFunctions';
import Figure from './Figure';

class Move{


    private start: Position;
    private dest: Position;

    
    constructor( move: string ){

        this.start = new Position(move.substring(0,2));

        this.dest = new Position(move.substring(2,4));

    }

    getStart(){

        return this.start;
    
    }

    getDest(){
    
        return this.dest;
    
    }

    
    setDest(newDest: Position){
    
        this.dest.setRow(newDest.getRow());

        this.dest.setColumn(newDest.getColumn());
    
    }


    setStart(newStart: Position){

        this.start.setRow(newStart.getRow());

        this.start.setColumn(newStart.getColumn());

    }


    

    public static move( move: string, board: Board ): Position[] {

        let m = new Move(move);

        let row = m.getStart().getRow();
        let column = m.getStart().getColumn();

        let newRow = m.getDest().getRow();
        let newColumn = m.getDest().getColumn();



        let startPos = m.getStart();
        let destPos = m.getDest();

        let boardHistory = board.getHistory();


        boardHistory.addBoardHistory(HelpingFunctions.deepCopyMatrix(board.getBoard()));

        
        let eat = HelpingFunctions.deleteAllfiguresBetweenGivenPositions(startPos, destPos, board);


        HelpingFunctions.swap(newRow, newColumn, row, column, board);


        let figure = board.getBoard()[newRow][newColumn];

        if(figure instanceof Figure){

            boardHistory.addStepHistory( move, figure.getColor() );

            if(eat){

                return figure.reachablePositions(destPos, board, true);

            }

        }
            
        return [];
    
    }    


}

export default Move;
