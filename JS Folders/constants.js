// This is where the different configurations and rules for the game will be stored that won't change such as the size of the board.

// The Tetris board has a width of 20 (row), and height of 10 (col). In the event that this number changes (highly unlikely), the variable type will be changed to "Let".

// Tetris Board
const COL = 10; // Width of the board is 10 columns
const ROW = 20; // Height of the board is 20 rows

// Size of the Blocks
const BLOCK_SIZE = 30; // 

// Arrow Keys - Numbers are taken from the keycodes for left, right, up and down: https://keycode.info/
const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}
Object.freeze(KEY); // This freezes the values for the arrow keys so they can't be changed

