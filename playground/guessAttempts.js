"use strict";

const prompt = require("prompt-sync")();
const favNum = 5;
let guessNum;
let attempts = 0;
do {
    guessNum = +prompt("Enter your guess number: ");
    attempts++;
} while (guessNum !== favNum);

if (attempts === 1) {
    console.log("awesome, you got it on first attempts");
} else if (attempts === 2) {
    console.log("not bad you got it on your second attempts")
} else {
    console.log(`You got it after ${attempts} attempts!`)
}