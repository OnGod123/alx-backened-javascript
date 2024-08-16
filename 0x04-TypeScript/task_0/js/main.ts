/**
 * Interface representing a Student.
 * 
 * The `Student` interface defines the structure and types for student objects, including:
 * - `firstName` (string): The first name of the student.
 * - `lastName` (string): The last name of the student.
 * - `age` (number): The age of the student.
 * - `location` (string): The location where the student is based.
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Represents the first student.
 * 
 * An instance of a `Student` with the following properties:
 * - `firstName`: 'Sofia'
 * - `lastName`: 'Cheung'
 * - `age`: 19
 * - `location`: 'California'
 */
const studentA: Student = {
  firstName: 'Sofia',
  lastName: 'Cheung',
  age: 19,
  location: 'California',
};

/**
 * Represents the second student.
 * 
 * An instance of a `Student` with the following properties:
 * - `firstName`: 'Mafer'
 * - `lastName`: 'Morales'
 * - `age`: 19
 * - `location`: 'Panama'
 */
const studentB: Student = {
  firstName: 'Mafer',
  lastName: 'Morales',
  age: 19,
  location: 'Panama',
};

/**
 * Array containing multiple Student objects.
 * 
 * The `studentsList` array includes:
 * - `studentA`
 * - `studentB`
 */
const studentsList: Student[] = [studentA, studentB];

/**
 * Creates and populates an HTML table with student data.
 * 
 * - Creates a table element.
 * - Creates a tbody element to contain the rows.
 * - Iterates over the `studentsList` array to generate rows with the student's first name and location.
 * - Appends the rows to the tbody.
 * - Appends the tbody to the table.
 * - Appends the table to the document body.
 */
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');

  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

