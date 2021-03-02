"use strict";

const prompt = require("prompt-sync")();

let inputs = +prompt("Enter digit numbers (e.g. 132: ");
let sum = 0;

function sumDigits(inputs) {

    while (inputs > 0) {
        let lastDigit = inputs % 10;
        sum += lastDigit;
        inputs = Math.floor(inputs / 10);
    }
    return sum;
}

console.log(sumDigits(inputs));