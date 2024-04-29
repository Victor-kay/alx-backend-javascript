// 2-read_file.js

const fs = require('fs');

/**
 * Counts the number of students in each field and logs the result.
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Initialize an object to store the counts for each field
    const counts = {};
    
    // Iterate through each line (student record) in the database
    for (const line of lines) {
      // Split the line into fields
      const [firstName, lastName, age, field] = line.split(',');
      
      // If the field is not already in the counts object, initialize its count to 0
      if (!counts[field]) {
        counts[field] = 0;
      }
      
      // Increment the count for the field
      counts[field]++;
    }
    
    // Log the total number of students
    console.log(`Number of students: ${lines.length}`);
    
    // Log the number of students in each field and their first names
    for (const field in counts) {
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${lines.filter(line => line.split(',')[3] === field).map(line => line.split(',')[0]).join(', ')}`);
    }
  } catch (error) {
    // If an error occurs while reading the file, log an error message
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;
