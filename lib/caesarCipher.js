"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caesarCipher = caesarCipher;
// a is 97, z is 122 / 25 letters
// A is 65, Z is 90

function caesarCipher(str, offset) {
  offset = offset % 26;
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    str[i] = _switchLetter(str[i], offset);
  }
  return str.join('');
  function _switchLetter(char, numb) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      charCode += numb;
      if (charCode > 122) {
        charCode -= 26;
      }
      ;
    } else if (charCode >= 65 && charCode <= 90) {
      charCode += numb;
      if (charCode > 90) {
        charCode -= 26;
      }
      ;
    }
    ;
    return String.fromCharCode(charCode);
  }
  ;
}
;