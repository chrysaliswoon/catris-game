// This will initialise the game and execute the overall game logic for Tetris

// Drawing the Canvas // 

// The document object provides a programmable interface for the HTML document. 
// The document has a tree-like structure and is often referred to as the DOM (Document Object Model).

const canvas = document.getElementById('board'); // We can call the getElementById method to access elements from the DOM.

// The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode.

const ctx = canvas.getContext('2d');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculate the size of the Tetris Board (Canvas) from our constants.js // 

ctx.canvas.width = COL * BLOCK_SIZE;
ctx.canvas.height = ROW * BLOCK_SIZE;

// Scales our Tetromino Blocks //

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = null;

function play() {
    board = new Board(ctx);
    draw();
}

function draw() {
    const { width, height } = ctx.canvas; 
    ctx.clearRect(0, 0, width, height);
    board.block.draw();
}

