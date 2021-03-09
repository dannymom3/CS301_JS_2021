"use strict";

/*
Write a function that accepts a two-dimensional array of numbers and 
return sum of all the elements in the array.
---------------------------------------------------------------------
*/


/**
 * 
 * @param {Array} arr inputed user arrray
 * @return {number} returns the sum of all elements in the array 
 */
function sumMatrix(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

let matrix = [
    [1, 2, 3],
    [1, 2],
    [3, 2, 3]
];

let answer = sumMatrix(matrix);
console.log(answer);