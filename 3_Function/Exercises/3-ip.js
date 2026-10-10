'use strict';

const ipToInt = (ip = '10.0.0.1') => {
  const octets = ip.split('.');
  return octets.reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
};

console.log((ipToInt()))

module.exports = { ipToInt };
