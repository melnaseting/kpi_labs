'use strict';

const max = (matrix) => {
    let res = 0
    for (const row of matrix) {
      for (const item of row){
          if (item > res) res = item;
      }
    }
    return res
};

module.exports = {max};
