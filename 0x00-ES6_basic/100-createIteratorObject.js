export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let index = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]: function* () {
      while (index < departments.length) {
        const department = departments[index];
        if (employeeIndex < department.length) {
          yield department[employeeIndex];
          employeeIndex++;
        } else {
          index++;
          employeeIndex = 0;
        }
      }
    }
  };
}
