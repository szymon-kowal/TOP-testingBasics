"use strict";

var _calculator = require("./calculator.js");
// test.js

const calc = new _calculator.Calculator();
test('Test addition 8 to 4', () => {
  expect(calc.add(8, 4)).toBe(12);
});
test('Test subtraction 4 from 8', () => {
  expect(calc.subtract(8, 4)).toBe(4);
});
test('Test division 8 by 4', () => {
  expect(calc.divide(8, 4)).toBe(2);
});
test('Test multiplication 8 by 4', () => {
  expect(calc.multiply(8, 4)).toBe(32);
});