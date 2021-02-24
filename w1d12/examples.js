"use strict";
const prompt = require("prompt-sync")();
let celsius = prompt("Enter degree celsius: ");
celsius = parseFloat(celsius);

let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit + " Degree fahreheit");

//==========================================================

let temFahrenheit = prompt("Enter degree fahrenheit: ");
temFahrenheit = parseFloat(temFahrenheit);

let tempCelsius = (temFahrenheit - 32) / (9 / 5);
console.log(tempCelsius + " Degree celsius");


//==========================================================

/**
 * Write a program that computes volume of a cylinder based on user inputs
 *  for radius and height of a cylinder, using formula v = πr^2h
 */
let radiusCyl = prompt("Enter the radius of the Cylinder: ");
let heightCyl = prompt("Enter the height of a cylinder: ");
//const PI = 3.14;

radiusCyl = parseFloat(radiusCyl);
heightCyl = parseFloat(heightCyl);

let volumeCylinder = Math.PI * Math.pow(radiusCyl, 2) * heightCyl;
console.log("The volume of Cylinder: " + volumeCylinder + " m^3");
//================================================================
/**
 * Write a program that takes x and y co-ordinates of two points as inputs 
 * and computes distance between these two points based on the 
 * formula, d =  √( x^2 − x 1 )^2+ ( y^2 − y 1 )^2
 */
let pointX1 = parseInt(prompt("Enter point x1: "));
let pointX2 = parseInt(prompt("Enter point x2: "));
let pointY1 = parseInt(prompt("Enter point y1: "));
let pointY2 = parseInt(prompt("Enter point y2: "));

let xDiff = pointX2 - pointX1;
let yDiff = pointY2 - pointY1;

let distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
console.log("Distance between two points: " + distance);
//===================================================================

//console.log(typeof 10n);