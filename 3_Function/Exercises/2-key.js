'use strict';

const generateKey = (length, possible) => {
  let key = ""
  for (let i = 0; i < length; i++) {
    let key_el = possible[Math.floor(Math.random() * possible.length)];
    key += key_el
  }
  return key
};

module.exports = { generateKey };
