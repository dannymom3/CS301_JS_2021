"use strict";

const prompt = require("prompt-sync")();

let input;
do {
    input = prompt("Enter: ");
    input = input.toLowerCase();
    console.log(`You entered ${input}.`)
} while (input !== "stop");
console.log("Exiting...");