"use strict";
/**
 * @since 2021 / 2/ 2
 * @author Daniel Haile
 * @param {number} op1 first number to be added 
 * @param {number} op2 second number to be added
 * @return {number} sum returns the sum of two numbers 
 */
function add(op1, op2) {
    let sum = op1 + op2;

    return sum;
}

/**
 * @param {number} op1 the first number to be subtract 
 * @param {number} op2 the second number to be subtract
 * @return {number} result the result of the subtraction 
 */
function sub(op1, op2) {
    let result = op1 - op2;

    return result;

}
/**
 * @param {number} op1 first number to be multiplied
 * @param {number} op2 second number
 * @return {number} answer
 */
function div(op1, op2) {
    let answer = op1 / op2;
    return answer;

}

module.exports = { add, sub, div };