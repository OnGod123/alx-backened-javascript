/**
 * Class implementing the responsibilities of a Director.
 *
 * The `Director` class implements the `DirectorsInterface` and provides specific behavior:
 *
 * - `workFromHome`: Returns "Working from home".
 * - `getCoffeeBreak`: Returns "Getting a coffee break".
 * - `workDirectorTasks`: Returns "Getting to director tasks".
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
/**
 * Class implementing the responsibilities of a Teacher.
 *
 * The `Teacher` class implements the `TeacherInterface` and provides specific behavior:
 *
 * - `workFromHome`: Returns "Cannot work from home".
 * - `getCoffeeBreak`: Returns "Cannot have a break".
 * - `workTeacherTasks`: Returns "Getting to work".
 */
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
/**
 * Factory function to create either a Director or a Teacher based on salary.
 *
 * The `createEmployee` function determines the type of employee to create:
 *
 * - If the salary is less than 500, it creates a `Teacher`.
 * - Otherwise, it creates a `Director`.
 *
 * @param {string} firstName - The first name of the employee.
 * @param {string} lastName - The last name of the employee.
 * @param {number | string} salary - The salary of the employee, can be a number or string.
 * @returns {Director | Teacher} A new instance of `Director` or `Teacher`.
 */
function createEmployee(firstName, lastName, salary) {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    else
        return new Director();
}
// Example usage
console.log(createEmployee('Guillaume', 'Salva', 200)); // Creates a Teacher
console.log(createEmployee('John', 'Doe', 1000)); // Creates a Director
console.log(createEmployee('Gerard', 'Zuck', '$500')); // Creates a Director (salary is treated as a string)
/**
 * Type guard function to check if the given employee is a Director.
 *
 * The `isDirector` function determines whether the employee is an instance of `Director`.
 *
 * @param {Director | Teacher} employee - The employee to check.
 * @returns {boolean} True if the employee is a `Director`, false otherwise.
 */
function isDirector(employee) {
    return employee instanceof Director;
}
/**
 * Executes work based on the type of employee.
 *
 * The `executeWork` function returns the specific tasks based on whether the employee is a Director or Teacher.
 *
 * @param {Director | Teacher} employee - The employee whose tasks to execute.
 * @returns {string} The tasks assigned to the employee.
 */
function executeWork(employee) {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}
console.log(executeWork(createEmployee('Guillaume', 'Salva', 200)));
console.log(executeWork(createEmployee('John', 'Doe', 1000)));
/**
 * Function to determine the class being taught based on the subject.
 *
 * The `teachClass` function returns a string indicating what is being taught based on the provided subject.
 *
 * @param {Subjects} todayClass - The subject being taught.
 * @returns {string} A string indicating the class being taught.
 */
function teachClass(todayClass) {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
