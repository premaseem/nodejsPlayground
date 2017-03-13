//Basic get request using node

var http = require('http');
var dns = require('dns');

// call back function is last argument for this function
dns.resolve4('www.google.com', function (err, addresses) {
  if (err) throw err;
  console.log('addresses: ' + JSON.stringify(addresses));
});


cbf = function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}

http.request({ hostname: 'example.com' },cbf ).end();


