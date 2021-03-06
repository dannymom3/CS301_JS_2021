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

    let newArray = [];

    // while (arr1.length && arr2.length) {
    //     if (arr1[0] < arr2[0]) {
    //         newArray.push(arr1.shift());
    //     } else {
    //         newArray.push(arr2.shift());
    //     }
    // }
    //for (let i = 0; i < arr1.length; i++) {
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            newArray.push(arr1.shift());
            if (arr2[0] < arr1[0]) {
                newArray.push(arr2.shift());
            }
        }
    }
    return newArray;
}


let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

let Answer = mergeArrays(firstArr, secondArr);
console.log(Answer);