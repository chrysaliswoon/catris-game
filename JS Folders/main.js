// This will initialise the game and execute the overall game logic for Tetris

const canvas = document.getElementById('board'); // Grabs the HTML elements based on the ID attribute, "board"
const ctx = canvas.getContext('2d'); // Provides 2D rendering context fo the drawing suface of a <canvas> element

// Calculates the size of the canvas from our constant

ctx.canvas.width = COL * BLOCK_SIZE; // 10*30 = 300
ctx.canvas.height = ROW * BLOCK_SIZE; // 20*30 = 600

// Scale the Tetromino blocks

ctx.scale(BLOCK_SIZE, BLOCK_SIZE); // Scales the blocks 30 by 30


// Call the function in board.js

let board = new Board();

function play() {  
  board.reset();  
  console.table(board.grid);  
}