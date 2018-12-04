var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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
      // console.log(dataBody);
      callback(dataBody);
    });
  });
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
