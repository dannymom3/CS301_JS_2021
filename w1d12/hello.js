"use strict";
/*let message, number;
message = "hello friends!";
number = 44;
number = parseFloat(number);
message = parseInt(message);
console.log(typeof message); // this is funny! how come this is a number lol
console.log(typeof number);
*/
let x = 7,
    age = 28,
    name = "Daniel"; //multiple assigning of the variable with a single let key word
console.log(x);
x = 4;
console.log(x++);
console.log(++x);
console.log(x++);

/**
 * change to String
 */
let num = 10;
let bool = true;
console.log(typeof num, typeof bool); // number boolean

let str1 = String(num);
let str2 = String(bool);
let numb = Number(bool);

console.log(typeof str1, typeof str2, typeof numb); //String String
console.log(Number(bool));
//=======================================================================================
let num11 = '22';
let num22 = '33'
let myResult = num22 / num11;
console.log(myResult); // 1.5 --> This is because / applies for string number authomatically 
// changed in to number