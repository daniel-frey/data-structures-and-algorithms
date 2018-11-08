'use strict';

module.exports = function radix(array) {
  const base = 10;
  let max = Number.NEGATIVE_INFINITY; // you know, because infinity isn't large enough
  let divider = 1;
  let results = [];

  while (divider === 1 || divider <= max) {
    const bucket = [...Array(10)].map(() => []);
    for (let i = 0; i < array.length; i++) {
      bucket[Math.floor((array[i] / divider) % base)].push(array[i]);
      if (array[i] > max) {
        max = array[i];
      }
    }
    results = [].concat(...bucket);
    divider *= base;
  }
  return results;
};
