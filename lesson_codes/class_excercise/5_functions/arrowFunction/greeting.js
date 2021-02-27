"use strict";
const prompt = require("prompt-sync")();
let age = prompt("What is your age?: ", 18);

let welcome = (age < 18) ?
    function() { console.log("Hello!"); } :
    function() { console.log("Greetings!"); };

welcome(); // ok now


/**
 *              using arrow function
 * -------------------------------------------------
  let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome();
  
 */