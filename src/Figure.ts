import Position from './Position';
import Move from './Move';
import Board from "./Board";


abstract class Figure{


    private color: string;

    

    constructor( color: string){

        
        this.color = color;

    }
    

    getColor(){

        return this.color;

    }


    hasOppositeColor(otherFigure: Figure){

        return (this.color !== otherFigure.color)

    }



    abstract reachablePositions(position: Position, board: Board, afterEating: boolean): Position[];
    



}


export default Figure;