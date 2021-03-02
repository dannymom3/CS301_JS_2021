"use strict";

const prompt = require("prompt-sync")();

let userInput = +prompt("Enter an integer number: ");

function reverseDigits(userInput) {
    let reverse = "";

    while (userInput > 0) {
        let lastDigit = userInput % 10;
        reverse = reverse * 10 + lastDigit;
        userInput = Math.floor(userInput / 10);
    }
    return reverse;
}

//console.log(reverseDigits(userInput));

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
//console.log(isPrime(userInput));

function checher(userInput) {
    let theReversed = reverseDigits(userInput);
    let result = isPrime(theReversed);
    return result;
}

console.log(checher(userInput));