// This will initialise the game and execute the overall game logic for Tetris

let board = new Board();

function handleKeyPress(event) {
    event.preventDefault(); // Stop the event from bubbling

    if (moves[event.keyCode]) { // Get new state of piece
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