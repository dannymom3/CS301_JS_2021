"use strict";

/*
Write a function to rotate the elements in an array to the leftby 1.
-----------------------------------------------------------------------
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} arr input array from the user
 * @return {array} returns rotate array to the left 
//  */
function rotateLeft(arr) {
    let first = arr[0];
    for (let i = 0; i + 1 < arr.length; i++) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
    }
    arr[arr.length - 1] = first;
    return arr;
}

//methodd 2
/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} arr input array from the user
 * @return {array} returns rotate array to the left 
 */
// function rotateLeft1(arr) {
//     let first = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = first;
// }


let temp = [1, 2, 3, 4, 5];
let answer = rotateLeft(temp);
console.log(answer);

//module.exports = { rotateLeft1 };

//rotate right n times

// function rotateNLeft(arr, num) {
//     let nRotate = arr;

//     for (let i = 0; i <= num; i++) {
//         nRotate = rotateLeft(arr);
//     }
//     return nRotate;
// }

// let temp1 = [1, 2, 3, 4, 5];
// let answer1 = rotateLeft1(temp1, 2);
// console.log(answer1);