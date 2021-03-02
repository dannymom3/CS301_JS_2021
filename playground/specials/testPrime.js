"use strict";

const prompt = require("prompt-sync")();

let userInput = +prompt("Enter an integer number: ");

function testPrime(userInput) {
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

console.log(testPrime(userInput));