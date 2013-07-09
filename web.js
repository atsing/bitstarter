var express = require('express');

var app = express.createServer(express.logger());

var data = fs.readFileSync("/home/ubuntu/bitstarter/index.html"); 
buf = new Buffer(40);

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
    response.send(buf.toString(data));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
