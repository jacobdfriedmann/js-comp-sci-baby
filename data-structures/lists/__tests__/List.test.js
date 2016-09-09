const ArrayList = require('../ArrayList');
const SortedArrayList = require('../SortedArrayList');
const LinkedList = require('../LinkedList');
const DoublyLinkedList = require('../DoublyLinkedList');

function generateTestSuite(className, ImplementationClass, options = {}) {
  describe('List: ' + className, () => {

    it('Should add elements', () => {
      const list = new ImplementationClass();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.size()).toBe(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
    });

    if (options.sorted) {
      it('Should sort added elements', () => {
        const list = new ImplementationClass();
        list.add(2);
        list.add(1);
        list.add(3);
        list.add(10);
        list.add(-3);
        expect(list.size()).toBe(5);
        expect(list.get(0)).toBe(-3);
        expect(list.get(1)).toBe(1);
        expect(list.get(4)).toBe(10);
      });
    }

    it('Should correctly report first indexOf an element', () => {
      const list = new ImplementationClass();
      list.add(2);
      list.add(5);
      list.add(6);
      list.add(6);
      list.add(10);
      expect(list.indexOf(2)).toBe(0);
      expect(list.indexOf(8)).toBe(-1);
      expect(list.indexOf(6)).toBe(2);
      expect(list.indexOf(10)).toBe(4);
    });

    it('Should correctly report lastIndexOf an element', () => {
      const list = new ImplementationClass();
      list.add(2);
      list.add(5);
      list.add(6);
      list.add(6);
      list.add(10);
      expect(list.lastIndexOf(2)).toBe(0);
      expect(list.lastIndexOf(8)).toBe(-1);
      expect(list.lastIndexOf(6)).toBe(3);
      expect(list.lastIndexOf(10)).toBe(4);
    });
  });
}

generateTestSuite('ArrayList', ArrayList);
generateTestSuite('SortedArrayList', SortedArrayList, {
  sorted: true
});
generateTestSuite('LinkedList', LinkedList);
generateTestSuite('DoublyLinkedList', DoublyLinkedList);

// class List {
//     add(element) {
//         throw methodNotImplemented;
//     }
//
//     get(index) {
//         throw methodNotImplemented;
//     }
//
//     indexOf(element) {
//         throw methodNotImplemented;
//     }
//
//     lastIndexOf(element) {
//         throw methodNotImplemented;
//     }
//
//     removeElement(element) {
//         throw methodNotImplemented;
//     }
//
//     removeAtIndex(index) {
//         throw methodNotImplemented;
//     }
//
//     contains(element) {
//         throw methodNotImplemented;
//     }
//
//     size() {
//         throw methodNotImplemented;
//     }
//
//     forEach(lambda) {
//         throw methodNotImplemented;
//     }
// }
//
// module.exports = List;
