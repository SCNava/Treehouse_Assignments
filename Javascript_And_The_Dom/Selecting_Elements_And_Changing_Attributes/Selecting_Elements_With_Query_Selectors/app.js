/* 
  SELECTING ELEMENTS BY TAG NAME
*/

/* Turns the first paragraph blue */
const paragraph = document.getElementsByTagName('p');
paragraph[0].style.color = 'blue';

/*
  Turns the list items purple
*/
const purpleListItems = document.getElementsByTagName('li');

/* this turns item 3 to purple */
purpleListItems[2].style.color = 'purple';

/* this turns all items purple */
for (let index = 0; index < purpleListItems.length; index++) {
  purpleListItems[index].style.color = 'purple';
}

/* 
  SELECTING ELEMENTS BY CLASS NAME
*/
const notPurpleItems = document.getElementsByClassName('error-not-purple');

/* this turns all items with the 'error-not-purple' class red */
for (let index = 0; index < notPurpleItems.length; index++) {
  notPurpleItems[index].style.color = 'red';
}

/* 
  SELECTING ELEMENTS USING QUERY SELECTORS
*/
const allListItems = document.querySelectorAll('li');
const firstListItem = document.querySelector('li');
const heading = document.querySelector('#myHeading');
const evens = document.querySelectorAll('li:nth-child(even)'); /* selects the even items with li tags */
const HTMLAttributeSelection = document.querySelector('[title=label]'); /* select HTML attributes by querying for '[HTMLAttribute=value]'

/* this turns all items with the 'error-not-purple' class red */
for (let index = 0; index < evens.length; index++) {
  evens[index].style.background = 'lightgray';
}

