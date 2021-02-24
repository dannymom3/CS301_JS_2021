"use strict";
/**
 * Q1. Write a JavaScript program that ask a user for a volume 
 * in quarts then converts that value in liters.
 */
const prompt = require("prompt-sync")();
//let volQuarts = parseFloat(prompt("Enter a value in quarts: ")); //OR
let volQuarts = +prompt("Enter a value in quarts: "); //The + sign is used to change in to number

let volLiter = volQuarts / 0.95;

console.log(`The volume in liter is ${volLiter}`);