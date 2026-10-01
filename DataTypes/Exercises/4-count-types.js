'use strict';

let ArrayOfTypes = ['U', 'Mene', 11, 9, 2001, true, 'V', false, 917, true,'Holovy', false, true, 777, 8642, ' Schebionka', 'Gamos'];

const countTypesInArray = {
    number: 0,
    string: 0,
    boolean: 0
};
for (const value of ArrayOfTypes) {
  const type = typeof value;
  
  if (type in countTypesInArray) {
    countTypesInArray[type]++;
  } 
  else {
    console.dir("It's another type");
  }
}
console.dir(countTypesInArray);
module.exports = { countTypesInArray };
