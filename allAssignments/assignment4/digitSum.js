"use strict";

/**
 * Write a JavaScript program to compute sum of all the digits in a 
 * giveninteger number.
 * --------------------------------------
 *    Input                     Output
 * --------------------------------------
 *     123                       6
 *     102                       3
 *     8                         8
 * --------------------------------------
 */


const prompt = require("prompt-sync")();
let userInput = +prompt("Enter a digit (e.g. 1254): ");


let sum = 0;

//NB: 1234 % 10 = 4
while (userInput > 0) { //or 10

    sum += userInput % 10; //
    userInput = Math.floor(userInput / 10);
}

console.log(`The sum of digit is ${sum}`);