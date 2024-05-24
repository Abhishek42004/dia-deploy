// server.js

// Import the http module
const http = require('http');
require('dotenv').config();

// Define the hostname and port
const hostname = '127.0.0.1';
const port = process.env.prot || 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Check if the request is for the root URL
  if (req.url === '/') {
    res.end('Hello World\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Make the server listen on the defined hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
