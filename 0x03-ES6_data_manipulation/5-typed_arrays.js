// 5-typed_arrays.js
/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - Length of the ArrayBuffer.
 * @param {number} position - Position where the Int8 value should be added.
 * @param {number} value - Int8 value to be added.
 * @returns {DataView} - DataView representing the new ArrayBuffer.
 * @throws {Error} - If the position is outside the range of the ArrayBuffer.
 */
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
