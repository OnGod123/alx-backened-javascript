const readDatabase = require('../utils');

/**
 * List of valid majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 */
class StudentsController {
  static getAllStudents(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        const sortedGroups = Object.entries(studentGroups).sort((a, b) => {
          return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        });

        sortedGroups.forEach(([major, students]) => {
          responseParts.push(`Number of students in ${major}: ${students.length}. List: ${students.map(s => s.firstname).join(', ')}`);
        });

        res.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const major = req.params.major;

    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        if (!studentGroups[major]) {
          res.status(200).send('List: ');
          return;
        }
        const students = studentGroups[major].map(student => student.firstname).join(', ');
        res.status(200).send(`List: ${students}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;

