// 2-get_students_by_loc.js
/**
 * Returns an array of students located in a specific city.
 * @param {Array} students - List of students.
 * @param {string} city - City to filter students by.
 * @returns {Array} - Array of objects representing students in the specified city.
 */
function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

export default getStudentsByLocation;
