"use strict";

var _capitalize = require("./capitalize.js");
test('Capitalize the string something', () => {
  expect((0, _capitalize.capitalize)('something')).toBe('Something');
});
test('Capitalize the string nothing', () => {
  expect((0, _capitalize.capitalize)('nothing')).toBe('Nothing');
});