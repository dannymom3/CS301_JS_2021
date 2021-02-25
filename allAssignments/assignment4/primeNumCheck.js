'use strict';

const prompt = require("prompt-sync")()
    /*
    Input: An integer greater than 1.
    Process: Determine if the integer is prime or not.
    output: A message stating if the integer is prime or not.
    */
function isPrime() {
    let input = prompt("Enterr number ", 0);
    input = parseInt(input);
    let output = checkPrime(input);

    console.log(input + " is prime: " + output);
}

//Return true if value is prime number; otherwise return false
function checkPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

isPrime()