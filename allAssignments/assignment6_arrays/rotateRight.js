"use strict";

/*
Write a function to rotate the elements in an array to the rightby 1.
------------------------------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} arr array inputed from the user
 * @return {array} returns right rotated array 
 */
function rotateRight(arr) {

    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}
let userArray = [1, 2, 3, 4, 5]; // [ 5, 1, 2, 3, 4 ]

let answer = rotateRight(userArray);
console.log(answer);

module.exports = { rotateRight };

function rotateNRight(arr, num) {
    let nRotate = arr;

    for (let i = 0; i <= num; i++) {
        nRotate = rotateRight(arr);
    }
    return nRotate;
}

let temp1 = [1, 2, 3, 4, 5];
let answer1 = rotateNRight(temp1, 2); //example [1, 2, 3, 4, 5], 2 => [5, 1, 2, 3, 4] => [4, 5, 1, 2, 3]
console.log(answer1);