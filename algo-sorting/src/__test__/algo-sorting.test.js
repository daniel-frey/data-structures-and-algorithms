'use strict';

const radix = require('../lib/radix-sort');
const bubbleSort = require('../lib/bubble-sort');
const merge = require('../lib/merge-sort');

describe('testing sorting algorithms', () => {
  test('test radix sort', () => {
    radix([20, 40, 5, 9]);
    expect(radix([20, 40, 5, 9])).toEqual([5, 9, 20, 40]);
  });
  test('testing bubble sort', () => {
    bubbleSort([20, 40, 5, 9]);
    expect(bubbleSort([20, 40, 5, 9])).toEqual([5, 9, 20, 40]);
  });
  test('testing merge sort', () => {
    merge([20, 40, 5, 9]);
    expect(merge([20, 40, 5, 9])).toEqual([5, 9, 20, 40]);
  });
});
