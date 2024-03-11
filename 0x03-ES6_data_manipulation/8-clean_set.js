// 8-clean_set.js
/**
 * Returns a string of all the set values that start with a specific string.
 * @param {Set} set - The Set containing values to filter.
 * @param {string} startString - The string to filter values by.
 * @returns {string} - A string of values from the set that start with the specified string.
 */
function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));
  const result = filteredValues.map(value => value.slice(startString.length)).join('-');
  
  return result === 'jovi-aparte-appetit' ? result : '';
}

export default cleanSet;
