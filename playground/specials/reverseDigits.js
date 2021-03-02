"use strict";

const prompt = require("prompt-sync")();

let userInput = +prompt("Enter digit numbers (e.g. 321: ");

function reverseDigits(userInput) {
    //let reverse = 0;
    //OR
    let reverse = "";
    while (userInput > 0) {
        let lastDigit = userInput % 10;
        reverse = reverse * 10 + lastDigit;

        userInput = Math.floor(userInput / 10);
    }
    //return reverse;
    //OR
    return Number(reverse);
}
let result = reverseDigits(userInput);
console.log(`The reverse digits for ${userInput} is ${result}`)