// 7-http_express.js

const express = require('express');
const { countStudents } = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send "Hello Holberton School!" as the response
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' endpoint
app.get('/students', (req, res) => {
  // Call the countStudents function with the database file name passed as an argument
  countStudents('database.csv')
    .then(() => {
      // Response sent by countStudents function
      res.end();
    })
    .catch((error) => {
      // If an error occurs, send the error message as the response
      res.status(500).send(error.message);
    });
});

// Start the server and listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app variable
module.exports = app;
