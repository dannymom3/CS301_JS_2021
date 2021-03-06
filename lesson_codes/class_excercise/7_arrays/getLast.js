"use strict";

function getLast(arr) {

    //return arr[arr.length - 1]; // get the last arr[arr.length - 1]

    let myCopy = arr.slice();
    return myCopy.pop();
}

let originalArray = [1, 2, 3, 4, 5];
let answer = getLast(originalArray);
console.log(answer);
console.log(originalArray);