// This will generate the Board for the game
// We can create a new Board when starting a new game and a new Piece every time a new piece enters the game.
// When we create a new instance of board, we connect it with the canvas context. 

let requestId = null;
let board = null,

class Board {  
    constructor(ctx, ctxNext) {
      this.ctx = ctx;
      this.ctxNext = ctxNext; 
      this.grid = this.getEmptyBoard();
      this.setNextBlock();
      this.setCurrentBlock();
      // this.block = new Block(ctx);
    }

    // In Tetris, the board consists of cells, which are either occupied or empty.
    // We will represent empty cells with 0 and a filled cell with 1. 
    // Below is a method that returns an empty board with all cells set to zero. We can use the fill() array method that changes all array elements with a static value.
    getEmptyBoard() {
        return Array.from( // Used an array of numbers to represent a row and an array of rows to represent the board.
          {length: ROW}, () => Array(COL).fill(0)
        );
    }

    // Rotates the Tetris block
    rotate(block) {
      let p = JSON.parse(JSON.stringify(block));

      for (let y = 0; y < p.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [p.shape[x][y], p.shape[y][x]] =
          [p.shape[y][x], p.shape[x][y]];
        }
      }
      // Reverse the order of the columns.
      p.shape.forEach(row => row.reverse());

      return p;
    }

    // Collision Detection
    valid(p){
      return p.shape.every((row, dy) => {
        return row.every((value, dx) => {
          let x = p.x + dx;
          let y = p.y + dy;
          return value === 0 || (this.isInsideWalls(x, y) && this.isNotOccupied(x, y))
          // this.isInsideWalls(p.x + x, p.y + y)

        })
      })
    }

    // Checks if the grids are occupied by a Tetrimino block
    isNotOccupied(x, y) {
      return this.grid[y] && this.grid[y][x] === 0;
    }

    isInsideWalls(x, y) {
      return (
        x >= 0 && // Detects the left wall
        x < COL && // Detects the right wall
        y < ROW // Detects the bottom wall
      )
    }

    drop() {
      let p = moves[KEY.DOWN](this.block);

      if(this.valid(p)) {
        this.block.move(p);
      } else {
        this.freeze(); // Freeze the Tetromino blocks in place and generate a new block immediately.
        this.clearLines() // Clears a line of Tetrimino blocks when they all align together.
        if(this.block.y === 0) {
          return false;
        }
        // this.block = new Block(this.ctx)
        this.setCurrentBlock();
      }
      return true;
    }

    freeze() {
      this.block.shape.forEach((row,y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.grid[y + this.block.y][x + this.block.x] = value;
        }
        })
      })
    }

    draw() {
      this.grid.forEach((row, y) => {
        row.forEach((value, x) => {
          if(value > 0) {
            this.ctx.fillStyle = COLORS[value-1];
            this.ctx.fillRect(x, y, 1, 1)
          }
        })
      })
    }

    clearLines() {
      let lines = 0;
      this.grid.forEach((row, y) => {
        if(row.every(value => value > 0)) { // If the value in the row is all greater than 0 then
          lines++; // Increase score when line is cleared

          this.grid.splice(y, 1) // remove the row

          this.grid.unshift(Array(COL).fill(0)) // and replace it with 0 to clear the colour.
          if(lines > 0) {
            account.score += this.getLineClearPoints(lines);
            account.lines += lines

            if(account.lines >= LINES_PER_LEVEL) {
              account.level++;

              account.lines -= LINES_PER_LEVEL;

              time.level = LEVEL_SPEED[account.level]
            }
          }
        }
      })
    }

    getLineClearPoints(lines) {
      const lineClearPoints = 
        lines === 1 ? POINTS.SINGLE:
        lines === 2 ? POINTS.DOUBLE:
        lines === 3 ? POINTS.TRIPLE:
        lines === 4 ? POINTS.TETRIS:
        0;

      return (account.level + 1) * lineClearPoints;
    }

    setNextBlock() {
      const { width, height} = this.ctxNext.canvas;
      this.nextBlock = new Block(this.ctxNext);
      this.ctxNext.clearRect(0, 0, width, height);
      this.NextBlock.draw();
    }

    setCurrentBlock() {
      this.block = this.nextBlock;
      this.block.ctx = this.ctx;
      this.block.x = 3;
      this.setNextBlock();
    }
}
