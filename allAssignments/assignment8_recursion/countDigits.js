"use strict";
/*
count the digits of a given number
---------------------------------------------------------------------
*/

/**
 * 
 * @param {number} nums user input number digits
 * @return {number} returns the number of digits that user was entered 
 */
function countDigits(nums) {
    if (nums === 0) {
        return 0;
    } else if (nums === 1) {
        return 1;
    } else {
        return 1 + countDigits(Math.floor(nums / 10));
    }
}

let myDigits = 1234234566;
console.log(countDigits(myDigits)); //10