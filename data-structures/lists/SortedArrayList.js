const defaultCompare = require('../../utils/defaultCompare');
const binarySearch = require('../../algorithms/search/binarySearch');
const ArrayList = require('./ArrayList');

class SortedArrayList extends ArrayList {
  constructor(compare = defaultCompare) {
    super();
    this.compare = defaultCompare;
  }

  /**
   * Add element to the list.
   *
   * Complexity: O(n)
   *
   * The element is inserted at the end of the array
   * and then is moved up one index until it is the correct
   * place.
   */
  add(element) {
    let i = this.array.length;
    let j = i - 1;

    this.array.push(element)

    while (i > 0) {
      if (!this.compare(this.array[i], this.array[j])) {
        const temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
      }
      i = j--;
    }
  }

  /**
   * Binary search.
   *
   * Complexity: O(log n)
   *
   * Continuously divides the array in two until the
   * element is found. We can do this because the array is
   * pre-sorted.
   */
  search(element) {
    return binarySearch(this.array, element, this.compare);
  }

  /**
   * Complexity: O(n)
   *
   * Still linear time, but potentially faster than unsorted
   * indexOf, especially if there are not many duplicates.
   */
  indexOf(element) {
    let i = this.search(element);
    for (; i > 0; i--) {
      if (this.array[i - 1] !== element) {
        break;
      }
    }
    return i;
  }

  /**
   * Complexity: O(n)
   *
   * Still linear time, but potentially faster than unsorted
   * lastIndexOf, especially if there are not many duplicates.
   */
  lastIndexOf(element) {
    const len = this.array.length;
    let i = this.search(element);
    for (; i < len - 1; i++) {
      if (this.array[i + 1] !== element) {
        break;
      }
    }
    return i;
  }

  /**
   * Remove an element from the array.
   *
   * Complexity: O(log n + n) == O(n)
   */
  removeElement(element) {
    const index = this.search(element);
    return this.removeAtIndex(element);
  }

  /**
   * Complexity: O(log n)
   *
   * Uses underlying binary search.
   */
  contains(element) {
    return this.search(element) >= 0;
  }

  /**
   * Complexity: O(1)
   */
  size() {
    return this.array.length;
  }

}

module.exports = SortedArrayList;
