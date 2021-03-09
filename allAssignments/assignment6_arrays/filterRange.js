"use strict";

/*
Write a function filterRange(arr, a, b)that gets an array arr, looks for elements 
with values >= a and values <= b and return a result as an array
*/

/**
 * 
 * @param {Array} arr inputed array
 * @param {} a 
 * @param {*} b 
 */
function filterRange(arr, num1, num2) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num1 || arr[i] > 7) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(filterRange([6, 4, 3, 7, 5, 8], 4, 7)) // [6,4,7,5]