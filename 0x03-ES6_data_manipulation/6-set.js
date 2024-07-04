/**
 * Creates a Set from the elements of an array.
 * @param {Array} array - The array from which to create the Set.
 * @returns {Set} A Set containing unique elements from the input array.
 */
export default function setFromArray(array) {
  // Returns a Set from the array parameter.
  const mySet = new Set(array);
  return mySet;
}

