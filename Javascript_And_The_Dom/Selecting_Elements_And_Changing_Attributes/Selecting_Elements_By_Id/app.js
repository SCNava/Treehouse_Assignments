const heading = document.getElementById('myHeading');
const button = document.getElementById('change-color-button');
const textInput = document.getElementById('myTextInput');

/* 
  addEventListener causes the element to listen for events - like click events
  
*/
heading.addEventListener('click', () => {
   heading.style.color = 'red';
});

/* 
  a button to generate a random color for the heading
*/
button.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 8); 
  let colorList = ['red', 'green', 'yellow', 'blue', 'purple', 'tomato', 'seagreen', 'teal']
 
  heading.style.color = colorList[randomNumber];                        
});

/* 
  a text field to change the color of the heading (when typed in and clicked)
*/
textInput.addEventListener('click', () => {
   heading.style.color = textInput.value;
});

