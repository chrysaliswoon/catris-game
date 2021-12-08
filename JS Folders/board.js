// This will generate the board for the game

class Board {
  
  // Reset the board when we start a new game.
  reset() {
    this.grid = this.getEmptyBoard();
  }
  
  // Get matrix filled with zeros.
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}