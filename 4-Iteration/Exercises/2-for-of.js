'use strict';

const sum = (...args) => {
    let acc = 0;
    for(const i of args){
        acc+=i
    }
    return acc
};

module.exports = { sum };
