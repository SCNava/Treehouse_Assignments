function exec (func, arg) {
  func(arg);
}

// You can pass functions into other functions as arguments
exec(function say (something) {
  console.log(something);
}, 'Hi there');

// Below is an anonymous function
exec((something) => {
  console.log(something);
}, 'Hi from anonymous function');


// This will run the function after the set timer (15000 ms) has elapsed. This uses a callback function
window.setTimeout(exec, 15000, (something) => {
  console.log(something);
}, 'Hi from anonymous function');
