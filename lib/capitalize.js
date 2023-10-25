"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
function capitalize(str) {
  str = str.split('');
  str[0] = str[0].toUpperCase();
  return str.join('');
}