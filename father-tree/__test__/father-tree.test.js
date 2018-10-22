'use strict';

const fatherTree = require('../src/father-tree');

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(15);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);

const tree = new BinaryTree(one);
const emptyTree = null;

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;

describe('father-tree testing', () => {
  test('this will return true if the value b is a child of value a', () => {
    expect(fatherTree.findFather(tree, 1, 2)).toEqual(true);
  });

  test('this will return false as long as value b is not a child of value a', () => {
    expect(fatherTree.findFather(tree, 3, 6)).toEqual(false);
  });

  test('if the tree is empty this will return false', () => {
    expect(fatherTree.findFather(emptyTree, 3, 6)).toEqual(false);
  });
});
