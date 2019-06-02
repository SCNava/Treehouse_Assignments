// Creating an array
var shoppingList = [ 
  'carrots', 
  'milk', 
  'eggs' 
];

// Accesssing an array
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

// Adding items to an array
shoppingList[shoppingList.length] = 'onions'; // Using length to add
shoppingList.push('greek yogurt'); // Using push to add one item
shoppingList.push('macaroni and cheese', 'coffee', 'apples'); // Using push to add multiple items

// Adding an item to the beginning of an array
shoppingList.unshift('candy'); // My guess is it shifts the stack array down by the number of items and inserts these in the beginning