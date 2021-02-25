"use strict";
const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");

age = parseInt(age);

//Method 1 - using if..else and logical operator
if (age <= 0) {
    console.log("enter a valid age");
} else if (age > 0 && age <= 14) {
    console.log("You can not drive yet");
} else if (age >= 15 && age <= 18) {
    console.log("you can drive under supervision");
} else {
    console.log("you can drive");
}

//Mehod 2 - using if..else

if (age <= 0) {
    console.log("nter a valid age ");
} else if (age <= 14) {
    console.log("you can not drive");
} else if (age <= 18) {
    console.log("you can drive under supervision");
} else {
    console.log("You can drive");
}