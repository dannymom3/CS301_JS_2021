"use strict";
const prompt = require("prompt-sync")();
let sum = 0;
while (true) {
    let value = +prompt("Enter a number: ", '');
    if (!value) {
        break; //(*)
    }
    sum += value;
}
console.log('Sum:' + sum);