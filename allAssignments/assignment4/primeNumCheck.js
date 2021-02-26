'use strict';
/**
 * Aprime number (or a prime) is a natural number greater than 1 that is not 
 * a product of two smaller natural numbers.
 *  In other words, it is a number that is only perfectly divisible by number 1 and itself.
 *  Write a JavaScript program to test weather user input is a prime number or not.
 *            a.Your logic should be based on factor count. i.e., prime 
 *              number will have 0 factors (not counting 1 and itself), while 
 *              composite will have 1 or more factors.
 *            b.This timethink of a logic to use break statement so that you can break early
 *              from the loop,right when you know number is not prime.
 *               For example,you know number 8 is not prime right on the first loop
 *               because it is perfectly divisible by 2 itself, that's why further 
 *               testing is not required. If the number is prime loop willproceed until the end.
 */
const prompt = require("prompt-sync")()

let userNum = +prompt("Enter an integer number: ");
let isPrime = true;
if (userNum === 1) {
    console.log("1 is neither a prime nor a composite number.");

} else if (userNum > 1) {
    for (let i = 2; i < userNum; i++) {
        if (userNum % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${userNum} is a prime number.`)
    } else {
        console.log(`${userNum} is not a prime number.`)
    }
}