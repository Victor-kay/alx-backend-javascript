// 3-read_file_async.js

const fs = require('fs');

/**
 * Counts the number of students in each field asynchronously and logs the result.
 * @param {string} path - The path to the database file.
 * @returns {Promise} A Promise that resolves when the counting is complete.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        console.error('Cannot load the database');
        reject(error);
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const counts = {};
        for (const line of lines) {
          const [firstName, lastName, age, field] = line.split(',');
          if (!counts[field]) {
            counts[field] = 0;
          }
          counts[field]++;
        }
        console.log(`Number of students: ${lines.length}`);
        for (const field in counts) {
          console.log(`Number of students in ${field}: ${counts[field]}. List: ${lines.filter(line => line.split(',')[3] === field).map(line => line.split(',')[0]).join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
