import Figure from "./Figure";
import Validations from "./Validations";
import Position from "./Position";

import Constants from './Constants';
import Board from "./Board";
import HelpingFunctions from "./HelpingFunctions";
import Wornings from './Wornings';


class Queen extends Figure{




    constructor(color: string ){
        super(color);
    }

    



    reachablePositions(position: Position, board: Board, afterEating: boolean): Position[] {
        
        if(!(this instanceof Queen))
        {
            console.log(Wornings.notValidFigure());
            return [];
        }

        let row = position.getRow();
        let column = position.getColumn();
        let reachablePositions: Position[] = [];


        let reachableLeftRow = row-1, reachableLeftColumn = column-1;
        let reachableRightRow = row-1, reachableRightColumn = 1+column;

        let reachableLeftDownRow = 1+row, reachableLeftDownColumn = column-1;
        let reachableRightDownRow = 1+row, reachableRightDownColumn = 1+column;
        
        let leftIsCaptured = false, rightIsCaptured = false;
        let leftDownIsCaptured = false, rightDownIsCaptured = false;

        let leftAfterEating = false, rightAfterEating = false;
        let leftDownAfterEating = false, rightDownAfterEating = false;

        let leftSameColorFigure = false, rightSameColorFigure = false;
        let leftDownSameColorFigure = false, rightDownSameColorFigure = false;

        while(Validations.validPlace(reachableLeftRow, reachableLeftColumn) || 
            Validations.validPlace(reachableRightRow, reachableRightColumn) ||
            Validations.validPlace(reachableLeftDownRow, reachableLeftDownColumn) ||
            Validations.validPlace(reachableRightDownRow, reachableRightDownColumn)){

                if(Validations.validPlace(reachableLeftRow, reachableLeftColumn) 
                    && !leftSameColorFigure){
                    

                    if(leftIsCaptured && Validations.placeIsEmpty
                        (reachableLeftRow, reachableLeftColumn, board)){
                        leftIsCaptured = false;
                    }


                    if(!Validations.placeIsEmpty(reachableLeftRow, reachableLeftColumn, board)){

                        let figure = board.getBoard()[reachableLeftRow][reachableLeftColumn];


                        if(figure instanceof Figure){

                            if(this.hasOppositeColor(figure)){

                                leftIsCaptured = true;
                                leftAfterEating = true;

                            }else{

                                leftSameColorFigure = true;

                            }
                        }
                    }
                    else if(!leftIsCaptured && (!afterEating || leftAfterEating)){
                        


                        HelpingFunctions.addingPositionToArray( 
                            reachableLeftRow, reachableLeftColumn, reachablePositions
                        );
                    
                    }
                }
                if(Validations.validPlace(reachableRightRow, reachableRightColumn)
                     && !rightSameColorFigure){

                    if(rightIsCaptured && Validations.placeIsEmpty
                        (reachableRightRow, reachableRightColumn, board)){
                        
                        rightIsCaptured = false;

                    }

                    if(!Validations.placeIsEmpty(reachableRightRow, reachableRightColumn, board)){

                        let figure = board.getBoard()[reachableRightRow][reachableRightColumn];


                        if(figure instanceof Figure){

                            if(this.hasOppositeColor(figure)){

                                rightIsCaptured = true;
                                rightAfterEating = true;
                            }else{

                                rightSameColorFigure = true;

                            }
                        }
                    
                    }
                    else if (!rightIsCaptured && (!afterEating || rightAfterEating) ){

                        HelpingFunctions.addingPositionToArray( 
                            reachableRightRow, reachableRightColumn, reachablePositions
                        );

                    }
                }
                if(Validations.validPlace(reachableLeftDownRow, reachableLeftDownColumn) 
                    && !leftDownSameColorFigure){

                    if(leftDownIsCaptured && Validations.placeIsEmpty
                        (reachableLeftDownRow, reachableLeftDownColumn, board)){
                        
                        leftDownIsCaptured = false;

                    }

                    if(!Validations.placeIsEmpty
                        (reachableLeftDownRow, reachableLeftDownColumn, board)){
                        
                        let figure = board.getBoard()[reachableLeftDownRow][reachableLeftDownColumn];

                        if(figure instanceof Figure){

                            if(this.hasOppositeColor(figure)){

                                leftDownIsCaptured = true;
                                leftDownAfterEating = true;
                            }else{

                                leftDownSameColorFigure = true;

                            }
                        }

                    }
                    else if(!leftDownIsCaptured && (!afterEating || leftDownAfterEating)){

                        HelpingFunctions.addingPositionToArray( 
                            reachableLeftDownRow, reachableLeftDownColumn, reachablePositions
                        );

                    }
                }
                if(Validations.validPlace(reachableRightDownRow, reachableRightDownColumn) 
                    && !rightDownSameColorFigure){

                    if(rightDownIsCaptured && Validations.placeIsEmpty
                        (reachableRightDownRow, reachableRightDownColumn, board)){
                        
                        rightDownIsCaptured = false;

                    }

                    if(!Validations.placeIsEmpty
                        (reachableRightDownRow, reachableRightDownColumn, board)){
                        
                        let figure = board.getBoard()[reachableRightDownRow][reachableRightDownColumn];


                        if(figure instanceof Figure){

                            if(this.hasOppositeColor(figure)){
            
                                rightDownIsCaptured = true;

                                rightDownAfterEating = true;
                            }else{

                                rightDownSameColorFigure = true;

                            }
                        }

                    }
                    else if(!rightDownIsCaptured && (!afterEating || rightDownAfterEating)){

                        HelpingFunctions.addingPositionToArray( 
                            reachableRightDownRow, reachableRightDownColumn, reachablePositions
                        );

                    }
                }

                reachableLeftRow--, reachableLeftColumn--;

                reachableRightRow--, reachableRightColumn++;

                reachableLeftDownRow++, reachableLeftDownColumn--;

                reachableRightDownRow++, reachableRightDownColumn++;


        }

        return reachablePositions;

    }

    
    toString(){
        if(this.getColor() === Constants.BLACK) return '🟥';
        return "⬜️";
    }

}

export default Queen;