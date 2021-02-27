"use strict";
/**
 * Write a function named testPrimethat returns true when argument to the 
 * function is a prime number, otherwise returns false.
 * Now call the function to test if user input is prime or not.
 */

const prompt = require("prompt-sync")();

let inputNum = +prompt("Enter an integer number: ");
//let isPrime = true;

function test_Prime(inputNum) {
    if (inputNum === 1) {
        return false;
    } else if (inputNum > 1) {
        for (let i = 2; i < inputNum; i++) {
            if (inputNum % i == 0) {
                return false;
                break;
            }
        }
        return true;
    }
}
console.log(test_Prime(inputNum));