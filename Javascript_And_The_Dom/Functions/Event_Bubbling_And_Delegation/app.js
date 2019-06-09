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

/*
  Event listeners
*/

// Anonymous Functions
/*
  They have three parts: 1. Parameters ( ) 2. Arrow Functions => 3. Function Logic { }
  i.e. (param1, param2) => {
          for ( let i = 0; i < param1.length; i++ ) {
            param2 += param1[i];
          }
        }
*/

// Mouseover eventListener
const listItems = document.getElementsByTagName('li');

/*
listItems[0].addEventListener('mouseover', () => {
    // Change text to uppercase
    //listItems[0].textContent = listItems[0].textContent.toUpperCase();                              
    // Change text to bold -- Note; for css items separated by hyphens use camelCase.
    listItems[0].style.fontWeight = 'bold';
    listItems[0].style.fontFamily = 'Helvetica';                          
});

// Mouseout eventListner
listItems[0].addEventListener('mouseout', () => {
    listItems[0].textContent = listItems[0].textContent.charAt(0).toUpperCase() + listItems[0].textContent.substring(1).toLowerCase();                    
});

// Adding eventListeners to all items
for ( let index = 0; index < listItems.length; index++ ) {
  // Add mouseover lowercase eventListener
  listItems[index].addEventListener('mouseover', () => {
      listItems[index].textContent = listItems[index].textContent.toUpperCase();                              
  });
  
  // Add mouseout lowercase eventListener
  listItems[index].addEventListener('mouseout', () => {
      listItems[index].textContent = listItems[index].textContent.toLowerCase();                              
  });
}
*/


/*
  Event bubbling and delegation
*/

// To make things more simple and flexible, we should attach an eventListener to an ancestor of all the list items 
// instead of attaching it to all the list items themselves -- saves memory and will handle adding/removing of elements
// We will want to attach it to an item that is not likely to be removed but as close to the target elements as possible.
// In this case we will use the <div> element.

// How do we know which child triggered the event?
// When an event is triggered, first argument received is the 'event' object. 
// event.terget is a reference to the first element that received the event

// Example to show target
document.addEventListener('click', (event) => {
  console.log(event.target);
});

// Add mouseover lowercase eventListener
listDiv.addEventListener('mouseover', (event) => {
  if ( event.target.tagName === 'LI' ) {
    event.target.textContent = event.target.textContent.toUpperCase();  
  }
});


// Add mouseout lowercase eventListener
listDiv.addEventListener('mouseout', (event) => {
  if ( event.target.tagName === 'LI' ) {
    event.target.textContent = event.target.textContent.toLowerCase();  
  }                            
});



