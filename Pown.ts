import Figure from "./Figure";
import Position from "./Position";
import Constants from './Constants';


import Board from "./Board";
import Validations from "./Validations";
import HelpingFunctions from "./HelpingFunctions";
import Wornings from "./Wornings";



class Pown extends Figure{



    private readonly reachablePositionsWithoutEating = [1,-1];

    private readonly reachablePositionsAfterEating = [2,-2];

    constructor(color: string){
        super(color);
    }




    reachablePositions(position: Position, board: Board, afterEating: boolean): Position[] {


        if(!(this instanceof Pown)){

            console.log(Wornings.notValidFigure());
            return [];
        
        }


        let row = position.getRow();
        let column = position.getColumn();
        let reachablePositions: Position[] = [];

       
        for(let reachableRow = 0; 
            reachableRow < this.reachablePositionsWithoutEating.length; reachableRow++){

            for(let reachableColumn = 0; 
                reachableColumn < this.reachablePositionsWithoutEating.length; reachableColumn++){
                
                let eatableFigureRow = this.reachablePositionsWithoutEating[reachableRow] + row;
                let eatableFigureColumn = this.reachablePositionsWithoutEating[reachableColumn] + column;

                let figuresNewRow = this.reachablePositionsAfterEating[reachableRow] + row;
                let figuresNewColumn = this.reachablePositionsAfterEating[reachableColumn] + column;


                if(Validations.validPlace(eatableFigureRow, eatableFigureColumn)) {


                    if(Validations.placeIsEmpty(eatableFigureRow,eatableFigureColumn, board) 
                        && (!afterEating)){
        
                        HelpingFunctions.addingPositionToArray( 
                            eatableFigureRow, eatableFigureColumn, reachablePositions
                         );
        
                    }
                    else if(!Validations.placeIsEmpty(eatableFigureRow,eatableFigureColumn, board) && 
                        Validations.validPlace(figuresNewRow,figuresNewColumn) &&
                        Validations.placeIsEmpty(figuresNewRow,figuresNewColumn, board)){

                        let figure = board.getBoard()[eatableFigureRow][eatableFigureColumn];


                        if(figure instanceof Figure){

                            if(this.hasOppositeColor(figure)){

                                HelpingFunctions.addingPositionToArray( 
                                    figuresNewRow, figuresNewColumn, reachablePositions
                                );

                            }
                        }
    
        
                    }
                }
            }
        }

        return reachablePositions;
        
    }
    



    toString(){
        if(this.getColor() === Constants.BLACK)    return '🔴';
        return "⚪";
    }

   
}


export default Pown;