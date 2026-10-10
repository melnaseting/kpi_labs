'use strict';

const inc = (obj) => {
   obj.n += 1;
};

const num = { n: 5 };
const num2 = num;
inc(num2)


module.exports = { inc };
