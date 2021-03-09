"use strict";

/**
 * 
 * @param {Array} arr user input array
 * @return {number} returns the second smallest number from the given array 
 */
function secSmallest(arr) {
    let smallest = 0;
    let secSmallest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secSmallest = smallest;
            smallest = arr[i];

        } else if (arr[i] < secSmallest) {
            secSmallest = arr[i];
        }
    }
    return secSmallest;
}

let newArr1 = [1, 2, 3, -5, -100, -12222];
let answer3 = secSmallest(newArr1);
console.log(answer3);