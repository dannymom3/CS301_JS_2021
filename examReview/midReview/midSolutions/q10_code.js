"use strict";

/**
 * Q10. write a program that keeps on asking input from the user and prints
 * it back to the console until user enters 'stop' as an input
 */

const prompt = require("prompt-sync")();

let input;

do {
    input = input.toLowerCase;
    input = prompt("Enter your command: ");
    console.log(`You're entered ${input}: `)
} while (input !== "stop");

console.log("Exiting from do while loop...");

//OR
//Method 2

while (true) {
    input = input.toLowerCase;
    input = prompt("Enter your command: ");
    if (input === "stop") {
        break;
    }
}
console.log("Exiting from while loop...")