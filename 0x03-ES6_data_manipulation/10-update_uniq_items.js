// 10-update_uniq_items.js
/**
 * Updates the quantity of unique items in the map to 100 if their initial quantity is 1.
 * @param {Map} map - The map to be updated.
 * @returns {void} - Updates the map in-place.
 * @throws {Error} - If the argument is not a map.
 */
function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}

export default updateUniqueItems;
