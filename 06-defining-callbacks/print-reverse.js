var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printLowercase (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printLowercase);
