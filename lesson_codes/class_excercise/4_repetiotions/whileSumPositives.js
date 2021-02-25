"use strict";

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

const prompt = require("prompt-sync")();
//take the input from the user

let sum = 0;
let inputNum = parseInt(prompt("Enter a number: "));
while (inputNum >= 0) {
    //add all positive numbers
    sum += inputNum;

    //take input again if the number is positive
    inputNum = parseInt(prompt("Enter a number: "));

}

//display the sum
console.log(`The sum is ${sum}`);