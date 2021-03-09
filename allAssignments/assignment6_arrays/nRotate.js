"use strict";
/*
Modify rotate functions to rotate array by n times where, n is the second parameter 
passed in the function
*/

/**
 * 
 * @param {array} arr the given array element 
 * @param {number} num counter number to be rotated the given array
 * @return {array} returns the rotated array by num times
 */
function rotateLeft(arr) {

    let first = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];


    }
    arr[arr.length - 1] = first;

    return arr;

}

function rotateNLeft(arr, num) {
    let nRotate = arr;
    for (let i = 0; i <= num; i++) {
        nRotate = rotateLeft(arr);
    }
    return nRotate;
}

let userArray = [1, 2, 3, 4];

let answer = rotateNLeft(userArray, 2);
console.log(answer);

//module.exports = { rotateNLeft };


// let userArray = [1, 2, 3, 4];

// let answer = rotateLeft(userArray, 2);
// console.log(answer);