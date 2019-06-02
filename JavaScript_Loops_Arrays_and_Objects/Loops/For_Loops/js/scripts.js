//My Solution -- Prior to Teacher's Solution
/*
for ( var counter = 0; counter < 10; counter++ ) {
  document.write( "<div>" + counter + "</div>" );
}
*/

//Teacher's Solution
var html = '';
for ( var i = 1; i <= 10; i += 1 ) {
  html += '<div>' + i + '</div>';
}
document.write( html );