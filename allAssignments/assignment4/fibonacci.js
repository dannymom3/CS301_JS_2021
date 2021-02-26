"use strict";
/**
 * Write a defining table and JavaScript program to Display
 *  Fibonacci series up to N terms.
 *  N being positive integer from user input.
 * The Fibonacci series isa sequencesuch that each number is the sum of 
 * the two preceding ones, starting from 0 and 1. 
 * That is,  fib(0)= 0, fib(1) = 1, fib(n) = fib(n –1) + fib(n –2) 
 * for n > 1.0, 1, 1,2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 */

/**
  * 
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
  */
const prompt = require("prompt-sync")();
let inputNum = parseInt(prompt('Enter the number of terms: '));
let value1 = 0;
let value2 = 1;
let fibonacci = "";

fibonacci += value1 + ", " + value2;

for (let i = 2; i < inputNum; i++) {
    let nextVal = value1 + value2;
    fibonacci += ", " + nextVal;
    value1 = value2;
    value2 = nextVal;
}

console.log(fibonacci);