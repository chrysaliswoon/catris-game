// This will generate the Board for the game
// The board and pieces are good candidates for a class. We can create a new Board when starting a new game and a new Piece every time a new piece enters the game.

// When we create a new instance of board, we connect it with the canvas context. 

class Board {
    constructor(ctx) {
        this.ctx = ctx; // The this keyword allows us to set and access the properties inside a class.
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard() {
        return Array.from(
            {length: ROW}, () => Array(COL).fill(0)
        );
    }
}


