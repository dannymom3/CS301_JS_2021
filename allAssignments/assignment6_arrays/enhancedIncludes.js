"use strict";
/*
Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.
*/

/**
 * 
 * @param {Array} arr user input Array
 * @param {number} searchVal search the given array element 
 * @return {Array} returns check the given array element is exist, location of first and last position of the 
 * given array element 
 */
function enhancedIncludes(arr, searchVal) {
    let resultArr = [];
    resultArr[0] = arr.includes(searchVal);
    resultArr[1] = arr.indexOf(searchVal);
    resultArr[2] = arr.lastIndexOf(searchVal);

    return resultArr;
}

console.log(enhancedIncludes([1, 2, 1, 1, 1, 3, 5, 7, 9], 1));