"use strict";
/*
write a program that takes comma separated text from user and converts it into an array of words and 
prints in reverse order
*/

const prompt = require("prompt-sync")();

let input = prompt("Please enter some words separated by comma: ");

let arr = input.split(","); //split() used to change the string list in to an array
arr.reverse(); //NB: Array does reverse() method, but String doesn't 
let joinedStr = arr.join("-");
console.log(joinedStr);