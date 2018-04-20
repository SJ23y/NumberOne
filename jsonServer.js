var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {
  var json = url.parse(req.url, true);
  if (json.pathname == '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var q = new Date(json.query.iso);
    q = {"hours": q.getHours(),"minute": q.getMinutes(), "second": q.getSeconds()}
    res.write(JSON.stringify(q));
    res.end();
  }
  
  if (json.pathname == '/api/unixtime') {    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var u = new Date(json.query.iso);
    res.write(JSON.stringify({"unixtime": u.getTime()}));
    res.end()
  }
  
})

server.listen(process.argv[2]);