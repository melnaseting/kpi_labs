'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    if (start > end) return [];

    const len = end - start + 1;
    const array = new Array(len);

    for (let i = 0; i < len; i++) {
        array[i] = start + i;
    }

    return array;
};

module.exports = { range };

