import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './js/dinoapi.js';

$('#fetch-word').on("click", function() {
  // call API for new dinosaur name (one word, one paragraph)
  let promise = DinoService.getMeDinoWord();
  // deal with API response (fulfilled/rejected)
      // if fulfilled, store the dinosaur name in a variable
      // if rejected, tell the user
  promise.then(function(response) {
    if (typeof response === "undefined") {
      $('.dinosaur-word').innerHtml(response);
    } else { 
      $('.dinosaur-word').empty();
      $('.dinosaur-word').text(response);
    }
  })
  promise.catch(function(error) {
    $('.dinosaur-word').empty();
    $('.dinosaur-word').innerHtml(error);
  })
});

// use the length of the stored dinosaur name to put that many blanks on the DOM

// have a "letters already guessed" panel which displays all the guesses that have been wrong this game

// a text entry input field with a submit button, for guessing by letter

// a panel that draws in a hanging dinosaur. Each wrong letter guess populates one additional piece of this drawing/image
  // all pieces are already put on the DOM but set to invisible
  // for each wrong letter guess, one additional limb/section becomes visible

// a message displays when:
  // the word is completed before full dino is drawn
  // the full dino is drawn before the full word has been guessed/completed


// STRETCH: have the option to finish the puzzle