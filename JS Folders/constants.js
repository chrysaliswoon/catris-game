// This is where the different configurations and rules for the game will be stored that won't change such as the size of the board.

// The Tetris board has a width of 20 (row), and height of 10 (col). In the event that this number changes (highly unlikely), the variable type will be changed to "Let".
// Tetris Board
const COL = 10; // Width of the board is 10 columns
const ROW = 20; // Height of the board is 20 rows
const BLOCK_SIZE = 30; // Size of the Blocks

// Generates the colors for each Tetromino shape
// Each shape has a different number to represent it. If you were to assign it as 1s and 0s for all 7 shapes, what you will observe is that when the shapes fall to the bottom, the colors will all change to cyan (1).
// Anything more than 0 means that that grid is colored.
const COLORS = ['cyan', 'yellow', 'purple', 'green', 'red', 'blue', 'orange'] // The colours are according to the Tetris standards
const SHAPES = [
    [[0, 0, 0, 0],[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], // Cyan I Tetromino
    [[2, 2], [2, 2]], // Yellow O Tetromino
    [[0, 3, 0], [3, 3, 3], [0, 0, 0]], // Purple T Tetromino
    [[0, 4, 4], [4, 4, 0], [0, 0, 0]], // Green S Tetromino
    [[5, 5, 0], [0, 5, 5], [0, 0, 0]], // Red Z Tetromino
    [[6, 0, 0], [6, 6, 6], [0, 0, 0]], // Blue J Tetromino
    [[0, 0, 7], [7, 7, 7], [0, 0, 0]], // Orange L Tetromino
]

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

// Allows the Tetromino piece to move left, right and down using a spread operator
const moves = {
    [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1}), 
    [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1}),
    [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1}),
    [KEY.UP]: (p) => board.rotate(p),
}