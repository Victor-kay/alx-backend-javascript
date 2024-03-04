export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (departmentIndex < departments.length) {
        const employees = departments[departmentIndex];
        if (employeeIndex < employees.length) {
          const result = { value: employees[employeeIndex], done: false };
          employeeIndex++;
          return result;
        } else {
          employeeIndex = 0;
          departmentIndex++;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
