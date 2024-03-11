// 100-weak.js
const weakMap = new WeakMap();

/**
 * Increments the query count for the given endpoint in the weakMap.
 * Throws an error if the query count is >= 5.
 * @param {Object} endpoint - The endpoint object with protocol and name.
 * @throws {Error} - If the number of queries is >= 5.
 */
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
