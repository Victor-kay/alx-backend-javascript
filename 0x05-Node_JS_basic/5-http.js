const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async'); // Import the async function for reading the CSV

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.setHeader('Content-Type', 'text/plain');

  // Route for the root URL "/"
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  }
  // Route for "/students"
  else if (req.url === '/students') {
    const databasePath = process.argv[2]; // Get the database path from command-line arguments

    // Check if the database file is passed
    if (!databasePath) {
      res.statusCode = 400;
      res.end('Error: Database file is required.\n');
      return;
    }

    // Read the database file asynchronously
    countStudents(databasePath)
      .then(() => {
        res.end('Done!\n');
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`Error: ${err.message}\n`);
      });
  } else {
    // Handle undefined routes
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing or other purposes
module.exports = app;
