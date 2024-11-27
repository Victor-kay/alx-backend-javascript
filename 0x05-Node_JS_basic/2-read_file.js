const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the content into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // The first line is the header, so we don't need to process it for student data
    const [header, ...students] = lines;

    // Split the header to ensure it has the expected columns
    const headers = header.split(',');
    if (headers.length !== 4) {
      throw new Error('Invalid CSV format');
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

  } catch (err) {
    // If an error occurs (e.g., file doesn't exist), throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
