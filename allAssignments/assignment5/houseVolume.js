"use strict";
/**
 *  This function takes three parameters, which are 
 * three sides of a triangle and returns
 * the computed area
 */

const prompt = require("prompt-sync")();
/**
 * 
 * @param {number} side1 side one of the triangle 
 * @param {number} side2 second side of the triangle 
 * @param {number} side3 third side of the triangle
 * @return {number} returns area of triangle 
 */
function triangleArea(side1, side2, side3) {

    let semiCircum = (side1 + side2 + side3) / 2; //Formula to get the semi-perimeter of the triangle
    let areaOfTriangle = Math.sqrt(semiCircum * (semiCircum - side1) * (semiCircum - side2) * (semiCircum - side3));

    return areaOfTriangle;
}

/**
 * 
 * @param {number} height the height of the house
 * @param {number} width the width of the house 
 * @param {number} depth the depth of the house 
 * @return {number} returns the volume of the house
 */
function livingVolume(height, width, depth) {
    return height * width * depth;
}

/**
 * 
 * @param {number} depth depth of the roof 
 * @param {number} sweep the sweep of the roof 
 * @param {number} width the width of the roof
 * @return {number} returns the roof volume of the house 
 */
function roofVolume(depth, sweep, width) {
    return triangleArea(depth, sweep, sweep) * width;
}
/**
 * 
 * @param {number} height the height of the house
 * @param {number} width the width of the house 
 * @param {number} depth the depth of the house 
 * @param {number} sweep of the house roof
 * @return {number} returns the total volume of the house 
 */
function houseVolume(height, width, depth, sweep) {
    let totalVolume = livingVolume(height, width, depth) + roofVolume(depth, sweep, width);
    return totalVolume;
}
/**
 * @return {number} returns the volume of the house
 */
function inputoutput() {
    let width = parseFloat(prompt("Please enter width: "));
    let height = parseFloat(prompt("Please enter height: "));
    let depth = parseFloat(prompt("Please enter depth: "));
    let sweep = parseFloat(prompt("Please enter sweep: "));

    let volume = houseVolume(height, width, depth, sweep);
    //print the house volume
    console.log("The volume of the house is: " + volume);

}
//call the function
inputoutput();