"use strict";

/*
Do matrix addition and print result on matrix format for following

0   1  2          6    5   4
            +    
9   8  7          3    4    5
*/

/**
 *  @param {Array} arr1 first Array 
 * @param {Array} arr2 second arrar 
 * @return {Array} returns the sum of the two arrays in the array format 
 */
function addMatrix(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);

        }
        result.push(row);
    }
    return result;

}

let matrix1 = [
    [1, 1, 1],
    [2, 2, 2]
];
let matrix2 = [
    [2, 2, 2],
    [1, 1, 1]
];
console.log(addMatrix(matrix1, matrix2));