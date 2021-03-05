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

    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}
let userArray = [1, 2, 3, 4, 5];

let answer = rotateRight(userArray);
console.log(answer);