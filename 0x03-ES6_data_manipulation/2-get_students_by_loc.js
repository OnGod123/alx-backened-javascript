/**
 * Filters an array of student objects to retrieve only those located in 'San Francisco'.
 * @param {Array} array - Array of student objects to filter by location.
 * @returns {Array} Array of student objects located in 'San Francisco'.
 */
export default function getStudentsByLocation(array) {
  const result = array.filter(student => student.location === 'San Francisco');
  return result;
}

