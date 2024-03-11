// 8-clean_set.js
/**
 * Returns a string of all the set values that start with a specific string.
 * @param {Set} set - The Set containing values to filter.
 * @param {string} startString - The string to filter values by.
 * @returns {string} - A string of values from the set that start with the specified string.
 */
function cleanSet(set, startString) {
  const valuesWithStartString = [...set].filter(value => value.startsWith(startString));
  return valuesWithStartString.map(value => value.slice(startString.length)).join('-');
}

export default cleanSet;
