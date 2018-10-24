'use strict';

module.exports = function captureThePawn(array) {
  let capturedPawn = false;
  let columnBishop = null;
  let rowBishop = null;
  let trackColumn = null;
  let trackRow = null;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 'bishop') {
        rowBishop = i;
        columnBishop = j;
        break;
      }
    }
  }
  if (rowBishop) {
    if (capturedPawn === false) {
      trackColumn = columnBishop;
      trackRow = rowBishop;
      while (trackRow >= 0 && trackColumn >= 0) {
        if (array[trackRow][trackColumn] === 'pawn') {
          capturedPawn = true;
          break;
        }
        trackColumn -= 1;
        trackRow -= 1;
      }
    }
    if (capturedPawn === false) {
      trackColumn = columnBishop;
      trackRow = rowBishop;
      while (trackRow <= 7 && trackColumn >= 0) {
        if (array[trackRow][trackColumn] === 'pawn') {
          capturedPawn = true;
          break;
        }
        trackColumn -= 1;
        trackRow += 1;
      }
    }
    if (capturedPawn === false) {
      trackColumn = columnBishop;
      trackRow = rowBishop;
      while (trackRow >= 0 && trackColumn <= 7) {
        if (array[trackRow][trackColumn] === 'pawn') {
          capturedPawn = true;
          break;
        }
        trackColumn += 1;
        trackRow -= 1;
      }
    }
    if (capturedPawn === false) {
      trackColumn = columnBishop;
      trackRow = rowBishop;
      while (trackRow <= 7 && trackColumn <= 7) {
        if (array[trackRow][trackColumn] === 'pawn') {
          capturedPawn = true;
          break;
        }
        trackColumn += 1;
        trackRow += 1;
      }
    }
  }
  return capturedPawn;
};
