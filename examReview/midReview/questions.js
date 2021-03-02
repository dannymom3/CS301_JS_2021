"use strict";
/** Q1. Write the output of running following JavaScript. 
Fill your answers in the commented part. [3]
*/
console.log("Question 1");
let x;
let y = 2;
let z = 3;
console.log(x); //_undefined______ 
x = 1;
z = x + y + z;
console.log(x); //__1_____ 
console.log(z); //___6____ 
x = z - y;
y = y * 2 - 1;
z = x + y;
console.log(x); //___4_____ 
console.log(y); //___3____ 
console.log(z); //___7____

console.log("Question 2");
/**Q2. Write the outputs of flowing JavaScript program, next to the comments
 */
let x = 1;
let y = '2';
let z = true;
let s = x + y;
console.log(s) // "12"
console.log(typeof s) //String
x = x + z; // 1 + true = 2
console.log(x) //2
console.log(typeof x) //number

x = ++x * y; // 3 * 
console.log(x);
console.log(typeof x);
s = parseInt(s)
s += '3';
console.log(s);
console.log(typeof s);
z = !z;
console.log(z);
console.log(typeof z);