"use strict";

const prompt = require("prompt-sync")();
let input = prompt("Enter your command: ");
input = input.toLowerCase();

while (input !== "stop") {

    console.log("you entered: " + input);
    input = prompt("Enter your command: ");
}
console.log("Exiting...");