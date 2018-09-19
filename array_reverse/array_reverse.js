'use strict';

const reverseArray = module.exports = {};

reverseArray.reverse = (array) => {
  if (!Array.isArray(array)) throw new Error('input must be an array');
  const len = array.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    const temp = array[i];
    array[i] = array[len - i - 1];
    array[len - i - 1] = temp;
  }
  return array;
};
