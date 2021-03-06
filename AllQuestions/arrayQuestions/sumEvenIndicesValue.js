"use strict";

/*
Write a function sumEvenIndicesValuesthat takes an array as a parameter and 
returns the sum of values on the odd indices. 
   -------------------------------------------------------
   input                                   result
   -------------------------------------------------------
   [1, 2, 3, 4]                            1 + 3 = 4
   -------------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {Array} arr user input array
 * @return {number} returns the sum of all indices value in the array 
 */
function sumEvenIndicesValue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let myArray = [1, 2, 3, 5, 6, 7]; //expected sum = 1 + 3 + 6 = 10

let answer = sumEvenIndicesValue(myArray);
console.log(answer);