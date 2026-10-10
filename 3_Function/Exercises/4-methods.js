'use strict';

const methods = (iface) => {
  const res = []
  for (const value of Object.values(iface)) {
    if (typeof value === 'function') res.push([value.name, value.length]) ;
  }
  if(res.length === 0) console.log("This object does not have methods");

  return res;

};

module.exports = { methods };
