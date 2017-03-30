var express  = require('express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
  res.send('id: ' + req.params.id + ' <br>name: ' + req.params.name);
});

app.get('/things/:id([0-9]{5})', function(req, res) {
  res.send('id: ' + req.params.id);
});

app.get('*', function(req, res) {
  res.send('404 ERROR PAGE NOT FOUND');
});

app.listen(8080, function() {
  console.log('listening on port 8080');
});
