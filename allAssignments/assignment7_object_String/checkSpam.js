"use strict";
const prompt = require("prompt-sync")();
/*
write a function   that returns true if str contains text "lottery" or "prize",
otherwise return false.
*/
/**
 * 
 * @param {String} str user input String
 * @return {boolean} returns true if the string contains lottery or prize, otherwise
 * returns false
 */
function checkSpam(str) {
    //includes
    if (str !== "lottery" && str !== "prize") {
        return false;
    } else {
        return true;
    }

}

let inputStr = prompt("Enter a string: ");
let result = checkSpam(inputStr);
console.log(result);