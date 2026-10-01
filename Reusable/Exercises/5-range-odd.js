'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end)=>{
  if ( typeof star == "number" && typeof end == "number"){
    const len = end - start;
    if (len < 0) return [];
    const array = new Array();
    let i = 0;
    for (let n = start; n <= end; n++) {
      if (n % 2 !== 0){
        array[i] = n;
        i++;
      }
    }
    return array;
  }
  else{
      return "Choose another value"
  }
};

module.exports = { rangeOdd };
