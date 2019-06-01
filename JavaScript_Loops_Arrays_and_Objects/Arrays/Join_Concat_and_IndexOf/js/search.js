/* Important note 
The behavior of most browsers has changed since this video was shot, so you won't see the same thing as I demonstrate in the video. In the video, you'll see that my script is able to print out to the browser using document.write( ) while inside a loop.

Most browsers no longer do that: they wait until the loop finishes and then they print to the window. So, you'll see a blank page until you type quit in the prompt window — then you'll see all the output printed to the screen.

Sorry for the confusion, and we'll update the video soon. */

/*
  Join example
*/

var weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

// Creating a comma-delimited list of weekdays
var weekdaysCommaDelimitedString = weekdays.join(', '); // this string now contains this 'Monday, Tuesday, Wednesday, Thursday, Friday'


/*
  Concat example
*/

var weekendDays = [
  'Saturday',
  'Sunday'
]

var allDaysofWeek = weekdays.concat(weekendDays); // this array now contains all seven days of the week

/*
  IndexOf example
*/

var mondayIndex = allDaysofWeek.indexOf('Monday'); // this index will be 0
var tuesdayIndex = allDaysofWeek.indexOf('Tuesday'); // this index will be 1
var fruglesdayIndex = allDaysofWeek.indexOf('Fruglesday'); // this will return as -1 as 'Fruglesday' is not found in the list

/*
  Grocery Store IndexOf Search Example
*/

function print(message) {
  document.write( '<p>' + message + '</p>');
}

function isInList (listToSearch, searchTerm) {
  if ( inStock.indexOf(search) >= 0 ) {
    return true;
  } 
  return false;
}

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

while (true) {
  search = prompt('Search for a product in our store. Type \'list\' to show all of the products and type \'quit\' to exit.');
  search = search.toLowerCase();
  if ( search === 'quit' ) {
    break;
  } else if ( search === 'list' ) {
    print( inStock.join(', ') ); 
  } else {
    if ( isInList( inStock, search) ) {
      print( 'Yes, we have ' + search + ' in stock.' );
    } else {
      print( 'I\'m sorry, we do not have ' + search + ' in stock at the moment.' );
    }  
  }
}