// // This will initialise the game and execute the overall game logic for Tetris

// let board = new Board();

// function handleKeyPress(event) {
//     event.preventDefault(); // Stop the event from bubbling

//     if (moves[event.keyCode]) { // Get new state of
//         let p = moves[event.keyCode](board.block);

//         if (board.valid(p)) { // Connects to the board.js to detect the wall for collision
//             board.block.move(p);
//             // draw();
//         }
//     }
// }

// function addEventListener(){
//     document.removeEventListener('keydown', handleKeyPress)
//     document.addEventListener('keydown', handleKeyPress)
// }

// function play() {
//     board = new Board(ctx);
//     // console.table(board.grid);
//     // draw();
//     addEventListener();

//     if (requestId) {
//         cancelAnimationFrame(requestId);
//     }
    
//     time.start = performance.now();
//     animate();
// }

// function draw() {
//     const { width, height } = ctx.canvas; 
//     ctx.clearRect(0, 0, width, height);

//     board.block.draw();
// }

// let time = {start: 0, elapsed: 0, level: 1000};

// function animate(now = 0) {
//     time.elapsed = now - time.start

//     if (time.elapsed > time.level) {
//         time.start = now;

//         drop()
//     }

//     draw()
//     requestId = requestAnimationFrame(animate)
// }

let board = new Board();

function handleKeyPress(event) {
  // Stop the event from bubbling.  
  event.preventDefault();

  if (moves[event.keyCode]) {
    // Get new state of piece
    let p = moves[event.keyCode](board.block);

    if (event.keyCode === KEY.SPACE) {
      // Hard drop
      while (board.valid(p)) {
        board.block.move(p);
        p = moves[KEY.SPACE](board.block);
      }
    }

    if (board.valid(p)) { 
      board.block.move(p);
    }
  }
}

function addEventListener() {
  document.removeEventListener('keydown', handleKeyPress);
  document.addEventListener('keydown', handleKeyPress);
}
 
function play() {
  board = new Board(ctx);
  addEventListener();
 
  // If we have an old game running then cancel it
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

let time = { start: 0, elapsed: 0, level: 1000 };

function drop() {
  let p = moves[KEY.DOWN](board.block);
  if (board.valid(p)) {
    board.block.move(p);
  }
}

function animate(now = 0) {
  // Update elapsed time.
  time.elapsed = now - time.start;

  // If elapsed time has passed time for current level
  if (time.elapsed > time.level) {
    // Restart counting from now
    time.start = now;

    drop();
  }

  draw();
  requestId = requestAnimationFrame(animate);
}