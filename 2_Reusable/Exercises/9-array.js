'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {
        name: "Abdul",
        phone: 380676776677
    },
    {
        name: "Rahmad",
        phone: 380671400880
    },
    {
        name: "Bimba",
        phone: 380989252420
    },
    {
        name: "Gosha",
        phone: 380676665646
    }
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
        if (obj.name === name) return obj.phone;
    }
    console.log("This name is not in the phonebook");
    return undefined;
};

module.exports = {phonebook, findPhoneByName};
