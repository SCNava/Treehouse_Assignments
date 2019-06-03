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