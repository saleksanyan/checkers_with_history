class Constants{
    
    public static readonly WHITE = 'w';

    public static readonly BLACK = 'b';

    public static readonly EMPTY_PLACE = ' ';

    public static readonly COLUMNS = 8;

    public static readonly ROWS = 8;

    public static readonly NO_MOVE = 'n'

    public static readonly EXIT = 'e'


    public static readonly BYE = '\nBYE!';


    public static readonly WHITE_WON = "\nWhite won!";


    public static readonly BlACK_WON = "\nBlack won!";


    public static readonly MOVE_LENGTH = 4;

    public static readonly HISTORY_CHECK_LENGTH = 2;


    public static readonly LETTERS_TO_COLUMNS: { [key: string]: number } = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
    };

    public static readonly COLUMNS_TO_LETTERS = [ "a", "b", "c",  "d", "e",  "f", "g",  "h"];

    public static readonly WHITE_TURN = "\nWhite's turn\n";

    public static readonly BLACK_TURN = "\nBlack's turn\n";


    public static readonly INTRODUCTION  = "Hi there! Lets start the game and "+
    "first will be white's turn. "

    
    public static readonly ASKING_FOR_A_MOVE = "What do you want to do? "
    + "\nEXAMPLE OF MOVE A3B4, U( EXAMPLE OF UNDO u1, UNDOING MOVE BY GIVING THEIR INDEX))"+
    "\nIF YOU WANT TO EXIT ENTER E/e: ";


    public static readonly ASKING_FOR_RECURSIVE_MOVE = "You have one more step do " 
    + "it and it you do not want to make it enter N/n: "

}

export default Constants;