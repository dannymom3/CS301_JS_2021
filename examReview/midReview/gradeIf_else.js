"use strict";

const prompt = require("prompt-sync")();
let average = +prompt("Enter your average: ");
let grade;

if (average < 75) {
    grade = "NC";
} else if (average < 85) {
    grade = 'C'
} else if (average < 92) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log(`Your grade is ${grade}`);