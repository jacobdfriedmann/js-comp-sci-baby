const defaultCompare = require('../../utils/defaultCompare');

/**
 * Recursively defined binary search implementation.
 */
module.exports = function binarySearch(orderedArray, item, compare = defaultCompare, min = 0, max) {
  const start = min;
  const end = max || (orderedArray.length - 1);
  if (start === end) {
    return orderedArray[start] === item ? start : -1;
  }

  const midpoint = ((end + start) / 2) | 0;
  const midItem = orderedArray[midpoint];
  let newStart;
  let newEnd;
  if (compare(item, midItem)) {
    newStart = midpoint + 1;
    newEnd = end;
  } else {
    newStart = start;
    newEnd = midpoint;
  }
  return binarySearch(orderedArray, item, compare, newStart, newEnd);
}
