var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
 if (req.method == "POST") {
    var result = "";
    
    req.on("data", function(chunk) {
      result += chunk;
    })
    
    req.on("end", function() {
      res.write(result.toUpperCase());
      res.end();
    })  
    
  } 
  

}).listen(8000, "0.0.0.0");