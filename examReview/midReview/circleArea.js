"use strict";

const prompt = require("prompt-sync")();

let area;

let radius;
do {
    radius = +prompt("Enter a radius: ");
    area = (Math.PI * Math.pow(radius, 2));
} while (radius <= 0);
console.log(`Area of circle is ${area}`);