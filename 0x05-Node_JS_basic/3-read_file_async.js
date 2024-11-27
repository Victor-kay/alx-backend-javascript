const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // If the file cannot be read, reject the promise with an error
        return reject(new Error('Cannot load the database'));
      }

      // Split the content into lines and filter out any empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // The first line is the header, which we don't need to process for students
      const [header, ...students] = lines;

      // Split the header to ensure it has the expected columns
      const headers = header.split(',');
      if (headers.length !== 4) {
        return reject(new Error('Invalid CSV format'));
      }

      // Create an object to store student counts and their first names by field
      const fieldCount = {};

      // Process each student record
      students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');

        // Skip invalid records (missing fields)
        if (firstname && lastname && age && field) {
          // Initialize field if it doesn't exist in fieldCount
          if (!fieldCount[field]) {
            fieldCount[field] = { count: 0, students: [] };
          }
          fieldCount[field].count++;
          fieldCount[field].students.push(firstname);
        }
      });

      // Log the total number of students
      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their names
      Object.entries(fieldCount).forEach(([field, data]) => {
        console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
      });

      // Resolve the promise after logging
      resolve();
    });
  });
}

module.exports = countStudents;
