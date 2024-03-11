// 3-get_ids_sum.js
/**
 * Returns the sum of all student ids.
 * @param {Array} students - List of students.
 * @returns {number} - Sum of all student ids.
 */
function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
