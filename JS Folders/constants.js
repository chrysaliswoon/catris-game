// This is where the different configurations and rules for the game will be stored that won't change such as the size of the board.

// The Tetris board has a width of 20 (row), and height of 10 (col). In the event that this number changes (highly unlikely), the variable type will be changed to "Let".

// Tetris Board
const COL = 10; // Width of the board is 10 columns
const ROW = 20; // Height of the board is 20 rows

// Size of the Blocks
const BLOCK_SIZE = 30; // 

// Drawing the Canvas // 
// The document object provides a programmable interface for the HTML document. 
// The document has a tree-like structure and is often referred to as the DOM (Document Object Model).
const canvas = document.getElementById('board'); // We can call the getElementById method to access elements from the DOM.
const ctx = canvas.getContext('2d'); // The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode.

// Calculate the size of the Tetris Board (Canvas) from our constants.js // 
ctx.canvas.width = COL * BLOCK_SIZE;
ctx.canvas.height = ROW * BLOCK_SIZE;

// Scales our Tetromino Blocks //
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// Arrow Keys - Numbers are taken from the keycodes for left, right, up and down: https://keycode.info/
const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}
Object.freeze(KEY); // This freezes the values for the arrow keys so they can't be changed

