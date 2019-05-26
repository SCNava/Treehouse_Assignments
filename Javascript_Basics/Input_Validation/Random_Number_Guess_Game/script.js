// creates a random number between 1 and 6
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I\'m thinking of a number between 1 and 6. What is it?');

// the return from a prompt is always a string so we need to use parseInt()
if (parseInt(guess) === randomNumber) {
  document.write('<p style="font-family: calibri; font-size: 16px;">You got it right!</p>');
} else {
    document.write('<p style="font-family: calibri; font-size: 16px;">I\'m sorry, that is incorrect. The number was ' + randomNumber + '.</p>');
}
                   