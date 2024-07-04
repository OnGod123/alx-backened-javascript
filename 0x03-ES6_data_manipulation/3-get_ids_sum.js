/**
 * Calculates the sum of student IDs from an array of student objects.
 * @param {Array} array - Array of student objects from which IDs will be extracted and summed.
 * @returns {Number} Sum of student IDs. Returns 0 if input is an empty array.
 */
export default function getStudentIdsSum(array) {
  const sum = (x, y) => x + y;
  return array.map(student => student.id).reduce(sum, 0);
}

