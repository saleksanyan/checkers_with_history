import Constants from './Constants';
import Figure from './Figure';

import HelpingFunctions from './HelpingFunctions';
import Position from './Position';
import Pown from './Pown';
import Queen from './Queen';

import History from './History';


class Board{


    private matrix: (Figure | string)[][];

    private blackCounter: number;
    
    private whiteCounter: number;
    
    private history: History;




    constructor(){

        this.matrix = [[],[],[],[],[],[],[],[]];

        this.history = new History();

        HelpingFunctions.constructBoard(this.matrix);



        this.blackCounter = 12;
        this.whiteCounter = 12;


        
        // for (let row = 0; row < 8; row++) {
        //     for (let column = 0; column < this.matrix.length; column++) {
        //         this.matrix[row][column] = ' ';
        //     }
        // }
        // this.matrix[1][1] = new Pown(Position.getPositionUsingBoardPlaces(1,1), Constants.BLACK);
        // this.matrix[0][0] = new Queen(Position.getPositionUsingBoardPlaces(0,0), Constants.WHITE);
        // this.matrix[3][3] = new Pown(Position.getPositionUsingBoardPlaces(3,3), Constants.WHITE);
        // this.matrix[2][4] = new Pown(Position.getPositionUsingBoardPlaces(2,4), Constants.BLACK);
       

    }

    decrementWhiteCounter(){

        this.whiteCounter--;

    }


    decrementBlackCounter(){

        this.blackCounter--;

    }


    setBoard( newBoard: (string | Figure)[][] ){
        this.matrix = newBoard;
    }

    getBoard(){

        return this.matrix;

    }

    getHistory(){
        return this.history;
    }

    
    end(){

        return this.blackCounter === 0 || this.whiteCounter=== 0;

    }

    toString(player: string){
        let board = '\n___________________________________________\n';
        if(player === 'w'){
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
        }else{
            for (let row = this.matrix.length-1; row >= 0 ; row--) {
                
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
        }
        board+= '     A    B    C    D    E    F    G    H\n';
        return board;
    }


}

export default Board;
