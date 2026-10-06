'use strict';

const methods = (iface) => {
  let res = []
  for (const value of Object.values(iface)) {
    if (typeof value === 'function') {
      res.push([value.name, value.length])
    }
    else{
      console.log("This object does not have methods!")
    }
  }
  return res
};

module.exports = { methods };
