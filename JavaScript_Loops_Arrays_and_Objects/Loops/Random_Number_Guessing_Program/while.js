//My Try -- Before the solution
/*

var guess = 56;
var randomNumber = count = 0;
while ( randomNumber !== guess ) {
  randomNumber = getRandomNumber(10000);
  count += 1;
}
document.write('It took ' + count + ' tries to guess ' + guess + '!!!');

*/

//Teacher's Solution
var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attempts += 1;
}

document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");