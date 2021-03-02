"use strict";

const prompt = require("prompt-sync")();


let grossSalary = +prompt("Enter your gross salary: ");

let taxAmount = 0;

if (grossSalary < 20000) {
    taxAmount = 0;
} else if (grossSalary < 50000) {
    taxAmount = 0.5 * (grossSalary - 20000);
} else {
    taxAmount = 1500 + 0.1 * (grossSalary - 50000);
}

let netSalary = grossSalary - taxAmount;


console.log(`The gross pay ${grossSalary}
             tax ${taxAmount} and 
             net salary is ${netSalary}`);