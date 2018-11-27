'use strict';

const findTreeRepeat = require('../lib/matching-trees');
const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

describe('testing all cases of matching-trees function', () => {
  test('testing to see if matches are found', () => {
    const A = new Node(3);
    const B = new Node(6);
    const C = new Node(5);
    const D = new Node(7);
    const E = new Node(30);
    const F = new Node(15);
    const G = new Node(10);

    const treeOne = new BinaryTree(A);
    const treeTwo = new BinaryTree(C);

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    findTreeRepeat(treeOne, treeTwo);

    expect(findTreeRepeat(treeOne, treeTwo))
      .toEqual([15, 5, 10]);
  });
  test('test to see if empty tree returns undefined', () => {
    const A = new Node(3);
    const B = new Node(6);
    const C = new Node(5);
    const D = new Node(7);
    const E = new Node(30);
    const F = new Node(15);
    const G = new Node(10);

    const treeOne = new BinaryTree(A);
    const treeTwo = new BinaryTree();

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    findTreeRepeat(treeOne, treeTwo);

    expect(findTreeRepeat(treeOne, treeTwo))
      .toEqual([]);
  });
  test('testing to see multiple matching values return a single value', () => {
    const A = new Node(3);
    const B = new Node(6);
    const C = new Node(5);
    const D = new Node(7);
    const E = new Node(30);
    const F = new Node(5);
    const G = new Node(5);

    const treeOne = new BinaryTree(A);
    const treeTwo = new BinaryTree(C);

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    findTreeRepeat(treeOne, treeTwo);

    expect(findTreeRepeat(treeOne, treeTwo))
      .toEqual([5]);
  });
});
