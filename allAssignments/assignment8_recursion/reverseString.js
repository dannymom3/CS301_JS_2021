"use strict";
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