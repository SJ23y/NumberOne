var http = require('http'); 

var result = ['','',''];
var n = 0;
function cb(status, link) {
  result[status] += link;
  n+=1;
  if (n == 3) {
    result.forEach(function(file) {
      console.log(file);
    })
    }
}

http.get(process.argv[2], function(res) {  
  var arr = [];  
  res.on("data", function(data) {
    arr.push(data);
  });
  res.on("end", function() {    
    var link = Buffer.concat(arr).toString();
    cb(0,link);    
  });  
});

http.get(process.argv[3], function(res) {  
  var arr = [];  
  res.on("data", function(data) {
    arr.push(data);
  });
  res.on("end", function() {    
    var link = Buffer.concat(arr).toString();
    cb(1,link);    
  });  
});

http.get(process.argv[4], function(res) {  
  var arr = [];  
  res.on("data", function(data) {
    arr.push(data);
  });
  res.on("end", function() {    
    var link = Buffer.concat(arr).toString();
    cb(2,link);    
  });  
});











