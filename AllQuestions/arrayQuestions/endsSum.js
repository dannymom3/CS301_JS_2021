"use strict";

//Write a function that return the sum of the first and last value in an array.
/**
 * 
 * @param {Array} arr user input Array
 * @returns {number} returns the sum of the first and last elements of the array
 */
function addEnds(arr) {
    let sum = 0;
    //let sum = arr[0] + arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        sum = (arr[0] + (arr[arr.length - 1]));
    }
    return sum;
}
let list = [1, 2, 3, 4, 5, 6, 100];
console.log(addEnds(list));