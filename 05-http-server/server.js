const http = require('http');
const fs = require('fs');

const host = '10.0.239.20';
const port = 80;

function requestHandler(request, response) {
  console.log(request.url);
  response.end('Hi there! The server is up!');
}

http.createServer(requestHandler)
  .listen(port, () => {
    console.log(`Server up on http://${host}:${port}`);
  });