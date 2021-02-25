"use strict";
/**
 * Write a Java program to calculate the factorial value of a given number.
 *  E.g., factorial 4= 4*3*2*1 = 24
 */
let value1 = 0;
let value2 = 1;
let fibonacci = "";

fibonacci += value1 + ", " + value2;

for (let i = 2; i < 25; i++) {
    let value = value1 + value2;
    fibonacci += ", " + value;
    value1 = value2;
    value2 = value;
}

console.log(fibonacci)