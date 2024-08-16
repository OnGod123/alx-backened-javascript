/**
 * Example of creating a Teacher object.
 *
 * An example `Teacher` object is created with the following properties:
 *
 * - `firstName`: 'John'
 * - `lastName`: 'Doe'
 * - `fullTimeEmployee`: true
 * - `location`: 'New York'
 * - `contract`: true (a custom attribute added dynamically)
 */
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: true,
};
console.log(teacher);
/**
 * Creates a formatted string from the teacher's name.
 *
 * The `printTeacher` function takes a first name and a last name and returns a string formatted as follows:
 * "J. Doe" where "J" is the first letter of the first name and "Doe" is the full last name.
 *
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} A formatted string combining the first letter of the first name with the full last name.
 */
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
/**
 * Example of creating a Director object.
 *
 * An instance of a `Directors` object with the following properties:
 * - `firstName`: 'John'
 * - `lastName`: 'Doe'
 * - `fullTimeEmployee`: true
 * - `location`: 'London'
 * - `numberOfReports`: 17
 */
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
console.log(director1);
/**
 * Class representing a Student.
 *
 * The StudentClass provides methods to work on homework and display the student's name.
 *
 * - The constructor accepts `firstName` and `lastName` as arguments.
 * - `workOnHomework` returns a string indicating the student is working on homework.
 * - `displayName` returns the first name of the student.
 */
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /**
     * Indicates that the student is currently working on homework.
     *
     * @returns {string} A string "Currently working".
     */
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    /**
     * Returns the first name of the student.
     *
     * @returns {string} The first name of the student.
     */
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Alice", "Johnson");
console.log(student.workOnHomework());
console.log(student.displayName());
