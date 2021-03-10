"use strict";

let arr = [1, 2, 3];
console.log(arr);
swap2(arr, 1, 2); //swap2(arr, 0, 2);
console.log(arr);


function swap2(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

console.log("----------------------------------------------");

let num1 = 5;
let num2 = 7;
console.log(num1, num2);
console.log(swap1(num1, num2));
//console.log(num1, num2);

function swap1(num1, num2) {
    let temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    return num1 + "," + num2;
}