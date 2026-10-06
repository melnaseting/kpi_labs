'use strict';

const inc = (obj) => {
  return obj.n += 1;
};

const num = { n: 5 };

const num2 = inc(num);


module.exports = { inc };
