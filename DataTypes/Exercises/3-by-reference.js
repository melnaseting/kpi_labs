'use strict';

const inc = (obj) => {
  return obj.n += 1;
};

const num = { n: 5 };
console.dir(num);

const num2 = inc(num);

console.dir(num2); 
console.dir(num);

module.exports = { inc };
