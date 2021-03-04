"use strict";

/**
 * A stacked number is defined to be a number thhat is the sum of the first n positive integers for some n. 
 * The first stacked numbers are:
 *    1 = 1
 *    3 = 1 + 2
 *    6 = 1 + 2 + 3
 *    10 = 1 + 2 + 3 + 4
 * 
 * Example, 7 and 8 are not stacked numbers because they can't be the sum of any sequence of positive integers
 * that start at 1
 * 
 * write a function named isStacked that returns true if its argument is stacked. Otherwise, returns false.
 * Example, isStacked(10) should return true and isStacked(7) should return false. 
 */

const prompt = require("prompt-sync")();

let userInput = +prompt("Enter an integer number to check if it's stacked or not: ");

function isStacked(userInput) {
    let sum = 1; //because 1 is a stack number
    for (let i = 0; i < userInput; i++) { //
        sum += i;

        if (sum === userInput) {
            return true;
        }


        if (sum > userInput) {
            return false;
        }

    }

}
let answer = isStacked(userInput);
console.log(answer);