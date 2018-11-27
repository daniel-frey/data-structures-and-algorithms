'use strict';

const fizzBuzz = require('../lib/fizzbuzz');
const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

describe('testing fizzbuzz - this should return the correct output of fizz, buzz, and fizz buzz', () => {
  test('testing the fizzbuzz.js file', () => {
    const a = new Node(6);
    const b = new Node(9);
    const c = new Node(7);
    const d = new Node(5);
    const e = new Node(45);
    const f = new Node(15);
    const g = new Node(10);

    const tree = new BinaryTree(a);

    a.left = b;
    a.right = c;

    b.left = d;
    b.right = e;

    c.left = f;
    c.right = g;

    fizzBuzz(tree.root);

    expect(tree.root.value)
      .toEqual('fizz'); // Value was 6
    expect(tree.root.left.value)
      .toEqual('fizz'); // Value was 9
    expect(tree.root.right.value)
      .toEqual(7); // Value is still 7 - can't be divided
    expect(tree.root.left.left.value)
      .toEqual('buzz'); // Value was 5
    expect(tree.root.left.right.value)
      .toEqual('fizzbuzz'); // Valuse was 45
    expect(tree.root.right.left.value)
      .toEqual('fizzbuzz'); // const F Original Value = 15
    expect(tree.root.right.right.value)
      .toEqual('buzz'); // const G Original Value = 10
  });
  describe('testing fizzbuzz with an empty tree', () => {
    test('this will return undefined if the tree is indeed empty', () => {
      const tree = new BinaryTree();
      expect(fizzBuzz(tree.root))
        .toEqual(undefined);
    });
  });
});
