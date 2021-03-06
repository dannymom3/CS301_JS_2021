"use strict";

let arr = ["t", "e", "s", "t"];

console.log(arr.slice(1, 3)); //e, s (copy from 1 to 3
console.log(arr.slice(-2)); // s, t

console.log(arr); // original array intact or unchanged

console.log(arr.slice(1)); //e, s, t