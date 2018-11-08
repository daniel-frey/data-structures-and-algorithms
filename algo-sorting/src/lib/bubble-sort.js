'use strict';

module.exports = function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < (array.length - i - 1); k++) {
      if (array[k] > array[k + 1]) {
        const arrayHelper = array[k];
        array[k] = array[k + 1];
        array[k + 1] = arrayHelper;
      }
    }
  }
  return array;
};
