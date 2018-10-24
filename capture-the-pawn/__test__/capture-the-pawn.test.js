'use strict';

const captureThePawn = require('../src/lib/capture-the-pawn');

describe('testing the ability to capture a pawn', () => {
  test('this will return true if the pawn is captured', () => {
    const array = [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 'pawn', 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 4, 5, 6, 7], ['E', 1, 2, 3, 'bishop', 5, 6, 7], ['F', 1, 2, 3, 4, 5, 6, 7], ['G', 1, 2, 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]];
    captureThePawn(array);
    expect(captureThePawn(array))
      .toEqual(true);
  });
  test('this will return false if there is no bishop', () => {
    const array = [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 4, 5, 6, 7], ['E', 1, 2, 3, 'pawn', 5, 6, 7], ['F', 1, 2, 3, 4, 5, 6, 7], ['G', 1, 2, 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]];
    captureThePawn(array);
    expect(captureThePawn(array))
      .toEqual(false);
  });
  test('this will return false if the bishop cannot capture the pawn', () => {
    const array = [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 'bishop', 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 2, 3, 4, 5, 6, 7], ['G', 1, 2, 3, 4, 5, 6, 7], ['H', 'pawn', 2, 3, 4, 5, 6, 7]];
    captureThePawn(array);
    expect(captureThePawn(array))
      .toEqual(false);
  });
});
