var express = require("express");
var path = require('path');
var bodyparser = require('body-parser');
var style = require('stylus');
var fs = require('fs');
var app = express();



app.get('/home', function(req, res) {
  res.render('index', {'date': new Date().toDateString()});
}
       );

app.get('/search', function(req, res) {
   res.send(req.query);
});

app.get('/books', function(req, res) {
  var str = fs.readFileSync(process.argv[3]);
  res.json(JSON.parse(str));
});

app.use(bodyparser.urlencoded({'extended': false}));
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.post('/form', function(req, res) {    
  res.end(req.body.str.split('').reverse().join(''));
});
app.use(style.middleware(__dirname + '/public'));
app.put('/message/:id', function(req, res) {
  var result = require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex');
  res.end(result);
})
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.listen(process.argv[2]);