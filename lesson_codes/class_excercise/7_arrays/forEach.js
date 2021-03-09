"use strict";

/*
- forEach method allows to run a function for every element of the array

=> Syntax - arr.forEach(function (item ...))
*/


/**
 * 
 * @param {Array} item arrays 
 * @return{Arrays} returns elements in the array 
 */
function display(item) {
    console.log(item);
}

let arr = ["Danny", "Alex", "Mike", "Mom"];

arr.forEach(display);



//,aking square the arrays

let arr2 = [1, 2, 3, 4, 5];
arr2.forEach((item) => console.log(item * item));

//longer format
/*
function square(item) {
    console.log(item * item);
}

let arr2 = [1, 2, 3, 4, 5];

arr.forEach(display);

*/