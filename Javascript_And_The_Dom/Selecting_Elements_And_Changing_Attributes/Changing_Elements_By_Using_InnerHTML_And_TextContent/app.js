/*
  This selectts and replaces the heading value with "New Heading"
*/
const heading = document.querySelector('h1');
heading.textContent = "New Heading";

const input = document.querySelector('input');
const paragraph = document.querySelector('p.description');
const button = document.querySelector('button');

/*
  This replaces the paragraph content by entering into an input and clicking a button by using the text value
*/
//button.addEventListener('click', () => {
//   paragraph.textContent = input.value + ':';
//});
  
/*
  This replaces the paragraph content by entering into an input and clicking a button by using the inner HTML
*/
button.addEventListener('click', () => {
   paragraph.innerHTML = input.value + ':';
});

/*
  This gets the innerHTML of the unordered list and then replaces the list item with 'firecrackers' and 'ozark'
*/
const ul = document.querySelector('ul');
ul.innerHTML = '<li>firecrackers</li><li>ozark</li>';
