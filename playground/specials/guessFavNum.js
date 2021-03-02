"use strict";

const prompt = require("prompt-sync")();

let favNum = 22;
let userInput;
do {

    if (userInput < favNum) {
        console.log("too small, try higher")
    } else if (userInput > favNum) {
        console.log("too high, try lower")
    }
    userInput = +prompt("Enter an integer number: ");


} while (favNum !== userInput);

console.log("Awesome!, you got it!")