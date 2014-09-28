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
    hasWon = false;
    $('#count').text(0);
  }

  function secretNumber() {
    secret = Math.floor(Math.random() * 100 + 1);
  }

  function handleUserInput() {
    var userInput = $('#userGuess');
    var inputVal = userInput.val();
    var guess = Number(inputVal);
    var feedback;
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
      feedback = getFeedback(guess);
      $('#feedback').text(feedback);
    }
  }

  function getFeedback(guess) {
    var dist = Math.abs(secret - guess);
    if(dist == 0) {
      hasWon =  true;
      return 'Yay! You guessed it!';
    } else if(1 <= dist && dist < 10) {
      return 'Very hot!';
    } else if(10 <= dist && dist < 20) {
      return 'Hot!';
    } else if(20 <= dist && dist < 30) {
      return 'Warm';
    } else if(30 <= dist && dist < 50) {
      return 'Cold';
    } else if(50 <= dist) {
      return 'Ice cold';
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
