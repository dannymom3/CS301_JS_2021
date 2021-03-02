"use strict";

const prompt = require("prompt-sync")();

function isOdd(n) {
    return n % 2 !== 0;
}

let input = prompt("Enter an integer number: ");
let sum = 0;

for (let i = 0; i < input; i++) {
    if (isOdd(i)) {
        sum += i;
    }
}

console.log(sum);