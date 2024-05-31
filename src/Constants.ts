export enum Color {
	WHITE = "w",
	BLACK = "b",
	EMPTY_PLACE = " ",
}

export enum GameStatus {
	EXIT = "e",
	BYE = "\nBYE!",
	WHITE_WON = "\nWhite won!",
	BLACK_WON = "\nBlack won!",
	WHITE_TURN = "\nWhite's turn\n",
	BLACK_TURN = "\nBlack's turn\n",
	INTRODUCTION = "Hi there! Let's start the game and first will be white's turn.",
	GET_FIGUR_POSITION = "Enter the figure's position that you want to play with: ",
	GET_NEXT_STEP = "Choose position that you want to go: ",
    UNDO = 'u',
}

export enum BoardConstants {
	COLUMNS = 8,
	ROWS = 8,
	MOVE_LENGTH = 4,
	HISTORY_CHECK_LENGTH = 2,
	PAWN_COUNT = 12
}

export class Constants {
    public static readonly Color = Color;
    public static readonly GameStatus = GameStatus;
    public static readonly BoardConstants = BoardConstants;

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

    public static readonly COLUMNS_TO_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
}

export default Constants;
