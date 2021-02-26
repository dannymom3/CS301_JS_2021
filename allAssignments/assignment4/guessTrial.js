"use strict";
/**
 * Write a JavaScript programthat gives the user three tries to guess the
 *  correct pin of the account. You set the pin as a constant. 
 * When correct display “Correct, welcome back.” 
 * When incorrect display “Incorrect, try again.”. 
 * When run out of tries display “Sorry but you have been locked out.”
 */

const prompt = require("prompt-sync")();
let inputPin = +prompt("Enter four digits to guess a pin number, e.g. 1421: ");
let myPin = 1122;
let trial = 3;
let i = 1;

while (i <= 3) {
    if (inputPin === myPin) {
        console.log("Correct, welcome back!")
        break;
    } else {
        console.log("Incorrect pin!, try again!")
    }

    inputPin = +prompt("Enter four digits to guess a pin number, e.g. 1421: ");
    i++;
}
console.log("Sorry but you have been locked out!")