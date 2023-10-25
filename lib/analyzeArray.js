"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analyzeArray = analyzeArray;
function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new Error('It is not an array');
  let sum = 0;
  let minA = Number.MAX_SAFE_INTEGER;
  let maxA = Number.MIN_SAFE_INTEGER;
  let lengthA = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minA) {
      minA = arr[i];
    }
    ;
    if (arr[i] > maxA) {
      maxA = arr[i];
    }
    sum += arr[i];
  }
  return {
    average: sum / lengthA,
    min: minA,
    max: maxA,
    length: lengthA
  };
}
;