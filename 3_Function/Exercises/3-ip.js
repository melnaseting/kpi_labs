'use strict';

const ipToInt = (ip = '10.0.0.1') => {
  const octets = ip.split('.');
  const shiftAdd = (acc, octet) => (acc << 8) + parseInt(octet, 10);
  return octets.reduce(shiftAdd, 0) >>> 0;
};


console.log(ipToInt())

module.exports = { ipToInt };
