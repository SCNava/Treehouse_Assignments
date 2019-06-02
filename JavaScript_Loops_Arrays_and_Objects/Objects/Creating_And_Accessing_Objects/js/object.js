// Objects in JavaScript are enclosed in a pair of braces { }
var student = {
  firstName: "Steven",
  lastName: "Nava",
  country: "USA",
  age: 30,
  treehouseStudent: true,
  skills: [
    'JavaScript',
    'HTML',
    'CSS'
  ]
}

// Properties can be both accessed and added using dot notation or as arrays are but with the parameter in quotes
document.write('<p>' + student['firstName'] + '</p>'); // accessing the object using the [''] method
student['hasPets'] = true;
document.write('<p>' + student['hasPets'] + '</p>');

document.write('<p>' + student.lastName); // accessing the object using dot notation
student.isMarried = true;
document.write('<p>' + student.isMarried + '</p>');