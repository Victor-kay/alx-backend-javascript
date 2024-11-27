const fs = require('fs');

function countStudents(path) {
  // Asynchronously read the file
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      // If an error occurs (e.g., file not found), throw an error
      throw new Error('Cannot load the database');
    }

    // Split the content into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Parse the header (first line) and the rest of the lines (student records)
    const [header, ...students] = lines;

    // Split the header by commas to confirm the structure (should contain "firstname,lastname,age,field")
    const headers = header.split(',');
    if (headers.length !== 4) {
      throw new Error('Invalid CSV format');
    }

    // Create an object to hold the count of students per field
    const fieldCount = {};

    // Iterate over each student record
    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');

      // Ensure each student has valid data (all fields should be present)
      if (firstname && lastname && age && field) {
        // Count the students in each field
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

    // Log the number of students in each field
    Object.entries(fieldCount).forEach(([field, data]) => {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
    });
  });
}

module.exports = countStudents;

