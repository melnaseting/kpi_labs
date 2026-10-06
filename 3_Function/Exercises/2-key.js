'use strict';

const generateKey = (length, possible) => {
  let key = ""
  for (let i = length; i !== 0; i--) {
    let key_el = possible[Math.floor(Math.random() * (possible.length - 0 + 1))];
    key += key_el
  }
  return key
};

module.exports = { generateKey };
