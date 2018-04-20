var net = require('net');

var server = net.createServer(function (socket) {
  socket.end("y+m+d++h+mi");  
});

server.listen(8080, '127.0.0.1');