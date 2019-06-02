/*
  Quiz Program -- My Attempt Before Teacher's Solution
*/

/*
  function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }
  
  function printQuestions ( questions ) {
    var listHTML = '<ol>';
    for ( var questionNumber = 0; questionNumber < questions.length; questionNumber++ ) {
      listHTML += '<li>' + questions[questionNumber] + '</li>';
    }
    listHTML += '</ol>';
    print( listHTML );
  }
  
  function printQuestionsAndAnswers ( questionsAndAnswers ) {
    var listHTML = '<ol>';
    for ( var questionNumber = 0; questionNumber < questionsAndAnswers.length; questionNumber++ ) {
      listHTML += '<li>' + questionsAndAnswers[questionNumber][0] + '<br>' + '    Correct Answer: ' + questionsAndAnswers[questionNumber][1] + '</li>';
    }
    listHTML += '</ol>';
    print( listHTML );
  }
  
  // Questions and answers
  var questionsAndAnswers = [
    [ 'What is the capital of North Carolina?','raleigh' ],
    [ 'What is the language responsible for the \'structure\' of websites?','html' ],
    [ 'What is the language responsible for the \'style\' of websites?','css' ]
  ]
  var userAnswer;
  var correctlyAnsweredQuestions = [];
  var incorrectlyAnsweredQuestionsWithAnswer = [];
  var correctAnswerHeading = '<h2>Correctly Answered Questions:</h2>';
  var incorrectAnswerHeading = '<h2>Incorrectly Answered Questions:</h2>';
  
  // Prompt questions to user
  for ( var questionNumber = 0; questionNumber < questionsAndAnswers.length; questionNumber++ ) {
   userAnswer = (prompt( questionsAndAnswers[questionNumber][0] )).toLowerCase(); // taking to lowercase in case user enters caps
   if ( userAnswer === questionsAndAnswers[questionNumber][1] ) {
     correctlyAnsweredQuestions.push(questionsAndAnswers[questionNumber][0]);
   } else {
     incorrectlyAnsweredQuestionsWithAnswer.push(questionsAndAnswers[questionNumber]);
   }
  }
  
  // Print out correctly and incorrectly answered questions in ordered list
  print(correctAnswerHeading);
  printQuestions(correctlyAnsweredQuestions);
  print(incorrectAnswerHeading);
  printQuestionsAndAnswers(incorrectlyAnsweredQuestionsWithAnswer);
*/



/* 
  Teacher's Solution 
*/

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList ( arr ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < arr.length; i += 1 ) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

for ( var i = 0; i < questions.length; i += 1 ) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt( prompt(question) );
  if ( response === answer ) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right!!!";
html += "<h2>You got these questions correct:</h2>";
html += buildList(correct);
html += "<h2>You got these questions wrong</h2>"
html += buildList(wrong);

print (html);


