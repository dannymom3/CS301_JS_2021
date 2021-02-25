"use strict";
const prompt = require("prompt-sync")();
let leapYear = +prompt("Please enter a leap year: ");

//Method 1
if (leapYear % 4 === 0 && leapYear % 100 !== 0) {
    console.log("It's a leap year.")
} else if (leapYear % 400 && leapYear % 100 !== 0) {
    console.log("It's a leap year");
} else {
    console.log("it's not a leap year.")
}

//Method 2


//Method 3 -- using ternary operator

//let isleapYear = leapYear % 4 === 0