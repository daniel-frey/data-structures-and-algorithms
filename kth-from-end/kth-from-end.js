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

  kthFromEnd(value) {
    if (!this.head) {
      return null;
    }
    if (this.head) {
      let currentNode = this.head;
      let length = 1;
      while (currentNode.next) {
        length += 1;
        currentNode = currentNode.next;
      }
      const kth = (length - value);
      let counter = 0;
      while (counter < kth) {
        counter += 1;
      }
      return currentNode.value;
    }
    return null;
  }
};
