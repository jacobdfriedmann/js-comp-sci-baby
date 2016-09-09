const List = require('./List');
const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList extends List {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  add(element) {
    const newNode = new DoublyLinkedListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.tail;
      this.tail = newNode;
      this.tail.previous = temp;
      temp.next = newNode;
    }
  }

  get(index) {
    let i = 0;
    let node = this.head;
    for (; i < index && node; i++) {
      node = node.next;
    }
    return i === index && node ? node.element : undefined;
  }

  indexOf(element) {
    let i = 0;
    let node = this.head;
    for (; node; i++) {
      if (node.element === element) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }

  lastIndexOf(element) {
    let i = 0;
    let node = this.head;
    let foundIndex = -1;
    for (; node; i++) {
      if (node.element === element) {
        foundIndex = i;
      }
      node = node.next;
    }
    return foundIndex;
  }

  removeElement(element) {
    let node = this.head;
    while (node) {
      if (node.element === element) {
        if (node.previous) {
          node.previous.next = node.next;
        }
        if (node.next) {
          node.next.previous = node.previous;
        }
        return;
      }
      node = node.next;
    }
  }

  removeAtIndex(index) {
    let node = this.head;
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous === null;
    } else {
      let i = 0;
      for (; node && i < index; i++) {
        node = node.next;
      }
      if (node && i === index) {
        if (node.previous) {
          node.previous.next = node.next;
        }
        if (node.next) {
          node.next.previous = node.previous;
        }
      }
    }

    if (node && !node.next) {
      this.tail = this.node;
    }
  }

  contains(element) {
    return this.indexOf(element) >= 0;
  }

  size() {
    let i = 0;
    let node = this.head;
    for (; node; i++) {
      node = node.next;
    }
    return i;
  }

  forEach(lambda) {
    let node = this.head;
    while (node) {
      lambda(node.element);
      node = node.next;
    }
  }
}

module.exports = DoublyLinkedList;
