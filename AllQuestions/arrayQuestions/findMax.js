"use strict";
/**
 * 
 * @param {array} arr input array from the user
 * @return {number} returns the maximum element of the array 
 */
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            max = arr[i];
        }
    }
    return max;
}

let myArr = [1, 3, 5, 100, -2];

let answer = findMax(myArr);

console.log(answer);