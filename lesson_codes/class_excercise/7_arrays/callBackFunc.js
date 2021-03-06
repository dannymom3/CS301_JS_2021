"use strict";


/**
 * 
 * @param {number} num1 first number 
 * @param {number} num2 second number
 * @return {number} returns sum
 */
let sum = function(num1, num2) {
    return num1 + num2;
};

/**
 * 
 * @param {number} op1 first num 
 * @param {number} op2 second number 
 * @param {number} operator third number
 * @return {number} returns the sum 
 */
function calculator(op1, op2, operator) {
    return operator(op1, op2);

}

console.log(calculator(5, 5, sum));