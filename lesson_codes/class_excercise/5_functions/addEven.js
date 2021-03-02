"use strict";

const prompt = require("prompt-sync")();

let num = +prompt("Enter a number: ");
let sum = 0;

function addEven(num) {

    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(addEven(num));