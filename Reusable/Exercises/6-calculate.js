'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

const square = (a) => {
  return a**2
};

const cube = (a) => {
  return a**3
};

const average = (a,b) => {
  return (a+b)/2
};

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
  let i = 0
  for(let n = 0; n<=9; n++){
    sq = square(n);
    cu = cube(n);
    av = average(sq,cu)

    result.number[i] = n
    result.square[i] = sq
    result.cube[i] = cu
    result.average[i] = av
    i++
  }
  return result
};

module.exports = { square, cube, average, calculate };
