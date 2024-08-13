export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const idx of array) {
    const value = appendString + idx;
    array2.push(value);
  }

  return array2;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
