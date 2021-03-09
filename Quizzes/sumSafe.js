"use strict";

//sumSafe -- > [5, -5, 0] -- this is not sum safe because the sum of the elements will be 0
// i.e. 0 is found inside the array element

/**
 * 
 * @param {Array} arr user input array
 * @return {boolean} returns true if the sum of array elements are equal to
 * one of the elements in the array 
 */
function sumSafe(arr) {
    if (arr.length == 0) return false;

    let sum = arr.reduce((num1, num2) => num1 + num2);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === sum)
            return false;
    }
    return true;
}

// let newArray = [-5, 5, 0];

// let answer = sumSafe(newArray);
// console.log(answer);

let newArray1 = [-5, -5, 0];

let answer1 = sumSafe(newArray1);
console.log(answer1);