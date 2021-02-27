"use strict";

/**
 * Write a function to compute area of a triangle based on the following formula
 *      •Area = √s(s−a)(s−b)(s−c)
 *           •where a, b and c are the lengths of the three side of a triable 
 *                  and s is the semi-perimeter of the triangle defined by following formula
 *                      s = (a+b+c)/2;
 * •Write a separate function for computing semi-perimeter.
 */

const prompt = require("prompt-sync")();

let inputLengthA = +prompt("Enter length a: ");
let inputLengthB = +prompt("Enter length b: ");
let inputLengthC = +prompt("Enter length c: ");
let s;

function getArea() {
    semi_perimeter();

    let area = Math.sqrt(s * (s - inputLengthA) * (s - inputLengthB) * (s - inputLengthC));
    return area;

}

function semi_perimeter(s) {
    s = (inputLengthA + inputLengthB + inputLengthC);
    return s;
}
console.logget(`The area of triable is ${area}`);