// This will initialise the game and execute the overall game logic for Tetris

let board = new Board();

function handleKeyPress(event) {
    event.preventDefault();

    if (moves[event.keyCode]) {
        let p = moves[event.keyCode](board.block);

        if (board.valid(p)) { // Connects to the board.js to detect the wall for collision
            board.block.move(p);
            draw();
        }
    }
}

function addEventListener(){
    document.removeEventListener('keydown', handleKeyPress)
    document.addEventListener('keydown', handleKeyPress)
}

function play() {
    board = new Board(ctx);
    console.table(board.grid);
    draw();
    addEventListener();
}

function draw() {
    const { width, height } = ctx.canvas; 
    ctx.clearRect(0, 0, width, height);

    board.block.draw();
}

// Allows the Tetromino piece to move left, right and down using a spread operator
const moves = {
    [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1}), 
    [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1}),
    [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1}),
    [KEY.UP]: (p) => board.rotate(p),
}