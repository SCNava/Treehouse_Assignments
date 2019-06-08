// 1: Set the text of the <h1> element
const h1Element = document.querySelector('h1'); // Teacher set name to 'title' which is better
h1Element.textContent = "Text Content";

// 2: Set the color of the <h1> to a different color
h1Element.style.color = 'pink';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const descriptionParagraph = document.querySelector('p.desc');
descriptionParagraph.innerHTML = '<strong>Mary had a little lamb.</strong>';

// 4: Set the class of the <ul> to 'list'
const unorderedList = document.querySelector('ul');
unorderedList.className = 'list';

// 5: Create a new list item and add it to the <ul>
let listItem = document.createElement('div');
let listItemInput = document.createElement('input');
listItemInput.type = 'text'
let listItemLabel = document.createElement('label');
listItemLabel.innerText = 'Eat ice cream';
listItemLabel.for = 'listItemInput';
listItem.appendChild(listItemInput);
listItem.appendChild(listItemLabel);
unorderedList.appendChild(listItem);

/* 
  Here is what the teacher did -- less code and more readable:
  
  const item = document.createElement('li');
  item.innerHTML = "<input> Eat ice cream";
  list.appendChild(item);
  
*/

// 6: Change all <input> elements from text fields to checkboxes
const inputElements = document.querySelectorAll('input'); //Teacher used getElementsByTagName -- either is fine

for (let count = 0; count < inputElements.length; count++) {
  inputElements[count].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const extraDiv = document.querySelector('div.extra');
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
extraDiv.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
deleteButton.addEventListener('click', () => {
    extraDiv.style.display = 'none';                              
});

/*
  My method doesn't actually delete/remove the '.extra' div -- it just hides it.
  
  Here is what I 'would' do:
  // Select the parent element for the .extra div
  const parentContainer = extraDiv.parentElement;
  
  // Delete the child element div .extra
  deleteButton.addEventListener('click', () => {
      parentContainer.removeChild(extraDiv);                              
  });
  
  Here is what the teacher did:
  const container = document.querySelector('.container');
  deleteButton.addEventListener('click', () => {
      container.removeChild(extra);
  }
*/
 