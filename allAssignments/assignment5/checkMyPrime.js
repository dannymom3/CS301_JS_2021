"use strict";
/**
 * Write a function named checkPrimethat accepts a parameter and returns true 
 * if the argument is a prime number otherwise returns false.
 *     a.Now write a program that prompts user to input a number and 
 *       calls the function checkPrime to see if the entered number is a prime number or not.
 */

//const prompt = require("prompt-sync")();

//let userNum = +prompt("Enter an integer number");
/**
 * 
 * @param {number} userNum a number to input the user to check the primr or not
 * @return {boolean} returns true or false 
 */
function isPrime(userNum) {

    if (userNum === 1) {

        return false;

    } else if (userNum > 1) {
        for (let i = 2; i < userNum; i++) {
            if (userNum % i === 0) {
                return false;

            }
        }

        return true;
    }
}
//console.log(isPrime(userInput));
module.exports = { isPrime };