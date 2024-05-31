import Figure from './Figure';
import HelpingFunctions from './HelpingFunctions';
import History from './History';
import Constants, { BoardConstants, Color } from './Constants';


class Board{


    private matrix: (Figure | Color.EMPTY_PLACE)[][];
    private blackCounter: number;
    private whiteCounter: number;
    private history: History;
    private whosTurn: string;

    constructor(){
        this.matrix = new Array(BoardConstants.ROWS).fill(
            null).map(() => new Array(BoardConstants.COLUMNS));
        this.history = new History();
        HelpingFunctions.constructBoard(this.matrix);
        this.whosTurn = Color.WHITE;
        this.blackCounter = BoardConstants.PAWN_COUNT;
        this.whiteCounter = BoardConstants.PAWN_COUNT;
    }

    decrementWhiteCounter(){
        this.whiteCounter--;
    }


    decrementBlackCounter(){
        this.blackCounter--;
    }

    getWhiteCounter(){
        return this.whiteCounter;
    }

    getBlackCounter(){
        return this.blackCounter;
    }

    getWhosTurn(){
        return this.whosTurn;
    }

    setWhiteCount( count: number ){
        this.whiteCounter = count;
    }


    setBlackCount( count: number ){
        this.blackCounter = count;
    }

    
    setBoard( newBoard: (Figure | Color.EMPTY_PLACE)[][] ){
        this.matrix = newBoard;
    }

    getBoard(){
        return this.matrix;
    }

    getHistory(){
        return this.history;
    }

    setWhosTurn( whosTurn: string){
        this.whosTurn = whosTurn;
    }

    changeTurn(){
        this.whosTurn = (this.whosTurn === Color.WHITE) ? Color.BLACK : Color.WHITE;
    }
    
    end(){
        return this.blackCounter === 0 || this.whiteCounter=== 0;
    }

    toString(){

        let board = '\n';
        for (let index = 0; index < (BoardConstants.COLUMNS * 6 - 4); index++) {
            board += '_';   
        }
        board += '\n';
        for (let row = 0; row < this.matrix.length; row++) {
            let rowNumber = BoardConstants.ROWS-row;
            board+= ' '+rowNumber+' | ';
            
            for (let column = 0; column < this.matrix.length; column++) {
                if(this.matrix[row][column] === ' '){
                    board += '  '+' | ';
                }else{
                    board += this.matrix[row][column]+' | ';
                }
            }

            board+= '\n';
            for (let index = 0; index < (BoardConstants.COLUMNS * 6 - 4); index++) {
                board += '_';   
            }
            board += '\n';
        
        }
        board+= "     ";
        let letters = Constants.COLUMNS_TO_LETTERS;
        for (let index = 0; index < BoardConstants.COLUMNS; index++) {
            board += letters[index].toUpperCase() + "    ";
            
        }
        board+= '\n';
        return board;
    }


}

export default Board;
