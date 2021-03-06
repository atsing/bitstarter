var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
   
    var content = fs.readFileSync('index.html', 'utf8');
    var buffer = new Buffer(content); 
    response.send(buffer.toString('utf-8')); //response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
