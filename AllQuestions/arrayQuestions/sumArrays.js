"use strict";
/*
Write a function sumArrays, that takes two arrays asparameters (you can as sume 
    of same length) then returnsa new array by adding two array values at the 
    corresponding indices
    ----------------------------------------------------
    inputs                                     outputs
    ----------------------------------------------------
    [2,3,3,4,5] , [5,4,3,2,2]             [7, 7, 6, 6, 7]
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {Array} arr1 the first array 
 * @param {Array} arr2 the second array
 * @return {Array} returns the sum of the first and the second arrray elements in 
 * in to the new array 
 */
function sumArrays(arr1, arr2) {

    let newArray = [];

    for (let i = 0; i < arr1.length; i++) {
        newArray[i] = arr1[i] + arr2[i];
    }
    return newArray;
}

let firstArr = [1, 2, 3, 4];
let secondArr = [1, 2, 3, 4];

let answer = sumArrays(firstArr, secondArr);
console.log(answer);