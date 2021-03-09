"use strict";

/**
 * 
 * @param {Array} arr inputed array
 * @return {number} returns the second largest element in the array 
 */
function secondLargest(arr) {
    let largest = 0;
    let secLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secLargest) {
            secLargest = arr[i];
        }
    }
    return secLargest;
}

let myArr = [1, 2, 3, 4, 5, 6];
let answer = secondLargest(myArr);
console.log(answer);