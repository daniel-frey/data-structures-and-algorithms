'use strict';

const LinkedList = require('../kth-from-end');

const listForTesting = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 6; i++) {
  listForTesting.insertAtHead(`value ${i}`);
}
describe('Testing linked list kthFromEnd', () => {
  describe('testing kthFromEnd', () => {
    test('Testing kthFromEnd values will be correct', () => {
      listForTesting.kthFromEnd(3);
      expect(listForTesting.kthFromEnd(3)).toEqual('value 0');
    });
    test('Testing to see if the list is empty', () => {
      try {
        emptyList.kthFromEnd('value New');
      } catch (err) {
        expect(err.message).toEqual('__ERROR__ There is nothing in this list');
      }
    });
  });
});
