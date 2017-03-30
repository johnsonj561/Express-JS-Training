var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/hello', function(req, res) {
  res.send('Hello World');
});

app.get('/add', function(req, res) {
  res.send('5 + 5 = ' + (5+5));
});

app.post('/add', function(req, res) {
  res.send('\n\nPosting to /add route:\n\n');
});

app.listen(8080, function() {
  console.log('Server is listening on port 8080');
});
