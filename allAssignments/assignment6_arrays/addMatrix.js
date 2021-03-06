"use strict";

/*
Do matrix addition and print result on matrix format for following

0   1  2          6    5   4
            +    
9   8  7          3    4    5
*/

/**
 * 
 * @param {Array} arr two 
 * @return {Array} returns the sum of 2D arrays 
 */
function addMatrix(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; i < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

let arrMatrix = [
    [2, 3, 4, 5, 6],
    [12, 34, 5]
];

let answer = addMatrix(arrMatrix);

console.log(answer);