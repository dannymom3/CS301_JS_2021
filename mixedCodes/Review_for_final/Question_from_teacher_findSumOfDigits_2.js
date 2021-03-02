"use strict"
function findSumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
      let value = num % 10;
      sum += value;
      num = Math.floor(num / 10)
    }
    return sum;
  }
  
  console.log(findSumOfDigits(num))
  