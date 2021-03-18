import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './js/dinoapi.js';
import Game from './js/gameplay.js';

let game = new Game("placeHolder");

$('#fetch-word').on("click", function() {
  let promise = DinoService.getMeDinoWord();
  promise.then(function(response) {
    if (response === "") {
      $('.dinosaur-word').append(response);
    } else { 
      $('.dinosaur-word').empty();
      game.currentDino = response;
      $('.dinosaur-word').text(makeBlankBoard(response));
    }
  });
  promise.catch(function(error) {
    $('.dinosaur-word').empty();
    $('.dinosaur-word').text(error);
  });
});

function makeBlankBoard(word) {
  let displayWord = [];
  for (let i = 0; i < word.length; i++) {
    displayWord.push("_");
  }
  game.progress = displayWord;
  displayWord = displayWord.join(" ");
  return displayWord;
}

function showWrongGuesses() {
  let allWrongs = game.badGuesses.join(" ");
  $('.wrong-pile').text(allWrongs);
}

// a text entry input field with a submit button, for guessing by letter
$('#guess').on("click", function(event) {
  event.preventDefault();
  let letter = $('#letter-guess').val();
  if (game.badGuesses.includes(letter)) {
    game.message = "You have guessed this one already";
    $('.game-end-message').text(game.message);
    return game;
  } else if (game.isGoodGuess(letter)) {
    const indecesToFill = game.allLetterIndeces(letter);
    for (let i = 0; i < game.currentDino.length; i++) {
      if (i === indecesToFill[i]) {
        game.progress[i] = letter;
      }
    }
    $('.game-end-message').text(game.message);
    $('.dinosaur-word').empty();
    $('.dinosaur-word').text(game.progress.join(" "));
  } else {
    game.isGoodGuess();
    $('.game-end-message').text(game.message);
    showWrongGuesses();
  }
});
// a panel that draws in a hanging dinosaur. Each wrong letter guess populates one additional piece of this drawing/image
  // all pieces are already put on the DOM but set to invisible
  // for each wrong letter guess, one additional limb/section becomes visible

// a message displays when:
  // the word is completed before full dino is drawn
  // the full dino is drawn before the full word has been guessed/completed


// STRETCH: have the option to finish the puzzle