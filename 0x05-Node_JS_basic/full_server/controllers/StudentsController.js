// full_server/controllers/StudentsController.js

import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.databaseFile);
      // Process the data to display the list of students
      // For now, let's just send a message
      res.status(200).send('This is the list of our students');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(req.databaseFile);
      // Process the data to display the list of students by major
      // For now, let's just send a message
      res.status(200).send(`List of students in ${major}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
