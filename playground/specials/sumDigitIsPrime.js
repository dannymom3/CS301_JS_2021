"use strict";

const prompt = require("prompt-sync")();

let userInput = +prompt("Enter digit numbers (e.g. 321: ");


function sumDigits(userInput) {
    let sum = 0;

    while (userInput > 0) {
        let lastDigit = userInput % 10;

        sum += lastDigit;
        userInput = Math.floor(userInput / 10);
    }
    return sum;
}
//console.log(sumDigits(userInput));

function isPrime(userInput) {
    if (userInput < 2) {
        return false;
    }
    for (let i = 2; i < userInput; i++) {
        if (userInput % i === 0) {
            return false;
        }
    }
    return true;
}

function checker(userInput) {
    let myChecker = sumDigits(userInput);

    let result = isPrime(myChecker);
    return result;
}

console.log(checker(userInput));