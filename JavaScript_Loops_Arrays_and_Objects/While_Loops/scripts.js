function randomNumber(upper) {
 return Math.floor( Math.random() * upper ) + 1;
}

/* While Loop */
var counter = 0;
while ( counter < 10000 ) {
  document.write(randomNumber(6) + ' ');
  counter += 1;
}