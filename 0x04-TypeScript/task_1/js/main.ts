/**
 * Interface representing a Teacher.
 * 
 * The `Teacher` interface defines the structure and types for teacher objects, including:
 * 
 * - `firstName` (string): The first name of the teacher. This property is read-only and can only be set when the object is initialized.
 * - `lastName` (string): The last name of the teacher. This property is read-only and can only be set when the object is initialized.
 * - `fullTimeEmployee` (boolean): Indicates whether the teacher is a full-time employee. This property is mandatory.
 * - `yearsOfExperience` (number, optional): The number of years the teacher has been teaching. This property is optional.
 * - `location` (string): The location where the teacher is based. This property is mandatory.
 * - `[key: string]: any`: This index signature allows the addition of any other properties dynamically, such as `contract` or others.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

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
const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true,  
};


console.log(teacher);

/**
 * Defines the signature of a function that formats a teacher's name.
 * 
 * The `printTeacherFunction` interface specifies a function signature:
 * 
 * - It takes two parameters: `firstName` (string) and `lastName` (string).
 * - It returns a formatted string that combines the first letter of the first name with the full last name.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

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
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

/**
 * Interface representing a Director, which extends the Teacher interface.
 * 
 * The `Directors` interface includes all properties from the `Teacher` interface and adds:
 * - `numberOfReports` (number): The number of reports directly managed by the director.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

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
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};


console.log(director1);

/**
 * Interface representing the constructor signature for the StudentClass.
 * 
 * This interface describes how the constructor of the StudentClass should be defined:
 * 
 * - `firstName` (string): The first name of the student.
 * - `lastName` (string): The last name of the student.
 */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

/**
 * Interface representing the StudentClass.
 * 
 * This interface describes the methods and properties of the StudentClass:
 * 
 * - `workOnHomework`: A method that returns a string "Currently working".
 * - `displayName`: A method that returns the first name of the student.
 */
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Class representing a Student.
 * 
 * The StudentClass provides methods to work on homework and display the student's name.
 * 
 * - The constructor accepts `firstName` and `lastName` as arguments.
 * - `workOnHomework` returns a string indicating the student is working on homework.
 * - `displayName` returns the first name of the student.
 */
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Indicates that the student is currently working on homework.
   * 
   * @returns {string} A string "Currently working".
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Returns the first name of the student.
   * 
   * @returns {string} The first name of the student.
   */
  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass("Alice", "Johnson");
console.log(student.workOnHomework());  
console.log(student.displayName());     

