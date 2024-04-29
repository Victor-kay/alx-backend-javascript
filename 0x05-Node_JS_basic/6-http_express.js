// 6-http_express.js

const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send "Hello Holberton School!" as the response
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app variable
module.exports = app;
