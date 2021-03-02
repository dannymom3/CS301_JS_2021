"use strict";

/*Write a function to multiply each element in the array by some value and 
  return the product in an array.
*/
function multiply(list, multiplier) {
  let multiplied_arr = [];
  for (let i = 0; i < list.length; i++) {
    multiplied_arr[i] = list[i] * multiplier;
  }
  return multiplied_arr;
}

console.log(multiply(list, multiplier))