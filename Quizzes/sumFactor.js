"use strict";
/**
 The sum factor of an array is defined to be the number of times that 
 the sum of the array appears as an element of the array. 
 So, the sum factor of [1, -1, 1, -1, 1, -1, 1] is 4 because the sum of 
 the elements of the array is 1 and 1 appears four times in the array. 
 And the sum factor of [1, 2, 3, 4] is 0 because the sum of the elements of the array is 10 
 and 10 does not occur as an element of the array. The sum factor of the empty array [] 
is defined to be 0.
Write a function named sumFactor that returns the sum factor of its array argument.
---------------------------------------------------------------------------------
 */
/**
 * 
 * @param {Array} arr user inputed array
 * @return {number} returns count of the array element which is equal to the sum
 */
function sumFactor(arr) {
    let sum = 0;
    let count = 0;
    if (arr.length === 0) return count;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let j = 0; j < arr.length; j++) {
        if (sum === arr[j]) {
            count++;
        }
    }
    return count;
}

let myArr = [1, -1, 1, -1, 1, -1, 1];
let answer = sumFactor(myArr);
console.log(answer);