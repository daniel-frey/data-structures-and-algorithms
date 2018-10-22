'use strict';

const fatherTree = module.exports = {};

fatherTree.findFather = (tree, valA, valB) => {
  let fatherNode = null;
  let father = false;

  if (tree === null) {
    return false;
  }

  (function findValA(root) {
    if (root === null) {
      return undefined;
    }

    if (root.value === valA) {
      fatherNode = root;
    }
    findValA(root.left);
    findValA(root.right);
    return undefined;
  }(tree.root));

  (function findValB(root) {
    if (root === null) {
      return undefined;
    }

    if (root.value === valB) {
      father = true;
    }

    findValB(root.left);
    findValB(root.right);
    return undefined;
  }(fatherNode));

  return father;
};
