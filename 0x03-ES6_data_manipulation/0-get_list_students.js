/**
 * Retrieves a list of students with their IDs, first names, and locations.
 * @returns {Array} Array of student objects, where each object contains:
 * - id: Number - The unique identifier of the student.
 * - firstName: String - The first name of the student.
 * - location: String - The current location of the student.
 */
export default function getListStudents() {
  return [
    {
      id: 1,
      firstName: "Guillaume",
      location: "San Francisco",
    },
    {
      id: 2,
      firstName: "James",
      location: "Columbia",
    },
    {
      id: 5,
      firstName: "Serena",
      location: "San Francisco",
    }
  ];
}

