"use strict";

const prompt = require("prompt-sync")();
let weather = prompt("What is the weather today outside?: ")
let temp = prompt("Please enter the current temperature: ")

//Method 1 -- 
if (weather === "sunny" && temp < 80) {
    console.log("go to running");
} else if (weather === "sunny" && temp > 80) {
    console.log("go to swimming")
} else {
    console.log("Stay home");
}

//Method 2 -- using nested loop --perfect!
if (weather === "sunny") {
    if (temp < 80) {
        console.log("good day for running");
    } else {
        console.log("good day for swwimming");
    }
} else {
    console.log("Stay home");
}