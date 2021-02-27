"use strict";
const prompt = require("prompt-sync")();

let userInput = +prompt("Enter an integer number: ");

let sum = 0;

for (let i = 0; i < userInput; i++) {
    if (userInput % i === 0) {
        sum += i;
    }
}
if (userInput === sum) {
    console.log("it is a perfect number! ");
} else {
    console.log("it's not a perfect number");
}

console.log(`The sum of factors is:   ${sum}`);