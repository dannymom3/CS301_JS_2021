"use strict";

const prompt = require("prompt-sync")();

let input;
let capitalCase;

do {
    input = prompt("Please enter some text: ");
    capitalCase = input.toUpperCase();
    console.log(`You're entered ${input}`);

} while (capitalCase !== "STOP");
console.log("Exiting...");