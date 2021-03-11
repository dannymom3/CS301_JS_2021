"use strict";
const prompt = require("prompt-sync")();

/**
 * 
 * @param {number} num user input number
 * @return {number} returns the sum of nth(user input) fibonacci number
 */
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        let prev2 = 0;
        let prev1 = 1;
        let result;
        for (let i = 2; i <= num; i++) {
            result = prev2 + prev1;
            prev2 = prev1;
            prev1 = result;
        }
        return result;
    }

}

let input = +prompt("Enter your number: ");
console.log(fibonacci(input));