"use strict";

/*
Write a swap function that takes two parameters of number
 type and swap the values of the passed parameters.
 */
/**
 * 
 * @param {number} num1 first input number by the user
 * @param {number} num2 second user input number
 * @return {number} returns the swapped number of the user input
 */
function swap(num1, num2) {
    let temp;
    temp = num1;
    num1 = num2;
    num2 = temp;

    return num1 + "," + num2;
}

let xxx = 5;
let yyy = 7;
console.log(xxx, yyy); // 5, 7
//swap(xxx, yyy);
console.log(swap(xxx, yyy)); // 7, 5