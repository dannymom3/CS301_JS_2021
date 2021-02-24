"use strict";
/**
 * Write JavaScript program to compute the mileage of a vehicle. 
 * Your program should allow the user to enter the beginning and 
 * ending odometerreadings and the number of gallons of gas
 * used and should output the mileage in miles per gallon. 
 */

const prompt = require("prompt-sync")();
let startOdometer = +prompt("Enter the beginning of odometer: ", 0);
let endOdometer = +prompt("Enter the ending odometer: ", 0);
let numGallonsOfGas = +prompt("Enter number of gallons of gas: ", 0);

let mileagePerGallon = (endOdometer - startOdometer) / numGallonsOfGas;

console.log(`The mileage per gallon is: ${mileagePerGallon}`);