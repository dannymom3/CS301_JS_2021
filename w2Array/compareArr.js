"use strict";

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

let arr3 = [1, 2, 4];
let arr4 = arr3;
/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} firstArray first array
 * @param {array} secondArray second array
 * @return {boolean} boolean returns true or false
 */
function compareArray(firstArray, secondArray) {
    if (firstArray !== secondArray) {
        return false;
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}
console.log(compareArray(arr1, arr2)); // false

console.log(compareArray(arr3, arr4)); // true