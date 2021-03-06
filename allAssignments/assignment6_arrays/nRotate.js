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
function nRotate(arr, num) {

    let temp = arr[0];

    for (let i = 0; i < num; i++) {
        arr[i] = arr[i + 1];

        arr[num - 1] = temp;
    }

    return arr;

}

let userArray = [1, 2, 3, 4, 5];

let answer = nRotate(userArray, 4);
console.log(answer);

module.exports = { nRotate };