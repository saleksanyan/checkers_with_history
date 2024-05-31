import Position from "./Position";
import Validations from "./Validations";
import Board from './Board';
import Constants, { BoardConstants, Color, GameStatus } from "./Constants";
import Figure from "./Figure";
import Pawn from "./Pawn";
import Queen from "./Queen";
import Move from "./Move";
import { question } from 'readline-sync';
import Wornings from "./Wornings";



class HelpingFunctions{

    public static performMove(board: Board, userChoice: string): boolean{
        let position = new Position(userChoice);
        let wasMoved = false;
        let figure = board.getBoard()[position.getRow()][position.getColumn()];
        if(figure instanceof Figure){
            let moves: Move[] = []
            let reachablePositions = figure.reachablePositions(board, moves);
            console.log(reachablePositions);
            userChoice = question(GameStatus.GET_NEXT_STEP);
            let nextStep = new Position(userChoice);
            debugger;
            wasMoved = figure.move(nextStep, reachablePositions, moves, board);
            if(!wasMoved){
                Wornings.notValidMove();
            }
        }
        return wasMoved;
    }


    public static findPath(reachableMoves: Move[], nextPosition: Position, currentPosition: Position): Move[]{
        let startIndex: number = 0;
        let endIndex: number = 0;

        for (let positionIndex = 0; positionIndex < reachableMoves.length; positionIndex++) {
            let pos = reachableMoves[positionIndex];

            if(pos.getDest().getColumn() === nextPosition.getColumn() 
                && pos.getDest().getRow() === nextPosition.getRow()){
            
                    break;
            
            }
            endIndex++;
        }
        startIndex = endIndex;
        for (let positionIndex = endIndex; positionIndex >= 0; positionIndex--) {
            let pos = reachableMoves[positionIndex];
            if(pos.getStart().getColumn() === currentPosition.getColumn() 
                && pos.getStart().getRow() === currentPosition.getRow()){
        
                    break;
            
            }
            startIndex--;
        }

        return reachableMoves.slice(startIndex, ( endIndex+1));

    }



    public static isReachablePosition(position: Position, reachablePositions: Position[]){
        return reachablePositions.some((pos) =>
            pos.getColumn() === position.getColumn() && pos.getRow() === position.getRow()
        ) 
    }



    public static wasNotRepeatedStap(allDestinations: Position[], figuresNewRow: number,
        figuresNewColumn: number): boolean{
        return !allDestinations.some((pos) =>
        pos.getColumn() === figuresNewColumn && pos.getRow() === figuresNewRow
    )
    }
    public static addingPositionToArray(figuresNewRow: number, 
        figuresNewColumn: number, reachablePositions: Position[]): Position {

        let pos = Position.getPositionUsingBoardPlaces(figuresNewRow, figuresNewColumn);
        let destPosition = new Position(pos);
        reachablePositions.push(destPosition);
        return new Position(pos);

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

                board.getBoard()[startRow][startColumn] = Color.EMPTY_PLACE;
            
            }
        }
               
        while(startRow < destRow && startColumn < destColumn){

            startRow++;
            startColumn++;
             
            if(!Validations.placeIsEmpty(startRow, startColumn, board)){

                HelpingFunctions.decrementCounter(board, startRow, startColumn);

                eat = true;

                board.getBoard()[startRow][startColumn] = Color.EMPTY_PLACE;
            
            }
               
        }
                
            
        while(startRow < destRow && startColumn > destColumn){
            
            startRow++;
            startColumn--;

            if(!Validations.placeIsEmpty(startRow, startColumn, board)){
                
                HelpingFunctions.decrementCounter(board, startRow, startColumn);

                eat = true;

                board.getBoard()[startRow][startColumn] = Color.EMPTY_PLACE;
            
            }
        }
              
        while(startRow > destRow && startColumn < destColumn){
        
            startRow--;
            startColumn++;

            if(!Validations.placeIsEmpty(startRow, startColumn, board)){

                HelpingFunctions.decrementCounter(board, startRow, startColumn);


                eat = true;

                board.getBoard()[startRow][startColumn] = Color.EMPTY_PLACE;
            
            }
        }
    
        return eat;
        

    }

    private static decrementCounter(board: Board, row: number, column:number){

        let figure = board.getBoard()[row][column];

        if(figure instanceof Figure){

            if(figure.getColor() === Color.BLACK){

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

        for (let row = 0; row < BoardConstants.ROWS; row++) {


            for (let column = 0; column < BoardConstants.COLUMNS; column++) {
                
                let figure = checkersBoard[row][column];

                if(figure instanceof Figure){

                    if(figure.getColor() === Color.BLACK){

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
        
        for (let row = 0; row < BoardConstants.ROWS; row++) {
            for (let column = 0; column < BoardConstants.COLUMNS; column++) {
debugger;
                if(( row+column ) % 2 !== 0 && row < (BoardConstants.ROWS-2)/2){

                    boardMatrix[row][column] = new Pawn( Color.BLACK,
                        new Position(Position.getPositionUsingBoardPlaces(row,column)));

                }
                else if(( row+column ) % 2 !== 0 && row > (BoardConstants.ROWS)/2 ){

                    boardMatrix[row][column] = new Pawn( Color.WHITE, 
                        new Position(Position.getPositionUsingBoardPlaces(row,column)));

                }
                else{

                    boardMatrix[row][column] = Color.EMPTY_PLACE;

                }

            }
        }

    }



    public static getTurn(player: string){


        if(player === Color.WHITE){
        
            console.log( GameStatus.WHITE_TURN );
        
        }
        
        else{ console.log( GameStatus.BLACK_TURN ); }
    }


    public static becomeQueen(row: number, column: number, board: Board){
        let boardPlate = board.getBoard();
        let figure = boardPlate[row][column];


        if(!(figure instanceof Pawn)){
            return;
        }
        if( row !== 0 && figure.getColor() === Color.WHITE ) {

            return;

        }else if(figure.getColor() === Color.BLACK && row!==7){

            return;
        }

        boardPlate[row][column] = new Queen( figure.getColor(), 
        new Position(Position.getPositionUsingBoardPlaces(row,column)));
    }


    public static swap(newRow: number, newColumn: number, row: number, column: number, board: Board){

        let boardPlate = board.getBoard();
        
        let temp = boardPlate[row][column];
   
        boardPlate[newRow][newColumn] = temp;
   
        boardPlate[row][column] = Color.EMPTY_PLACE;
   
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

    public static deepCopyMatrix(board: (Figure | Color.EMPTY_PLACE)[][]): (Figure | Color.EMPTY_PLACE)[][] {
        return board.map(row => row.map(item => {
            if (item instanceof Queen) {
                return new Queen(item.getColor(), item.getCurrentPosition());
            }else if(item instanceof Pawn) {
                return new Pawn(item.getColor(), item.getCurrentPosition());
            }else {
                return item;
            }
        }));

    }


    public static finalWordsToSayToPlayers(userChoice: string, player: string): void {
        if (userChoice.length === 1) {
            console.log(GameStatus.BYE);
        }
        else if (player === Color.WHITE) {
            console.log(GameStatus.BLACK_WON);
        }
        else {
            console.log(GameStatus.WHITE_WON);
        }
    }

    public static printSteps(board: Board){
        console.log(board.getHistory().showStepHistory());
    }


}

export default HelpingFunctions;