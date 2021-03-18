export default class Game {
  constructor (currentDino) {
    this.guessesLeft = 7;
    this.message = '';
    this.badGuesses = [];
    this.currentDino = currentDino;
    this.progress = [];
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
      this.badGuesses.push(letter);
      return false;
    }
  }
  
  allLetterIndeces(letter) {
    let lettersAtTheseIndeces = [];
    for (let i = 0; i < this.currentDino.length; i++) {
      if (this.currentDino[i] === letter) {
        lettersAtTheseIndeces.push(i);
      }
    }
    return lettersAtTheseIndeces;
  }
}