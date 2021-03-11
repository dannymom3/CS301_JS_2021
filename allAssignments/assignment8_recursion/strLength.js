"use strict";
const prompt = require("prompt-sync")();

/**
 * 
 * @param {String} str user input String
 * @return{number} returns the total length of user input String
 */
function stringLength(str) {
    if (str === "") {
        return 0;
    } else {
        return 1 + stringLength(str.substr(1));
    }
}
let input = prompt("Enter your string: ");
console.log(stringLength(input));