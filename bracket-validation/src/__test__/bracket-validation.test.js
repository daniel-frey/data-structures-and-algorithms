'use strict';

const bracketValidation = require('../lib/bracket-validation');

describe('this is testing the bracket-validation function', () => {
  test('if there are no brackets found, this will return true', () => {
    bracketValidation('no brackets');
    expect(bracketValidation('no brackets'))
      .toEqual(true);
  });
  test('this will test that the brackets are uneven and return false', () => {
    bracketValidation('[]}');
    expect(bracketValidation('[]}'))
      .toEqual(false);
  });
  test('this will test that all of the brackets are even and return true', () => {
    bracketValidation('({[]})');
    expect(bracketValidation('({[]})'))
      .toEqual(true);
  });
});
