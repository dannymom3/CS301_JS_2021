"use strict";

//Method 1 - Recursively
/**
 * 
 * @param {number} num user input number to compute the factorial of the number
 * @return {number} returns the factorial of user input number 
 */
function factorial(num) {
    //base case
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

let myNum = 10;
console.log(factorial(myNum));

//Method 2 - Iteratively

function factorial(num) {
    let result = 1;

    for (let i = 1; i < num; i++) {
        result *= i;
    }
    return result;
}