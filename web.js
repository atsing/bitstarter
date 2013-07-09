var express = require('express');

var app = express.createServer(express.logger());

var data = fs.readFileSync('./bitstarter/index.html', 'utf8'); 
console.log("data", data);

app.get('/', function(request, response) {
    response.send('Hello World 2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
