$(function(){
  var secret;
  function newGame() {
    secretNumber();
  }

  function secretNumber() {
    secret = Math.floor(Math.random() * 100 + 1);
  }

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  $("#userGuess").keydown(function(event) {
    if(event.which == 13) {
      var guess = Number($(this).val());
      console.log('guess', guess);
      if(isNaN(guess)) {
        $('#feedback').val('You did not enter a number');
      }
    }
  });
});
