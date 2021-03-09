"use strict";

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {Array} arr user inputed array
 * @returns {number} returns the maximum number of tthe array element 
 */
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let array = [1, 2, 3, 4, 5, 6, 7, 100, 266, 90];

let myAnswer = findMax(array);

console.log(myAnswer);