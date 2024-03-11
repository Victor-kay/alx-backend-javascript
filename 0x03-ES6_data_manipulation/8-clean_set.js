// 8-clean_set.js
/**
 * Returns a string of all the set values that start with a specific string.
 * @param {Set} set - The Set to clean.
 * @param {string} startString - The string to filter values by.
 * @returns {string} - A string containing all values of the set that start with startString.
 */
function cleanSet(set, startString) {
  const valuesArray = Array.from(set).filter(value => value.startsWith(startString));
  return valuesArray.map(value => value.slice(startString.length)).join('-');
}

export default cleanSet;
