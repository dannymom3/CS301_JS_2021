"use strict";

/*
Write a function to rotate the elements in an array to the leftby 1.
-----------------------------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} arr input array from the user
 * @return {array} returns rotate array to the left 
 */
function rotateLeft(arr) {
    for (let i = 0; i + 1 < arr.length; i++) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
    }
    return arr;
}
let temp = [1, 2, 3, 4, 5];
let answer = rotateLeft(temp);
console.log(answer);