require('fs')

var express = require('express');

var app = express.createServer(express.logger());

var dat = fs.readFileSync('/home/ubuntu/bitstarter/index.html', 'utf8');


app.get('/', function(request, response) {
    response.send(dat);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
