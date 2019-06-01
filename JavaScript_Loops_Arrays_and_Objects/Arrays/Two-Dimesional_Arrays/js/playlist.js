/*
  Two-Dimensional Arrays
*/

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

// Two-dimensional arrays are arrays of arrays. This is how they aare written.
var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

// Individual items in the two-dimensional arrays can be accessed by using an additional set of brackets like this: var song1 = playList[0][0]; 
// An individual array in a two-dimensional array can be accessed by using just one set of brackets like this: var song1andsinger = playlist[0];

printSongs(playList);












