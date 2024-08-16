/**
 * Represents the first student.
 *
 * An instance of a `Student` with the following properties:
 * - `firstName`: 'Sofia'
 * - `lastName`: 'Cheung'
 * - `age`: 19
 * - `location`: 'California'
 */
var studentA = {
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
var studentB = {
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
var studentsList = [studentA, studentB];
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
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var cellName = document.createElement('td');
    var cellLocation = document.createElement('td');
    cellName.textContent = student.firstName;
    cellLocation.textContent = student.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
