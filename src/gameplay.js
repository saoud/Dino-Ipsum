export default class Game {
  constructor (currentDino) {
    this.guessesLeft = 7;
    this.message = '';
    this.currentDino = currentDino;
  }

  isGameOver() {
    if (this.guessesLeft <= 0) {
      this.message = "game over";
    }
  }

  isGoodGuess(letter) {
    if (this.currentDino.includes(letter)) {
      this.message = "correct";
      return true;
    } else {
      this.guessesLeft--;
      this.message = "incorrect";
      return false;
    }
  }
  
};