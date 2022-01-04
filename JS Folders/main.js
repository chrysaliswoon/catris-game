// This will initialise the game and execute the overall game logic for Tetris

let board = new Board();

function handleKeyPress(event) {
    event.preventDefault(); // Stop the event from bubbling

    if (moves[event.keyCode]) { // Get new state of
        let p = moves[event.keyCode](board.block);

        if (board.valid(p)) { // Connects to the board.js to detect the wall for collision
            board.block.move(p);
            account.score += POINTS.HARD_DROP;
            p = moves [KEY.SPACE](board.block);
            // draw();
        }
    }

    if (board.valid(p)) {
        board.block.move(p);
        if(event.keyCode === KEY.DOWN) {
            account.score += POINTS.SOFT_DROP
        }
    }
}

function addEventListener(){
    document.removeEventListener('keydown', handleKeyPress)
    document.addEventListener('keydown', handleKeyPress)
}

function draw() {
    const { width, height} = ctx.canvas;
    ctx.clearRect(0, 0, width, height)

    board.draw();
    board.block.draw();
}

function play() {
    board = new Board(ctx);
    console.table(board.grid); // Identify where the Tetromino block is on the grids of our game board.
    // draw(); => This is removed as we have replaced it with the AnimationFrame function
    addEventListener();

    if (requestId) {
        cancelAnimationFrame(requestId);
    }
    
    time.start = performance.now();
    animate();
}

// function draw() {
//     const { width, height } = ctx.canvas; 
//     ctx.clearRect(0, 0, width, height);

//     board.block.draw();
// }

// Object literal to keep track of when to move the Tetrominoes down a line. The smaller the number for the speed, the faster the Tetrominoes will move down
let time = {start: 0, elapsed: 0, speed: 1000};


// allows the block to drop down automatically
// function drop() {
//   let p = moves[KEY.DOWN](board.block);
//   if(board.valid(p)) {
//     board.block.move(p)
//   }
// }

function animate(now = 0) {
    time.elapsed = now - time.start

    if (time.elapsed > time.speed) {
        time.start = now;

        board.drop()
    }

    draw()
    requestId = requestAnimationFrame(animate)
}

