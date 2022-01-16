/* =================================== This will generate the Tetrominoes for the game ========================================================================================================================== 
Randomize Tetromino shape and color

- 

Tetromino Position

- This is the starting position of the Tetromino

Generate Tetromino

- 

Tetromino Movement

- 

Tetromino Randomizer

- Randomly selects one of the Tetrominoes using Math (built in JS). 
===========================================================================================================================================================================================================
*/

class Block {
  constructor(ctx){
    this.ctx = ctx;
    // this.color = 'blue';
    // this.shape = [
    //   [1, 0, 0], [1, 1, 1], [0, 0, 0],
    // ]

    // Randomize Tetromino shape and color //
    const typeID = this.randomizeTetromino(COLORS.length)
    this.shape = SHAPES[typeID];
    this.color = COLORS[typeID];

    // Tetromino Position // 
    this.x = 0;
    this.y = 0;
  }

  // Generate Tetromino //
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = 'grey';
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1)
          this.ctx.strokeRect(this.x + x, this.y + y, 1, 1)
          this.ctx.lineWidth = 0.1;
        }
      })
    })
  }

  // Tetromino Movement ///
  move(p) {
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

  // Tetromino Randomizer //
  randomizeTetromino(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes)
  }
}


