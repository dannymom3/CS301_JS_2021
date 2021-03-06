"use strict";
/**
 * 
 * @param {Array} arr1 inputed array from the user
 * @param {Array} arr2 inputed array by the user
 * @return {number} returns the sum of odd indices elements in the array 
 */
function diffArray(arr1, arr2) {
    let temp = [];


    for (let i = 0; i < arr1.length; i++) {
        temp[i] = arr1[i] - arr2[i];
    }
    return temp;
}

let myArray = [1, 4, 5, 6, 4];
let myArray1 = [1, 5, 6];

let answer = diffArray(myArray, myArray1);
console.log(answer);