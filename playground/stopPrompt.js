"use strict";

const prompt = require("prompt-sync")();

let input;
do {
    input = prompt("Enter: ");
    input = input.toLowerCase();
    console.log(`You entered ${input}.`);
} while (input !== "stop");
console.log("Exiting...");

"use strict";
/*Write a program that keeps on asking for user input and prints it, until
user types the word "stop" (without quotes). "Stop" word can be in
any case (small, capital or mixed)
*/

let userInput = prompt("Enter phrase ");
let lower = userInput.toLocaleLowerCase();
while (lower !== "stop") {
    console.log(userInput);
    userInput = prompt("Enter phrase ");
    lower = userInput.toLocaleLowerCase();

}

console.log(userInput);