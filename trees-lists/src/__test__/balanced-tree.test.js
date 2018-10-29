'use strict';

const binaryTrees = require('../balanced-binary-tree');

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
const four = new Node(13);
const five = new Node(5);
const six = new Node(6);

const ten = new Node(10);
const eleven = new Node(11);
const twelve = new Node(12);
const thirteen = new Node(13);
const fourteen = new Node(14);
const fifteen = new Node(15);
const sixteen = new Node(16);
const seventeen = new Node(17);

const balancedTestTree = new BinaryTree(one);
const unbalancedTestTree = new BinaryTree(ten);
const emptyTree = new BinaryTree();

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;

ten.left = eleven;
ten.right = twelve;
twelve.left = fifteen;
eleven.left = thirteen;
thirteen.left = fourteen;
fourteen.right = sixteen;
sixteen.left = seventeen;

describe('tree testing here', () => {
  test('the tree is empty, return undefined', () => {
    expect(binaryTrees.isTreeBalanced(emptyTree)).toEqual(undefined);
  });
  test('the tree is balanced, return true', () => {
    expect(binaryTrees.isTreeBalanced(balancedTestTree)).toEqual(true);
  });
  test('the tree is unbalanced, return false', () => {
    expect(binaryTrees.isTreeBalanced(unbalancedTestTree)).toEqual(false);
  });
});
