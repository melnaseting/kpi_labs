'use strict';

const ages = (persons) => {
    let expectancy = {}
    for (const person in persons) {
        expectancy[person] = persons[person].died - persons[person].born
    }
    return expectancy
};


module.exports = {ages};
