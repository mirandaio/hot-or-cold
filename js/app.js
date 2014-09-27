$(function(){
  var secret;

  function newGame() {
    secretNumber();
    $('#feedback').text('Make your Guess');
    $('#userGuess').val('');
  }

  function secretNumber() {
    secret = Math.floor(Math.random() * 100 + 1);
  }

  function handleUserInput() {
    var userInput = $('#userGuess');
    var guess = Number(userInput.val());
    userInput.val('');
    if(isNaN(guess)) {
      $('#feedback').text('You did not enter a valid number');
      $('#userGuess').val('');
    } else {
      $('#guessList').append('<li>' + guess + '</li>');
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
});
