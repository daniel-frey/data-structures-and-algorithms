'use strict';

module.exports = function bracketValidation(string) {
  let validBrackets = true;
  let openArray = 0;
  let closeArray = 0;
  let openParens = 0;
  let closeParens = 0;
  let openCurly = 0;
  let closeCurly = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i)) {
      case '[': openArray += 1;
        break;
      case ']': closeArray += 1;
        break;
      case '(': openParens += 1;
        break;
      case ')': closeParens += 1;
        break;
      case '{': openCurly += 1;
        break;
      case '}': closeCurly += 1;
        break;
      default: validBrackets = true;
    }
  }
  if (closeArray !== openArray) {
    validBrackets = false;
  }
  if (closeParens !== openParens) {
    validBrackets = false;
  }
  if (closeCurly !== openCurly) {
    validBrackets = false;
  }
  return validBrackets;
};
