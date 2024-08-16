/**
 * Interface representing the responsibilities of a Director.
 * 
 * The `DirectorsInterface` defines the methods that a Director should implement:
 * 
 * - `workFromHome`: Returns a string indicating if the Director can work from home.
 * - `getCoffeeBreak`: Returns a string indicating if the Director can take a coffee break.
 * - `workDirectorTasks`: Returns a string indicating the Director's tasks.
 */
interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

/**
 * Interface representing the responsibilities of a Teacher.
 * 
 * The `TeacherInterface` defines the methods that a Teacher should implement:
 * 
 * - `workFromHome`: Returns a string indicating if the Teacher can work from home.
 * - `getCoffeeBreak`: Returns a string indicating if the Teacher can take a coffee break.
 * - `workTeacherTasks`: Returns a string indicating the Teacher's tasks.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Class implementing the responsibilities of a Director.
 * 
 * The `Director` class implements the `DirectorsInterface` and provides specific behavior:
 * 
 * - `workFromHome`: Returns "Working from home".
 * - `getCoffeeBreak`: Returns "Getting a coffee break".
 * - `workDirectorTasks`: Returns "Getting to director tasks".
 */
class Director implements DirectorsInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Class implementing the responsibilities of a Teacher.
 * 
 * The `Teacher` class implements the `TeacherInterface` and provides specific behavior:
 * 
 * - `workFromHome`: Returns "Cannot work from home".
 * - `getCoffeeBreak`: Returns "Cannot have a break".
 * - `workTeacherTasks`: Returns "Getting to work".
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

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
function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  else return new Director(); 
}

// Example usage
console.log(createEmployee('Guillaume', 'Salva', 200));  // Creates a Teacher
console.log(createEmployee('John', 'Doe', 1000));        // Creates a Director
console.log(createEmployee('Gerard', 'Zuck', '$500'));   // Creates a Director (salary is treated as a string)

/**
 * Type guard function to check if the given employee is a Director.
 * 
 * The `isDirector` function determines whether the employee is an instance of `Director`.
 * 
 * @param {Director | Teacher} employee - The employee to check.
 * @returns {boolean} True if the employee is a `Director`, false otherwise.
 */
function isDirector(employee: Director | Teacher): employee is Director {
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
function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}


console.log(executeWork(createEmployee('Guillaume', 'Salva', 200)));  
console.log(executeWork(createEmployee('John', 'Doe', 1000)));        

/**
 * Type alias for subjects taught in a class.
 * 
 * The `Subjects` type can be either 'Math' or 'History'.
 */
type Subjects = 'Math' | 'History';

/**
 * Function to determine the class being taught based on the subject.
 * 
 * The `teachClass` function returns a string indicating what is being taught based on the provided subject.
 * 
 * @param {Subjects} todayClass - The subject being taught.
 * @returns {string} A string indicating the class being taught.
 */
function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}


console.log(teachClass('Math'));      
console.log(teachClass('History'));  

