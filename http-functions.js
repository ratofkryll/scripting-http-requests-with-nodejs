module.exports = function getHTML (host, path, callback) {
  var https = require('https');

  var requestOptions = {
    host: host,
    path: path
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
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
      return console.log(callback(printHTML(dataBody)));
    });

  });

};
