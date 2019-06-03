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



