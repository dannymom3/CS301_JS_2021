"use strict";
/**
 * Q2. Write a JavaScript program that asks a user for a distance in kilometers
 *  and then convert that value in miles.
 */
const prompt = require("prompt-sync")();
let distKm = +prompt("Enter a distance value in killometer: ");
let miles = distKm / 0.6;

console.log(`${miles} in miles.`)