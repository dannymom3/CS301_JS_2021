"use strict";


/**
 * 
 * @param {Array} arr inputed array
 * @return{number} returns the minimum number of the given array 
 */
function smallestNum(arr) {
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arrr = [1, 2, 3, 4, 5, -300, -10];

let answer = smallestNum(arrr);
console.log(answer);