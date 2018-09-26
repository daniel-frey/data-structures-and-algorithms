'use strict';

module.exports = class Stack {
  constructor() {
    this.storage = [];
  }

  pop() {
    return this.storage.pop();
  }

  push(value) {
    this.storage.push(value);
  }
};
