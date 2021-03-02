"use strict";

const prompt = require("prompt-sync")();

let num = +prompt("Enter digits of numbers: ");
let lastDigit = num % 10;
let firstDigit = num;
while (firstDigit >= 10) {
    firstDigit = num % 10;


}

let sumFirstLast = lastDigit + firstDigit;
console.log(sumFirstLast);