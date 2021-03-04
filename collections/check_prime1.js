"use strict";

//primre number can only divide evenly by itself or one except number 2
//e.g. 11 / 2 = 2.5 is a prime number 

const prompt = require("prompt-sync")();
let value = prompt("Please enter an integer: ");
value = parseInt(value);
/**
 * 
 * @param {number} value a number
 * @return {boolean} return boolean value
 */
function isPrime(value) {


    if (value < 2) {
        return false;
    }
    //using modulus %
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(value));