const List = require('./List');
const LinkedListNode = require('./LinkedListNode');

class LinkedList extends List {
  constructor() {
    super();
    this.head = null;
  }

  add(element) {
    const newNode = new LinkedListNode(element);
    if (!this.head) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
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
    if (!this.head) {
      return;
    }
    let parent = this.head;
    let node = this.head.next;
    while (node) {
      if (node.element === element) {
        parent.next = node.next;
        return;
      }
      parent = node;
      node = node.next;
    }
  }

  removeAtIndex(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let i = 0;
    let parent = this.head;
    let node = this.head.next;
    for (; node && i < index; i++) {
      parent = node;
      node = node.next;
    }
    if (i === index && node) {
      parent.next = node ? node.next : null;
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
    let i = 0;
    let node = this.head;
    for (; node; i++) {
      lambda(node.element);
      node = node.next;
    }
  }
}

module.exports = LinkedList;
