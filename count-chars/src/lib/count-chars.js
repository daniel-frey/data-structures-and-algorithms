'use strict';

module.exports = function countChars(string) {
  const myMap = new Map();

  for (let i = 0; i < string.length; i++) {
    if (myMap.get(string.charAt(i))) {
      const value = myMap.get(string.charAt(i)) + 1;
      myMap.set(string.charAt(i), value);
    }
    if (!myMap.get(string.charAt(i))) {
      myMap.set(string.charAt(i), 1);
    }
  }
  return myMap;
};
