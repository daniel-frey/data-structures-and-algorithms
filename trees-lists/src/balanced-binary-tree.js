'use strict';

const tree = module.exports = {};

tree.calculateHeightHelper = (root) => {
  if (root === null) {
    return -1;
  }
  if (root.left === null && root.right === null) {
    return 0;
  }

  const leftChildHeight = tree.calculateHeightHelper(root.left);
  const rightChildHeight = tree.calculateHeightHelper(root.right);
  const highestValue = Math.max(leftChildHeight, rightChildHeight);
  return highestValue + 1;
};

tree.isTreeBalanced = (root) => {
  if (root.root === null) {
    return undefined;
  }

  const leftHeight = tree.calculateHeightHelper(root.root.left);
  const rightHeight = tree.calculateHeightHelper(root.root.right);

  if (leftHeight >= rightHeight) {
    return leftHeight - rightHeight === 1 || leftHeight - rightHeight === 0;
  }

  if (rightHeight >= leftHeight) {
    return rightHeight - leftHeight === 1 || rightHeight - leftHeight === 0;
  }
  return false;
};
