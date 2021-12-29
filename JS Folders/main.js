// // This will initialise the game and execute the overall game logic for Tetris

let board = new Board();

function handleKeyPress(event) {
    event.preventDefault(); // Stop the event from bubbling

    if (moves[event.keyCode]) { // Get new state of
        let p = moves[event.keyCode](board.block);

        if (board.valid(p)) { // Connects to the board.js to detect the wall for collision
            board.block.move(p);
            // draw();
        }
    }
}

function addEventListener(){
    document.removeEventListener('keydown', handleKeyPress)
    document.addEventListener('keydown', handleKeyPress)
}

function play() {
    board = new Board(ctx);
    // console.table(board.grid);
    // draw();
    addEventListener();

    if (requestId) {
        cancelAnimationFrame(requestId);
    }
    
    time.start = performance.now();
    animate();
}

function draw() {
    const { width, height } = ctx.canvas; 
    ctx.clearRect(0, 0, width, height);

    board.block.draw();
}

let time = {start: 0, elapsed: 0, level: 1000};


// allows the block to drop down automatically
function drop() {
  let p = moves[KEY.DOWN](board.block);
  if(board.valid(p)) {
    board.block.move(p)
  }
}

function animate(now = 0) {
    time.elapsed = now - time.start

    if (time.elapsed > time.level) {
        time.start = now;

        drop()
    }

    draw()
    requestId = requestAnimationFrame(animate)
}