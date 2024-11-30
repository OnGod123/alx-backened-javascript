const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading students data');
      return;
    }

    const students = data.split('\n')
      .filter(line => line.trim() !== '') // Filter out empty lines
      .map(line => line.trim());

    res.send(`This is the list of our students\n${students.join('\n')}`);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
