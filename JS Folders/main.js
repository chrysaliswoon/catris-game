/* =================================== This will initialise the game and execute the overall game logic for Tetris ========================================================================================================================== 
Play meow sound when button is clicked

- Using an in-built library, Audio, it will play the sound when the start button is clicked. 
- Music is from CrabbyCrab101 - https://www.youtube.com/watch?v=sNrjxzpS5S8&t=1s

Show Levels

- We will show the player which level they are currently on by initializing a value for the levels and lines. 
- This means that when we start a new game, we will need to reset these values too.

Reset Game

- When the game resets, we need to reset all of the values through our account proxy and the time and board that was previously running will be reset.
===========================================================================================================================================================================================================
*/


// let board = new Board();
let board = null;

// Play meow sound when button is clicked //

let playButtonSound = new Audio(src='Image Assets/Catris! (Tetris Cat Cover).mp3')

// function playMeow() {
//     playButtonSound.play()
// }

// Show Levels //
let accountValues = {
    score: 0,
    lines: 0,
    level: 0,
}

function updateAccount(key, value) {
    let element = document.getElementById(key);
    if (element) {
        element.textContent = value;
    }
}

let account = new Proxy(accountValues, {
    set: (target, key, value) => {
        target[key] = value;
        updateAccount(key, value);
        return true;
    }
})


// Arrow Key Functions //
function handleKeyPress(event) {
    event.preventDefault(); // Stop the event from bubbling

    if (moves[event.keyCode]) { // Get new state of
        let p = moves[event.keyCode](board.block);

        if(event.keyCode === KEY.SPACE) {
            while (board.valid(p)) { // Connects to the board.js to detect the wall for collision
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
}

function addEventListener(){
    document.removeEventListener('keydown', handleKeyPress)
    document.addEventListener('keydown', handleKeyPress)
}

function draw() {
    const { width, height } = ctx.canvas;
    ctx.clearRect(0, 0, width, height)

    board.draw();
    board.block.draw();
}

function play() {
    playButtonSound.play();
    // board = new Board(ctx); // Moved to resetGame()
    resetGame();
    // draw(); => This is removed as we have replaced it with the AnimationFrame function
    addEventListener();

    if (requestId) {
        cancelAnimationFrame(requestId);
    }
    
    // time.start = performance.now(); // Moved to resetGame() function
    animate();
    console.table(board.grid); // Identify where the Tetromino block is on the grids of our game board.
}

// function draw() {
//     const { width, height } = ctx.canvas; 
//     ctx.clearRect(0, 0, width, height);

//     board.block.draw();
// }

// Object literal to keep track of when to move the Tetrominoes down a line. The smaller the number for the speed, the faster the Tetrominoes will move down
// let time = {start: 0, elapsed: 0, speed: 1000}; // Moved to resetGame()


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

// Reset Game //

function resetGame() {
    account.score = 0;
    account.lines = 0;
    account.level = 0;
    board = new Board(ctx, ctxNext);
    time = {start: 0, elapsed: 0, speed: LEVEL_SPEED[0]};
} 