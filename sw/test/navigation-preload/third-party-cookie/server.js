var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (request, response) {
  console.log('localhost:9797: ' + request.url);
  console.log(request.headers);

  var parsed_url = url.parse(request.url)
  var path = parsed_url.pathname;
  if (path == '/sw.js') {
    console.log('serving the service worker');
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Content-Type', 'text/javascript');
    fs.readFile('sw.js', 'utf8', function(err, data) {
      if (err) throw err;
      response.write(data);
      response.end();
    });
    return;
  }

  if (path == '/')
    path = '/index.html';
  fs.readFile('.' + path, 'utf8', function(err, data) {
    console.log('serving: ' + path);
    if (err) {
      console.log(err);
      response.writeHead(404);
      response.end();
      return;
    }
    response.write(data);
    response.end();
  });

}).listen(9797, 'localhost');

console.log('Server running at http://localhost:9797');
