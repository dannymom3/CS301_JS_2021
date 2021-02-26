"use strict";

let a = 2;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a--); // 3
console.log(++c); // 1
console.log(a); // 2
console.log(c); // 1

console.log(!!(false)); // The use of !! e.g. !!(true) --> !(false) --> true