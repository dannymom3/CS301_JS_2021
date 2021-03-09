"use strict";
/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {Array} arr inputed array
 * @return {Array} returns sorted array elements 
 */
function sorty(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; // temp is 3
                arr[j] = arr[j + 1]; // 1 is now index 0
                arr[j + 1] = temp; //3 is now index 1
            }
        }
    }
    return arr;
}

let myArr = [1, 2, 1, 6, 3, 8, 5];

let answer = sorty(myArr);
console.log(answer);