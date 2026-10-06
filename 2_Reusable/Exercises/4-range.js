'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    if ( typeof star == "number" && typeof end == "number"){
        const len = end - start;
        if (len < 0) return [];
        const array = new Array(len);
        let i = 0;
        for (let n = start; n <= end; n++) {
        array[i] = n;
        i++;
        }
        return array;
    }  
    else{
        return "Choose another value"
    }
};
console.log(range('asdasa',2))
module.exports = { range };

