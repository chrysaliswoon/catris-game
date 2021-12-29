// This will generate the Tetrominoes for the game

class Block {
  constructor(ctx){
    this.ctx = ctx;
    // this.color = 'blue';
    // this.shape = [
    //   [1, 0, 0], [1, 1, 1], [0, 0, 0],
    // ]

    // Randomizes the Tetromino shape and color
    const typeID = this.randomizeTetromino(COLORS.length)
    this.shape = SHAPES[typeID]
    this.color = COLORS[typeID]

    // Starting position of the Tetromino
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1)
        }
      })
    })
  }

  // Takes a tetromino piece "p" as input and updates the x or y variable of the current piece to change its position on the board
  move(p) {
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

  // Randomly selects one of the Tetrominoes using Math (built in JS). 
  randomizeTetromino(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes)
  }
}


