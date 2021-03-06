var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    if (response.statusCode !== 200) {
      return console.log("Error " + response.statusCode);
    }

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log(data + '\n');
    });

    response.on('end', function () {
      console.log('Response stream complete.');
    });

  });

};

console.log(getAndPrintHTMLChunks());
