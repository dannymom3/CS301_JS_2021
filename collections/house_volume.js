"use strict";

// This function takes three parameters, which are 
// three sides of a triangle and returns
// the computed area
const prompt = require('prompt-sync')();

function triangleArea(side1, side2, side3) {

    let s = (side1 + side2 + side3) / 2; //Formula to get the semi-perimeter of the triangle
    let area_Of_Triangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return area_Of_Triangle;
}

// This function takes three parameters height, width and depth
// and returns computed volume for a rectangular prism.
function living_Volume(height, width, depth) {
    return height * width * depth;
}

// Function roofVolume, takes three parameters depth, sweep, width
// and with and returns volume of the triangle multiplied with width.
function roofVolume(depth, sweep, width) {
    return triangleArea(depth, sweep, sweep) * width;
}
//Function house_Volume takes four parameters: height, width, depth and sweep; returns total volume 
// i.e. volume of living_volume plus roof_volume.
function house_Volume(height, width, depth, sweep) {
    let totalVolume = living_Volume(height, width, depth) + roofVolume(depth, sweep, width);
    return totalVolume;
}
//Function input_output calls every functions and displays the result for the hose volume.
function input_output() {

    let width = parseFloat(prompt("Please enter width: "));
    let height = parseFloat(prompt("Please enter height: "));
    let depth = parseFloat(prompt("Please enter depth: "));
    let sweep = parseFloat(prompt("Please enter sweep: "));

    let volume = house_Volume(height, width, depth, sweep);
    //print the house volume
    console.log("The volume of the house is: " + volume);

}
//calls the function
input_output();