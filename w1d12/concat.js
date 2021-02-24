/*
 let = 12;
let y = 44;
let sum = x + y;
console.log(sum);
*/
let n = 123;
n = 12.5;
console.log(-1 / 0); // -Infinity
console.log(1 / 0); // Infinity
console.log("Not a number" / 2); // NaN

let myName = null;
let age;
console.log(myName, age); // null undefined
//=======================================================
//Symbol is a primitive which can't be recreated
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

const obj = {};
obj.zest = 'zest';
obj.bar = 'bar';
obj.dan = 'dan';
obj.anna = 'anna';
const sym = Symbol();
obj[sym] = 'foo';
obj[sym] = 'danny';
console.log(obj);
/*
{
  zest: 'zest',
  bar: 'bar',
  dan: 'dan',
  anna: 'anna',
  [Symbol()]: 'danny'
}
*/
//==============================================================
/**
 * The typeof operator
 */


let symb = Symbol('ID');
console.log(typeof symb); // symbol
console.log(typeof '10n'); //string
console.log(typeof alert); //undefined ===> function????
console.log(typeof Math); // object
console.log(typeof null); //object
console.log(typeof undefined); // undefined

/**
 * There are 8 basic data types in JavaScript.

    number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
    bigint is for integer numbers of arbitrary length.
    string for strings. A string may have zero or more characters, there’s no separate single-character type.
    boolean for true/false.
    null for unknown values – a standalone type that has a single value null.
    undefined for unassigned values – a standalone type that has a single value undefined.
    object for more complex data structures.
    symbol for unique identifiers.

The typeof operator allows us to see which type is stored in a variable.

    Two forms: typeof x or typeof(x).
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object.

In the next chapters, we’ll concentrate on primitive values and once we’re familiar with them, we’ll move on to objects.
 */