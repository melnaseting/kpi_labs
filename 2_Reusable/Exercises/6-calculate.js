'use strict';

const square = (a) => a**2;

const cube = (a) => a**3;

const average = (a,b) => (a+b)/2;

const calculate = () => {
  const result = {
    number: [],
    square: [],
    cube: [],
    average: [],
  }
  let sq ;
  let cu ;
  let av ;
  for(let n = 0; n<=9; n++){
    sq = square(n);
    cu = cube(n);
    av = average(sq,cu)

    result.number[n] = n
    result.square[n] = sq
    result.cube[n] = cu
    result.average[n] = av
  }
  return result
};


module.exports = { square, cube, average, calculate };
