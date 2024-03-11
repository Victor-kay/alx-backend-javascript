// 7-has_array_values.js
/**
 * Returns true if all elements in the array exist within the set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing elements to check.
 * @returns {boolean} - True if all elements in the array exist within the set, false otherwise.
 */
function hasValuesFromArray(set, array) {
  return array.every(element => set.has(element));
}

export default hasValuesFromArray;
