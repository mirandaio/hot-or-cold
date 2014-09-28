$(function(){
  var secret;
  var numGuesses;
  var hasWon = false;

  function newGame() {
    secretNumber();
    $('#feedback').text('Make your Guess');
    $('#userGuess').val('');
    $('#guessList').empty();
    numGuesses = 0;
    $('#count').text(0);
  }

  function secretNumber() {
    secret = Math.floor(Math.random() * 100 + 1);
  }

  function handleUserInput() {
    var userInput = $('#userGuess');
    var inputVal = userInput.val();
    var guess = Number(inputVal);
    userInput.val('');

    if(hasWon) {
      $('#feedback').text('You won this game already! You need to start a ' +
        'new game.');
    } else if((inputVal.length > 0 && inputVal.trim().length == 0) || 
      isNaN(guess)) {
      $('#feedback').text('No luck! I accept only numbers.');
    } else if(inputVal.length > 0 && (guess < 1 || guess > 100)) {
      $('#feedback').text('Oops! Your guess has to be a number between 1 ' +
        'and 100');
    } else if(inputVal.length > 0) {
      $('#guessList').append('<li>' + inputVal + '</li>');
      numGuesses++;
      $('#count').text(numGuesses);
    }
  }

  /* Display information modal box */
  $('.what').click(function(){
    $('.overlay').fadeIn(1000);
  });

  /* Hide information modal box */
  $('a.close').click(function(){
    $('.overlay').fadeOut(1000);
  });

  /* Start a new game when clicking New Game button */
  $('.new').click(function() {
    newGame();
  });

  /* Handle user input when pressing enter key */
  $('#userGuess').keydown(function(event) {
    if(event.which == 13) {
      handleUserInput();
    }
  });

  /* Handle user input when clicking Guess button */
  $('#guessButton').click(function() {
    handleUserInput();
  });

  newGame();
});
