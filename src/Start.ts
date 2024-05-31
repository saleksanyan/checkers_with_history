import Board from "./Board";
import Constants, { Color } from "./Constants";
import Figure from "./Figure";
import Move from "./Move";
import Position from "./Position";
import Pawn from "./Pawn";
import Queen from "./Queen";
import Game from "./Game";

class Start{

    constructor(){
        let game = new Game();
        game.play();
    }

}

new Start();



// let board = new Board();

// let matrix = board.getBoard();

// console.log(board.toString())

// for (let row = 0; row < 8; row++) {
//     for (let column = 0; column < matrix.length; column++) {
//         matrix[row][column] = ' ';
//     }
// }


// matrix[4][1] = new Pawn(Color.BLACK, new Position(Position.getPositionUsingBoardPlaces(4,1)));
// matrix[5][0] = new Queen(Color.WHITE, new Position(Position.getPositionUsingBoardPlaces(5,0)));
// matrix[2][6] = new Pawn(Color.WHITE, new Position(Position.getPositionUsingBoardPlaces(2,6)));
// matrix[2][3] = new Pawn(Color.BLACK, new Position(Position.getPositionUsingBoardPlaces(2,3)));
// matrix[6][1] = new Pawn(Color.BLACK, new Position(Position.getPositionUsingBoardPlaces(6,1)));
// matrix[6][3] = new Pawn(Color.BLACK, new Position(Position.getPositionUsingBoardPlaces(6,3)));
// matrix[1][5] = new Pawn(Color.BLACK, new Position(Position.getPositionUsingBoardPlaces(2,5)));




// console.log(board.toString())

// let moves: Move[] = [];
// let rp = (matrix[5][0] as Figure).reachablePositions(board, moves)
// console.log(rp);

// console.log(moves);

// console.log((matrix[5][0] as Figure).move(new Position('f8'), rp, moves, board));


// console.log(board.toString());

// console.log(board.getWhiteCounter() +" "+ board.getBlackCounter());
// console.log(board.getHistory().getSteps());
