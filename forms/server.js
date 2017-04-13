var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded( { extended: true } ) );  // for parsing application/x-www
app.use(upload.array());  // for parsing multipart/form-data
app.use(express.static('public'));

app.post('/', function(req, res) {
  console.log(req.body);
  res.send('received your request<br>' + req.body);
});

app.get('/', function(req, res) {
  console.log('get / request');
  res.render('form');
});

app.listen(8080, function() {
  console.log('app listening on port 8080');
});
