"use strict";

function myDisplayer(result) {
    console.log(`Result of the calculation is ${result}`);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);