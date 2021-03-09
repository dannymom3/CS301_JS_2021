"use strict";

/*
Write afunction deleteArrayElement that takes two parameters,first an array and second 
parameter is an array index to delete element from. Youshould do this without using any in built functions.
*/
/**
 * 
 * @param {Array} arr user input Array
 * @param {Number} idx index number to point out the deleted element
 * @return {Array} returns modified Array, which is one element deleted from the original Array element
 */
function deleteArrayElement(arr, idx) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === idx)
            continue;
        resultArr.push(arr[i]);
    }
    return resultArr;
}

let result = deleteArrayElement([-1, 2, 3, -3, 4], 3); // delete -3  --> [ -1, 2, 3, 4 ]
console.log(result);