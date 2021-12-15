// This will generate the Tetrominoes for the game

class Block {
  constructor(ctx){
    this.ctx = ctx;

    this.color = 'blue';
    this.shape = [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ]

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
  }
}
