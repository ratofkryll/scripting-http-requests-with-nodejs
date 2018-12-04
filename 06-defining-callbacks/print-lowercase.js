var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowercase);
