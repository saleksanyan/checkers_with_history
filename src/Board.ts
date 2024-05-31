import Figure from './Figure';
import HelpingFunctions from './HelpingFunctions';
import History from './History';
import { Color } from './Constants';


class Board{


    private matrix: (Figure | Color.EMPTY_PLACE)[][];
    private blackCounter: number;
    private whiteCounter: number;
    private history: History;
    private whosTurn: string;

    constructor(){
        this.matrix = [[],[],[],[],[],[],[],[]];
        this.history = new History();
        HelpingFunctions.constructBoard(this.matrix);
        this.whosTurn = Color.WHITE;
        this.blackCounter = 12;
        this.whiteCounter = 12;
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
        let board = '\n___________________________________________\n';
        // if(this.getWhosTurn() === Color.WHITE){
            for (let row = 0; row < this.matrix.length; row++) {
                
                board+= ' '+(8-row)+' | ';
                for (let column = 0; column < this.matrix.length; column++) {
                    if(this.matrix[row][column] === ' '){
                        board += '  '+' | ';
                    }else{
                        board += this.matrix[row][column]+' | ';
                    }
                }
                board += '\n___________________________________________\n';
            }
        // }else{
        //     for (let row = this.matrix.length-1; row >= 0 ; row--) {
                
        //         board+= ' '+(8-row)+' | ';
        //         for (let column = 0; column < this.matrix.length; column++) {
        //             if(this.matrix[row][column] === ' '){
        //                 board += '  '+' | ';
        //             }else{
        //                 board += this.matrix[row][column]+' | ';
        //             }
        //         }
        //         board += '\n___________________________________________\n';
        //     }
        // }
        board+= '     A    B    C    D    E    F    G    H\n';
        return board;
    }


}

export default Board;
