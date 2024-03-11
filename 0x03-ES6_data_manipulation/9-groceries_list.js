// 9-groceries_list.js
/**
 * Returns a map of groceries with the specified items and quantities.
 * @returns {Map} - A map of groceries with items and quantities.
 */
export default function groceriesList() {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]
  ]);

  return groceries;
}
