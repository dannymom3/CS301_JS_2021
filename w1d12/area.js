"use strict";
const prompt = require("prompt-sync")();
let radius = prompt("Enter a radius: ");
let area = Math.PI * Math.pow(radius, 2);
console.log(area);


let y = null;
let z = undefined;
console.log(typeof y);
console.log(typeof z)