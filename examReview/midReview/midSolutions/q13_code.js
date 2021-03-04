"use strict";

/**
 * write a function named isSumFirstLastOdd that takes an integer number as an argument and sums firrst and last digits of the number and 
 * returns true if the sums is odd, otherwise returns false. Do not use String opertaions to access the digits. Work 
 * with the numbers as numbers. Access digits using numbers like %.
 *   isSumFirstLastOdd(12363)  --> false, because of 1 and 3 is 4 which is even
 *   isSumFirstLastOdd(12364)  --> true, because of 1 and 4 is 5 which is odd
 */

const prompt = require("prompt-sync")();

let userInput = +prompt("Enter the number digits e.g. (15362: ");



function isSumFirstLastOdd(userInput) {
    let lastDigit = userInput % 10;

    let firstDigit = 0;
    let sum = 0;
    while (userInput > 0) {

        firstDigit = userInput;
        userInput = Math.floor(userInput / 10);

    }

    sum = lastDigit + firstDigit;
    console.log(`  sum ${sum}`)
    console.log(`   last digit ${lastDigit} and 
      first digit ${firstDigit}`)
        //isOdd(sum);
    if (sum % 2 !== 0) {
        return true;
    } else {
        return false;
    }

}
let answer = isSumFirstLastOdd(userInput)
console.log(answer)




// function isOdd(num) {
//     if (sum % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let answer = isSumFirstLastOdd(userInput);

// console.log(sum);