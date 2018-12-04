var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {
    if (response.statusCode !== 200) {
      return console.log('Error ' + response.statusCode);
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

getAndPrintHTML(requestOptions);
