var answer = prompt('What programming language is the name of a gem?');

// Conditional statement

// Some semantic rules to consider -- per Douglas Crockford
// Use line comments and not as many 'block comments'
// Add spaces after any conditional i.e. if () while () for () etc.
// Start functions and loops/conditionals with a brace on the same line as seen below

// === in JavaScript is an 'equality' or 'strict equal to' comparison. this compares both 'type' AND 'value'
// == is just a regular 'equal to' comparison
// === is deemed better as you can get into weird cases like ('' == 0) which evaluates to TRUE
// however ('' === 0) evaluates to FALSE
// in the same sense it is better to use the 'strict not equals' operator !==

// you can also do comparisons between strings to see if the first character is 'less than' or lower in the alphabet than another
// an example of this is ('apple' < 'bear') which evaluates to TRUE

if (answer.toLowerCase() === 'ruby') {
  document.write('<p style="font-family: Calibri; font-size: 16px;">You got it right!</p>');
} else {
  document.write('<p style="font-family: Calibri; font-size: 16px;">I\'m sorry, that is incorrect.</p>');
}