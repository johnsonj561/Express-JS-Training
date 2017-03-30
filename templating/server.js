var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/components', function(req, res){
    res.render('content');
});

app.listen(8080, function() {

  console.log('Listening on port 8080');

});
