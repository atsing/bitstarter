var express = require('express');

var app = express.createServer(express.logger());

var data = require('fs').readFileSync('/home/ubuntu/bitstarter/index.html', 'utf8');


app.get('/', function(request, response) {
    response.send('Hello World 2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
