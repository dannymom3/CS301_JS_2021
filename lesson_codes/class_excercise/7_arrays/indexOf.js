"use strict";

let arr = [1, 1, false];


console.log(arr.indexOf(0)); //
console.log(arr.indexOf(1, 1)); //1 , at index 1 there is 1
console.log(arr.indexOf(false)); // 2, there is false element in the array at 
console.log(arr.indexOf(null)); // -1, there is no null in the array
console.log(arr.indexOf(1)); // 0 returns the first number even if we have two 1's 
console.log(arr.includes(3)); //false, there is no 3 in the array
console.log(arr.includes(true)); // false, there is no true in the array