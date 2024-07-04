/**
 * Extracts an array of student IDs from a list of student objects.
 * @param {Array} list - The list of student objects from which IDs are extracted.
 * @returns {Array} Array of student IDs. Returns an empty array if input is not an array.
 */
export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}

