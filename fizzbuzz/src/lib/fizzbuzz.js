'use strict';

module.exports = function fizzBuzz(root) {
  if (!root) {
    return undefined;
  }
  // Post order, left - right - root 
  fizzBuzz(root.left);
  if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'fizzbuzz';
  }
  if (root.value % 3 === 0 && root.value % 5 !== 0) {
    root.value = 'fizz';
  }
  if (root.value % 5 === 0 && root.value % 3 !== 0) {
    root.value = 'buzz';
  }
  fizzBuzz(root.right);
  return undefined;
};
