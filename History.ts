import Figure from "./Figure";

class History{




    private boardHistory: (Figure | string)[][][];

    private steps: string[];





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


    addStepHistory( step: string ){

        this.steps.push(step);

    }


    setBoardHistory(boardHistory: (Figure | string)[][][]){

        this.boardHistory = boardHistory;

    }


    setStepHistory( steps: string[] ){

        this.steps = steps;

    }


    changeBoard( indexFromBoardHistroy: number): (Figure | string)[][]{

        return this.boardHistory[indexFromBoardHistroy];

    }

    showStepHistry(): String{

        if(this.steps.length === 0){
            return "\nNo history yet"
        }

        let stepHistory: String = "\n";

        this.steps.forEach((element, index) => {
            stepHistory += `${index+1}. ${element} \n`;
        });
        
        return stepHistory;
    }


}

export default History;