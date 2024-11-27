const http = require('http');

// Create a server that listens on port 1245
const app = http.createServer((req, res) => {
  // Set the response header to indicate it's plain text
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body with the desired message
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app to allow testing
module.exports = app;
