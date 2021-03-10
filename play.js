"use strict";
/**
 * 
 * @param {Array} arr1 inputed array from the user
 * @param {Array} arr2 inputed array by the user
 * @return {number} returns the sum of odd indices elements in the array 
 */
// function diffArray(arr1, arr2) {
//     let temp = [];


//     for (let i = 0; i < arr1.length; i++) {
//         temp[i] = arr1[i] - arr2[i];
//     }
//     return temp;
// }

// let myArray = [1, 4, 5, 6, 4];
// let myArray1 = [1, 5, 6];

// let answer = diffArray(myArray, myArray1);
// console.log(answer);

// //----------------------------------------------------------------------------------------------------

// let newArr = [1, 2, 3, 4];

// console.log(String(newArr));
// let key = [] + 1; // "1"
// console.log(key);
// console.log(typeof key); //String

// let key2 = [1, 2] + 1; // "1"
// console.log(key2);
// console.log(typeof key2); //String
// //----------------------------------------------------------------------------------------------------
// //Is Array copied?

// //That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.

// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

// console.log(fruits.length); // 4

// console.log(shoppingCart);
// //----------------------------------------------------------------------------------------------------


// function secLargest(arr) {
//     let largest = 0;
//     let secLargest = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secLargest) {
//             secLargest = arr[i];
//         }
//     }

//     return secLargest;
// }

// let myArr = [1, 2, 3, 4, 5, 999, 10000];
// let answer1 = secLargest(myArr);
// console.log(answer1);

// function countFalsy(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i])
//             count++;
//     }
//     return count;
// }
// let arr1 = [1, 2, 3, 0, null, false, undefined, ""]; // "" is falsy, while " " is truthy
// console.log(countFalsy(arr1));

// let user = {
//     myId: 123,
//     name: "danny",
// };
// user.name = "haile";
// user.myId = 1111;
// console.log(user.myId);

// console.log(user.name);
let arr = [1, 2, 3];
//console.log(arr);
swap2(arr, 1, 2); //swap2(arr, 0, 2);
console.log(arr);


function swap2(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}