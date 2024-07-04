/**
 * Creates an Int8 TypedArray in an ArrayBuffer with a specified length, sets a value at a given position,
 * and returns a DataView of the updated ArrayBuffer.
 * @param {number} length - Length of the ArrayBuffer in bytes.
 * @param {number} position - Position in the ArrayBuffer where the Int8 value will be set.
 * @param {number} value - Int8 value to set at the specified position.
 * @returns {DataView|string} DataView of the updated ArrayBuffer if position is within range, otherwise returns 'Position outside range'.
 */
export default function createInt8TypedArray(length, position, value) {
  // JavaScript TypedArray for binary raw data.
  // Returns a DataView with Int8 value at specific position.
  // Error message is 'Position outside range'.

  const buffer = new ArrayBuffer(length);
  const view8Int = new Int8Array(buffer);
  const viewR = new DataView(buffer);

  if (position >= view8Int.length || position < 0) {
    return 'Position outside range';
  }

  view8Int[position] = value;
  return viewR;
}

