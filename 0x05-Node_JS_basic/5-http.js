// 5-http.js

const http = require('http');
const { countStudents } = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Determine the requested URL path
  const { url } = req;
  
  if (url === '/') {
    // Return "Hello Holberton School!" for the root path
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // Return the list of students for the /students path
    countStudents(process.argv[2])
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    // Return a 404 Not Found error for other paths
    res.writeHead(404);
    res.end('404 Not Found\n');
  }
});

// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app variable
module.exports = app;
