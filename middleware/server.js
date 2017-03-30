var express = require('express');
var app = express();

// First middleware executed before response is sent
app.use(function(req, res, next) {
  console.log('Start');
  next();
});

// Route handler
app.get('/', function(req, res, next) {
  console.log('Middle');
  res.send('Middle');
  next();
});

// Last middleware  executed after response is sent
app.use('/', function(req, res) {
  console.log('End');
});


app.listen(8080, function() {
  console.log('Server listening on port 8080');
});
