'use strict';

const reverseArray = require('../array_reverse');

describe('reverse array', () => {
  test('should return reversed array', () => {
    expect(reverseArray.reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
  test('should throw an error on invalid input', () => {
    expect(() => reverseArray.reverse('1, 2, 3, 4')).toThrow('input must be an array');
  });
});
