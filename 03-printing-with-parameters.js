var https = require('https');

function getAndPrintHTMLChunks (host, path) {

  var requestOptions = {
    host: host,
    path: path
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    if (response.statusCode !== 200) {
      return console.log("Error " + response.statusCode);
    }

    response.setEncoding('utf8');

    var dataBody = '';
    response.on('data', function (data) {
      dataBody += data;
    });

    response.on('end', function () {
      console.log(dataBody);
      console.log('Response stream complete.');
    });

  });

};

console.log(getAndPrintHTMLChunks('sytantris.github.io', '/http-examples/step3.html'));
