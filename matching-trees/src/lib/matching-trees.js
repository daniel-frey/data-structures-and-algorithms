'use strict';

module.exports = function findTreeRepeat(treeOne, treeTwo) {
  const treeMap = new Map();
  const matchMap = new Map();

  function mapTraversal(root) {
    if (!root) {
      return undefined;
    }
    mapTraversal(root.left);
    treeMap.set(root.value, true);
    mapTraversal(root.right);
    return undefined;
  }
  function matchTraversal(root) {
    if (!root) {
      return undefined;
    }
    matchTraversal(root.left);
    if (treeMap.get(root.value) === true) {
      matchMap.set(root.value, true);
    }
    matchTraversal(root.right);
    return undefined;
  }
  mapTraversal(treeOne.root);
  matchTraversal(treeTwo.root);
  console.log('match map', matchMap.keys());
  const match = [];
  for (const [key] of matchMap.entries()) { // eslint-disable-line
    match.push(key);
  }

  return match;
};
