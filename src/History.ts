import Constants from "./Constants";
import Figure from "./Figure";
import HelpingFunctions from "./HelpingFunctions";

class History{




    private boardHistory: (Figure | string)[][][];

    private steps: {[move: string]: string }[];





    constructor(){

        this.boardHistory  = [];
        
        this.steps = [];

    }


    getBoardHistory(){

        return this.boardHistory;

    }

    getSteps(){

        return this.steps;

    }


    addBoardHistory( board: (Figure | string)[][] ){

        this.boardHistory.push(board);
    
    }


    addStepHistory( step: string, playerColor: string ){

        this.steps.push({[step]: playerColor});

    }


    setBoardHistory(boardHistory: (Figure | string)[][][]){

        this.boardHistory = boardHistory;

    }


    setStepHistory( steps: {[move: string]: string }[] ){

        this.steps = steps;

    }


    changeBoard( indexFromBoardHistroy: number): (Figure | string)[][]{

        return this.boardHistory[indexFromBoardHistroy];

    }

    showStepHistry(): String{

        if (this.steps.length === 0) {

            return "\nNo history yet";
        
        }

        let stepHistory: string = "\n White         Black\n\n";

        const space = 15; 

        for (let i = 0; i < this.steps.length; i += 2) {

            let whiteMove = "";
            
            let blackMove = "";

            if (i < this.steps.length) { 

                let whiteStep = this.steps[i];
                
                let whiteMoveKey = Object.keys(whiteStep)[0];
                
                whiteMove = `${i+1}. ${whiteMoveKey}`;
                
                whiteMove = whiteMove.padEnd(space, ' ');
            }

            if (i + 1 < this.steps.length) {
                
                let blackStep = this.steps[i + 1];
                
                let blackMoveKey = Object.keys(blackStep)[0];
                
                blackMove = `${i+2}. ${blackMoveKey}`;
            }

            stepHistory += whiteMove + blackMove + '\n';
        }

        return stepHistory;
    }


}

export default History;