const express = require('express');
const AppController = require('./controllers/AppController');
const StudentsController = require('./controllers/StudentsController');

const app = express();
const port = 1245;

app.get('/', (req, res) => AppController.getHomepage(req, res));
app.get('/students', (req, res) => StudentsController.getAllStudents(req, res));
app.get('/students/:major', (req, res) => StudentsController.getAllStudentsByMajor(req, res));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

