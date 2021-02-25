"use strict";
const prompt = require("prompt-sync")();

//let userInput = parseInt(prompt("Enter a number, 1 - 5: ")); OR
let userInput = +prompt("Enter a number, 1 - 5: ");
// + sign is used to change the default input value changes in to a number
let spellNum;

switch (userInput) {
    case 1:
        spellNum = "one";
        break;
    case 2:
        spellNum = "two";
        break;
    case 3:
        spellNum = "Three";
        break;
    case 4:
        spellNum = "Four";
        break;
    case 5:
        spellNum = "Five";
        break;
}
console.log(`${userInput} is spell like ${spellNum}`);