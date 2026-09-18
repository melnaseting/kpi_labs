'use strict';

let ArrayOfTypes = ['U', 'Mene', 11, 9, 2001, true, 'V', false, 917, true,'Holovy', false, true, 777, 8642, ' Schebionka', 'Gamos'];

let countTypesInArray = {
    number: 0,
    stryng: 0,
    boolean: 0
};
for(let value of ArrayOfTypes){
    if (typeof value === "string") {
        countTypesInArray.stryng +=1;
      } else if (typeof value === "number") {
        countTypesInArray.number +=1;
      } else if (typeof value === "boolean") {
        countTypesInArray.boolean +=1;
      } else {
        console.dir("It's another type!");
      }
};
console.dir(countTypesInArray);
module.exports = { countTypesInArray };
