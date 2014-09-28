$(function(){
  var secret;
  var numGuesses;
  var hasWon;

  function newGame() {
    secret = secretNumber();
    numGuesses = 0;
    hasWon = false;
    setFeedback('Make your Guess');
    $('#userGuess').val('');
    $('#guessList').empty();
    $('#count').text(0);
    document.getElementById("userGuess").focus();
  }

  function secretNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }

  function setFeedback(feedback) {
    $('#feedback').text(feedback);
  }

  function handleUserInput() {
    var userInput = $('#userGuess');
    var inputVal = userInput.val();
    var guess = Number(inputVal);
    var feedback;
    userInput.val('');

    if(hasWon) {
      setFeedback('You won this game already! You need to start a new game.');
    } else if(inputVal.length > 0) {
      if(isWhitespace(inputVal) || isNaN(guess)) {
        setFeedback('No luck! I accept only numbers.');
      } else if(guess < 1 || guess > 100) {
        setFeedback('Oops! Your guess has to be a number between 1 and 100');
      } else {
        numGuesses++;
        $('#count').text(numGuesses);
        $('#guessList').append('<li>' + inputVal + '</li>');
        feedback = getFeedback(guess);
        setFeedback(feedback);
      }
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

  function isWhitespace(str) {
    return str.length > 0 && str.trim().length == 0;
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
