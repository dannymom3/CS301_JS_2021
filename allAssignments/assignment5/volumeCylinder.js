"use strict";

const prompt = require("prompt-sync")();

let radius = parseInt(prompt("Enter radius of a circle: "));
let height = parseInt(prompt("Enter height of cylinder: "));
let area;
/**
 * @return {number} area returns area of the circle
 */
function circleArea() {
    area = parseInt(Math.PI * Math.pow(radius, 2));
    return area;
}
/**
 * @return {number} volume returns volume of cylinder
 */
function cylinderVolume() {
    let volume = parseInt(circleArea() * height);
    return volume;
}
module.exports = { circleArea, cylinderVolume };
console.log(`The volume of cylinder is ${cylinderVolume()}`);