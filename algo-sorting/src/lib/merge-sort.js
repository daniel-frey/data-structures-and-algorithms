'use strict';

const merge = (preSortedLeft, preSortedRight) => {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < preSortedLeft.length && indexRight < preSortedRight.length) {
    if (preSortedLeft[indexLeft] < preSortedRight[indexRight]) {
      result.push(preSortedLeft[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(preSortedRight[indexRight]);
      indexRight += 1;
    }
  }
  return result.concat(preSortedLeft.slice(indexLeft)).concat(preSortedRight.slice(indexRight));
};

module.exports = function mergeArray(array) {
  if (array.length === 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftValue = array.slice(0, middleIndex);
  const rightValue = array.slice(middleIndex);

  return merge(mergeArray(leftValue), mergeArray(rightValue));
};
