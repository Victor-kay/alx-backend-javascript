// 4-update_grade_by_city.js
/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students - List of students.
 * @param {string} city - City to filter students by.
 * @param {Array} newGrades - Array of objects with studentId and grade.
 * @returns {Array} - Array of objects representing students with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
