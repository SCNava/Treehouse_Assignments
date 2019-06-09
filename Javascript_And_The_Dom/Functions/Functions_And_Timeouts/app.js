/*
  This selectts and replaces the heading value with "New Heading"
*/
const heading = document.querySelector('h1');
heading.textContent = "New Heading";

const descriptionInput = document.querySelector('input.description');
const descriptionParagraph = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

/*
  Setting style elements
*/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

// This will toggle hiding and unhiding the list

toggleList.addEventListener('click', () => {
   if (listDiv.style.display !== 'none') {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Un-Hide list';
  } else {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  }
});

/*
  Adding new elements using JavaScript
*/


// Creating the element
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const ul = document.querySelector('ul');

addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    // Inserting the element into the DOM

    // We need to append the element (as a child) to another node on the tree -- whether that be the body or any other element
    ul.appendChild(li);
    
    // Clear the input field
    addItemInput.value = "";
});

/*
  Removing elements using JavaScript
*/

const removeItemButton = document.querySelector('button.removeItemButton');

removeItemButton.addEventListener('click', () => {
    // Selects the last element in the list
    let li = document.querySelector('li:last-child');

    // Removing the item
    ul.removeChild(li);
});







