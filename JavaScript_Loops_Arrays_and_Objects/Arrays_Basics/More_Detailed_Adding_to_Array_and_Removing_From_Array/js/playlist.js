/* 
  Detailed adding items to an array 
*/
var playList = []; 

// Add items to end of array
playList.push('I Did It My Way'); 
playList.push(
  'Respect',
  'Imagine'
);

// Add items to beginning of array
playList.unshift(
  'Born to Run',
  'Louie Louie',
  'Maybellene'
);

printList( playList );


/* 
  Removing Items from an arry 
*/

// Removing items from end of array
playList.pop(); // Removes *and* returns the last added item in the array
var lastAddedSong = playList.pop(); // This removes and stores the song added last in the variable lastAddedSong

// Removing items from the beginning of array
playlist.shift(); // The opposite of unshift -- this removes *and* returns the first item in the array
var firstAddedSong(); // This removes and stores the first added song in the array in the variable firstAddedSong