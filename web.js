var fs = require('fs');

var express = require('express');
var htmlfile = "index.html";

var app = express();

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

app.get('/bvu_pgp_key.html', function(request, response) {
  var html = fs.readFileSync('bvu_pgp_key.html').toString();
  response.send(html);
});

app.get('/bryan_lilly.jpg', function(request, response) {
   var img = fs.readFileSync('./bryan_lilly.jpg');
   response.writeHead(200, {'Content-Type': 'image/gif' });
   response.end(img, 'binary');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
