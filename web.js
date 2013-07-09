require('fs')

var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(1000);
buffer.write(fs.readFileSync('/home/ubuntu/bitstarter/index.html', 'utf8'),"utf-8");


app.get('/', function(request, response) {
    response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
