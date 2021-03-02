"use strict";

const prompt = require("prompt-sync")();

let input = +prompt("Enter an integr number: ");

if (input % 2 !== 0) {
    console.log("odd");
} else {
    console.log("even");
}