// full_server/server.js

import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

// Middleware to set the database file name
app.use((req, res, next) => {
  req.databaseFile = process.argv[2]; // Retrieve the database filename from command line argument
  next();
});

// Use the routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
