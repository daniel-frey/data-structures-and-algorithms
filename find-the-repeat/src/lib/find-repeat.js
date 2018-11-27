'use strict';

module.exports = function findRepeat(longString) {
  if (!longString) {
    return undefined;
  }
  const longStringLower = longString.toLowerCase();
  const splitArray = longStringLower.split(' ');
  const stringMap = new Map();
  for (let i = 0; i < splitArray.length; i++) {
    if (stringMap.get(splitArray[i]) === true) {
      return splitArray[i];
    }
    if (!stringMap.get(splitArray[i])) {
      stringMap.set(splitArray[i], true);
    }
  }
  return undefined;
};
