'use strict';

const findRepeat = require('../lib/find-repeat');

describe('testing to see if find-repeat.js is working with all cases', () => {
  test('testing to see if a repeated word is found', () => {
    findRepeat('a cat is not a dog');
    expect(findRepeat('a cat is not a dog'))
      .toEqual('a');
  });
  test('testing to see if a string with no repeated words returns undefined', () => {
    findRepeat('a cat is not a dog');
    expect(findRepeat('cats are not a dog'))
      .toEqual(undefined);
  });
  test('testing to see if there is no input sting returns undefined', () => {
    findRepeat();
    expect(findRepeat())
      .toEqual(undefined);
  });
});
