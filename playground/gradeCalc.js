"use strict";
const prompt = require("prompt-sync")();

let average = +prompt("Enter your average marks: ");

function myGrade(score) {
    let letterGrade;
    switch (true) {
        case score >= 92:
            letterGrade = 'A';
            break;
        case score >= 85:
            letterGrade = 'B';
            break;
        case score >= 75:
            letterGrade = 'C';
            break;
        default:
            letterGrade = "NC";
            break;
    }
    return letterGrade;
}
let result = myGrade(average);
console.log(`Your letter grade is ${result}`);