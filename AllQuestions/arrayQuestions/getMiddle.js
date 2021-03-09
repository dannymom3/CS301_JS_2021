"use strict";
//Write a function that returns the value of the middle element in an array.
function getMiddle(list) {

    let length = list.length;
    if (length % 2 === 0) {
        let mid_index = length / 2;
        let mid_val = (list[mid_index - 1] + list[mid_index]) / 2;
        return mid_val;
    }

    return list[(length - 1) / 2];
}
let list = [1, 2, 3, 4, 5, 6];
console.log(getMiddle(list));