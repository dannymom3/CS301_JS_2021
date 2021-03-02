"use strict";
//Leap year -- divisible by 4 or divisible by 100 and 400 at the same time

//Example -- leap year -- 2016, 2000
// Not a leap year -- 1700, 1800, 100
const prompt = require("prompt-sync")();
let year = +prompt("Enter a year to check leap year or not: ");

if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year.");
    }
} else if (year % 4 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}