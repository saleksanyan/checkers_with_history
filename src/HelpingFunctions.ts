import Position from "./Position";
import Validations from "./Validations";
import Board from './Board';
import Constants from "./Constants";
import Figure from "./Figure";
import Pown from "./Pown";
import Move from "./Move";
import Queen from "./Queen";



class HelpingFunctions{


    public static addingPositionToArray(figuresNewRow: number, 
        figuresNewColumn: number, reachablePositions: Position[]) {


        let pos = Position.getPositionUsingBoardPlaces(figuresNewColumn, figuresNewRow);
        let destPosition = new Position(pos);
        reachablePositions.push(destPosition);


    }


    public static deleteAllfiguresBetweenGivenPositions
    (start: Position, dest: Position, board: Board): boolean{

        let startRow = start.getRow();
        let startColumn = start.getColumn();
        let destRow = dest.getRow();
        let destColumn = dest.getColumn();
        
        let eat = false;
        
        while(startRow > destRow && startColumn > destColumn){

            startRow--;
            startColumn--;

            if(!Validations.placeIsEmpty(startRow, startColumn, board)){

                HelpingFunctions.decrementCounter(board, startRow, startColumn);

                eat = true;

                board.getBoard()[startRow][startColumn] = Constants.EMPTY_PLACE;
            
            }
        }
               
        while(startRow < destRow && startColumn < destColumn){

            startRow++;
            startColumn++;
             
            if(!Validations.placeIsEmpty(startRow, startColumn, board)){

                HelpingFunctions.decrementCounter(board, startRow, startColumn);

                eat = true;

                board.getBoard()[startRow][startColumn] = Constants.EMPTY_PLACE;
            
            }
               
        }
                
            
        while(startRow < destRow && startColumn > destColumn){
            
            startRow++;
            startColumn--;

            if(!Validations.placeIsEmpty(startRow, startColumn, board)){
                
                HelpingFunctions.decrementCounter(board, startRow, startColumn);

                eat = true;

                board.getBoard()[startRow][startColumn] = Constants.EMPTY_PLACE;
            
            }
        }
              
        while(startRow > destRow && startColumn < destColumn){
        
            startRow--;
            startColumn++;

            if(!Validations.placeIsEmpty(startRow, startColumn, board)){

                HelpingFunctions.decrementCounter(board, startRow, startColumn);


                eat = true;

                board.getBoard()[startRow][startColumn] = Constants.EMPTY_PLACE;
            
            }
        }
    
        return eat;
        

    }

    private static decrementCounter(board: Board, row: number, column:number){

        let figure = board.getBoard()[row][column];

        if(figure instanceof Figure){

            if(figure.getColor() === Constants.BLACK){

                board.decrementBlackCounter();
                
            }else{

                board.decrementWhiteCounter();

            }

        }

    }


    public static changeCountOfFigures( board: Board): void {

        let whites = 0;

        let blacks = 0;

        let checkersBoard = board.getBoard()

        for (let row = 0; row < Constants.ROWS; row++) {


            for (let column = 0; column < Constants.COLUMNS; column++) {
                
                let figure = checkersBoard[row][column];

                if(figure instanceof Figure){

                    if(figure.getColor() === Constants.BLACK){

                        blacks++;
                        
                    }else{
        
                        whites++;
        
                    }
        

                }


            }
            

        }

        board.setBlackCount(blacks);

        board.setWhiteCount(whites);

    }


    public static constructBoard( boardMatrix: (Figure | string)[][]){
        
        for (let row = 0; row < Constants.ROWS; row++) {
            for (let column = 0; column < Constants.COLUMNS; column++) {

                if(( row+column ) % 2 !== 0 && row < 3){

                    boardMatrix[row][column] = new Pown( Constants.BLACK);

                }
                else if(( row+column ) % 2 !== 0 && row > 4 ){

                    boardMatrix[row][column] = new Pown( Constants.WHITE );

                }
                else{

                    boardMatrix[row][column] = Constants.EMPTY_PLACE;

                }

            }
        }

    }



    public static getTurn(player: string){


        if(player === Constants.WHITE){
        
            console.log( Constants.WHITE_TURN );
        
        }
        
        else{ console.log( Constants.BLACK_TURN ); }
    }





    public static possibleMove(board: Board, move: string, afterEating: boolean, playerColor: string): boolean{

        let m = new Move(move);

        let start = m.getStart();

        let dest = m.getDest();

        let checkerboard = board.getBoard();

        let figure = checkerboard[start.getRow()][start.getColumn()];

        let reachablePositions: Position[] = [];

        if(figure instanceof Figure){

            if(figure.getColor() === playerColor){

                reachablePositions = figure.reachablePositions(start, board, afterEating);
            
            }else return false;

        }

        let canMoveToGivenPos = reachablePositions.some((pos) =>
            { return pos.getRow() === dest.getRow() && pos.getColumn() === dest.getColumn()})


        return canMoveToGivenPos;

    }




    public static becomeQueen(row: number, column: number, board: Board){
        let boardPlate = board.getBoard();
        let figure = boardPlate[row][column];


        if(!(figure instanceof Pown)){
            return;
        }
        if( row !== 0 && figure.getColor() === Constants.WHITE ) {

            return;

        }else if(figure.getColor() === Constants.BLACK && row!==7){

            return;
        }

        boardPlate[row][column] = new Queen( figure.getColor() );
    }


    public static swap(newRow: number, newColumn: number, row: number, column: number, board: Board){

        let boardPlate = board.getBoard();
        
        let temp = boardPlate[row][column];
   
        boardPlate[newRow][newColumn] = temp;
   
        boardPlate[row][column] = ' ';
   
        HelpingFunctions.becomeQueen(newRow,newColumn, board);

    }


    public static undoMove(userChoice: string, board: Board): void{


        let history = board.getHistory();

        let stepHistory = history.getSteps();

        let boardHistory = history.getBoardHistory();

        let index = parseInt( userChoice.charAt(1) );

        board.setBoard(history.changeBoard(index-1));

        history.setBoardHistory(boardHistory.slice(0,index));

        history.setStepHistory(stepHistory.slice(0,index-1));

        HelpingFunctions.changeCountOfFigures(board);

    }

    public static deepCopyMatrix(matrix: (Figure | string)[][]): (Figure | string)[][] {
        return matrix.map(row => row.map(item => {
            if (item instanceof Figure) {
            
                return item as Figure;

            } else {

                return item;
            
            }
        }));
    }



    public static changePlayer(player: string): string {
        return (player === Constants.WHITE) ? Constants.BLACK : Constants.WHITE;
    }
    

    public static finalWordsToSayToPlayers(userChoice: string, player: string): void {


        if (userChoice.length === 1) {

            console.log(Constants.BYE);

        }
        else if (player === Constants.WHITE) {

            console.log(Constants.BlACK_WON);

        }
        else {

            console.log(Constants.WHITE_WON);

        }

    }


    public static reachablePositionsExists(reachablePositionsAfterEating: Position[]): boolean {

        return reachablePositionsAfterEating.length !== 0;
   
    }


    public static printSteps(board: Board){

        console.log(board.getHistory().showStepHistry());

    }


}

export default HelpingFunctions;