var fs = require('fs');
var http = require('http');
var url = process.argv[2];

var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);  
})

server.listen(url, "0.0.0.0");


