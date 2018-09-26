'use strict';

const Queue = require('../lib/queue');

const myQueue = new Queue();

describe('testing the queue.js and the ability to pour from one stack to another', () => {
  describe('testing stacks and queues', () => {
    test('testing the enqueue method', () => {
      myQueue.enqueue(1);
      myQueue.enqueue(2);
      myQueue.enqueue(3);
      myQueue.enqueue(4);
      myQueue.enqueue(5);
      myQueue.enqueue(6);
      expect(myQueue.stackA.storage).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('testing the dequeue method', () => {
      myQueue.dequeue(1);
      myQueue.dequeue(2);
      myQueue.dequeue(3);
      myQueue.dequeue(4);
      myQueue.dequeue(5);
      myQueue.dequeue(6);
      expect(myQueue.dequeue()).toEqual(undefined);
    });
  });
});
