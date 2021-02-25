"use strict";

/**
 * Write a program that helps a user choose the correct
 *  footwearfor the day’s weather based on the table shown below. 
 * If the user enters any other weather type, your program should output “sneakers”
 
 * Weather            Footwear
 ----------------------------------
 * hot                 sandals
 * rain                galoshes
 * snow                bboo
 */
const prompt = require("prompt-sync")();

let weather = prompt("Enter weather type today: ");
let footwear;

if (weather === "hot") {
    footwear = "sandals";
}
if (weather === "rain") {
    footwear = "galoshes";
}
if (weather === "snow") {
    footwear = "boots";
}

console.log(`You better wear your ${footwear}`);