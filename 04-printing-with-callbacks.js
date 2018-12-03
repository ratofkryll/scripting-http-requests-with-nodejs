var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (callback) {

  /* Add your code here */
  https.get(requestOptions, function (response) {
    if(response.statusCode !== 200) {
      callback(console.log('Request Failed with Status Code ' + response.statusCode));
      return;
    }

    response.setEncoding('utf8');

    var dataBody = '';
    response.on('data', function (data) {
      dataBody += data;
    });

    response.on('end', function () {
      callback(printHTML(dataBody));
    });

  });

};

function printHTML (html) {
  console.log(html);
}

console.log(getHTML(function() {
  return;
}));
