var https = require('https');

function getAndPrintHTMLChunks (callback) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    if (response.statusCode !== 200) {
      callback(new Error('Request failed with Status Code ' + response.statusCode, null));
      return;
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

console.log(getAndPrintHTMLChunks());
