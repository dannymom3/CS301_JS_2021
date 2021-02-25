"use strict";
const prompt = require("prompt-sync")();

let userInput = parseInt(prompt("Enter a number, 1 - 5: "));

let spellNum;

if (userInput === 1) {
    spellNum = "one";
}
if (userInput === 2) {
    spellNum = "two";
}
if (userInput === 3) {
    spellNum = "Three";
}
if (userInput === 4) {
    spellNum = "Four";
}
if (userInput === 5) {
    spellNum = "Five";
}
console.log(`${userInput} is spell like ${spellNum}`);
console.log();