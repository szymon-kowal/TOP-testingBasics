"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculator = void 0;
class Calculator {
  constructor() {}
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
}
exports.Calculator = Calculator;