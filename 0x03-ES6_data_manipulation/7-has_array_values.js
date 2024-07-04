/**
 * Checks if all elements in an array exist within a Set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing elements to check.
 * @returns {boolean} Returns true if all elements in the array exist within the set, otherwise returns false.
 */
export default function hasValuesFromArray(set, array) {
  // Return true if all elements in the array exist within the set.
  const result = array.every(element => set.has(element));
  return result;
}

