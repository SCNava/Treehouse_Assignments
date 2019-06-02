//First Way to ReWrite -- Leaving Variables (More Readable)

/*
  function getColorValue () {
    return Math.floor(Math.random() * 256 );
  }
  
  var html = '';
  var red;
  var green;
  var blue;
  var rgbColor;
  
  for ( var counter = 1; counter <= 10; counter++ ) {
    red = getColorValue();
    green = getColorValue();
    blue = getColorValue();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
  }
  document.write(html);
*/

//Second Way to ReWrite -- Removing Variables -- Shorter but Less Readable

/*
  function getColorValue () {
    return Math.floor(Math.random() * 256 );
  }
  
  var html = '';
  
  for ( var counter = 1; counter <= 10; counter++ ) {
    rgbColor = 'rgb(' + getColorValue() + ',' + getColorValue()  + ',' + getColorValue()  + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
  }
  document.write(html);
*/

//Teacher's Solution

/* Main Takeaways from Teacher's Solution: He makes all that he can a function so that it is modular and re-usable. Similar to 'Uncle Bob' */

function randomRGB () {
  return Math.floor(Math.random() * 256 );
}

function randomColor () {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print ( message ) {
  document.write( message );
}

var html = '';
var rgbColor;

for ( var i = 1; i <= 10; i += 1 ) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);