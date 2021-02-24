"use strict";

let x = null;
let y;
console.log(typeof(x));
console.log(typeof(y));
console.log(x++);
y++;
console.log(x, y);
y = false;
console.log(x < y);
x += "2";
console.log(x);
console.log(typeof x);
console.log(x > y);
console.log(y);
console.log(typeof y);

console.log(x + 8);