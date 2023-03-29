// Tuplas permiten definir un array fuertemente tipado, orden y cantidad de elementos

// Aca estamos definiento el tipo, pero no la posicion y cantidad de elementos
const prices:(number|string)[]=[1,2,3,4,'asd','asda'];

prices.push(1);
prices.push('asd');

console.log(prices);

// ✅ Definiendo tuplas ()
let user:[string, number];

user=['Manuel',23]; // ✅
// user=[23,'Manuel']; // ❌ Error
// user=[]; // ❌ Error
// user=['Manuel']; // ❌ Error
// user=['Manuel',23,23]; // ❌ Error
// user=['12',23]; // ✅

console.log(user[0]);
console.log(user[1]);

// Destructurando tupla (REACT usa tuplas en useState!)
const [username,age]=user;

console.log(username);
console.log(age);

