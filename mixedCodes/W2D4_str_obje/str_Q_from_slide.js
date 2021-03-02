'use strict';
/*Write a program that keeps on asking for user input and prints it, until
user types the word "stop" (without quotes). "Stop" word can be in
any case (small, capital or mixed)
*/

const prompt = require("prompt-sync")()

let input = prompt("Enter phrase ");
let lower = input.toLocaleLowerCase();
while(lower !== "stop"){
    console.log(input);
    input = prompt("Enter phrase ");
    lower = input.toLocaleLowerCase();

}

console.log(input);