'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  llMerge(llist1, llist2) {
    if (!llist1.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    let list1h = llist1.head;
    let list2h = llist2.head;
    let h1 = '';
    let h2 = '';
    while (list1h.next || list2h.next) {
      h1 = list1h.next;
      list1h = list2h;
      list1h = h1;
      h2 = list2h.next;
      list2h.next = h1;
      list2h = h2;
    }
    return llist1;
  }
};
