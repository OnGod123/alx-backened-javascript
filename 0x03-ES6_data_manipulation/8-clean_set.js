/**
 * Returns a hyphen-separated string of all values in a Set that start with a specific string.
 * @param {Set} set - The Set containing values to filter.
 * @param {string} startString - The starting string to match and remove from filtered values.
 * @returns {string} Hyphen-separated string of filtered values from the Set.
 */
export default function cleanSet(set, startString) {
  // Returns a string of all the set values that start with a specific string.
  // Example: For 'bon' in Set {'bonjour', 'bonsoir', 'bonaparte'}, returns 'jour-soir-aparte'.
  
  const regex = new RegExp(`^${startString}`);
  
  const filteredWords = [...set]
    .filter(word => regex.test(word))
    .map(word => word.replace(startString, ''));
  
  return filteredWords.join('-');
}

