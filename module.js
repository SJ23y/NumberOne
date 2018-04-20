var fs = require('fs');

module.exports = function (file,ext,foo) {  
  fs.readdir(file, function(err, data) {
    if (err) {return foo(err);}
    else {
      var re = '.' + ext;
      var arr = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].endsWith(re)) {arr.push(data[i]);}   
  } 
    return foo(null, arr);}
  });
  
}