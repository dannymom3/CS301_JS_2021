"use strict";

/*
Write a function named getMiddle that returns the value of the middle element
 in an array. If the array has an even number of elements, then this function 
 must return the average of the two middle elements.
*/

let arr1 = [11, 12, 13, 14, 15]; //odd element
let arr2 = [11, 12, 13, 14, 15, 16]; // even element
/**
 * 
 * @param {array} arr array input from the user
 * @return {array} returns the middle element of the array
 */
function getMiddle(arr) {
    if (arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
}
let answerOdd = getMiddle(arr1);
console.log(answerOdd);

let answerEven = getMiddle(arr2);
console.log(answerEven);

// function getMiddleElement(arr) {
//     let middleIndex;
//     for (let i = 0; i < arr.length; i++) { // we can avoid the for loop, it works with if statement
//         if (arr.length % 2 === 0) {
//             middleIndex = arr.length / 2;
//             return (arr[middleIndex] + (arr[middleIndex - 1]));
//         } else {
//             middleIndex = (arr.length - 1) / 2;
//             return arr[middleIndex];
//         }
//     }
// }
// console.log(getMiddleElement([12, 4, 5, 6, 4]));
// console.log(getMiddleElement([1, 2, 3, 4, 5]));