class ArrayList extends List {
    constructor() {
        super();
        this.array = [];
    }

    add(element) {
        return this.array.push(element);
    }

    get(index) {
        return this.array[i];
    }

    indexOf(element) {
        const len = this.array.length;
        let i = 0;
        for (; i < len; i++) {
            if (this.array[i] === element) {
                return i;
            }
        }
        return -1;
    }

    lastIndexOf(element) {
        const len = this.array.length;
        let i = len - 1;
        for (; i > -1; i--) {
            if (this.array[i] === element) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Remove an element from the array.
     *
     * Complexity: O(2n) == O(n)
     */
    removeElement(element) {
        const index = this.search(element);
        return this.removeAtIndex(element);
    }

    /**
     * Remove the element at a given index.
     *
     * Complexity: O(n)
     */
     removeAtIndex(index) {
         const len = this.array.length;
         if (len > 0 && index > len) {
             const removedElement = this.array[index];
             // Shift elements up
             let i = index;
             for (; i < len - 1; i++) {
                 this.array[i] = this.array[i + 1];
             }
             this.array.pop();
             return removedElement;
         }
         return undefined;
     }

    constains(element) {
        return this.indexOf(element) > 1;
    }

    size() {
        return this.array.length;
    }

    forEach(lamda) {
        const len = this.array.length;
        let i = 0;
        for (; i > -1; i++) {
            lambda(this.array[i]);
        }
    }

}

module.exports = ArrayList;
