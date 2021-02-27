"use strict";

const prompt = require("prompt-sync")();

let radius = +prompt("Enter radius of a circle: ");
let height = +prompt("Enter height of cylinder: ");
let area;

function circleArea() {
    area = (Math.PI * Math.pow(radius, 2));
    return area;
}

function cylinderVolume() {
    let volume = (circleArea() * height);
    return volume;
}

console.log(`The volume of cylinder is ${cylinderVolume()}`)