"use strict";
/**
 * Write a Java program to calculate the factorial value of a given number.
 *  E.g., factorial 4= 4*3*2*1 = 24
 */
const prompt = require("prompt-sync")();

let inputNum = +prompt("Enter an integer number: ");
if (inputNum < 0) {
    console.log("Invalid input number, try again")
} else if (inputNum === 0 || inputNum === 1) {
    console.log(`Factorial of ${inputNum} is 1`);
} else {
    let factorial = 2;
    for (let i = 2; i < inputNum; i++) {
        factorial *= i;
    }
    console.log(`The factorial of ${inputNum} is ${factorial}`);
}