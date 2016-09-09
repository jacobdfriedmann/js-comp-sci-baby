const LinkedListNode = require('./LinkedListNode');

class LinkedList extends List {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(element) {
        const newNode = new LinkedListNode(element);
        if (!this.head) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = newNode;
        }
        return ++this.length;
    }

    get(index) {
        let index = 0;
        let node = h
    }

    indexOf(element) {
        throw methodNotImplemented;
    }

    lastIndexOf(element) {
        throw methodNotImplemented;
    }

    removeElement(element) {
        throw methodNotImplemented;
    }

    removeAtIndex(index) {
        throw methodNotImplemented;
    }

    constains(element) {
        throw methodNotImplemented;
    }

    size() {
        throw methodNotImplemented;
    }

    forEach(lambda) {
        throw methodNotImplemented;
    }
}
