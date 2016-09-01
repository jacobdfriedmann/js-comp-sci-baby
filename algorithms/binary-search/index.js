const defaultCompare = (a, b) => {
  return a > b;
};

/**
 * Recursively defined binary search implementation.
 */
module.exports = function binarySearch(orderedArray, item, compare = defaultCompare, minIndex = 0, maxIndex) {
  const start = minIndex;
  const end = maxIndex || orderedArray.length;
  // Split the array
  const midpoint = Math.floor((end - start)/ 2) + start;
  if (minIndex === maxIndex) {
    return item === orderedArray[minIndex] ? minIndex : undefined;
  } else if (item === orderedArray[midpoint]) {
    return midpoint;
  // Recurse into the higher half
  } else if (compare(item, orderedArray[midpoint])) {
    return binarySearch(orderedArray, item, compare, midpoint + 1, end);
  // Recurse into the lower half
  } else {
    return binarySearch(orderedArray, item, compare, start, midpoint - 1);
  }
}
