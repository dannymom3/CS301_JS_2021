"use strict";

function _1To1() {
    console.log(oneTwoOne([1, 2, 2, 1]));
    console.log(oneTwoOne([1, 2, 2, 2, 2, 2]));
    console.log(oneTwoOne([1, 2, 2, 3, 2, 1]));
}

function oneTwoOne(arr) {
    for (let a = 1; a < arr.length - 1; a++) {
        if (arr[0] != 1 || arr[arr.length - 1] != 1 || arr[a] != 2) {
            return false;
        }
    }
    return true;
}

_1To1();