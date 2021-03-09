"use strict";

/*
Write a function that merges two sorted arrays into one single sorted array. 
Make use of shift and push array methods.
-----------------------------------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Danile Haile
 * @param {array} arr1 first array 
 * @param {array} arr2 second array
 * @return {array} returns merged array 
 */
function mergeArrays(arr1, arr2) {

    let merged = [];
    while (arr1.length > 0 && arr2.length > 0) {
        let smaller = arr1[0] < arr2[0] ? arr1 : arr2;
        merged.push(smaller.shift());
    }

    if (arr1.length > 0) {
        // OR merged.concat(arr1); -->instead of looping through
        for (let i = 0; i < arr1.length; i++) {
            merged.push(arr1[i]);
        }
    } else if (arr2.length > 0) {
        //OR merged.concat(arr2);
        for (let i = 0; i < arr2.length; i++) {
            merged.push(arr2[i]);
        }
    }
    return merged;
}


let firstArr = [1, 2, 3, 100, 4, 5];
let secondArr = [6, 7, 8, 9, 10, 11];

let Answer = mergeArrays(firstArr, secondArr);
console.log(Answer);