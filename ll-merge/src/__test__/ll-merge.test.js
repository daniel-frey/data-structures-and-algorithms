'use strict';

const LinkedList = require('../lib/ll-merge');

const testingList1 = new LinkedList();
const testingList2 = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 8; i++) {
  testingList1.insertAtHead(`value ${i}`);
}
for (let i = 0; i < 8; i++) {
  testingList2.insertAtHead(`value ${i}`);
}

describe('ll-merge testing', () => {
  describe('This will test the merging capability of ll-merge', () => {
    test('This should merge two lists in a domino or "zipper" like effect', () => {
      testingList1.llMerge(testingList1, testingList2);
      expect(testingList1.head.next.value && testingList1.head.value).toEqual('value 7');
    });
    test('Testing the ability to return an error if the list is empty', () => {
      try {
        emptyList.llMerge(emptyList, emptyList);
      } catch (err) {
        expect(err.message).toEqual('__ERROR__ The list is empty');
      }
    });
  });
});
