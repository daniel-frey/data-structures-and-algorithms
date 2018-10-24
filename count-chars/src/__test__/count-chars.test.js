'use strict';

const countChars = require('../lib/count-chars');

describe('this will test the count characters function', () => {
  test('this should return g:2, r:2, e:1, o:1', () => {
    const myMap = countChars('gregor');
    expect(myMap.get('g'))
      .toEqual(2);
    expect(myMap.get('r'))
      .toEqual(2);
    expect(myMap.get('e'))
      .toEqual(1);
    expect(myMap.get('o'))
      .toEqual(1);
  });
  test('this should return T:1, h:2, e:1, o:1, u:1, n:1, d:1', () => {
    const myMap = countChars('The hound');
    expect(myMap.get('T'))
      .toEqual(1);
    expect(myMap.get('h'))
      .toEqual(2);
    expect(myMap.get('e'))
      .toEqual(1);
    expect(myMap.get('o'))
      .toEqual(1);
    expect(myMap.get('u'))
      .toEqual(1);
    expect(myMap.get('n'))
      .toEqual(1);
    expect(myMap.get('d'))
      .toEqual(1);
  });
  test('this should return @:1, #:1, %:1, &:1', () => {
    const myMap = countChars('@#%&');
    expect(myMap.get('@'))
      .toEqual(1);
    expect(myMap.get('#'))
      .toEqual(1);
    expect(myMap.get('%'))
      .toEqual(1);
    expect(myMap.get('&'))
      .toEqual(1);
  });
});
