"use strict";

let arr1 = ["apple", "cat", "ball", "dog"];
console.log(arr1); // [ 'apple', 'cat', 'ball', 'dog' ]
arr1.sort();
console.log(arr1); //[ 'apple', 'ball', 'cat', 'dog' ]

//---------------------------------------------------------------

let arr = [1, 4, 3, 2, 6, 7, 5, 8, 9];
console.log(arr);
arr.sort(myComparator);
console.log(arr);

/**
 * 
 * @param {number} num1 the number element in the array
 * @param {number} num2 compared in the array 
 * @return {Array} returns sorted array
 */
function myComparator(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return 1;
    } else {
        return -1;
    }

    //OR
    //return num1 - num2 , it only works if the type is number
}

//arow function

let arr2 = [1, 3, 2, 4, 5];

arr2.sort((num3, num4) => num3 - num4); //NB: num3 - num4 means just like the above function myComparator
console.log(arr2);