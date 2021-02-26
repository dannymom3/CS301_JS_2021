"use strict";

const prompt = require("prompt-sync")();
//in do...while loop, prompt is placed one time inside the 
//loop, but declared outside the loop
let user_input;
do {
    user_input = prompt("Please enter a command (inside): ");
    console.log(`Your command was ${user_input}`);

} while (user_input !== "stop");
console.log("Existing...");