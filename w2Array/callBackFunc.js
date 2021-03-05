"use strict";

/**
 * 
 * @param {number} result is the sum of two numbers
 * @return {number} sum the sum of two numbers 
 */
function myDisplayer(result) {
    console.log(`Result of the calculation is ${result}`);
}
/**
 * 
 * @param {number} num1 the first number to be added 
 * @param {number} num2 the second number to be added 
 * @param {number} myCallback get the sum of the two numbers
 * @return {number} sum is the sum of two numbers 
 */
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);

module.exports = { myDisplayer, myCalculator };