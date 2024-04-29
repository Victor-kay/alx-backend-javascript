// full_server/utils.js

import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        // Process the data to extract information and resolve the promise
        // For now, let's just resolve with the raw data
        resolve(data);
      }
    });
  });
};

export default readDatabase;
