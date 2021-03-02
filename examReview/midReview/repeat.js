"use strict";
const prompt = require("prompt-sync")();

let age = +prompt("Enter your age: ");
let count = 0;
for (let i = 0; i <= age; i++) {
    console.log("happy birthday!");
    count++;
}
console.log();
console.log(`happy birthday! = ${count} times`);