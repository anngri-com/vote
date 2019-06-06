$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $('#minor').show();
  }else if (age ===18) {
    alert("congratulation!!! This is your first vote");
    $('#adult').show();
  }else{
    $('#adult').show();
  }
});
