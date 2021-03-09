"use strict";
/*
Write a function named suffix that returns the common suffix of two strings. 
For example, the common suffix of “swimming” and “walking” is “ing”. 
This function takes two parameters and returns the common suffix.
*/

/**
 * 
 * @param {String} str1 user input string
 * @param {String} str2 user input String
 * @return {String} returns suffix String of the two user input Strings
 */
function suffix(str1, str2) {
    let endStr = "";
    let deduct = 0;
    while (true) {
        if (str1[str1.length - 1 - deduct] === str2[str2.length - 1 - deduct]) {
            endStr = str1[str1.length - 1 - deduct] + endStr;
            deduct++;
        } else {
            break;
        }
    }
    return endStr;
}
let strOne = "daning";
let strTwo = "standing";

let answer = suffix(strOne, strTwo);
console.log(answer);