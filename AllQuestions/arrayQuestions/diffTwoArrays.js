"use strict";

/**
 * 
 * @param {Array} array1 first array
 * @param {Array} array2 second array
 * @return {Array} returns the difference of the two arrays
 */
function differenceOf2Arrays(array1, array2) {
    let temp = [];
    array1 = array1.toString().split(",").map(Number);
    array2 = array2.toString().split(",").map(Number);

    for (let i in array1) {
        if (array2.indexOf(array1[i]) === -1)
            temp.push(array1[i]);
    }
    for (let i in array2) {
        if (array1.indexOf(array2[i]) === -1)
            temp.push(array2[i]);
    }
    return temp.sort((temp1, temp2) => temp1 - temp2);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], 2]));