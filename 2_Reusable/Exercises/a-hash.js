'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    "Abdul": 380676776677,
    "Rahmad": 380671400880,
    "Bimba": 380989252420,
    "Gosha": 380676665646
}

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
