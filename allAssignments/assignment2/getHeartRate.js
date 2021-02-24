"use strict";
/**
 * Q5. When you exercise to strengthen your heart, you should maintain your 
 * heart rate within a range. To find that range, subtract your age from 220. 
 * This difference is your maximum heart rate per minute. Your heart simply will
 *  not beat faster than thismaximum (220 − age). When exercising to strengthen your heart, 
 * you should keep your heart rate between 65% and 85% of your heart’s maximum. 
 * Write a JavaScript program that asks for a person’s age and computes and outputs the 
 * slowest and fastest rates necessary to strengthen his heart.
 */
const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter your age: "));
const NUM_RANGE = 220;
let max_heartRate = NUM_RANGE - age;
let slowest_heartRate = max_heartRate * 0.65;
let fastest_heartRate = max_heartRate * 0.85;

console.log(`The fastest heart rate is ${fastest_heartRate}, and 
The lowest heart rate is ${slowest_heartRate}.`)