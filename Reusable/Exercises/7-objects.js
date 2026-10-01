'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    let obj1 = {
        name: "Mihaylo"
    };
    const obj2 = {
        name: "Matvey"
    }

    obj1.name = "Dubovikov";
    obj2.name = "Ivanov";

    obj1 = {
        name: "Mihaylo Dubovikov"
    }
/*
    obj2 = {
        name: "Matvey Ivanov"
    }

    У 18 і 19 строках не виводить помилку, бо ми змінюємо поле в об'єкті, а не сам об'єкт.
    Тому у 25 строці, коли ми намагаємось змінити об'єкт, то виводить помилку.

 */
};
module.exports = { fn };
