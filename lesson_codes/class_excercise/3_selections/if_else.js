"use strict";
/**
 * Q1. Write a program that asks user to enter weather for today and
 *  print "Get an umbrella" if weather is rainy.
 */
const prompt = require("prompt-sync")();
let userInput = prompt("Tell me the weather outside?")
let weather = "rainy";

if (weather === "rainy") {
    console.log("get an umbrella");
} else {
    console.log("enjoy your sunny day!");
}

/**
 * Q2. Write a program that asks user to enter a number between 1 to 10, and 
 * print "Bingo!" if user enters 7 otherwise prints "Try again.".
 * Use === for comparison not ==
 */
let numInput = prompt("Enter your number to guess: ");
numInput = parseInt(numInput);
let numGuess = 7;
if (numGuess === numInput) {
    console.log("Bingo!");
} else {
    console.log("That's not right!, try again!")
}