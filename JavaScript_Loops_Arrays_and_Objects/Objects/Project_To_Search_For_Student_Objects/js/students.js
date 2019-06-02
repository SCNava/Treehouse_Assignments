// My Solution -- Prior to Teacher's Solution

function print ( message ) {
  var container = document.getElementById('output');
  container.innerHTML = message;
}

// Create students array
var students = [
  {
    name: 'Amber Nava',
    track: 'iOS Development',
    achievements: 15,
    points: 12088
  },
  {
    name: 'Lindsay Shoaf',
    track: 'Android Development',
    achievements: 12,
    points: 8488
  },
  {
    name: 'Anthony Kraft',
    track: 'Front End Development',
    achievements: 17,
    points: 15753
  },
  {
    name: 'Kyle Pressley',
    track: 'Web Design',
    achievements: 13,
    points: 13757
  },
  {
    name: 'Marissa Sanders',
    track: 'Full Stack Development',
    achievements: 11,
    points: 9381
  }
];

/*

  First part of program -- prints out all student records

  var message = '';
  var currentStudent;
  
  // Get all data about students and create a message
  for ( var studentIndex = 0; studentIndex < students.length; studentIndex++ ) {
    currentStudent = students[studentIndex];
    message += '<h2>Student Number ' + (studentIndex + 1) + ':</h2>';
    for ( var property in currentStudent ) {
      message += '<p>' + property + ': ' + currentStudent[property] + '</p>';
    }
  }
  
  print(message);
*/

/*
  My attempt at the second part - search for students  -- before seeing the Teacher's solution
*/

// Search for specific student loop
var searchResponse;
var currentStudent;
var message = '';

while ( true ) {
  searchResponse = ( prompt('Enter a student\'s name to pull up their record (i.e. to find the student Jody Bowers, type \'Jody Bowers\' into the box). Type \'quit\' to quit.') ).toLowerCase();
  if ( searchResponse === 'quit' ) {
    break;
  } else {
    for ( var studentIndex = 0; studentIndex < students.length; studentIndex++ ) {
      currentStudent = students[studentIndex];
      
      if ( (currentStudent.name).toLowerCase() === searchResponse) {
        message += '<h2>Student: ' + currentStudent.name + '</h2>';
        message += '<p>Track: ' + currentStudent.track + '</p>';
        message += '<p>Achievements: ' + currentStudent.achievements + '</p>';
        message += '<p>Points: ' + currentStudent.points + '</p>';
      }
    }
    print(message);
  }
}

/*
// Teacher's Solution
var students = [
  {
    name: 'Amber Nava',
    track: 'iOS Development',
    achievements: 15,
    points: 12088
  },
  {
    name: 'Lindsay Shoaf',
    track: 'Android Development',
    achievements: 12,
    points: 8488
  },
  {
    name: 'Anthony Kraft',
    track: 'Front End Development',
    achievements: 17,
    points: 15753
  },
  {
    name: 'Kyle Pressley',
    track: 'Web Design',
    achievements: 13,
    points: 13757
  },
  {
    name: 'Marissa Sanders',
    track: 'Full Stack Development',
    achievements: 11,
    points: 9381
  }
];

function print ( message ) {
  var container = document.getElementById('output');
  container.innerHTML = message;
}

var message = '';
var student;

// Get all data about students and create a message
for ( var i = 0; i < students.length; i++ ) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.points + '</p>'
}

print(message);
*/

function getStudentReport ( student ) {
  var report += '<h2>Student: ' + currentStudent.name + '</h2>';
  report += '<p>Track: ' + currentStudent.track + '</p>';
  report += '<p>Achievements: ' + currentStudent.achievements + '</p>';
  report += '<p>Points: ' + currentStudent.points + '</p>';
  return report;
}

var message = '';
var search;

while ( true ) {
  search = ( prompt('Enter a student\'s name to pull up their record (i.e. to find the student Jody Bowers, type \'Jody Bowers\' into the box). Type \'quit\' to quit.') ).toLowerCase();
  if ( search === null || search === 'quit' ) {
    break;
  }
  for ( var i = 0; i < students.length; i++ ) { // The cancel button on a prompt returns null
      student = students[i];
      if ( student.name === search ) {
        message = getStudentReport(student);
        print(message);
      }
  }
}