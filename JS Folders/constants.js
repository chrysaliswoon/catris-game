/* =================================== This is where the different configurations and rules for the game will be stored that won't change such as the size of the board. =================================== 

===========================================================================================================================================================================================================
Drawing the Canvas
- The document object provides a programmable interface for the HTML document. 
- The document has a tree-like structure and is often referred to as the DOM (Document Object Model).
- We can call the getElementById method to access elements from the DOM.
- The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode.

Tetris Board 

- The Tetris board has a width of 20 (row), and height of 10 (col). In the event that this number changes (highly unlikely), the variable type will be changed to "Let".
- Width of the board is 10 columns
- Height of the board is 20 rows
-Size of the Blocks will be set to 30


Size of Board & Size of Next Tetris Block Board

- We calculate the size of the Tetris Board (Canvas) by multiplying the column / row by the block size.

Tetromino Blocks

- We use .scale to add a scaling transformation to the block to resize it

Tetromino Colors

- Generates the colors for each Tetromino shape
- Each shape has a different number to represent it. If you were to assign it as 1s and 0s for all 7 shapes, what you will observe is that when the shapes fall to the bottom, the colors will all change to cyan (1).
- Anything more than 0 means that that grid is colored.
- The colours are according to the Tetris standards

Tetromino Shapes

- This generates the shape of each Tetromino block in the following order
- Cyan I Tetromino 
- Yellow O Tetromino
- Purple T Tetromino
- Green S Tetromino
- Red Z Tetromino
- Blue J Tetromino
- Orange L Tetromino

Arrow Keys [Freeze]

- Numbers are taken from the keycodes for left, right, up and down: https://keycode.info/
- Object.freeze, freezes the values for the arrow keys so they can't be changed

Tetromino Movement

- Allows the Tetromino piece to move left, right and down using a spread operator

Tetris Score System [Freeze]

- Generate the score when the Tetris drops and lines are cleared
- Score numbers are according to https://tetris.wiki/Scoring

Tetris Level & Speed [Freeze]

- Increase the speed at which the blocks will drop when the player advances to the next level in ms
- Player needs to clear 10 lines for it to go to the next level

Updates the Score

- Updates the value of the score, lines and level
===========================================================================================================================================================================================================
*/

// Drawing the Canvas //
const canvas = document.getElementById('board'); 
const ctx = canvas.getContext('2d'); 
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');

// Tetris Board //
const COL = 10; 
const ROW = 20; 
const BLOCK_SIZE = 30; 

// Size of Board //
ctx.canvas.width = COL * BLOCK_SIZE;
ctx.canvas.height = ROW * BLOCK_SIZE;

// Size of Next Tetris Block Board //
ctxNext.canvas.width = 4 * BLOCK_SIZE;
ctxNext.canvas.height = 4 * BLOCK_SIZE;

// Tetromino Blocks //
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);


// const cyan = new Image()
// cyan.src='Image Assets/cyan tetris block.png'

// Tetromino Colors //
const COLORS = [
    'cyan',
    'yellow', 
    'purple', 
    'green', 
    'red', 
    'blue', 
    'orange'
]

// Tetromino Shapes // 
const SHAPES = [
    [[0, 0, 0, 0],[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], 
    [[2, 2], [2, 2]], 
    [[0, 3, 0], [3, 3, 3], [0, 0, 0]], 
    [[0, 4, 4], [4, 4, 0], [0, 0, 0]], 
    [[5, 5, 0], [0, 5, 5], [0, 0, 0]], 
    [[6, 0, 0], [6, 6, 6], [0, 0, 0]], 
    [[0, 0, 7], [7, 7, 7], [0, 0, 0]], 
]

// Arrow Keys // 
const KEY = {
    LEFT: 37, 
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
}
Object.freeze(KEY); 

// Tetromino Movement //
const moves = {
    [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1}), 
    [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1}),
    [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1}),
    [KEY.UP]: (p) => board.rotate(p),
    [KEY.SPACE]: (p) => ({...p, y: p.y + 1}),
}


// Tetris Score System //
const POINTS = { 
    SINGLE: 100,
    DOUBLE: 300,
    TRIPLE: 500,
    TETRIS: 800,
    SOFT_DROP: 1, 
    HARD_DROP: 2
} 
Object.freeze(POINTS);

// Tetris Level & Speed //
const LINES_PER_LEVEL = 1; 
const LEVEL_SPEED = { 
    0: 600, 
    1: 550, 
    2: 500,
    3: 450,
    4: 400,
    5: 350,
    6: 300,
    7: 250,
    8: 200,
    9: 100,
    10: 80,
    11: 80,
    12: 80,
    13: 70,
    14: 70,
    15: 70,
    16: 50,
    17: 50,
    18: 50,
    19: 30,
    20: 30,
}
Object.freeze(LEVEL_SPEED);