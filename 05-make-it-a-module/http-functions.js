module.exports = function getHTML (options, callback) {
  var https = require('https');

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
      callback(dataBody);
    });
  });
};
