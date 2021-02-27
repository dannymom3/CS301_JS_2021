"use strict";

/**
 * (arguments) => { return statement } // general syntax
 * argument => { return statement } // one parameter
 * argument => statement // implicit return
 * () => statement // no parameter} a 
 */
let isEven = (a) => { return a % 2 === 0; }
console.log(isEven(4));


let isOdd = (a) => a % 2 !== 0;
console.log(isOdd(7));


let sayHello = () => console.log('HI');
sayHello();