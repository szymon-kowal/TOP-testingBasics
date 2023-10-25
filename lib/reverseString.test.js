"use strict";

var _reverseString = require("./reverseString.js");
test('Reverse string something', () => {
  expect((0, _reverseString.reverseStr)('something')).toBe('gnihtemos');
});
test('Reveres string nothing', () => {
  expect((0, _reverseString.reverseStr)('nothing')).toBe('gnihton');
});