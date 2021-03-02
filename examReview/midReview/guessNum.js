"use strict";

const prompt = require("prompt-sync")();

let guess;
let userAttempts = 0;

do {
    guess = +prompt("enter your guess: ");
    userAttempts++;

} while (guess !== 5);

if (userAttempts === 1) {
    console.log("Awesome");
} else if (userAttempts === 2) {
    console.log("great")
} else if (userAttempts === 3) {
    console.log("not bad");
} else {
    console.log(`it took ${userAttempts} attempts`);
}