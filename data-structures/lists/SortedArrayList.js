const defaultCompare = require('../../utils/defaultCompare');
const binarySearch = require('../../algorithms/search/binarySearch');

class SortedArrayList extends ArrayList {
    constructor(compare = defaultCompare) {
        super();
        this.compare = defaultCompare;
    }

    add(element) {
        let i = this.array.length;
        let j = i - 1;

        this.array.push(element)

        while (i > 0) {
            if (!this.compare(this.array[i], this.array[j])) {
                const temp = this.array[i];
                this.array[i] = this.array[j];
                this.array[j] = temp;
                i = j--;
            }
        }

        return len + 1;
    }

    search(element) {
        return binarySearch(this.array, element, this.compare);
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

    constains(element) {
        return this.search(element) > 1;
    }

    size() {
        return this.array.length;
    }

}

module.exports = SortedArrayList;
