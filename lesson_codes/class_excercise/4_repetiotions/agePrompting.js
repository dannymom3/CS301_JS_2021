"use strict";

const prompt = require("prompt-sync")();

let age = +prompt("Enter your age: ");

let i = 1;

while (age <= 18) {
    console.log(`You entered age is ${age}`)
    age = +prompt("Enter your age: ");
}

console.log("Exiting...")

//TODO with do-while loop