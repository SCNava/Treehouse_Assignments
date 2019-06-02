var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

/*

//My Try -- Before Solution
do {
  guess = prompt("I'm thinking of a number between 1 and 10. What is it?");
} while ( guess != randomNumber )  <!-- HERE I NEED TO ADD A PARSEINT() && USE THE !== OPERATOR INSTEAD OF !=
  
document.write("<p style=\"font-family: Calibri; font-size: 18px;\">You got it!!</p>");

*/

//Teacher's Solution
var correctGuess = false;

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
     correctGuess = true;
  }
} while ( !correctGuess )
  
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '.');
