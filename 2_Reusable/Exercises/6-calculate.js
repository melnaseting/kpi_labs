'use strict';

const square = (a) => a ** 2;

const cube = (a) => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
    const result = {
        number: [],
        square: [],
        cube: [],
        average: [],
    }
    for (let n = 0; n <= 9; n++) {
        result.number[n] = n
        result.square[n] = sq
        result.cube[n] = cu
        result.average[n] = average(square(n), cube(n))
    }
    return result
};


module.exports = {square, cube, average, calculate};
