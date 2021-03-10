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


/*
calculate the power of any base
*/

/**
 * 
 * @param {number} base the base of the exponent 
 * @param {number} expo exponent of the base power
 * @return {number} returns base to the exponent
 */
function pow(base, expo) {
    if (expo === 0) {
        return 1;
    } else if (expo === 1) {
        return base;
    } else {
        return base * pow(base, expo - 1);
    }
}

/*
reverse a given string
---------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {String} str user input String
 * @return {String} returns reversed user input String
 */
function reverseString(str) {
    if (str === "") {
        return "";
    } else {

        let first = str.charAt(0);
        return reverseString(str.substr(1)) + first;
    }
}
let myString = "Daniel";
console.log(reverseString(myString));


//method 2 - using Iteration loop

/**
 * @param {String} str user input String
 * @return {String} returns reversed user input String
 */
function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
let myStr = "Danny";
console.log(reverseStr(myStr));


//Method 3 - using reduce() method
/**
 * @param {String} str user input String
 * @return {String} returns reversed user input String
 */
function reverse3(str) {
    return ([...str].reduce((accumulator, char) => char + accumulator, ""));
}
let rev3 = "Haile";
console.log(reverse3(rev3));


let myNum = 2;
console.log(pow(3, myNum));



let myDigits = 1234234566;
console.log(countDigits(myDigits)); //10

module.exports = { countDigits, pow, reverseString };