"use strict";
/**
 * Write a JavaScript function isReversedPrime, that takes a number as aninput and 
 * check ifthe reverse of the input number is prime or not.Hint: 
 * Write two helper functions, onefor reversing andanother forchecking prime and 
 * use it in the function isReversedPrime.
 * e.g., isReversedPime(32) returns true because reverse of 32 which is 23 is prime
 */
const prompt = require("prompt-sync")();
let num = +prompt("Enter your digit: ");


function primeReverse(num) {
    let reverse = "";
    while (num > 0) {
        let lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    return Number(reverse);
}

//console.log(primeReverse(num));

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;

        }
    }
    return true;
}

function isReversedPime(num) {
    let reverseedNum = primeReverse(num);
    let result = isPrime(reverseedNum);
    return result;
}
console.log(isReversedPime(num));